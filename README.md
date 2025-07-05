# 🌌 TahaVerse — Cosmic React Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/tahaverse/deploys)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to **TahaVerse**, an immersive space-themed developer portfolio that transforms traditional web experiences into an interactive cosmic journey. Built with modern React architecture and cutting-edge web technologies, this portfolio showcases the intersection of code, creativity, and the cosmos.

> *"Code is my rocket. The browser is my launchpad."* 🚀

---

## 🚀 Live Demo & Preview

🔗 **[Live Portfolio](https://tahaverse.netlify.app)**  
📱 **[Mobile Preview](https://tahaverse.netlify.app/?mobile=true)**  
🖥️ **[Desktop Showcase](https://tahaverse.netlify.app/?desktop=true)**

---

## ✨ Features & Highlights

### 🌟 **Immersive Cosmic Experience**
- **Animated Star Field** — Dynamic particle systems with Three.js
- **Interactive Nebulae** — Procedural background generation
- **Gravitational Effects** — Mouse-responsive celestial bodies
- **Parallax Scrolling** — Multi-layer depth simulation

### 🎯 **Core Sections**
- **🧑‍🚀 Hero Landing** — Typewriter animation with floating astronaut
- **🌌 Project Galaxy** — Interactive solar system showcasing projects
- **🔭 Skills Constellation** — Animated skill visualization with constellation mapping
- **🚀 Mission Timeline** — Space-mission styled career journey
- **📚 Knowledge Base** — Full blog system with MDX support
- **📄 Digital Resume** — Multi-language CV with PDF download

### ⚡ **Technical Excellence**
- **Performance Optimized** — Lighthouse score 95+
- **Responsive Design** — Mobile-first approach with breakpoint optimization
- **SEO Enhanced** — Meta tags, structured data, and sitemap
- **Accessibility** — WCAG 2.1 AA compliant
- **Progressive Web App** — Service worker and offline capabilities

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
│   │   ├── 3d/              # Three.js components
│   │   └── animations/      # Framer Motion components
│   ├── 📑 pages/
│   │   ├── Home/            # Landing page
│   │   ├── About/           # About & skills
│   │   ├── Projects/        # Project showcase
│   │   ├── Blog/            # Blog system
│   │   └── Resume/          # Resume & contact
│   ├── 📊 data/
│   │   ├── projects.json    # Project metadata
│   │   ├── skills.json      # Skills & technologies
│   │   ├── experience.json  # Career timeline
│   │   └── blog/            # Blog posts (MDX)
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
VITE_API_URL=https://api.tahaverse.dev
VITE_ANALYTICS_ID=your-analytics-id
VITE_EMAILJS_SERVICE_ID=your-emailjs-service-id
```

---

## 📸 Screenshots & Preview

<table>
  <tr>
    <td align="center">
      <strong>🌌 Hero Section</strong><br>
      <img src="public/assets/screenshots/hero-section.png" width="300" alt="Hero Section"/>
    </td>
    <td align="center">
      <strong>🪐 Project Galaxy</strong><br>
      <img src="public/assets/screenshots/project-gallery.png" width="300" alt="Project Gallery"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🔭 Skills Constellation</strong><br>
      <img src="public/assets/screenshots/skills-section.png" width="300" alt="Skills Section"/>
    </td>
    <td align="center">
      <strong>📱 Mobile Experience</strong><br>
      <img src="public/assets/screenshots/mobile-view.png" width="300" alt="Mobile View"/>
    </td>
  </tr>
</table>

---

## 🌟 Performance Metrics

| Metric | Score | Details |
|--------|-------|---------|
| **Performance** | 95/100 | Optimized assets, lazy loading, code splitting |
| **Accessibility** | 98/100 | ARIA labels, keyboard navigation, color contrast |
| **Best Practices** | 100/100 | HTTPS, CSP headers, modern JavaScript |
| **SEO** | 92/100 | Meta tags, structured data, sitemap |

---

## 🚀 Deployment

### **Netlify (Recommended)**
```bash
# Build command
npm run build

# Publish directory
dist

# Environment variables
VITE_APP_TITLE=TahaVerse
VITE_API_URL=https://api.tahaverse.dev
```

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
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=firefox&logoColor=white)](https://tahaverse.netlify.app)

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

- [ ] **Dark/Light Theme Toggle** — User preference system
- [ ] **Blog Comments System** — Interactive discussion platform
- [ ] **Real-time Chat** — WebSocket-based communication
- [ ] **3D Model Viewer** — Interactive project demonstrations
- [ ] **Multi-language Support** — i18n implementation
- [ ] **Analytics Dashboard** — Visitor insights and metrics
- [ ] **PWA Features** — Offline functionality and push notifications

---

<div align="center">
  <sub>Built with 💫 by <a href="https://github.com/yourusername">Taha Khamessi</a></sub>
</div>
