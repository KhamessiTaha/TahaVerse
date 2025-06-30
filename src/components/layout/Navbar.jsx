import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Blogs', href: '#blogs', icon: '🔬' },
    { name: 'Contact', href: '#contact', icon: '📬' }
  ]

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.name.toLowerCase())
      let currentSection = 'home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href, name) => {
    setIsOpen(false)
    setActiveSection(name.toLowerCase())
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-purple/100 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
          {/* Enhanced Logo */}
          <div 
            className="group cursor-pointer"
            onClick={() => handleNavClick('#home', 'Home')}
          >
            <div className="relative">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                TK.
              </div>
              
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              
              {/* Subtitle */}
              <div className="text-xs text-cyan-300/70 font-mono tracking-wider">
                Full-Stack Dev
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2 text-sm font-medium tracking-wide">
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </span>
                
                {/* Active indicator */}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                  activeSection === item.name.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
            
            {/* Download Resume Button */}
            <button className="group relative ml-4 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 text-sm">
                <span>📄</span>
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative z-50 p-2 text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'rotate-45 top-3' : 'top-1'
              }`} />
              <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'top-3'
              }`} />
              <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? '-rotate-45 top-3' : 'top-5'
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-cyan-400/20 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-24 px-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`group flex items-center gap-4 py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xl font-medium">{item.name}</span>
                
                {/* Mobile item glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
            
            {/* Mobile Resume Button */}
            <button className="group relative mt-8 mx-6 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                <span>📄</span>
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>

            {/* Mobile menu footer */}
            <div className="mt-auto pb-8">
              <div className="text-center text-sm text-white/40">
                <p>Taha Khamessi</p>
                <p>AI Engineer & Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}