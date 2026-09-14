/* ==========================================================================
   MOTEUR DU SITE — normalement tu n'as pas besoin de modifier ce fichier.
   Tout le contenu se trouve dans js/content.js
   ========================================================================== */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  let lang = store.get("lang") || SITE.defaultLang || "fr";
  if (!UI[lang]) lang = "fr";
  let firstRender = true;

  // Texte simple ou { fr, en } → texte dans la langue courante
  const t = (v) => (v == null ? "" : typeof v === "object" ? (v[lang] ?? v.fr ?? v.en ?? "") : String(v));
  const tr = (key) => UI[lang]?.[key] ?? UI.fr[key] ?? key;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const get = (path) => path.split(".").reduce((o, k) => o?.[k], SITE);
  const words = (list) => (list || []).map((x) => `<span>${esc(t(x))}</span>`).join("");
  const tags = (list) => (list || []).map((x) => `<span class="tag">${esc(t(x))}</span>`).join("");
  const P = SITE.profile;
  const fullName = () => `${t(P.firstName)} ${t(P.lastName)}`.trim();

  const ICON_IMG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>';
  const ICON_PLAY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m10 9 5 3-5 3z"/></svg>';
  const ARROW_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>';
  const ARROW_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>';
  const ARROW_DOWN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>';
  const ARROW_NEXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Images avec cadre « à ajouter » ---------- */
  function media(src, { ratio = "16/10", alt = "", label, eager = false } = {}) {
    const img = src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="${eager ? "eager" : "lazy"}" />` : "";
    return `<figure class="media${src ? "" : " is-empty"}" style="aspect-ratio:${ratio}">${img}
      <figcaption class="media-ph">${ICON_IMG}<strong>${esc(label || tr("ph.image"))}</strong>${src ? `<code>${esc(src)}</code>` : ""}</figcaption></figure>`;
  }
  function video(url, id = "") {
    if (!url) {
      return `<figure class="media is-empty" style="aspect-ratio:16/9"><figcaption class="media-ph">${ICON_PLAY}<strong>${tr("ph.video")}</strong><code>${tr("ph.videoHint")}</code></figcaption></figure>`;
    }
    return `<div class="video"><iframe ${id ? `id="${id}"` : ""} src="${esc(url)}" title="Vidéo" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
  }
  // Toute image introuvable → affiche le cadre en pointillés à la place
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (el.tagName === "IMG") el.closest(".media, .skill-icon")?.classList.add("is-empty");
  }, true);

  /* ---------- Langue ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = tr(el.dataset.i18n)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", tr(el.dataset.i18nAria)));
    $$("[data-fill]").forEach((el) => (el.textContent = t(get(el.dataset.fill))));
    const btn = $("#langBtn");
    if (btn) {
      btn.textContent = lang === "fr" ? "EN" : "FR";
      btn.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
    }
    const isAbout = document.body.classList.contains("page-whoami");
    document.title = isAbout ? `${tr("nav.whoami")} — ${fullName()}` : `${fullName()} — Portfolio`;
  }

  /* ---------- Accueil ---------- */
  function renderHero() {
    const photo = $("#heroPhoto"); if (!photo) return;
    photo.innerHTML = media(P.photo, { ratio: "4/5", alt: fullName(), eager: true });
    const cv = $("#cvLink");
    if (cv) { cv.hidden = !P.cv; cv.href = P.cv || "#"; }
  }

  function renderAbout() {
    const box = $("#aboutParagraphs"); if (!box) return;
    const A = SITE.about;
    box.innerHTML = A.paragraphs.map((p) => `<p>${esc(t(p))}</p>`).join("");
    $("#aboutTags").innerHTML = tags(A.tags);
    $("#aboutCta").innerHTML = A.cta ? `<a href="#projects" class="link about-cta">${esc(t(A.cta))} ${ARROW_DOWN}</a>` : "";
    $("#aboutStats").innerHTML = (A.stats || []).map((s) => `<div class="stat"><strong>${esc(t(s.value))}</strong><span>${esc(t(s.label))}</span></div>`).join("");
  }

  /* ---------- Projets : une ligne par projet ---------- */
  let filter = "all";
  const roleList = (p) => (p.roles || []).map(t).filter(Boolean);

  function renderProjects() {
    const list = $("#projectList"); if (!list) return;
    // Filtres par rôle (Programmeur, Game Designer…) tirés des projets
    const roles = [...new Set(SITE.projects.flatMap(roleList))];
    if (filter !== "all" && !roles.includes(filter)) filter = "all";
    $("#filters").innerHTML = roles.length > 1
      ? ["all", ...roles].map((r) => `<button type="button" class="filter${r === filter ? " active" : ""}" data-filter="${esc(r)}">${esc(r === "all" ? tr("projects.all") : r)}</button>`).join("")
      : "";

    const items = SITE.projects
      .filter((p) => filter === "all" || roleList(p).includes(filter))
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    list.innerHTML = items.map((p) => {
      const meta = [t(p.year), t(p.genre)].filter(Boolean).map(esc).join(" — ");
      const metaHtml = meta ? `<p class="project-meta">${meta}</p>` : "";
      const rolesHtml = roleList(p).length ? `<p class="project-roles">${roleList(p).map(esc).join(", ")}</p>` : "";
      const more = `<span class="link">${tr("projects.open")} ${ARROW_NEXT}</span>`;
      const summary = `<p class="project-summary">${esc(t(p.summary))}</p>`;
      const text = p.featured
        ? `<div>${metaHtml}<h3>${esc(t(p.title))}</h3></div><div>${rolesHtml}${summary}${more}</div>`
        : `<div>${metaHtml}<h3>${esc(t(p.title))}</h3>${rolesHtml}${summary}${more}</div>`;
      return `
        <article class="project${p.featured ? " is-featured" : ""} reveal" data-open="${esc(p.id)}" tabindex="0" role="button" aria-label="${esc(tr("projects.open"))} : ${esc(t(p.title))}">
          <div class="project-media">${media(p.thumb, { ratio: p.featured ? "16/9" : "16/10", alt: t(p.title) })}</div>
          <div class="project-text">${text}</div>
        </article>`;
    }).join("");
  }

  document.addEventListener("click", (e) => {
    const f = e.target.closest("[data-filter]");
    if (f) { filter = f.dataset.filter; renderProjects(); revealAll(); return; }
    const card = e.target.closest("[data-open]");
    if (card) openProject(card.dataset.open);
  });
  document.addEventListener("keydown", (e) => {
    const card = e.target.closest?.("[data-open]");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProject(card.dataset.open); }
  });

  /* ---------- Fenêtre détail projet ---------- */
  const modal = $("#modal");
  let lastFocus = null, currentProject = null, slide = 0;

  function openProject(id) {
    const p = SITE.projects.find((x) => x.id === id);
    if (!p || !modal) return;
    currentProject = id;
    if (modal.hidden) lastFocus = document.activeElement;

    const details = [
      ["detail.duration", p.duration], ["detail.year", p.year], ["detail.engine", p.engine],
      ["detail.role", roleList(p).join(", ")], ["detail.team", p.team], ["detail.genre", p.genre],
    ].filter(([, v]) => t(v)).map(([k, v]) => `<div><dt>${tr(k)}</dt><dd>${esc(t(v))}</dd></div>`).join("");

    const desc = t(p.description).split(/\n\s*\n/).map((x) => `<p>${esc(x.trim())}</p>`).join("");

    const hasContrib = p.contribVideo || (p.timecodes && p.timecodes.length);
    const contrib = hasContrib ? `
      <section class="modal-block">
        <h3>${tr("detail.contrib")}</h3>
        ${video(p.contribVideo, "contribVideo")}
        ${p.timecodes?.length ? `<div class="timecodes">${p.timecodes.map((tc) => {
          const [m, s] = tc.time.split(":").map(Number);
          return `<button type="button" class="timecode" data-seek="${m * 60 + s}"><b>${esc(tc.time)}</b>${esc(t(tc.label))}</button>`;
        }).join("")}</div>` : ""}
      </section>` : "";

    const imgs = p.gallery?.images || [];
    const gallery = imgs.length ? `
      <section class="modal-block">
        <h3>${esc(t(p.gallery.title) || "Galerie")}</h3>
        ${t(p.gallery.text) ? `<p>${esc(t(p.gallery.text))}</p>` : ""}
        <div class="carousel">
          <div class="carousel-track" id="carouselTrack">${imgs.map((src, i) => media(src, { ratio: "16/9", alt: `${t(p.title)} ${i + 1}` })).join("")}</div>
        </div>
        ${imgs.length > 1 ? `<div class="carousel-bar">
          <span class="carousel-count"><span id="carouselIndex">1</span> / ${imgs.length}</span>
          <div class="carousel-nav">
            <button type="button" class="carousel-btn" data-slide="-1" aria-label="Précédent">${ARROW_L}</button>
            <button type="button" class="carousel-btn" data-slide="1" aria-label="Suivant">${ARROW_R}</button>
          </div>
        </div>` : ""}
      </section>` : "";

    const link = p.link ? `<div class="modal-actions"><a class="btn btn-accent" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(t(p.linkLabel) || tr("projects.open"))} ↗</a></div>` : "";

    $("#modalContent").innerHTML = `
      <div class="modal-hero">${p.video ? video(p.video) : media(p.thumb, { ratio: "16/9", alt: t(p.title) })}</div>
      <div class="modal-body">
        <h2 id="modalTitle">${esc(t(p.title))}</h2>
        <p class="words">${words(p.tags)}</p>
        <div class="modal-desc">${desc}</div>
        ${details ? `<dl class="details">${details}</dl>` : ""}
        ${contrib}${gallery}${link}
      </div>`;

    slide = 0; updateCarousel();
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => modal.classList.add("open"));
    $(".modal-panel", modal).scrollTop = 0;
    $(".modal-close", modal).focus();
  }

  function closeProject() {
    if (!modal || modal.hidden) return;
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    currentProject = null;
    setTimeout(() => {
      modal.hidden = true;
      $("#modalContent").innerHTML = ""; // coupe les vidéos en cours
    }, 300);
    lastFocus?.focus();
  }

  function updateCarousel() {
    const track = $("#carouselTrack"); if (!track) return;
    const n = track.children.length;
    slide = (slide + n) % n;
    track.style.transform = `translateX(-${slide * 100}%)`;
    const idx = $("#carouselIndex"); if (idx) idx.textContent = slide + 1;
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) return closeProject();
      const s = e.target.closest("[data-slide]");
      if (s) { slide += Number(s.dataset.slide); return updateCarousel(); }
      const seek = e.target.closest("[data-seek]");
      if (seek) {
        const frame = $("#contribVideo");
        if (frame) frame.src = `${frame.src.split("?")[0]}?start=${seek.dataset.seek}&autoplay=1`;
      }
    });
    // Glisser au doigt dans la galerie
    let touchX = null;
    modal.addEventListener("touchstart", (e) => { if (e.target.closest(".carousel")) touchX = e.touches[0].clientX; }, { passive: true });
    modal.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) { slide += dx < 0 ? 1 : -1; updateCarousel(); }
      touchX = null;
    });
    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowRight") { slide++; updateCarousel(); }
      if (e.key === "ArrowLeft") { slide--; updateCarousel(); }
      if (e.key === "Tab") { // garde le focus dans la fenêtre
        const f = $$('button, a[href], iframe, [tabindex="0"]', $(".modal-panel", modal));
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });
  }

  /* ---------- Compétences & parcours ---------- */
  function renderSkills() {
    const grid = $("#skillsGrid"); if (!grid) return;
    const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    grid.innerHTML = SITE.skills.map((c) => `
      <div class="skill-row reveal">
        <h3>${esc(t(c.category))}</h3>
        ${c.display === "tags"
          ? `<p class="skill-words">${words(c.items.map((s) => s.name))}</p>`
          : `<ul class="skill-items">${c.items.map((s) => `
            <li class="skill">
              <span class="skill-icon${s.icon ? "" : " is-empty"}${s.mono ? " mono" : ""}">${s.icon ? `<img src="${esc(s.icon)}" alt="" loading="lazy" />` : ""}<span class="skill-fallback">${esc(s.badge || initials(t(s.name)))}</span></span>
              <span>${esc(t(s.name))}${t(s.note) ? ` <small>— ${esc(t(s.note))}</small>` : ""}</span>
            </li>`).join("")}</ul>`}
      </div>`).join("");
  }

  function renderTimeline(id, items) {
    const box = $(id); if (!box) return;
    box.innerHTML = items.map((x) => `
      <li class="tl-item">
        <span class="tl-date">${esc(t(x.date))}</span>
        <div>
          <strong>${esc(t(x.title))}</strong>
          ${t(x.place) ? `<span class="tl-place">${esc(t(x.place))}</span>` : ""}
          ${t(x.text) ? `<p>${esc(t(x.text))}</p>` : ""}
        </div>
      </li>`).join("");
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    const mail = $("#contactEmail"); if (!mail) return;
    mail.textContent = P.email; mail.href = `mailto:${P.email}`;
    $("#contactList").innerHTML = P.phone ? `<li><a href="tel:${esc(P.phone.replace(/\s+/g, ""))}">${esc(P.phone)}</a></li>` : "";
    $("#socials").innerHTML = P.socials.filter((s) => s.url).map((s) => `<a class="link social" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
  }

  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = $("#formStatus");
      const btn = $('button[type="submit"]', form);
      const id = (P.formspreeId || "").trim();
      status.className = "form-status";
      if (!id || id === "VOTRE_ID_FORMSPREE") {
        // Formspree pas encore branché : on ouvre l'application mail du visiteur avec le message pré-rempli
        const d = new FormData(form);
        const body = `${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`;
        window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(d.get("subject"))}&body=${encodeURIComponent(body)}`;
        status.textContent = tr("form.mailto"); status.classList.add("ok"); return;
      }
      btn.disabled = true; btn.textContent = tr("form.sending");
      try {
        const res = await fetch(`https://formspree.io/f/${encodeURIComponent(id)}`, {
          method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(res.status);
        status.textContent = tr("form.sent"); status.classList.add("ok"); form.reset();
      } catch (err) {
        status.textContent = tr("form.error"); status.classList.add("err");
      } finally {
        btn.disabled = false; btn.textContent = tr("form.send");
      }
    });
  }

  /* ---------- Page « Qui suis-je ? » ---------- */
  function renderWhoami() {
    const photo = $("#whoamiPhoto"); if (!photo) return;
    const A = SITE.aboutPage;
    photo.innerHTML = media(P.photo, { ratio: "4/5", alt: fullName(), eager: true });
    $("#whoamiIntro").innerHTML = t(A.intro).split(/\n\s*\n/).map((x) => `<p>${esc(x.trim())}</p>`).join("");
    $("#qualities").innerHTML = tags(A.qualities);

    $("#favBanner").innerHTML = `
      ${media(A.favorite.cover, { ratio: "2/3", alt: t(A.favorite.title) })}
      <div>
        <p class="fav-label">${tr("games.favorite")}</p>
        <strong class="fav-name">${esc(t(A.favorite.title))}</strong>
        <p>${esc(t(A.favorite.text))}</p>
      </div>`;

    // Jeu préféré par genre (case « Jeu à ajouter » si le nom est vide)
    $("#genreGrid").innerHTML = (A.genreFavorites || []).map((g) => `
      <div class="genre reveal${t(g.name) ? "" : " is-empty"}">
        ${media(g.cover, { ratio: "2/3", alt: t(g.name), label: tr("games.toAdd") })}
        <div>
          <span class="genre-label">${esc(t(g.genre))}</span>
          <h3>${esc(t(g.name) || tr("games.toAdd"))}</h3>
          ${t(g.text) ? `<p>${esc(t(g.text))}</p>` : ""}
        </div>
      </div>`).join("");

    $("#hobbyGrid").innerHTML = A.hobbies.map((h) => `
      <div class="hobby reveal">${h.icon ? `<span class="hobby-icon" aria-hidden="true">${esc(h.icon)}</span>` : ""}<h3>${esc(t(h.title))}</h3><p>${esc(t(h.text))}</p></div>`).join("");
  }

  /* ---------- Apparition au défilement ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("visible"); io.unobserve(en.target);
      }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" })
    : null;
  function revealAll() {
    $$(".reveal:not(.visible)").forEach((el) => {
      if (!io || !firstRender) el.classList.add("visible"); else io.observe(el);
    });
  }

  /* ---------- Rendu complet ---------- */
  function renderAll() {
    applyI18n();
    renderHero(); renderAbout(); renderProjects(); renderSkills();
    renderTimeline("#education", SITE.education); renderTimeline("#experience", SITE.experience);
    renderContact(); renderWhoami();
    revealAll();
    firstRender = false;
  }

  /* ---------- Navigation, thème, langue ---------- */
  const nav = $("#nav");
  const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const burger = $("#burger"), menu = $("#mobileMenu");
  const setMenu = (open) => {
    menu?.classList.toggle("open", open);
    burger?.setAttribute("aria-expanded", String(open));
  };
  burger?.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  $$("#mobileMenu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  $("#themeBtn")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; store.set("theme", next);
  });

  $("#langBtn")?.addEventListener("click", () => {
    lang = lang === "fr" ? "en" : "fr"; store.set("lang", lang);
    const reopen = currentProject;
    renderAll();
    if (reopen) openProject(reopen);
  });

  // Lien actif dans le menu selon la section visible
  const links = $$('.nav-links a[href^="#"]');
  if (links.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  renderAll();
})();
