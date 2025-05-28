import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen w-full text-white flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900/30 to-gray-900">
      {/* Animated starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 0.2 + 0.1}rem`,
              height: `${Math.random() * 0.2 + 0.1}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Astronaut with refined animation */}
      <motion.img
        src="/assets/astronaut.png"
        alt="Astronaut"
        className="w-48 md:w-64 opacity-90 absolute bottom-10 right-10"
        initial={{ y: 20, rotate: -5 }}
        animate={{ 
          y: [20, 0, 20],
          rotate: [-5, 0, -5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Nebula overlay */}
      <div className="absolute inset-0 bg-[url('/assets/nebula.png')] bg-cover bg-center mix-blend-soft-light opacity-20 pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 px-4 max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to TahaVerse
        </motion.h1>

        <motion.div 
          className="text-xl md:text-3xl font-mono mb-8 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer', 
                'Cosmic Systems Architect', 
                'Computer Science Specialist',
                'Space-Inspired Technologist'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              cursorClassName: 'text-cyan-400',
              wrapperClassName: 'text-cyan-300 font-medium tracking-wider'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button className="mt-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group">
            <span className="relative z-10">Enter the Void</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-1 bg-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
          </button>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 20]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full mt-1"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <span className="text-xs text-cyan-300 mt-2 tracking-widest">EXPLORE</span>
      </motion.div>
    </section>
  )
}