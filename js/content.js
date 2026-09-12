/* ==========================================================================
   CONTENU DU PORTFOLIO — c'est le SEUL fichier à modifier pour personnaliser le site.

   - Un texte peut être une simple chaîne ("Bonjour") ou une paire { fr: "...", en: "..." }
     si tu veux le site en deux langues.
   - Les images : mets tes fichiers dans assets/images/... au chemin indiqué.
     Tant qu'une image est absente, le site affiche un cadre en pointillés
     avec le chemin attendu. Dès que le fichier existe, il s'affiche.
   - Laisse une valeur vide ("") pour masquer l'élément correspondant.
   ========================================================================== */

const SITE = {
  defaultLang: "fr",

  /* ---------- IDENTITÉ ---------- */
  profile: {
    firstName: "Prénom",
    lastName: "Nom",
    initials: "PN",
    role: { fr: "Game Designer", en: "Game Designer" },
    tagline: {
      fr: "Une phrase qui résume ce que tu fais. Ex : je conçois et programme des mécaniques de gameplay.",
      en: "One sentence that sums up what you do. E.g. I design and build gameplay mechanics.",
    },
    availability: {
      fr: "Disponible pour un stage",
      en: "Open to internships",
    },
    location: "Ville, Pays",
    email: "ton.email@exemple.com",
    phone: "", // ex : "06 00 00 00 00" — laisse vide pour ne pas l'afficher
    photo: "assets/images/photo.jpg",
    cv: "assets/cv.pdf", // dépose ton CV à cet emplacement
    // Crée un formulaire gratuit sur https://formspree.io puis colle son identifiant ici (ex : "xzdqvkrq")
    formspreeId: "VOTRE_ID_FORMSPREE",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ton-profil" },
      { label: "itch.io", url: "https://ton-pseudo.itch.io" },
      { label: "GitHub", url: "https://github.com/ton-pseudo" },
      { label: "Instagram", url: "" },
    ],
  },

  /* ---------- À PROPOS ---------- */
  about: {
    title: {
      fr: "Passionné par le game design, le level design et la programmation gameplay",
      en: "Passionate about game design, level design and gameplay programming",
    },
    paragraphs: [
      {
        fr: "Présente-toi ici : ta formation, ton école, ta spécialité. Ex : étudiant en Bachelor Game Design, je me spécialise dans…",
        en: "Introduce yourself here: your studies, your school, your specialty.",
      },
      {
        fr: "Parle de ce que tu aimes concevoir et de ta vision du jeu vidéo.",
        en: "Talk about what you love to design and your vision of games.",
      },
    ],
    tags: ["Gameplay Programming", "Level Design", "Game Design", "Prototypage"],
    stats: [
      { value: "5", label: { fr: "projets de jeux", en: "game projects" } },
      { value: "3", label: { fr: "ans de formation", en: "years of study" } },
      { value: "2", label: { fr: "stages", en: "internships" } },
    ],
  },

  /* ---------- PROJETS ----------
     featured: true  → affiché en grand en premier
     video / contribVideo : lien YouTube au format "embed" (https://www.youtube.com/embed/XXXX)
     timecodes : chapitres cliquables de la vidéo de contributions            */
  projects: [
    {
      id: "projet-1",
      featured: true,
      title: "Nom du projet 1",
      year: "2025–2026",
      duration: { fr: "8 mois", en: "8 months" },
      genre: { fr: "Souls-like 3D", en: "3D Souls-like" },
      engine: "Unreal Engine 5",
      role: { fr: "Gameplay Programmer", en: "Gameplay Programmer" },
      team: { fr: "8 personnes", en: "8 people" },
      tags: ["Unreal Engine 5", "Blueprint", "Combat"],
      thumb: "assets/images/projets/projet-1.jpg",
      summary: {
        fr: "Deux ou trois phrases qui donnent envie : le pitch du jeu et ton rôle.",
        en: "Two or three catchy sentences: the game's pitch and your role.",
      },
      description: {
        fr: "Description détaillée du projet : l'univers, les mécaniques principales, les défis.\n\nUn deuxième paragraphe sur ce que tu as appris ou ce dont tu es fier.",
        en: "Detailed description: the world, core mechanics, challenges.\n\nA second paragraph about what you learned or are proud of.",
      },
      video: "", // bande-annonce, ex : "https://www.youtube.com/embed/XXXX"
      contribVideo: "", // vidéo de tes contributions
      timecodes: [
        { time: "00:00", label: { fr: "Introduction", en: "Introduction" } },
        { time: "00:30", label: { fr: "Déplacements", en: "Movement" } },
        { time: "01:15", label: { fr: "Système de combat", en: "Combat system" } },
      ],
      gallery: {
        title: { fr: "Galerie", en: "Gallery" },
        text: { fr: "Captures du projet ou de ton travail (level design, props, UI…).", en: "Screenshots of the project or your work." },
        images: [
          "assets/images/projets/projet-1-galerie-1.jpg",
          "assets/images/projets/projet-1-galerie-2.jpg",
          "assets/images/projets/projet-1-galerie-3.jpg",
        ],
      },
      link: "",
      linkLabel: { fr: "Télécharger le build", en: "Download the build" },
    },
    {
      id: "projet-2",
      title: "Nom du projet 2",
      year: "2025",
      duration: { fr: "4 mois", en: "4 months" },
      genre: { fr: "Platformer 3D", en: "3D Platformer" },
      engine: "Unity 6",
      role: { fr: "Gameplay Programmer", en: "Gameplay Programmer" },
      team: "",
      tags: ["Unity 6", "C#", "Cartoon"],
      thumb: "assets/images/projets/projet-2.jpg",
      summary: { fr: "Le pitch du projet en quelques lignes.", en: "The project's pitch in a few lines." },
      description: { fr: "Description détaillée du projet.", en: "Detailed project description." },
      video: "",
      link: "",
      linkLabel: { fr: "Voir sur itch.io", en: "View on itch.io" },
    },
    {
      id: "projet-3",
      title: "Nom du projet 3",
      year: "2024",
      duration: { fr: "4 mois", en: "4 months" },
      genre: { fr: "Platformer 2D", en: "2D Platformer" },
      engine: "Unity 6",
      role: { fr: "Gameplay + Level Design", en: "Gameplay + Level Design" },
      team: "",
      tags: ["Unity 6", "Level Design"],
      thumb: "assets/images/projets/projet-3.jpg",
      summary: { fr: "Le pitch du projet en quelques lignes.", en: "The project's pitch in a few lines." },
      description: { fr: "Description détaillée du projet.", en: "Detailed project description." },
      video: "",
      link: "",
      linkLabel: { fr: "Voir sur itch.io", en: "View on itch.io" },
    },
    {
      id: "projet-4",
      title: "Nom du projet 4",
      year: "2024",
      duration: { fr: "1 semaine", en: "1 week" },
      genre: { fr: "Game jam", en: "Game jam" },
      engine: "Godot",
      role: { fr: "Game Design", en: "Game Design" },
      team: "",
      tags: ["Godot", "Game Jam"],
      thumb: "assets/images/projets/projet-4.jpg",
      summary: { fr: "Le pitch du projet en quelques lignes.", en: "The project's pitch in a few lines." },
      description: { fr: "Description détaillée du projet.", en: "Detailed project description." },
      video: "",
      link: "",
      linkLabel: { fr: "Voir sur itch.io", en: "View on itch.io" },
    },
  ],

  /* ---------- COMPÉTENCES ----------
     icon : image dans assets/icons/ (si absente, les initiales s'affichent) */
  skills: [
    {
      category: { fr: "Moteurs", en: "Engines" },
      items: [
        { name: "Unreal Engine 5", note: "Blueprint", icon: "assets/icons/unreal.png" },
        { name: "Unity", note: "C#", icon: "assets/icons/unity.png" },
      ],
    },
    {
      category: { fr: "Code", en: "Code" },
      items: [
        { name: "C#", note: { fr: "Programmation", en: "Programming" }, icon: "assets/icons/csharp.png" },
        { name: "Visual Studio", note: "IDE", icon: "assets/icons/visual-studio.png" },
        { name: "GitHub", note: { fr: "Collaboration", en: "Collaboration" }, icon: "assets/icons/github.png" },
      ],
    },
    {
      category: { fr: "Création", en: "Creative" },
      items: [
        { name: "Blender", note: { fr: "Modélisation 3D", en: "3D modeling" }, icon: "assets/icons/blender.png" },
        { name: "Photoshop", note: "Adobe", icon: "assets/icons/photoshop.png" },
        { name: "Reaper", note: "Audio", icon: "assets/icons/reaper.png" },
      ],
    },
  ],

  /* ---------- PARCOURS ---------- */
  education: [
    {
      date: { fr: "2023 — Présent", en: "2023 — Present" },
      title: { fr: "Bachelor Game Design", en: "Bachelor in Game Design" },
      place: { fr: "Nom de l'école, Ville", en: "School name, City" },
      text: { fr: "Une mention ou un détail (ex : major de promo).", en: "An honor or detail." },
    },
    {
      date: "2020 — 2023",
      title: { fr: "Baccalauréat", en: "High school diploma" },
      place: { fr: "Lycée, Ville", en: "High school, City" },
      text: "",
    },
  ],
  experience: [
    {
      date: { fr: "En cours", en: "Ongoing" },
      title: { fr: "Gameplay Programmer — Stage", en: "Gameplay Programmer — Internship" },
      place: { fr: "Nom du studio", en: "Studio name" },
      text: { fr: "Ce que tu y fais.", en: "What you do there." },
    },
    {
      date: "2025",
      title: { fr: "Game Designer — Stage", en: "Game Designer — Internship" },
      place: { fr: "Nom du studio", en: "Studio name" },
      text: { fr: "Level design, game design et programmation.", en: "Level design, game design and programming." },
    },
  ],

  /* ---------- PAGE « QUI SUIS-JE ? » ---------- */
  aboutPage: {
    intro: {
      fr: "Présente-toi plus personnellement : ton rapport aux jeux vidéo, ce qui te fait vibrer, qui tu es en dehors des études.",
      en: "Introduce yourself more personally: your relationship with games, what drives you, who you are outside school.",
    },
    favorite: {
      title: "Ton jeu préféré",
      text: {
        fr: "Explique pourquoi c'est ton jeu préféré de tous les temps.",
        en: "Explain why it's your all-time favorite game.",
      },
    },
    /* Astuce : pour un jeu Steam, tu peux utiliser directement l'image officielle :
       https://cdn.cloudflare.steamstatic.com/steam/apps/<ID_STEAM>/library_600x900.jpg */
    gameCategories: [
      {
        title: { fr: "Catégorie 1 (ex : Survie & Exploration)", en: "Category 1 (e.g. Survival)" },
        games: [
          { name: "Jeu 1", cover: "assets/images/jeux/jeu-1.jpg", favorite: true },
          { name: "Jeu 2", cover: "assets/images/jeux/jeu-2.jpg" },
          { name: "Jeu 3", cover: "assets/images/jeux/jeu-3.jpg" },
          { name: "Jeu 4", cover: "assets/images/jeux/jeu-4.jpg" },
        ],
      },
      {
        title: { fr: "Catégorie 2 (ex : Souls-like & Action)", en: "Category 2 (e.g. Souls-like)" },
        games: [
          { name: "Jeu 5", cover: "assets/images/jeux/jeu-5.jpg" },
          { name: "Jeu 6", cover: "assets/images/jeux/jeu-6.jpg" },
          { name: "Jeu 7", cover: "assets/images/jeux/jeu-7.jpg" },
        ],
      },
      {
        title: { fr: "Catégorie 3 (ex : Aventure & Narratif)", en: "Category 3 (e.g. Adventure)" },
        games: [
          { name: "Jeu 8", cover: "assets/images/jeux/jeu-8.jpg" },
          { name: "Jeu 9", cover: "assets/images/jeux/jeu-9.jpg" },
          { name: "Jeu 10", cover: "assets/images/jeux/jeu-10.jpg" },
        ],
      },
    ],
    hobbies: [
      { icon: "🎮", title: { fr: "Loisir 1", en: "Hobby 1" }, text: { fr: "Décris ce loisir en une ou deux phrases.", en: "Describe this hobby in one or two sentences." } },
      { icon: "🏋️", title: { fr: "Loisir 2", en: "Hobby 2" }, text: { fr: "Décris ce loisir en une ou deux phrases.", en: "Describe this hobby in one or two sentences." } },
      { icon: "🎧", title: { fr: "Loisir 3", en: "Hobby 3" }, text: { fr: "Décris ce loisir en une ou deux phrases.", en: "Describe this hobby in one or two sentences." } },
    ],
  },
};

/* ---------- TEXTES DE L'INTERFACE (menus, boutons…) ---------- */
const UI = {
  fr: {
    "nav.about": "À propos",
    "nav.whoami": "Qui suis-je ?",
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
    "projects.title": "Projets sélectionnés",
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
    "contact.title": "Parlons de ton prochain projet",
    "contact.text": "Disponible pour des collaborations, des stages ou simplement pour discuter de jeux.",
    "form.name": "Nom",
    "form.email": "Email",
    "form.subject": "Sujet",
    "form.message": "Message",
    "form.send": "Envoyer le message",
    "form.sending": "Envoi…",
    "form.sent": "✓ Message envoyé !",
    "form.error": "Erreur, réessaie ou écris-moi par email.",
    "form.notConfigured": "Formulaire pas encore configuré (voir content.js)",
    "detail.duration": "Durée",
    "detail.year": "Période",
    "detail.engine": "Moteur",
    "detail.role": "Rôle",
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
    "projects.title": "Selected projects",
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
    "contact.title": "Let's talk about your next project",
    "contact.text": "Open to collaborations, internships, or just a chat about games.",
    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send message",
    "form.sending": "Sending…",
    "form.sent": "✓ Message sent!",
    "form.error": "Error, try again or email me directly.",
    "form.notConfigured": "Form not configured yet (see content.js)",
    "detail.duration": "Duration",
    "detail.year": "Period",
    "detail.engine": "Engine",
    "detail.role": "Role",
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
