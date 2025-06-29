import Navbar from "../components/layout/Navbar";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white relative"
    >
      <Navbar />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Floating image or astronaut icon */}
        <div className="w-48 h-48 flex-shrink-0 relative">
          <img
            src="/assets/me.jpeg"
            alt="Taha Avatar"
            className="rounded-full w-full h-full object-cover shadow-lg border-2 border-cyan-500"
          />
          {/* Optionally add animated glow, floating, etc */}
        </div>

        {/* About text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-cyan-300">Astronaut Profile</h2>

          <div className="space-y-8">
            {/* Education & Background */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">🚀 Education & Background</h3>
              <p className="text-gray-300 leading-relaxed">
                As a graduate of The Higher Institute of Information Technologies and Communication (ISTIC) in Tunisia, 
                I hold a Bachelor's degree in Computer Science. My passion lies in software development, with a strong 
                focus on Full-Stack Development and Machine Learning. Through numerous personal projects, I've applied 
                my knowledge in real-world scenarios to build end-to-end solutions.
              </p>
            </div>  

            {/* Skills & Interests */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">🛠️ Professional Skillset</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-cyan-300">Languages</h4>
                  <p className="text-gray-400">JavaScript, Python, Java</p>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-300">Frontend</h4>
                  <p className="text-gray-400">React, Next.js, Tailwind</p>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-300">Backend & DB</h4>
                  <p className="text-gray-400">Node.js, Express, MongoDB</p>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-300">Machine Learning</h4>
                  <p className="text-gray-400">TensorFlow, PyTorch</p>
                </div>
              </div>
            </div>

            {/* Vision & Passion */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">🌌 Vision & Passion</h3>
              <p className="text-gray-300 leading-relaxed">
                My curiosity extends to astronomy and astrophysics, where I aim to apply my skills in Software 
                Development and AI to explore these fields. I'm driven by continuous learning, innovation, and 
                pushing the boundaries of technology.
              </p>
              <div className="mt-4 text-sm text-gray-500 italic">
                "The universe is either perfectly random or randomly perfect, and both possibilities are equally beautiful and fascinating!"
                <br />- Commander Taha
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About