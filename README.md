# ✦ Sarah Hakim — Multiverse Portfolio ✦

A personal portfolio website with a bold comic-book / "multiverse" tech-fest aesthetic inspired by *Spider-Verse*, featuring neon accents, comic halftones, Lenis smooth scrolling, and interactive Framer Motion animations.

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lenis**.

---

## ⚡ How to Run the Website Locally

Whenever you want to work on or preview your site, open your terminal (PowerShell or VS Code Terminal) in this folder and run:

### 1. Install dependencies (only needed the first time, or on a new computer):
```bash
npm install
```

### 2. Start the local development server:
```bash
npm run dev
```

Then open your browser at:
```
http://localhost:5173
```
Press `Ctrl + C` in the terminal whenever you want to stop the server.

---

## ✏️ How to Edit Your Text & Content (Zero Code Required!)

All of your portfolio's text, skills, projects, achievements, and social links are kept in **ONE single file**:

👉 **`src/data/content.ts`**

### What you can edit in `src/data/content.ts`:
- **Personal Details**: Your name, tagline, university, location, and status badge.
- **Photo**: Place any image into the `public/` folder (e.g., `public/my-new-photo.jpg`) and update `photo: "/my-new-photo.jpg"` in `content.ts`.
- **About Me**: Your origin story, degree, and theatre & volunteering highlights.
- **Skills ("My Powers")**: Add, edit, or adjust your skills, progress percentages, and categories.
- **Projects ("My Work")**: Add new projects, descriptions, tags, and GitHub or live demo links.
- **Achievements ("Beyond Code")**: Add timeline events, years, and descriptions.
- **Quote**: Customize the Spider-Verse quote or author.
- **Contact & Socials**: Change your email address, LinkedIn, GitHub, or Instagram links.

---

## 📁 Project Folder Structure

```
antigravity/
│
├── public/                       # Static assets (images, documents, favicons)
│   ├── sarah-photo.jpg           # Your featured photo in the About section
│   └── docs/                     # Your PDF resume and certificates
│
├── src/                          # Main source code
│   ├── data/
│   │   └── content.ts            # ⭐ THE ONLY FILE YOU NEED TO EDIT FOR TEXT!
│   │
│   ├── components/               # One clean component per section:
│   │   ├── Loader.tsx            # 01 Intro loader with 0-100% counter
│   │   ├── CustomCursor.tsx      # Dual-ring glowing neon cursor (desktop only)
│   │   ├── Navbar.tsx            # Numbered links + animated mobile menu
│   │   ├── Hero.tsx              # Tilted dual infinite marquee strips + CTAs
│   │   ├── About.tsx             # Comic framed photo + origin story
│   │   ├── Skills.tsx            # Pop-in trading cards with power level meters
│   │   ├── Projects.tsx          # 3D perspective tilt project cards
│   │   ├── Achievements.tsx      # Vertical timeline with scroll-drawing line
│   │   ├── QuoteBreak.tsx        # "It's just a leap of faith" scaled statement
│   │   ├── Contact.tsx           # Interactive contact form + social frequency links
│   │   └── Footer.tsx            # Second marquee strip + copyright
│   │
│   ├── App.tsx                   # Main page layout & Lenis smooth scroll setup
│   ├── index.css                 # Comic halftone dots, glitch text & styles
│   └── main.tsx                  # React entry point
│
├── legacy-html-backup/           # Safe backup of your initial static HTML files
├── package.json                  # Project dependencies & scripts
├── tailwind.config.js            # Neon colors, fonts, and comic shadows
├── tsconfig.json                 # TypeScript settings
└── vite.config.ts                # Vite build settings
```

---

## 🚀 How to Deploy Your Portfolio for Free

You can deploy this website completely for free so anyone in the world can see it!

### Option 1: Deploy on Vercel (Recommended — Easiest & Fastest)

1. Create a free account at [vercel.com](https://vercel.com).
2. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sarah's Multiverse Portfolio"
   # Create a repo on github.com, then connect it:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. Go to your Vercel Dashboard, click **"Add New Project"**, and select your GitHub repository.
4. Vercel automatically detects Vite. Click **"Deploy"**.
5. In under 1 minute, your portfolio will be live at a custom URL (e.g., `https://sarah-hakim.vercel.app`)!

---

### Option 2: Deploy on GitHub Pages

1. In `vite.config.ts`, add the `base` property with your repository name:
   ```ts
   export default defineConfig({
     base: '/YOUR_REPO_NAME/',
     plugins: [react()],
   })
   ```
2. In `package.json`, add a deploy script:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Run `npm run deploy`. Your site will be published at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## 🎨 Theme Colors Cheat-Sheet

- **Universe Dark Background**: `#0a0a0a`
- **Neon Electric Red**: `#ff1f3d`
- **Neon Cyan**: `#00e5ff`
- **Comic Yellow**: `#ffe600`
- **Headings Font**: Bebas Neue / Anton
- **Body Font**: Space Grotesk / Inter
