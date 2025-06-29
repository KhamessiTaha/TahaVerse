import React, { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="w-full py-6 px-6 sm:px-8 lg:px-12 flex justify-between items-center relative z-50">
      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        TK
      </div>
      
      <div className="hidden md:flex gap-8">
        {['About', 'Projects', 'Skills', 'Research', 'Contact'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="relative text-white/80 hover:text-white transition-all duration-300 group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <button 
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center gap-8 md:hidden">
          {['About', 'Projects', 'Skills', 'Research', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-2xl text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}