const navItems = [
  { label: "Home", href: "#", icon: "🪐", desc: "Home Base" },
  { label: "Projects", href: "#projects", icon: "🚀", desc: "My Launches" },
  { label: "Skills", href: "#skills", icon: "🛰️", desc: "Tech Stack" },
  { label: "About", href: "#about", icon: "👨‍🚀", desc: "My Mission" },
  { label: "Contact", href: "#contact", icon: "📡", desc: "Transmit" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl p-2 shadow-xl">
      {navItems.map(({ label, href, icon, desc }) => (
        <a
          key={label}
          href={href}
          className="relative flex items-center justify-center group"
          aria-label={label}
        >
          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 text-white text-sm font-medium py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg w-max">
            <div className="text-blue-300 font-medium">{label}</div>
            <div className="text-gray-400 text-xs mt-0.5">{desc}</div>
          </div>
          
          {/* Nav item */}
          <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-900/30 group-hover:border-blue-700/50 group-hover:scale-110">
            <span className="text-xl transition-transform group-hover:scale-110">
              {icon}
            </span>
          </div>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;