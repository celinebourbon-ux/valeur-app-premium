# V.A.L.E.U.R© App Premium

## 🎯 Vue d'ensemble

Application web thérapeutique premium pour la méthode V.A.L.E.U.R© de Céline Bourbon, psychologue.

### Objectif
Aider les personnes souffrant d'anxiété à identifier leurs masques protecteurs et à se libérer durablement.

---

## 📚 Structure

```
app/
├── login.html          # Auth (login/signup)
├── index.html          # Dashboard principal
├── module-0.html       # Module 0 : Comprendre
├── module-1.html       # Module 1 : Anxiété (à créer)
├── module-2.html       # Module 2 : Masques (à créer)
├── module-3.html       # Module 3 : Test (à créer)
├── module-4.html       # Module 4 : Observer (à créer)
├── module-5.html       # Module 5 : Réconcilier (à créer)
├── module-6.html       # Module 6 : Ancrer (à créer)
├── journal.html        # Journal de bord (à créer)
└── README.md           # Documentation
```

---

## 🎨 Design System

### Palette de couleurs

#### Base
```css
--navy: #0a0f1a          /* Background principal */
--navy-mid: #111827       /* Background secondaire */
--navy-card: #1a2235      /* Cartes */
--navy-border: #2a3650    /* Bordures */

--gold: #c9a84c           /* Accent principal */
--gold-dark: #a07830      /* Accent foncé */
--gold-light: #e8d08c     /* Accent clair */

--cream: #f7f3ee          /* Titres */
--text-light: #e2e8f0     /* Texte principal */
--text-muted: #94a3b8     /* Texte secondaire */
```

#### 7 Couleurs des masques
```css
--rouge: #E74C3C    /* Masque 1 : Peur de la mort */
--orange: #E67E22   /* Masque 2 : Peur du conflit */
--jaune: #F1C40F    /* Masque 3 : Peur de l'abandon */
--vert: #2ECC71     /* Masque 4 : Peur de la transgression */
--bleu: #3498DB     /* Masque 5 : Peur de l'impuissance */
--indigo: #8E44AD   /* Masque 6 : Peur de l'imperfection */
--violet: #9B59B6   /* Masque 7 : Peur de l'existence */
```

### Typographie

- **Titres** : Cormorant Garamond (serif, 700)
- **Corps** : Inter (sans-serif, 300-900)
- **Tailles** :
  - H1 : 48-56px (clamp)
  - H2 : 32-36px
  - H3 : 24-28px
  - Body : 16-17px
  - Small : 13-14px

---

## ⚡ Stack Technique

### Frontend
- **React 18** (UMD standalone, pas de build)
- **Babel Standalone** (transformation JSX)
- **CSS natif** (variables + animations)

### Backend
- **Supabase** (auth + database)
- **LocalStorage** (cache local)

### Hosting
- **GitHub Pages**

---

## 📋 Stockage des données

### LocalStorage

#### Clés utilisateur
```javascript
// Session courante
valeur_current_user: "email@exemple.com"

// Profil utilisateur
valeur_{email}_name: "Prénom"
valeur_{email}_progress: {
  completed: [0, 1, 2],      // Modules terminés
  current: 3,                 // Module actuel
  lastActivity: "2026-03-08T19:00:00Z"
}

// Journal
valeur_{email}_journal: [
  {
    date: "2026-03-08",
    masque: "rouge",
    emotion: "Peur",
    situation: "...",
    reflexion: "..."
  }
]
```

### Supabase (optionnel, sync)

#### Table `patients`
```sql
CREATE TABLE patients (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  name TEXT,
  registered_at TIMESTAMP,
  last_seen TIMESTAMP
);
```

#### Table `progress`
```sql
CREATE TABLE progress (
  id UUID PRIMARY KEY,
  patient_id UUID REFERENCES patients(id),
  module_id INT,
  completed_at TIMESTAMP
);
```

---

## 🛣️ Roadmap

### ✅ Phase 1 : MVP (Fait)
- [x] Login/Signup
- [x] Dashboard
- [x] Module 0
- [x] Système de progression
- [x] Design premium

### 🚧 Phase 2 : Contenu (En cours)
- [ ] Module 1 : Anxiété
- [ ] Module 2 : Masques
- [ ] Module 3 : Test des 7 masques
- [ ] Module 4 : Observer
- [ ] Module 5 : Réconcilier
- [ ] Module 6 : Ancrer

### ⏳ Phase 3 : Features avancées
- [ ] Journal interactif complet
- [ ] Quiz intégrés
- [ ] Exercices audio
- [ ] Export PDF
- [ ] Mode offline (PWA)
- [ ] Rappels notifications

### ⏳ Phase 4 : Paiement
- [ ] Intégration Stripe
- [ ] Landing page marketing
- [ ] Gestion abonnements

---

## 🚀 Déploiement

### GitHub Pages

1. **Settings** → **Pages**
2. **Branch** : `main`
3. **Folder** : `/(root)`
4. **Save**

URL live : `https://celinebourbon-ux.github.io/valeur-app-premium/app/`

---

## 📝 Licence

© 2026 Méthode V.A.L.E.U.R© — Céline Bourbon, Psychologue  
Tous droits réservés.
