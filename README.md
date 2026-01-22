# Restaurant Tandem - Rouen

Site web moderne pour le restaurant Tandem à Rouen, offrant une expérience culinaire augmentée par l'IA.

## 🚀 Technologies

- **Next.js 16** - Framework React avec Turbopack
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne et responsive
- **Animations** - ScrollReveal pour des animations fluides au scroll

## ✨ Fonctionnalités

- 🎨 Design moderne et élégant avec thème cuivre
- 📱 Entièrement responsive (mobile, tablette, desktop)
- ✨ Animations fluides au scroll
- 🤖 Suggestions IA pour les accords mets-vins
- 🗺️ Carte interactive des producteurs locaux
- 📅 Système de réservation avec sélection de table
- 🍷 Carte des vins et menu détaillé

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en production
npm start
```

## 🌐 Déploiement

Le site est configuré pour être déployé automatiquement sur Vercel :

1. Connectez votre dépôt GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le déploiement se fera automatiquement à chaque push sur `main`

## 📄 Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── carte/             # Page carte
│   ├── experience/        # Page expérience
│   ├── production/        # Page producteurs
│   └── reservation/       # Page réservation
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI (Button, ScrollReveal, etc.)
│   └── reservation/      # Composants spécifiques réservation
├── lib/                  # Utilitaires
├── public/               # Assets statiques
└── legacy_html/          # Anciens fichiers HTML (référence)
```

## 🎨 Thèmes

Le site utilise un système de thème avec deux variantes :
- **Thème par défaut** : Or/Jaune (#f2b90d)
- **Thème cuivre** : Orange cuivré (#d46211)

## 📱 Pages

- **Accueil** : Présentation du restaurant et suggestion du chef
- **Carte** : Menu complet avec accords vins IA
- **Expérience** : Philosophie et équipe du restaurant
- **Production** : Carte interactive des producteurs locaux
- **Réservation** : Système de réservation avec carte des tables

## 🤝 Contribution

Ce projet est développé pour le Restaurant Tandem à Rouen.

## 📝 License

Tous droits réservés - Restaurant Tandem © 2026
