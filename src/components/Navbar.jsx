const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Resume", href: "resume" },
  { label: "Case Studies", href: "case-studies" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <span className="text-white font-light tracking-wide">TahaVerse</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light tracking-wide relative group"
                >
                  {label}
                  {/* Subtle underline effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Navigation Indicator (Optional - for sections) */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        {navItems.slice(1).map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="group relative"
            title={label}
          >
            <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors duration-300"></div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {label}
            </div>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;