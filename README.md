# Tula's International School (TIS) — Homepage Redesign

A cutting-edge, animated, high-converting homepage redesign for **Tula's International School (TIS)**, Dehradun — [tis.edu.in](https://tis.edu.in/).

This project elevates the digital presence of TIS while strictly retaining its core identity, Modern Gurukul ethos, branding colors, and authentic copy.

---

## 🚀 Live Demo & Repository
* **Live Deployment:** [https://netpuppys.vercel.app](https://netpuppys.vercel.app)
* **Repository:** Public GitHub Repository

---

## 🛠️ Tech Stack & Architecture Justification

| Technology | Purpose & Justification |
| :--- | :--- |
| **React 18 + Vite** | Lightning-fast HMR, lean bundle size, zero hydration mismatch overhead, and modern component tree structure. |
| **Tailwind CSS 3.4** | Utility-first styling with custom design tokens for TIS Crimson (`#B90124`), Teal (`#007A83`), and Gold (`#C09D59`). |
| **Framer Motion** | High-performance 60 FPS physics-based spring animations, staggered scroll-triggered reveals, and gesture feedback. |
| **Lucide React** | Consistent, accessible iconography. |
| **Canvas Confetti** | Delightful micro-interaction feedback upon admission enquiry submission. |

---

## ✨ Standout Features Implemented

This project includes **all 4 standout features** outlined in the technical specification:

1. **Interactive Custom Cursor (`CustomCursor.jsx`)**
   - Dual-layer design (smooth outer spring ring + precise inner indicator).
   - Dynamically expands and shifts color when hovering over interactive elements (`a`, `button`, form inputs).
   - Automatically disabled on touch/coarse devices (`@media (pointer: coarse)`) to ensure native mobile usability.

2. **Scroll-Triggered Reveals (`AnimatedReveal.jsx`)**
   - Staggered entrances (0.3s – 0.6s) as elements cross the viewport threshold.
   - Fluid cubic-bezier transitions `[0.21, 0.47, 0.32, 0.98]` preventing layout jank.

3. **Animated Theme Switcher (`ThemeToggle.jsx` & `useTheme.jsx`)**
   - Full dark and light mode support with smooth SVG icon morphing and spring physics.
   - Persists user preference via `localStorage` and respects OS system preferences (`prefers-color-scheme`).

4. **Scroll Reading Progress Bar (`ScrollProgress.jsx`)**
   - Top-fixed reading indicator featuring the signature TIS brand gradient (Crimson to Gold to Teal).
   - Spring-damped physics for fluid visual tracking across varying scroll velocities.

---

## 🏛️ Project Directory Structure

```text
├── index.html                   # HTML entry point with SEO metadata and Google Fonts
├── tailwind.config.js           # Custom TIS color palette, fonts & animations
├── postcss.config.js            # PostCSS plugin pipeline
├── package.json                 # Dependencies and scripts
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Main layout orchestrator
    ├── index.css                # Global styles, glassmorphism utilities & tokens
    ├── hooks/
    │   ├── useScrollProgress.js # Reading progress percentage hook
    │   ├── useMousePosition.js  # Cursor position and pointer capability detection
    │   └── useTheme.jsx         # Dark/light theme provider & toggle
    ├── data/
    │   └── tisData.js           # Authentic TIS copy, stats, sports, and programs
    ├── components/
    │   ├── animation/
    │   │   ├── ScrollProgress.jsx
    │   │   ├── CustomCursor.jsx
    │   │   ├── AnimatedReveal.jsx
    │   │   └── ThemeToggle.jsx
    │   ├── layout/
    │   │   ├── QuickContactBar.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── ui/
    │   │   ├── Badge.jsx
    │   │   ├── Button.jsx
    │   │   ├── SectionHeading.jsx
    │   │   └── EnquiryModal.jsx
    │   └── sections/
    │       ├── HeroSection.jsx
    │       ├── StatsSection.jsx
    │       ├── AboutSection.jsx
    │       ├── SportsSection.jsx
    │       ├── AcademicsSection.jsx
    │       ├── CampusLifeSection.jsx
    │       ├── VirtualTourSection.jsx
    │       ├── TestimonialsSection.jsx
    │       ├── FAQSection.jsx
    │       └── AdmissionCTASection.jsx
```

---

## 💻 Setup & Running Locally

### Prerequisites
* Node.js (v18.0 or higher)
* npm (v9.0 or higher)

### Installation & Launch

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPO_URL>
   cd <YOUR_REPO_FOLDER>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled bundle will be output to the `dist/` directory.

5. **Preview production bundle:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Push your code to GitHub.
2. In [Netlify](https://www.netlify.com/), click **Add new site** > **Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

---

## 🎨 Design Decisions & Brand Fidelity

* **Color Palette:**
  - **TIS Crimson (`#B90124`):** Primary brand anchor evoking prestige and heritage.
  - **TIS Teal / Mint (`#007A83` / `#60BAB1`):** Represents youth, freshness, and innovation.
  - **TIS Gold (`#C09D59`):** Accent highlights, hand-drawn scribbles, and distinction badges.
* **Typography:**
  - **Headings:** *Outfit* & *Playfair Display* for an editorial, modern institutional aesthetic.
  - **Body Copy:** *Plus Jakarta Sans* for clean legibility across all screen densities.
* **Authentic Copy & Ethos:**
  - Preserved core slogans: *"LET'S DO it with Tulas"*, *"The Modern Gurukul"*, and *"Sports? At Tulas it's the foundation!"*.
  - Accurate admissions contacts: +91-9837983791, `info@tis.edu.in`, and Dhoolkot campus address.
