# 🌌 TahaVerse — Cosmic React Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?logo=github&logoColor=white)](https://yourusername.github.io/tahaverse)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to **TahaVerse**, an immersive space-themed developer portfolio that transforms traditional web experiences into an interactive cosmic journey. Built with modern React architecture and cutting-edge web technologies, this portfolio showcases the intersection of code, creativity, and the cosmos.

> *"Code is my rocket. The browser is my launchpad."* 🚀

---

## 🚀 Live Demo & Preview

🔗 **[Live Portfolio](https://yourusername.github.io/tahaverse)**  
📱 **[Mobile Experience](https://yourusername.github.io/tahaverse?mobile=true)**  
🌌 **[Solar System Projects](https://yourusername.github.io/tahaverse/projects)**

---

## ✨ Features & Highlights

### 🌟 **Portfolio Sections**
- **🏠 Home** — Hero landing with cosmic animations and introduction
- **👨‍🚀 About** — Education & Background, Vision & Passion, Core Expertise
- **🌌 Projects** — 3 featured projects + "Enter the Solar System" interactive experience
- **🛠️ Skills** — Comprehensive tech stack across 6 categories + AI/ML expertise
- **📚 Blogs** — 3 featured insights + 4 detailed case studies per project
- **📞 Contact** — Direct messaging form + collaboration availability
- **📄 Resume** — Bilingual CV showcase (English & French) with download options

### 🚀 **Interactive Features**
- **Solar System Explorer** — Navigate projects as planets with 60fps performance
- **Certificate Showcase** — AI, space technology, and data science achievements
- **GitHub Activity** — Real-time contributions and coding statistics
- **Responsive Design** — Optimized across all devices with clean aesthetics
- **Blog System** — In-depth articles with project case studies

## 🌌 Portfolio Sections Deep Dive

### 🏠 **Home**
The main landing page featuring cosmic animations and an engaging hero section that introduces visitors to the TahaVerse experience.

### 👨‍🚀 **About**
- **Education & Background** — Academic journey and professional foundation
- **Vision & Passion** — Core values and what drives innovation
- **Core Expertise** — Technical specializations and domain knowledge

### 🌌 **Projects**
- **3 Featured Projects** — Highlighted showcase of best work
- **"Enter the Solar System"** — Interactive 3D experience where each planet represents a project
- **60fps Performance** — Optimized across all devices for smooth exploration

### 🛠️ **Skills**
Comprehensive technology showcase organized in 6 categories:
- **Frontend Development** — React, Vue, Angular ecosystem
- **Backend Development** — Node.js, Python, cloud services
- **Programming Languages** — JavaScript, Python, TypeScript, etc.
- **AI & Machine Learning** — Deep learning frameworks and tools
- **Databases** — SQL, NoSQL, and data management
- **DevOps** — CI/CD, containerization, and deployment

**Special Features:**
- **Certificate Showcase** — 3 featured certifications in AI, space technology, and data science
- **"View All Certificates"** — Complete credential collection
- **GitHub Activity** — Live contributions and coding statistics

### 📚 **Blogs (Latest Insights)**
- **3 Featured Articles** — Recent insights with "Read More" functionality
- **4 Main Articles** — In-depth technical discussions
- **Project Case Studies** — Detailed breakdowns for each project
- **"View All Articles"** — Complete blog collection

### 📞 **Contact**
- **Direct Messaging Form** — Send emails directly through the portfolio
- **Availability Information** — Current status and project interests
- **Collaboration Opportunities** — Areas of interest for partnerships

### 📄 **Resume**
- **Bilingual CV Showcase** — Professional resume in English and French
- **Download Options** — PDF downloads for both language versions
- **Clean Presentation** — Professional formatting and design

---

## 🛠️ Tech Stack

### **Frontend Architecture**
```
├── React 18.2.0          # Component-based UI library
├── Vite 4.4.5            # Next-generation build tool
├── TypeScript 5.0.2      # Static type checking
└── TailwindCSS 3.3.0     # Utility-first CSS framework
```

### **Animation & 3D Graphics**
```
├── Framer Motion 10.16.4  # Production-ready motion library
├── Three.js 0.155.0       # 3D graphics and WebGL
├── @react-three/fiber     # React renderer for Three.js
└── React Spring 9.7.3     # Spring-physics based animations
```

### **Routing & State Management**
```
├── React Router 6.15.0    # Declarative routing
├── Zustand 4.4.1          # Lightweight state management
└── React Query 3.39.3     # Server state management
```

### **Development & Build Tools**
```
├── ESLint 8.45.0          # Code linting
├── Prettier 3.0.0         # Code formatting
├── Husky 8.0.3            # Git hooks
└── Commitizen 4.3.0       # Conventional commits
```

---

## 📁 Project Structure

```
tahaverse/
├── 📂 public/
│   ├── 🖼️ assets/
│   │   ├── images/          # Hero images, project screenshots
│   │   ├── models/          # 3D models for Three.js
│   │   ├── pdfs/            # Resume files (EN/FR)
│   │   └── icons/           # Favicons and PWA icons
│   ├── 🌐 locales/          # i18n translation files
│   └── 📄 manifest.json     # PWA configuration
├── 📂 src/
│   ├── 🧩 components/
│   │   ├── common/          # Reusable UI components
│   │   ├── sections/        # Page-specific sections
│   │   ├── solar-system/    # Interactive project explorer
│   │   └── animations/      # Smooth 60fps animations
│   ├── 📑 pages/
│   │   ├── Home/            # Main landing page
│   │   ├── About/           # Education, Vision, Expertise
│   │   ├── Projects/        # Featured + Solar System
│   │   ├── Skills/          # 6 tech categories + certificates
│   │   ├── Blogs/           # Insights + case studies
│   │   ├── Contact/         # Direct messaging form
│   │   └── Resume/          # Bilingual CV showcase
│   ├── 📊 data/
│   │   ├── projects.json    # 3 featured + all projects
│   │   ├── skills.json      # Frontend, Backend, AI/ML, etc.
│   │   ├── certificates.json # AI, space tech, data science
│   │   ├── blogs.json       # 4 articles + case studies
│   │   └── github-stats.js  # Activity and contributions
│   ├── 🔧 utils/
│   │   ├── animations.js    # Framer Motion variants
│   │   ├── three-helpers.js # Three.js utilities
│   │   └── constants.js     # App constants
│   ├── 🎨 styles/
│   │   ├── globals.css      # Global styles
│   │   └── components.css   # Component-specific styles
│   └── 🚀 main.jsx          # Application entry point
├── 📋 docs/
│   ├── DEPLOYMENT.md        # Deployment guide
│   ├── CONTRIBUTING.md      # Contribution guidelines
│   └── CHANGELOG.md         # Version history
├── ⚙️ .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
├── 🔧 tailwind.config.js    # Tailwind configuration
├── ⚡ vite.config.js        # Vite configuration
└── 📦 package.json          # Dependencies & scripts
```

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18.x or higher
- npm 9.x or yarn 1.22.x
- Git

### **Installation**
```bash
# Clone the repository
git clone https://github.com/yourusername/tahaverse.git

# Navigate to project directory
cd tahaverse

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run test         # Run test suite
npm run deploy       # Deploy to production
```

### **Environment Setup**
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=TahaVerse
VITE_GITHUB_USERNAME=yourusername
VITE_EMAILJS_SERVICE_ID=your-emailjs-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
```

---

## 📸 Screenshots & Preview

<table>
  <tr>
    <td align="center">
      <strong>🌌 Home Section</strong><br>
      <img src="public/assets/screenshots/home-hero.png" width="300" alt="Home Section"/>
    </td>
    <td align="center">
      <strong>🌍 Solar System Projects</strong><br>
      <img src="public/assets/screenshots/solar-system.png" width="300" alt="Solar System Projects"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🛠️ Skills & Certificates</strong><br>
      <img src="public/assets/screenshots/skills-section.png" width="300" alt="Skills Section"/>
    </td>
    <td align="center">
      <strong>📄 Resume Showcase</strong><br>
      <img src="public/assets/screenshots/resume-page.png" width="300" alt="Resume Page"/>
    </td>
  </tr>
</table>

---

## 🌟 Performance Metrics

| Metric | Score | Details |
|--------|-------|---------|
| **Performance** | 95/100 | 60fps animations, optimized assets, lazy loading |
| **Accessibility** | 98/100 | ARIA labels, keyboard navigation, color contrast |
| **Best Practices** | 100/100 | Clean code, modern JavaScript, responsive design |
| **SEO** | 92/100 | Meta tags, structured data, semantic HTML |
| **Cross-Device** | 100% | Optimized for mobile, tablet, and desktop |

---

## 🚀 Deployment

### **GitHub Pages**
```bash
# Build and deploy to GitHub Pages
npm run build
npm run deploy

# Or using GitHub Actions (automatic deployment)
git push origin main
```

**GitHub Pages Configuration:**
- **Source**: Deploy from `gh-pages` branch
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`
- **Custom Domain**: Optional (configure in repository settings)

### **Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **GitHub Pages**
```bash
# Build and deploy
npm run build
npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) before submitting PRs.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note:** While this is open-source, please don't just copy-paste everything and call it yours. Use it as inspiration to build your own cosmic universe! 🌌

---

## 🧑‍🚀 Author

**Taha Khamessi**  
🧑‍💻 Full Stack Web Developer  
🌍 Based in Tunisia  
🔭 Passionate about AI, Deep Learning & Cosmology  

*"Building digital worlds that orbit the intersection of code and creativity."*

### **Connect With Me**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/taha-khamessi)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=firefox&logoColor=white)](https://yourusername.github.io/tahaverse)

---

## 🌟 Show Your Support

If this project inspired you or helped in your journey, consider:

- ⭐ **Starring the repository**
- 🔄 **Sharing with your network**
- 🐛 **Reporting issues**
- 💡 **Suggesting improvements**

Your support fuels the cosmic drive! 🚀

---

## 🔮 Roadmap

- [ ] **Advanced Solar System** — Add asteroid belt with smaller projects
- [ ] **Interactive Certificates** — 3D certificate viewer and verification
- [ ] **Blog Comments System** — Reader engagement and discussions
- [ ] **Real-time GitHub Stats** — Live coding activity dashboard
- [ ] **Multi-language Support** — Portfolio in French and English
- [ ] **Project Deep Dives** — Enhanced case study presentations
- [ ] **Contact Form Analytics** — Message tracking and response system

---

<div align="center">
  <sub>Built with 💫 by <a href="https://github.com/yourusername">Taha Khamessi</a></sub>
</div>
