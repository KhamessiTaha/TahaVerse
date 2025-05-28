const navItems = [
  { label: "Home", id: "home", emoji: "🏠" },
  { label: "Projects", id: "projects", emoji: "🪐" },
  { label: "Skills", id: "skills", emoji: "✨" },
  { label: "About", id: "about", emoji: "👨‍🚀" },
  { label: "Contact", id: "contact", emoji: "📡" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 flex gap-6 z-50">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="relative group text-white text-sm font-bold flex flex-col items-center hover:scale-110 transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-700 to-blue-500 flex items-center justify-center animate-spin-slow shadow-md group-hover:shadow-xl">
            <span className="text-xl">{item.emoji}</span>
          </div>
          <span className="mt-1 text-xs group-hover:opacity-100 opacity-70 transition-opacity">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
