/* ==========================================================================
   CONTENU DU PORTFOLIO — c'est le SEUL fichier à modifier pour personnaliser le site.

   - Un texte peut être une simple chaîne ("Bonjour") ou une paire { fr: "...", en: "..." }
     si tu veux le site en deux langues.
   - Les images : mets tes fichiers dans assets/images/... au chemin indiqué.
     Tant qu'une image est absente, le site affiche un cadre en pointillés
     avec le chemin attendu. Dès que le fichier existe, il s'affiche.
   - Laisse une valeur vide ("") pour masquer l'élément correspondant.
   ========================================================================== */

// Logos de logiciels (bibliothèque libre Devicon)
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const SITE = {
  defaultLang: "fr",

  /* ---------- IDENTITÉ ---------- */
  profile: {
    firstName: "Gabriel",
    lastName: "Michaud",
    initials: "GM",
    availability: "", // ex : { fr: "Disponible pour un stage", en: "Open to internships" }
    location: "Lyon, France",
    email: "gabrielmimi74@gmail.com",
    phone: "", // ex : "06 00 00 00 00" — attention, le site est public
    photo: "assets/images/photo.jpg",
    cv: "assets/cv.pdf",
    // Crée un formulaire gratuit sur https://formspree.io puis colle son identifiant ici (ex : "xzdqvkrq").
    // Tant que ce n'est pas fait, le formulaire ouvre l'application mail du visiteur avec son message pré-rempli.
    formspreeId: "VOTRE_ID_FORMSPREE",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gabriel-michaud-565798241" },
      { label: "GitHub", url: "https://github.com/Gabi744" },
      { label: "itch.io", url: "" },
    ],
  },

  /* ---------- À PROPOS ---------- */
  about: {
    title: {
      fr: "Passionné par la création de jeux vidéo, sous toutes leurs formes",
      en: "Passionate about making video games, in every form",
    },
    paragraphs: [
      {
        fr: "Ce portfolio rassemble les jeux sur lesquels j'ai travaillé, en équipe comme en stage : un souls-like, un party game en coopération, un jeu d'horreur psychologique, un FPS nerveux et un jeu web.",
        en: "This portfolio brings together the games I've worked on, in teams and during internships: a souls-like, a co-op party game, a psychological horror game, a fast-paced FPS and a web game.",
      },
      {
        fr: "Pour chaque projet, vous trouverez mon rôle, les outils utilisés et, quand c'est possible, une vidéo pour voir le jeu en action.",
        en: "For each project, you'll find my role, the tools used and, when available, a video to see the game in action.",
      },
    ],
    cta: { fr: "Découvrir les projets", en: "Explore the projects" },
    tags: ["Game Design", { fr: "Programmation", en: "Programming" }, "Level Design", { fr: "Prototypage", en: "Prototyping" }, "Sound Design", "3D"],
    stats: [
      { value: "5", label: { fr: "projets de jeux", en: "game projects" } },
      { value: "4", label: { fr: "expériences pro", en: "work experiences" } },
      { value: "C1", label: { fr: "en anglais", en: "English level" } },
    ],
  },

  /* ---------- PROJETS ----------
     roles    : ce que tu as fait sur le projet (sert aussi aux filtres)
     featured : true → affiché en grand en premier
     video / contribVideo : lien YouTube au format "embed" (https://www.youtube.com/embed/XXXX)
     timecodes : chapitres cliquables de la vidéo de contributions, ex :
       timecodes: [{ time: "00:00", label: "Introduction" }, { time: "01:15", label: "Système de combat" }]
     gallery : images supplémentaires affichées en carrousel                     */
  projects: [
    {
      id: "ira",
      featured: true,
      title: "Ira",
      year: "2025–2026",
      duration: { fr: "8 mois", en: "8 months" },
      genre: { fr: "Aventure souls-like", en: "Souls-like adventure" },
      engine: "Unreal Engine 5",
      roles: [{ fr: "Programmeur", en: "Programmer" }, "Sound Designer"],
      team: { fr: "8 personnes", en: "8 people" },
      tags: ["Unreal Engine 5", "Blueprint", "Sound Design"],
      thumb: "assets/images/projets/ira.png",
      summary: {
        fr: "Un jeu d'aventure souls-like dans un empire dystopique à l'esthétique romaine, réalisé en équipe à l'ICAN.",
        en: "A souls-like adventure game set in a Roman-inspired dystopian empire, made as a team at ICAN.",
      },
      description: {
        fr: "Dans l'empire de Deador, une dictature à l'esthétique romaine bâtie sur les ruines des Solari, Kaia Valdrik, dernière héritière de sa lignée, traque le Voidwalker, la créature qui a massacré sa famille.\n\nSur ce projet, j'ai travaillé comme programmeur et sound designer. (À compléter : décris tes contributions, par exemple les systèmes programmés, les sons et les ambiances créés.)",
        en: "In the empire of Deador, a Roman-inspired dictatorship built on the ruins of the Solari, Kaia Valdrik, last heir of her lineage, hunts the Voidwalker, the creature that slaughtered her family.\n\nOn this project, I worked as a programmer and sound designer. (To complete: describe your contributions.)",
      },
      video: "https://www.youtube.com/embed/Wy5PBMCPGxM",
      contribVideo: "",
      timecodes: [],
      gallery: {
        title: { fr: "Galerie", en: "Gallery" },
        text: "",
        images: [
          "assets/images/projets/ira-1.jpg",
          "assets/images/projets/ira-2.jpg",
          "assets/images/projets/ira-3.jpg",
        ],
      },
      link: "",
      linkLabel: { fr: "Télécharger le jeu", en: "Download the game" },
    },
    {
      id: "crazy-market",
      title: "Crazy Market",
      year: "",
      duration: "",
      genre: { fr: "Party game en co-op", en: "Co-op party game" },
      engine: "",
      roles: [{ fr: "Programmeur", en: "Programmer" }, "Game Designer"],
      team: "",
      tags: ["Party game", "Co-op"],
      // Image tirée de la vidéo YouTube — remplace par "assets/images/projets/crazy-market.jpg" si tu préfères ta propre image
      thumb: "https://i.ytimg.com/vi/Q-eBa41Cv_s/maxresdefault.jpg",
      summary: {
        fr: "Un party game en coopération. (À compléter : le principe du jeu en une ou deux phrases.)",
        en: "A co-op party game. (To complete: the game's concept in one or two sentences.)",
      },
      description: {
        fr: "À compléter : l'idée du jeu, ses mécaniques principales et ce que tu as fait en tant que programmeur et game designer.",
        en: "To complete: the game's idea, core mechanics and what you did as programmer and game designer.",
      },
      video: "https://www.youtube.com/embed/Q-eBa41Cv_s",
      link: "",
      linkLabel: { fr: "Voir le jeu", en: "View the game" },
    },
    {
      id: "alone",
      title: "Alone",
      year: "",
      duration: "",
      genre: { fr: "Horreur psychologique", en: "Psychological horror" },
      engine: "",
      roles: [{ fr: "Programmeur", en: "Programmer" }, "Game Designer", { fr: "Artiste 3D", en: "3D Artist" }],
      team: "",
      tags: [{ fr: "Horreur", en: "Horror" }, "3D"],
      thumb: "assets/images/projets/alone.jpg",
      summary: {
        fr: "Un jeu d'horreur psychologique. (À compléter : le principe du jeu en une ou deux phrases.)",
        en: "A psychological horror game. (To complete: the game's concept in one or two sentences.)",
      },
      description: {
        fr: "À compléter : l'ambiance, les mécaniques et ce que tu as fait (programmation, game design, modélisation 3D).",
        en: "To complete: the atmosphere, mechanics and what you did (programming, game design, 3D modeling).",
      },
      video: "",
      link: "",
      linkLabel: { fr: "Voir le jeu", en: "View the game" },
    },
    {
      id: "reflekt",
      title: "Reflekt",
      year: "2026",
      duration: { fr: "2 mois", en: "2 months" },
      genre: "Fast FPS",
      engine: "",
      roles: ["Game Designer", { fr: "Programmeur", en: "Programmer" }],
      team: "",
      tags: ["FPS", { fr: "Stage", en: "Internship" }],
      thumb: "assets/images/projets/reflekt.jpg",
      summary: {
        fr: "Un jeu de type fast FPS qui exige de bons réflexes, créé pendant un stage chez Fanny PASSET.",
        en: "A fast-paced FPS that demands sharp reflexes, made during an internship with Fanny PASSET.",
      },
      description: {
        fr: "Reflekt est un jeu de type fast FPS qui exige de bons réflexes, conçu et programmé pendant un stage de deux mois.\n\nÀ compléter : les mécaniques, le rythme du jeu et tes choix de game design.",
        en: "Reflekt is a fast-paced FPS that demands sharp reflexes, designed and programmed during a two-month internship.\n\nTo complete: mechanics, pacing and your game design choices.",
      },
      video: "",
      link: "",
      linkLabel: { fr: "Voir le jeu", en: "View the game" },
    },
    {
      id: "cox-attitude",
      title: "Cox'Attitude",
      year: "2026",
      duration: { fr: "2 mois", en: "2 months" },
      genre: { fr: "Jeu web", en: "Web game" },
      engine: "",
      roles: ["Game Designer", { fr: "Programmeur", en: "Programmer" }],
      team: "",
      tags: ["Webapp", { fr: "Stage", en: "Internship" }],
      thumb: "assets/images/projets/cox-attitude.jpg",
      summary: {
        fr: "Un jeu webapp créé pendant un stage, dans le thème de l'association Cox'Attitude.",
        en: "A web app game made during an internship, themed around the Cox'Attitude association.",
      },
      description: {
        fr: "Création d'un jeu webapp dans le thème de l'association Cox'Attitude, pendant un stage de deux mois.\n\nÀ compléter : le principe du jeu et ce que tu as réalisé.",
        en: "A web app game themed around the Cox'Attitude association, made during a two-month internship.\n\nTo complete: the game's concept and what you built.",
      },
      video: "",
      link: "https://gabi744.github.io/CoxAttitude/",
      linkLabel: { fr: "Jouer en ligne", en: "Play online" },
    },
  ],

  /* ---------- COMPÉTENCES ----------
     icon  : image dans assets/icons/ (si absente, le badge ou les initiales s'affichent)
     display: "tags" → affiche la catégorie sous forme d'étiquettes             */
  skills: [
    {
      category: { fr: "Programmation", en: "Programming" },
      items: [
        { name: "Unity", icon: `${DEVICON}/unity/unity-original.svg`, badge: "U" },
        { name: "Unreal Engine", icon: `${DEVICON}/unrealengine/unrealengine-original.svg`, badge: "UE" },
        { name: "Blueprint", badge: "BP" }, // pas de logo officiel
        { name: "C#", icon: "assets/icons/csharp.png" },
        { name: "C++", icon: `${DEVICON}/cplusplus/cplusplus-original.svg`, badge: "C++" },
        { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg`, badge: "</>" },
      ],
    },
    {
      category: "Game Design",
      display: "tags",
      items: [
        { name: "Game Mechanics" },
        { name: "Level Design" },
        { name: { fr: "Prototypage", en: "Prototyping" } },
        { name: "UX/UI" },
        { name: "Game Feel" },
      ],
    },
    {
      category: { fr: "Logiciels & outils", en: "Software & tools" },
      items: [
        { name: "Suite Adobe", icon: "assets/icons/adobe.png" },
        { name: "Blender", icon: "assets/icons/blender.png" },
        { name: "Figma", icon: `${DEVICON}/figma/figma-original.svg`, badge: "Fi" },
        { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, badge: "GH" },
        { name: "Notion", icon: `${DEVICON}/notion/notion-original.svg`, badge: "N" },
        { name: "Suite Office", icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/microsoftoffice.svg", badge: "Of" },
      ],
    },
    {
      category: { fr: "Langues", en: "Languages" },
      items: [
        { name: { fr: "Français", en: "French" }, note: { fr: "Langue maternelle", en: "Native" }, badge: "FR" },
        { name: { fr: "Anglais", en: "English" }, note: { fr: "C1 — expérimenté", en: "C1 — advanced" }, badge: "EN" },
      ],
    },
  ],

  /* ---------- PARCOURS ---------- */
  education: [
    {
      date: "2023 — 2026",
      title: { fr: "Bachelor de game design", en: "Bachelor in Game Design" },
      place: "ICAN, Lyon",
      text: "",
    },
    {
      date: "2020 — 2023",
      title: { fr: "Bac général", en: "High school diploma (Baccalauréat)" },
      place: "Lycée de la Versoie, Thonon-les-Bains",
      text: "",
    },
  ],
  experience: [
    {
      date: { fr: "2026 · 2 mois", en: "2026 · 2 months" },
      title: { fr: "Game Designer, programmeur — Stage", en: "Game Designer, programmer — Internship" },
      place: "Cox'Attitude",
      text: { fr: "Création d'un jeu webapp dans le thème de l'association Cox'Attitude.", en: "Created a web app game themed around the Cox'Attitude association." },
    },
    {
      date: { fr: "2026 · 2 mois", en: "2026 · 2 months" },
      title: { fr: "Game Designer, programmeur — Stage", en: "Game Designer, programmer — Internship" },
      place: "Fanny PASSET",
      text: { fr: "Création de Reflekt, un jeu de type fast FPS qui exige de bons réflexes.", en: "Created Reflekt, a fast-paced FPS that demands sharp reflexes." },
    },
    {
      date: { fr: "2025 · 2 mois", en: "2025 · 2 months" },
      title: { fr: "Concepteur en communication graphique et numérique — Stage", en: "Graphic & digital communication designer — Internship" },
      place: "Starev Editions",
      text: { fr: "Création d'illustrations et d'animations à visée commerciale.", en: "Created illustrations and animations for commercial use." },
    },
    {
      date: { fr: "2024 · 4 mois", en: "2024 · 4 months" },
      title: { fr: "Opérateur de production", en: "Production operator" },
      place: "Plastique Des Neiges",
      text: { fr: "Maintenance des machines et préparation de pièces en plastique pour les clients.", en: "Machine maintenance and preparation of plastic parts for customers." },
    },
  ],

  /* ---------- PAGE « QUI SUIS-JE ? » ---------- */
  aboutPage: {
    intro: {
      fr: "Je m'appelle Gabriel et je suis passionné par les jeux vidéo. J'aime tout ce qui se rapporte à la création artistique, que ce soit à travers le game design, la musique ou la 3D. En dehors des écrans, je m'intéresse aussi à l'astronomie et au sport.",
      en: "My name is Gabriel and I'm passionate about video games. I love everything related to artistic creation, whether through game design, music or 3D. Away from screens, I'm also into astronomy and sports.",
    },
    qualities: [
      { fr: "Autonome", en: "Self-driven" },
      { fr: "Créatif", en: "Creative" },
      { fr: "Curieux", en: "Curious" },
      { fr: "Travail en équipe", en: "Team player" },
    ],
    favorite: {
      title: "Ton jeu préféré",
      text: {
        fr: "À compléter : explique pourquoi c'est ton jeu préféré de tous les temps.",
        en: "To complete: explain why it's your all-time favorite game.",
      },
    },
    /* Astuce : pour un jeu Steam, tu peux utiliser directement l'image officielle :
       https://cdn.cloudflare.steamstatic.com/steam/apps/<ID_STEAM>/library_600x900.jpg
       favorite: true → le jeu apparaît avec une étoile et dans la bannière « jeu préféré » */
    gameCategories: [
      {
        title: { fr: "Catégorie 1 (ex : Aventure)", en: "Category 1 (e.g. Adventure)" },
        games: [
          { name: "Jeu 1", cover: "assets/images/jeux/jeu-1.jpg", favorite: true },
          { name: "Jeu 2", cover: "assets/images/jeux/jeu-2.jpg" },
          { name: "Jeu 3", cover: "assets/images/jeux/jeu-3.jpg" },
          { name: "Jeu 4", cover: "assets/images/jeux/jeu-4.jpg" },
        ],
      },
      {
        title: { fr: "Catégorie 2 (ex : Action)", en: "Category 2 (e.g. Action)" },
        games: [
          { name: "Jeu 5", cover: "assets/images/jeux/jeu-5.jpg" },
          { name: "Jeu 6", cover: "assets/images/jeux/jeu-6.jpg" },
          { name: "Jeu 7", cover: "assets/images/jeux/jeu-7.jpg" },
        ],
      },
    ],
    hobbies: [
      { icon: "🔭", title: { fr: "Astronomie", en: "Astronomy" }, text: { fr: "À compléter : ce qui te passionne dans l'astronomie.", en: "To complete: what fascinates you about astronomy." } },
      { icon: "🎵", title: { fr: "Musique", en: "Music" }, text: { fr: "À compléter : ce que tu écoutes, joues ou composes.", en: "To complete: what you listen to, play or compose." } },
      { icon: "🏃", title: "Sport", text: { fr: "À compléter : les sports que tu pratiques ou suis.", en: "To complete: the sports you play or follow." } },
      { icon: "🎮", title: { fr: "Jeux vidéo", en: "Video games" }, text: { fr: "À compléter : les jeux et les genres qui t'ont marqué.", en: "To complete: the games and genres that shaped you." } },
    ],
  },
};

/* ---------- TEXTES DE L'INTERFACE (menus, boutons…) ---------- */
const UI = {
  fr: {
    "nav.about": "À propos",
    "nav.whoami": "Qui suis-je ?",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.path": "Parcours",
    "nav.contact": "Contact",
    "nav.home": "Accueil",
    "hero.projects": "Voir mes projets",
    "hero.contact": "Me contacter",
    "hero.cv": "Télécharger mon CV",
    "about.eyebrow": "01 — À propos",
    "projects.eyebrow": "02 — Travaux",
    "projects.title": "Projets",
    "projects.all": "Tous",
    "projects.open": "Voir le projet",
    "projects.featured": "Projet phare",
    "skills.eyebrow": "03 — Outils",
    "skills.title": "Compétences",
    "path.eyebrow": "04 — Parcours",
    "path.title": "Formation & expérience",
    "path.education": "Formation",
    "path.experience": "Expériences",
    "contact.eyebrow": "05 — Contact",
    "contact.title": "Parlons de votre projet",
    "contact.text": "Une question, une opportunité ou un projet ? N'hésitez pas à m'écrire.",
    "form.name": "Nom",
    "form.email": "Email",
    "form.subject": "Sujet",
    "form.message": "Message",
    "form.send": "Envoyer le message",
    "form.sending": "Envoi…",
    "form.sent": "✓ Message envoyé !",
    "form.error": "Erreur, réessayez ou écrivez-moi par email.",
    "form.mailto": "Votre application mail va s'ouvrir avec votre message.",
    "detail.duration": "Durée",
    "detail.year": "Période",
    "detail.engine": "Moteur",
    "detail.role": "Rôles",
    "detail.team": "Équipe",
    "detail.genre": "Genre",
    "detail.contrib": "Mes contributions",
    "detail.close": "Fermer",
    "ph.image": "Image à ajouter",
    "ph.video": "Vidéo à ajouter",
    "ph.videoHint": "lien YouTube « embed » dans js/content.js",
    "whoami.eyebrow": "Qui suis-je ?",
    "whoami.title": "Au-delà du portfolio",
    "games.eyebrow": "Univers ludique",
    "games.title": "Les jeux qui m'ont marqué",
    "games.favorite": "Mon jeu préféré",
    "hobbies.eyebrow": "Hors écran",
    "hobbies.title": "Loisirs & passions",
    "footer.top": "Retour en haut",
    "theme.toggle": "Changer de thème",
  },
  en: {
    "nav.about": "About",
    "nav.whoami": "Who am I?",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.path": "Journey",
    "nav.contact": "Contact",
    "nav.home": "Home",
    "hero.projects": "See my projects",
    "hero.contact": "Contact me",
    "hero.cv": "Download my CV",
    "about.eyebrow": "01 — About",
    "projects.eyebrow": "02 — Work",
    "projects.title": "Projects",
    "projects.all": "All",
    "projects.open": "View project",
    "projects.featured": "Featured project",
    "skills.eyebrow": "03 — Tools",
    "skills.title": "Skills",
    "path.eyebrow": "04 — Journey",
    "path.title": "Education & experience",
    "path.education": "Education",
    "path.experience": "Experience",
    "contact.eyebrow": "05 — Contact",
    "contact.title": "Let's talk about your project",
    "contact.text": "A question, an opportunity or a project? Feel free to get in touch.",
    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send message",
    "form.sending": "Sending…",
    "form.sent": "✓ Message sent!",
    "form.error": "Error, try again or email me directly.",
    "form.mailto": "Your email app will open with your message.",
    "detail.duration": "Duration",
    "detail.year": "Period",
    "detail.engine": "Engine",
    "detail.role": "Roles",
    "detail.team": "Team",
    "detail.genre": "Genre",
    "detail.contrib": "My contributions",
    "detail.close": "Close",
    "ph.image": "Image to add",
    "ph.video": "Video to add",
    "ph.videoHint": "YouTube “embed” link in js/content.js",
    "whoami.eyebrow": "Who am I?",
    "whoami.title": "Beyond the portfolio",
    "games.eyebrow": "Gaming universe",
    "games.title": "Games that shaped me",
    "games.favorite": "My favorite game",
    "hobbies.eyebrow": "Off screen",
    "hobbies.title": "Hobbies & passions",
    "footer.top": "Back to top",
    "theme.toggle": "Toggle theme",
  },
};
