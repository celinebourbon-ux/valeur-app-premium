# 🎯 Application V.A.L.E.U.R© Premium

## Architecture

```
app/
├── index.html          → Dashboard principal (React standalone)
├── module-0.html       → Module 0 : Comprendre
├── module-1.html       → Module 1 : Anxiété
├── module-2.html       → Module 2 : Masques
├── module-3.html       → Module 3 : Test
├── module-4.html       → Module 4 : Observer
├── module-5.html       → Module 5 : Réconcilier
├── module-6.html       → Module 6 : Ancrer
├── journal.html        → Journal de bord interactif
└── README.md          → Ce fichier
```

## Design System

### Palette de couleurs
```css
--navy: #0a0f1a          /* Background principal */
--navy-mid: #111827      /* Background secondaire */
--navy-card: #1a2235     /* Cards */
--navy-border: #2a3650   /* Bordures */
--gold: #c9a84c          /* Accent principal */
--cream: #f7f3ee         /* Titres */
--text-light: #e2e8f0    /* Texte principal */
--text-muted: #94a3b8    /* Texte secondaire */

/* 7 couleurs des masques */
--rouge: #E74C3C
--orange: #E67E22
--jaune: #F1C40F
--vert: #2ECC71
--bleu: #3498DB
--indigo: #8E44AD
--violet: #9B59B6
```

### Typographie
- **Titres** : Cormorant Garamond (Google Fonts)
- **Corps** : Inter (Google Fonts)

## Stack Technique

- **React 18** (standalone, sans build)
- **Babel Standalone** (JSX transformation)
- **Supabase** (backend & auth)
- **LocalStorage** (cache local)
- **CSS natif** (pas de framework)

## Fonctionnalités

### ✅ Dashboard (index.html)
- Vue d'ensemble progression
- Cartes modules interactives
- Stats en temps réel
- Journal widget
- Header avec user info
- Progress bar animée

### 🔜 À implémenter
- [ ] Modules individuels (module-0.html → module-6.html)
- [ ] Journal de bord (journal.html)
- [ ] Système de quiz
- [ ] Exercices audio
- [ ] Export PDF
- [ ] Notifications
- [ ] Mode offline

## Navigation

```
Landing (../index.html)
    ↓
  Login
    ↓
Dashboard (app/index.html)
    ↓
Module X (app/module-X.html)
    ↓
Retour Dashboard
```

## LocalStorage Structure

```javascript
// User session
valeur_current_user: "email@example.com"

// User data
valeur_email@example.com_name: "Prénom"
valeur_email@example.com_progress: {
  completed: [0, 1, 2],  // Modules terminés
  current: 3,            // Module en cours
  lastActivity: "2026-03-08T19:00:00Z"
}
valeur_email@example.com_journal: [
  { date: "2026-03-01", moduleId: 0, entry: "..." },
  ...
]
valeur_email@example.com_quizScores: {
  module3: { rouge: 15, orange: 8, ... }
}
```

## Supabase Tables

### `patients`
- email (PK)
- name
- registered_at
- last_seen

### `user_data`
- email (PK)
- progress (JSONB)
- journal (JSONB)
- quiz_scores (JSONB)
- updated_at

## Prochaines étapes

1. ✅ Dashboard premium créé
2. 🔄 Migration Module 0 (Comprendre)
3. ⏳ Migration Modules 1-6
4. ⏳ Journal interactif
5. ⏳ Système de quiz
6. ⏳ Animations & transitions
7. ⏳ Tests & optimisation

---

**© 2026 Méthode V.A.L.E.U.R© — Céline Bourbon, Psychologue**
