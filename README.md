# Nexus Partners Website (v2)

> **Vitrine Corporate & Plateforme de Solutions Digitales** > _Premium, Responsive, et Internationalisé_

![Statut](https://img.shields.io/badge/Statut-En%20D%C3%A9veloppement-yellow?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## 📋 Présentation

**Nexus Partners** est un site web corporate haut de gamme conçu pour présenter une expertise digitale, des services de conseil et des solutions technologiques. La plateforme arbore une esthétique "Cyber Deep", mêlant glassmorphism, animations fluides et une palette de couleurs sophistiquée (Jaune Nexus, Bleu Nuit, Vert Profond).

Cette version (v2) migre la codebase vers **Next.js 16** avec **Turbopack**, utilisant **Next-Intl** pour une internationalisation Anglais/Français transparente.

## ✨ Fonctionnalités Clés

- **Design System Premium** : Dégradés "Cyber Deep", cartes UI en glassmorphism et l'identité visuelle signature **Jaune Nexus** (`#ffcc00`).
- **Animations Avancées** : Propulsées par `framer-motion` (animations au scroll, éléments flottants) et `react-countup`.
- **Internationalisation (i18n)** : Pages entièrement traduites (FR/EN) via `next-intl`.
- **Architecture Responsive** : Conception Mobile-first avec des mises en page optimisées spécifiquement pour tablettes et grands écrans.
- **Contenu Dynamique** :
  - **Page Work** : Vitrine portfolio avec des cartes spécialisées.
  - **Page Contact** : Mise en page 2 colonnes avec formulaire intelligent et emplacement carte interactif.
  - **Services** : Présentation des services sous forme de Bento-grid.

## 🛠️ Stack Technique

- **Framework** : [Next.js 16.0.1](https://nextjs.org/) (App Directory)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Style** : [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animation** : [Motion](https://motion.dev/) (Framer Motion)
- **Internationalisation** : [next-intl](https://next-intl-docs.vercel.app/)
- **Icônes** : [Iconify](https://iconify.design/)
- **Formulaires** : FormSubmit.co via intégration fetch directe.

## 🚀 Pour Commencer

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/nexus-partners/website-v2.git
   cd nexus_partners
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Compiler pour la production**
   ```bash
   npm run build
   ```

## 📂 Structure du Projet

```bash
src/
├── app/
│   ├── [locale]/          # Racine des routes internationalisées
│   │   ├── (site)/        # Groupe de layout principal
│   │   │   ├── contact/   # Page Contact
│   │   │   ├── work/      # Page Portfolio
│   │   │   └── page.tsx   # Page d'accueil
│   │   └── layout.tsx     # Layout racine avec providers
│   ├── api/               # Routes API
│   ├── components/        # Composants UI réutilisables
│   │   ├── home/          # Composants spécifiques Accueil
│   │   ├── layout/        # Header, Footer, etc.
│   │   └── ui/            # Éléments UI génériques (boutons, effets)
│   └── globals.css        # Styles globaux & directives Tailwind
├── messages/              # Fichiers de traduction i18n
│   ├── en.json
│   └── fr.json
└── public/                # Assets statiques (images, icônes)
```

## 🎨 Charte Graphique

- **Couleur Primaire** : Jaune Nexus (`#ffcc00`) - Utilisé pour les CTA et mises en avant.
- **Arrière-plans** : Thème sombre avec dégradés "Cyber Deep" (Dégradés linéaires mêlant traces de Violet/Bleu/Vert).
- **Typographie** : Utilise `Instrument Sans` via des classes de police strictement typées.

## 👥 Auteurs

- **@hopsyder** - _Lead Developer & Architecte_ - Nexus Partners

---

_© 2026 Nexus Partners. Tous Droits Réservés._
