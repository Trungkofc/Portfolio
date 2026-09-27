# Personal Portfolio — Nguyen Huu Trung

Welcome to the personal portfolio website of **Nguyen Huu Trung**, a Software Engineering student at **FPT University** specializing as an aspiring **Java Backend Developer**.

This website is a clean, modern, fully responsive personal portfolio designed to showcase academic background, technical skills, practical Java/backend projects, and direct contact information.

---

## 🌟 Overview & Highlights

- **Developer:** Nguyen Huu Trung
- **Role:** Software Engineering Student & Java Backend Developer
- **University:** FPT University, Vietnam
- **Email:** trunglt125@gmail.com
- **GitHub:** [https://github.com/Trungkofc](https://github.com/Trungkofc)
- **Core Focus:** Java Core/EE, Servlet, JSP, JDBC, Spring Boot, Spring Security, Microsoft SQL Server, Database Schema Design, Git Workflows.
- **Design Theme:** Professional clean light theme with electric blue accents, dark mode toggle, rounded glassmorphism cards, micro-animations, and full mobile/tablet responsiveness.
- **Dependencies:** Built with pure vanilla HTML5, CSS3, and JavaScript — no external JS frameworks required!

---

## 🛠️ Tech Stack

- **Markup & Structure:** HTML5 (Semantic elements, accessibility ARIA roles, SEO meta tags)
- **Styling:** CSS3 (Vanilla CSS with CSS Custom Properties/Variables, Flexbox, CSS Grid, keyframes, media queries)
- **Interactivity:** Vanilla JavaScript (ES6+, DOM Manipulation, LocalStorage, IntersectionObserver API, Clipboard API)
- **Fonts:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Fira Code](https://fonts.google.com/specimen/Fira+Code) via Google Fonts
- **Icons:** [Font Awesome 6 (Free)](https://fontawesome.com/) via CDN

---

## ✨ Features

1. **Hero Header & Interactive Bio:**
   - Dynamic typing subtitle animation (`Java Backend Developer`, `Software Engineering Student`, etc.).
   - Call-to-action buttons ("View Projects", "Contact Me").
   - Status badge indicator for internship/job availability.

2. **About Me & Education:**
   - Career objectives and backend engineering philosophy.
   - FPT University degree card detailing Software Engineering major and key course modules (Data Structures & Algorithms, OOP, Database Systems, Java Web Development).

3. **Categorized Skills Matrix:**
   - Icon-based skill cards for **Java**, **SQL**, **JavaScript**, **HTML**, **CSS**, **Servlet**, **JSP**, **JDBC**, **Spring Boot**, **MS SQL Server**, **Git**, **GitHub**, **IntelliJ IDEA**, and **VS Code**.
   - Interactive category filter tabs (All, Languages, Backend & Web, Databases, Developer Tools).
   - *Note: No fabricated proficiency percentages or progress bars—only honest technical tags and descriptions.*

4. **Featured Projects Showcase:**
   - **Cinema Booking System:** Java Servlet/JSP/JDBC/SQL Server application with multi-role authentication, movie/showtime scheduling, seat selection layout, check-in scanner, and POS snack sales.
   - **Online Library Management System:** Java Spring Boot application with Spring Security, role-based access control, book catalog, and borrowing request queue.
   - **Git Assignment & Workflow:** Practical Git repository initialization, feature-branching strategies, atomic commits, and merge conflict resolution.
   - **Interactive Modal Popups:** Deep-dive modal popups detailing system architecture and features.

5. **Contact Section & Real-Time Form Validation:**
   - Quick-copy email button for `trunglt125@gmail.com` with floating toast notification.
   - Direct GitHub (`https://github.com/Trungkofc`) and LinkedIn links.
   - Contact form with client-side inline validation (Name, Email format, Message length check) and fallback `mailto:` action.

6. **UI Polish & Utilities:**
   - **Dark Mode Toggle:** Light mode default with sleek dark mode support saved in `localStorage`.
   - **Reading Progress Bar:** Top edge bar reflecting page scroll percentage.
   - **Back to Top Button:** Smooth auto-hiding floating scroll button.

---

## 📁 File & Directory Structure

```text
Portfolio/
├── index.html          # Main HTML structure, semantic sections, and content
├── styles.css          # CSS design tokens, light/dark themes, responsive layouts
├── app.js              # Interactivity, typing effect, theme toggle, modals, validation
├── README.md           # Documentation, stack overview, running & deployment guide
└── assets/
    └── profile.jpg     # Profile picture (Replace with your actual photo)
```

---

## 🚀 How to Run Locally

Because this project is built using standard web standards without backend node bundlers, you can run it immediately without `npm install` or build steps:

### Option 1: Direct File Access
1. Open the file explorer and navigate to your `Portfolio` folder.
2. Double-click **`index.html`** to open it directly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option 2: Live Server (VS Code Extension / Local Server)
1. Open the `Portfolio` folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The site will be served at `http://127.0.0.1:5500/`.

---

## 📌 Configured Information & Setup Summary

Your profile information has been configured across all files:

| Profile Attribute | Current Configured Value | Location |
| :--- | :--- | :--- |
| **Full Name** | `Nguyen Huu Trung` | Header, Hero, About, Footer, Page Title, Metadata |
| **Email Address** | `trunglt125@gmail.com` | Contact Section, Hero Links, Form Mailto Action |
| **GitHub Profile** | `https://github.com/Trungkofc` | Hero Links, Contact Section, Repository Links |
| **Profile Photo** | `assets/profile.jpg` | Replace the file at `Portfolio/assets/profile.jpg` with your headshot photo. |

---

## 🌐 Deploying to GitHub Pages

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio website for Nguyen Huu Trung"
   ```

2. **Push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/Trungkofc/Portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository on `github.com/Trungkofc/Portfolio`.
   - Click on **Settings** -> **Pages** (under Code and automation).
   - Under **Build and deployment** -> **Branch**, select `main` and root `/`.
   - Click **Save**.
   - Your portfolio will be live at: `https://Trungkofc.github.io/Portfolio/`

---

## 📄 License

Created by **Nguyen Huu Trung** for academic and professional portfolio presentation.
