import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen w-full text-white flex flex-col items-center justify-center text-center relative">
      {/* Subtle cosmic particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 0.15 + 0.05}rem`,
              height: `${Math.random() * 0.15 + 0.05}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 8 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <span className="text-blue-400 font-mono tracking-widest text-sm">COSMIC DEVELOPER</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Taha Khamessi
          </span>
        </motion.h1>

        <motion.div 
          className="text-xl md:text-2xl font-medium mb-8 h-10 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typewriter
            options={{
              strings: [
                'Full Stack Engineer', 
                'Cosmic Coder', 
                'Systems Architect',
                'Space-Inspired Developer'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              cursorClassName: 'text-blue-400',
              wrapperClassName: 'font-medium'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md text-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 flex items-center gap-2">
            <span>Explore My Work</span>
            <span>→</span>
          </button>
          <button className="px-6 py-3 border border-blue-900/50 text-blue-300 rounded-md text-lg font-medium hover:bg-blue-950/30 hover:text-white transition-all duration-300 flex items-center gap-2">
            <span>Contact</span>
            <span>✉️</span>
          </button>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 8, 16]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 border-2 border-blue-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full mt-1"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <span className="text-xs text-blue-300/70 mt-2 tracking-widest">ORBIT DOWN</span>
      </motion.div>
    </section>
  )
}