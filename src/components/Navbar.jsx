const navItems = [
  { label: "Home", href: "#", emoji: "🌌", desc: "Mission Control" },
  { label: "Projects", href: "#projects", emoji: "🚀", desc: "Launch Portfolio" },
  { label: "Skills", href: "#skills", emoji: "🛰️", desc: "Technical Systems" },
  { label: "About", href: "#about", emoji: "👨‍🚀", desc: "Astronaut Profile" },
  { label: "Resume", href: "#resume", emoji: "📄", desc: "Mission Logs" },
  { label: "Contact", href: "#contact", emoji: "📡", desc: "Transmission Hub" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 bg-gray-900/95 backdrop-blur-lg border border-gray-700 rounded-2xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
      {navItems.map(({ label, href, emoji, desc }) => (
        <a
          key={label}
          href={href}
          className="relative flex items-center justify-center group"
        >
          {/* Ubuntu-style tooltip on right */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 border border-gray-600 text-white text-xs font-medium py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl w-max max-w-xs text-center z-50 whitespace-nowrap">
            <div className="font-bold text-gray-100">{label}</div>
            <div className="text-gray-400 text-[0.7rem] mt-0.5">{desc}</div>
            {/* Tooltip arrow pointing left */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 -translate-x-1 w-3 h-3 bg-gray-800 border-t border-r border-gray-600 rotate-45"></div>
          </div>
          
          {/* Celestial indicator - now on right */}
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_1px_rgba(100,210,255,0.8)]"></div>
          
          {/* Space-themed nav item - Ubuntu-style scaling */}
          <div className="relative flex items-center justify-center">
            {/* Cosmic background glow */}
            <div className="absolute -inset-2 rounded-full bg-blue-900/40 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
            
            {/* Planetary body with Ubuntu bounce effect */}
            <div className="relative w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shadow-inner group-hover:shadow-[inset_0_0_16px_3px_rgba(100,210,255,0.4)] transition-all duration-300 group-hover:border-gray-500 group-hover:scale-125 origin-bottom">
              {/* Crater details */}
              <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-gray-700/70"></div>
              <div className="absolute bottom-3 right-2 w-2 h-2 rounded-full bg-gray-700/50"></div>
              
              <span className="text-2xl transition-transform duration-500 group-hover:scale-110">
                {emoji}
              </span>
            </div>
          </div>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;