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
    formspreeId: "myeyqynn",
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
        fr: "Dans l'empire de Deador, une dictature à l'esthétique romaine bâtie sur les ruines des Solari, Kaia Valdrik, dernière héritière de sa lignée, traque le Voidwalker, la créature qui a massacré sa famille.\n\nSur ce projet, j'ai beaucoup travaillé sur l'intelligence artificielle des ennemis, avec des Behavior Trees, des requêtes EQS et des Blueprints. J'ai aussi programmé d'autres outils, comme l'inventaire du joueur.",
        en: "In the empire of Deador, a Roman-inspired dictatorship built on the ruins of the Solari, Kaia Valdrik, last heir of her lineage, hunts the Voidwalker, the creature that slaughtered her family.\n\nOn this project, I worked extensively on enemy AI, using Behavior Trees, EQS queries and Blueprints. I also programmed other tools, such as the player inventory.",
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
      year: "2025",
      duration: "",
      genre: { fr: "Party game en co-op", en: "Co-op party game" },
      engine: "",
      roles: [{ fr: "Programmeur", en: "Programmer" }, "Game Designer"],
      team: "",
      tags: ["Party game", "Co-op"],
      thumb: "assets/images/projets/crazy-market.jpg",
      summary: {
        fr: "Un party game en coopération.",
        en: "A co-op party game.",
      },
      description: {
        fr: "J'ai principalement travaillé sur le game design et sur l'identité du jeu : ce qu'il devait faire ressentir aux joueurs.\n\nJ'ai aussi programmé les déplacements du joueur ainsi que plusieurs mécaniques du joueur et du monde.",
        en: "I mainly worked on the game design and the game's identity: what it should make players feel.\n\nI also programmed the player's movement, as well as several player and world mechanics.",
      },
      video: "https://www.youtube.com/embed/2Gw407vtmE0",
      link: "",
      linkLabel: { fr: "Voir le jeu", en: "View the game" },
    },
    {
      id: "alone",
      title: "Alone",
      year: "2025",
      duration: "",
      genre: { fr: "Horreur psychologique", en: "Psychological horror" },
      engine: "",
      roles: [{ fr: "Programmeur", en: "Programmer" }, "Game Designer", { fr: "Artiste 3D", en: "3D Artist" }],
      team: "",
      tags: [{ fr: "Horreur", en: "Horror" }, "3D"],
      thumb: "assets/images/projets/alone.jpg",
      summary: {
        fr: "Un jeu d'horreur psychologique.",
        en: "A psychological horror game.",
      },
      description: {
        fr: "J'ai réalisé quelques modèles 3D, mais j'ai surtout travaillé sur la programmation des interactions du joueur et du monde, en plus de la direction générale du jeu.",
        en: "I made a few 3D models, but I mostly worked on programming the player and world interactions, as well as the overall direction of the game.",
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
        fr: "Reflekt est un jeu de type fast FPS qui exige de bons réflexes, conçu et programmé pendant un stage de deux mois.\n\nJ'ai participé à l'idée de départ : un jeu rapide et exigeant. J'ai principalement réalisé les ennemis, ainsi qu'une partie du level design.",
        en: "Reflekt is a fast-paced FPS that demands sharp reflexes, designed and programmed during a two-month internship.\n\nI helped shape the initial idea: a fast and demanding game. I mainly created the enemies, as well as part of the level design.",
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
        fr: "Création d'un jeu webapp dans le thème de l'association Cox'Attitude, pendant un stage de deux mois.\n\nJe suis allé moi-même à l'association pour assister à son événement : son thème et son ambiance m'ont inspiré pour créer le jeu.",
        en: "A web app game themed around the Cox'Attitude association, made during a two-month internship.\n\nI went to the association myself to attend its event: its theme and atmosphere inspired me to create the game.",
      },
      video: "",
      link: "https://gabi744.github.io/CoxAttitude/",
      linkLabel: { fr: "Jouer en ligne", en: "Play online" },
    },
  ],

  /* ---------- COMPÉTENCES ----------
     icon  : image dans assets/icons/ ou lien (si absente, le badge ou les initiales s'affichent)
     mono  : true → logo noir, affiché en blanc en thème sombre
     display: "tags" → affiche la catégorie sous forme d'étiquettes             */
  skills: [
    {
      category: { fr: "Programmation", en: "Programming" },
      items: [
        { name: "Unity", icon: `${DEVICON}/unity/unity-original.svg`, badge: "U", mono: true },
        { name: "Unreal Engine", icon: `${DEVICON}/unrealengine/unrealengine-original.svg`, badge: "UE", mono: true },
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
        { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, badge: "GH", mono: true },
        { name: "Notion", icon: `${DEVICON}/notion/notion-original.svg`, badge: "N", mono: true },
        { name: "Suite Office", icon: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/microsoftoffice.svg", badge: "Of", mono: true },
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
    // Un paragraphe par bloc, séparés par une ligne vide (\n\n)
    intro: {
      fr: "Je m'appelle Gabriel et je suis passionné par la création de jeux vidéo, que ce soit à travers le game design, la programmation, la musique ou la 3D.\n\nFormé à l'ICAN Lyon (Bachelor de game design, 2023–2026), j'ai travaillé sur des projets très variés : souls-like, party game en coopération, horreur psychologique, FPS nerveux, jeu web…\n\nCréatif, curieux et motivé, je cherche toujours à apprendre et à créer des expériences uniques ! En dehors des écrans, je m'intéresse aussi à l'astronomie et au sport.",
      en: "My name is Gabriel and I'm passionate about making video games, whether through game design, programming, music or 3D.\n\nTrained at ICAN Lyon (Bachelor in Game Design, 2023–2026), I've worked on very different projects: a souls-like, a co-op party game, psychological horror, a fast FPS, a web game…\n\nCreative, curious and motivated, I'm always looking to learn and create unique experiences! Away from screens, I'm also into astronomy and sports.",
    },
    qualities: [
      { fr: "Autonome", en: "Self-driven" },
      { fr: "Créatif", en: "Creative" },
      { fr: "Curieux", en: "Curious" },
      { fr: "Travail en équipe", en: "Team player" },
    ],
    favorite: {
      title: "Outer Wilds",
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/753640/library_600x900.jpg",
      text: {
        fr: "Découvert au bon moment, Outer Wilds m'a marqué comme aucun autre jeu. J'ai adoré son game design, et ses musiques me restent encore en tête.",
        en: "I discovered Outer Wilds at just the right time, and it stayed with me like no other game. I loved its game design, and its music is still in my head.",
      },
    },
    /* Jeu préféré par genre. Laisse name vide ("") pour une case « Jeu à ajouter ».
       Astuce : pour un jeu Steam, l'image officielle est
       https://cdn.cloudflare.steamstatic.com/steam/apps/<ID_STEAM>/library_600x900.jpg */
    genreFavorites: [
      {
        genre: { fr: "Course", en: "Racing" },
        name: "Gran Turismo",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/14/Gran_Turismo_7_cover_art.jpg",
        text: { fr: "Un jeu superbe visuellement, qui me donne toujours envie d'enchaîner les courses.", en: "A visually stunning game that always makes me want to race one more lap." },
      },
      {
        genre: { fr: "Histoire", en: "Story" },
        name: "Disco Elysium",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/library_600x900.jpg",
        text: { fr: "Une histoire d'une rare profondeur, un univers qui sait nous intégrer, et des musiques marquantes.", en: "A story of rare depth, a world that truly draws you in, and a memorable soundtrack." },
      },
      {
        genre: "RPG",
        name: "Cyberpunk 2077",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
        text: { fr: "Musiques, direction artistique, gameplay : un jeu extrêmement complet, réussi sur tous les plans.", en: "Music, art direction, gameplay: an incredibly complete game that shines on every level." },
      },
      {
        genre: { fr: "Énigme", en: "Puzzle" },
        name: "Big Walk",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1478500/library_600x900.jpg",
        text: { fr: "Son côté interactif entre amis, ses énigmes vraiment bien pensées et son originalité m'ont conquis.", en: "Its interactive, play-with-friends spirit, its cleverly designed puzzles and its originality won me over." },
      },
      {
        genre: "Action",
        name: "Sekiro",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_600x900.jpg",
        text: { fr: "J'ai adoré les feedbacks des parades et la difficulté exigeante, propre au souls-like.", en: "I loved the feedback of its parries and its demanding, souls-like difficulty." },
      },
      {
        genre: { fr: "Horreur", en: "Horror" },
        name: "Silent Hill 2",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/library_600x900.jpg",
        text: { fr: "J'ai adoré son ambiance : les musiques et la direction artistique collent parfaitement au thème du jeu.", en: "I loved its atmosphere: the music and art direction fit the game's themes perfectly." },
      },
    ],
    hobbies: [
      {
        icon: "🔭", title: { fr: "Astronomie", en: "Astronomy" },
        text: { fr: "Je trouve l'univers magnifique et plein de mystères. C'est justement ce qui me fascine : j'adore en apprendre toujours plus sur ce qui nous entoure.", en: "I find the universe beautiful and full of mysteries. That's exactly what fascinates me: I love learning more and more about what surrounds us." },
      },
      {
        icon: "🎵", title: { fr: "Musique", en: "Music" },
        text: { fr: "C'est l'art qui me fait ressentir le plus d'émotions. Je l'aime tellement que j'ai essayé d'en composer moi-même sur FL Studio, pour le plaisir.", en: "It's the art form that makes me feel the most emotions. I love it so much that I've tried composing my own music in FL Studio, just for fun." },
      },
      {
        icon: "🥊", title: "Sport",
        text: { fr: "J'ai pratiqué beaucoup de sports : six ans de boxe, du tennis et de la musculation. J'aime aussi regarder les sports de combat et automobiles.", en: "I've done a lot of sports: six years of boxing, tennis and weight training. I also enjoy watching combat sports and motorsports." },
      },
      {
        icon: "🎮", title: { fr: "Jeux vidéo", en: "Video games" },
        text: { fr: "C'est l'art que j'ai le plus consommé et celui que je connais le mieux. C'est aussi le plus complet : il réunit image, musique, histoire et interaction.", en: "It's the art form I've consumed the most and know best. It's also the most complete: it brings together visuals, music, story and interaction." },
      },
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
    "whoami.title": "Qui suis-je ?",
    "games.toAdd": "Jeu à ajouter",
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
    "whoami.title": "Who am I?",
    "games.toAdd": "Game to add",
    "games.eyebrow": "Gaming universe",
    "games.title": "Games that shaped me",
    "games.favorite": "My favorite game",
    "hobbies.eyebrow": "Off screen",
    "hobbies.title": "Hobbies & passions",
    "footer.top": "Back to top",
    "theme.toggle": "Toggle theme",
  },
};
