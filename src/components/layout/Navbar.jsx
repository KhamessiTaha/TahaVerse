import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ['About', 'Projects', 'Skills', 'Research', 'Contact']

  return (
    <nav className="w-full py-6 px-6 sm:px-8 lg:px-12 flex justify-between items-center relative z-50 bg-transparent">
      {/* Logo */}
      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105">
        TK
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-white/70 hover:text-white tracking-wide transition duration-300 group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col justify-center items-center gap-10 md:hidden transition-all duration-500">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-3xl font-semibold text-white/80 hover:text-white tracking-wider transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
