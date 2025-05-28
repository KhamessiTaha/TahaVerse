import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className="h-screen w-full text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      <img
        src="/assets/astronaut.png"
        alt="Astronaut"
        className="w-48 md:w-64 animate-float absolute bottom-10 right-10 opacity-80"
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TahaVerse</h1>

      <div className="text-xl md:text-2xl text-cyan-300 font-mono">
        <Typewriter
          options={{
            strings: ['Full Stack Developer', 'Cosmic Coder ☄️', 'Computer Science Bachelor'],
            autoStart: true,
            loop: true,
            delay: 60,
          }}
        />
      </div>

      <button className="mt-8 px-6 py-3 bg-cyan-500 text-black rounded-full text-lg font-semibold hover:bg-cyan-400 transition-all duration-300 shadow-lg">
        Enter the Void
      </button>
    </section>
  )
}