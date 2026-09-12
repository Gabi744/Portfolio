# Mon portfolio

Portfolio de game design statique (HTML / CSS / JavaScript), prêt pour **GitHub Pages**.
Bilingue français / anglais, thème clair / sombre, responsive.

## Structure

```
index.html          → page d'accueil (hero, à propos, projets, compétences, parcours, contact)
about.html          → page « Qui suis-je ? » (jeux favoris, loisirs)
css/style.css       → tout le style (couleurs en haut du fichier)
js/content.js       → ⭐ TOUT TON CONTENU : textes, projets, liens, chemins des images
js/main.js          → le moteur du site (pas besoin d'y toucher)
assets/             → tes images, icônes et ton CV
.nojekyll           → indique à GitHub Pages de servir les fichiers tels quels
```

## 1. Personnaliser le contenu

Ouvre **`js/content.js`** et remplace les textes d'exemple (« Prénom », « Nom du projet 1 »…).

- Un texte peut être simple : `title: "Mon jeu"`,
  ou bilingue : `title: { fr: "Mon jeu", en: "My game" }`.
- Mets `""` (vide) pour masquer un élément (téléphone, lien, vidéo…).
- Pour ajouter un projet, copie un bloc `{ id: "projet-2", ... }` dans `projects` et change l'`id`.
- `featured: true` affiche un projet en grand, en premier.

## 2. Ajouter tes images

Tant qu'une image manque, le site affiche un **cadre en pointillés avec le chemin attendu**.
Dépose simplement ton fichier à cet endroit (même nom, même extension) et il apparaît.

| Élément | Chemin par défaut |
|---|---|
| Photo de profil | `assets/images/photo.jpg` |
| Vignettes des projets | `assets/images/projets/projet-1.jpg`, `projet-2.jpg`… |
| Galerie du projet 1 | `assets/images/projets/projet-1-galerie-1.jpg`… |
| Jaquettes des jeux | `assets/images/jeux/jeu-1.jpg`… |
| Icônes des logiciels | `assets/icons/unreal.png`, `unity.png`… (sinon les initiales s'affichent) |
| CV | `assets/cv.pdf` |

Tu peux aussi changer les chemins dans `content.js` (ex : `thumb: "assets/images/mon-jeu.png"`).

**Formats conseillés** : vignettes en 16:10 (ex : 1600×1000), photo en 4:5, jaquettes en 3:4.
Compresse tes images (ex : [squoosh.app](https://squoosh.app)) pour un site rapide.

**Astuce jeux Steam** : tu peux utiliser directement la jaquette officielle :
`https://cdn.cloudflare.steamstatic.com/steam/apps/<ID_STEAM>/library_600x900.jpg`
(l'ID est le nombre dans l'adresse de la page Steam du jeu).

## 3. Vidéos YouTube

Utilise le lien au format **embed** : sur YouTube → *Partager* → *Intégrer*, puis copie l'adresse
`https://www.youtube.com/embed/XXXXXXXXXXX`. Colle-la dans `video` (bande-annonce) ou
`contribVideo` (vidéo de tes contributions, avec les `timecodes` cliquables).

## 4. Formulaire de contact

1. Crée un compte gratuit sur [formspree.io](https://formspree.io) et un nouveau formulaire.
2. Copie son identifiant (la fin de l'adresse `https://formspree.io/f/xxxxxxx`).
3. Colle-le dans `formspreeId` dans `content.js`.

## 5. Changer les couleurs

En haut de `css/style.css`, modifie les variables `--accent`, `--bg`, etc.
Le bloc `:root[data-theme="dark"]` contient les couleurs du thème sombre.

## 6. Mettre en ligne avec GitHub Pages

**Sans ligne de commande (le plus simple) :**
1. Sur GitHub, clique sur **New repository**. Nomme-le par exemple `portfolio`, laisse-le **Public**, crée-le.
2. Clique sur **uploading an existing file**, puis glisse **le contenu** du dossier `portfolio`
   (les fichiers `index.html`, `about.html` et les dossiers `css`, `js`, `assets`…, pas le dossier lui-même).
   Le fichier caché `.nojekyll` peut ne pas partir en glisser-déposer : ce n'est pas grave.
3. Clique sur **Commit changes**.
4. Va dans **Settings → Pages**. Dans *Build and deployment*, choisis *Deploy from a branch*,
   branche **main**, dossier **/ (root)**, puis **Save**.
5. Après une à deux minutes, ton site est en ligne à `https://<ton-pseudo>.github.io/portfolio/`.

**Avec Git :**
```bash
git init
git add .
git commit -m "Premier commit du portfolio"
git branch -M main
git remote add origin https://github.com/<ton-pseudo>/portfolio.git
git push -u origin main
```
Active ensuite GitHub Pages comme à l'étape 4.

Pour que l'adresse soit `https://<ton-pseudo>.github.io/` (sans `/portfolio`),
nomme le dépôt exactement `<ton-pseudo>.github.io`.

## Tester en local

Ouvre simplement `index.html` dans ton navigateur (double-clic).
