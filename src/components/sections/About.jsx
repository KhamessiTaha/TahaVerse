import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-white/70 max-w-4xl mx-auto">
          Full Stack Web Developer from Tunisia with a deep passion for modern
          web applications and AI research at the intersection of technology and
          theoretical physics.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              My Journey
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              I'm Taha Khamessi, a Full Stack Web Developer from Tunisia with a
              deep passion for building modern, high-performance web
              applications. My journey combines practical software development
              with cutting-edge research in machine learning and deep learning.
            </p>
            <p className="text-white/80 leading-relaxed">
              What sets me apart is my active independent research at the
              fascinating intersection of AI and theoretical physics, with a
              particular focus on cosmology and the early universe. I'm driven
              by curiosity, precision, and an unwavering desire to push the
              boundaries of both technology and scientific understanding.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              Education & Background
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Graduate of The Higher Institute of Information Technologies and
              Communication (ISTIC) in Tunisia, holding a Bachelor's degree in
              Computer Science. My academic foundation is strengthened by
              substantial hands-on experience through numerous personal
              projects.
            </p>
            <p className="text-white/80 leading-relaxed">
              I've applied my knowledge in real-world scenarios to build
              end-to-end solutions and solve complex problems, bridging the gap
              between theoretical understanding and practical implementation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌌</span>
              Vision & Passion
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              My curiosity extends to astronomy and astrophysics, where I aim to
              apply my skills in Software Development and AI to explore and
              contribute to these fields. I'm committed to continuous learning,
              innovation, and pushing technological boundaries.
            </p>
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-lg p-4 italic">
              <p className="text-cyan-300 text-center">
                "The universe is either perfectly random or randomly perfect,
                and both possibilities are equally beautiful and fascinating!"
              </p>
              <p className="text-white/50 text-right mt-2 text-sm">
                - Taha Khamessi
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Stats and highlights */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">🎓</div>
              <div className="text-white/70 text-sm">CS Graduate</div>
              <div className="text-cyan-300 text-xs mt-1">ISTIC Tunisia</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">🔬</div>
              <div className="text-white/70 text-sm">AI Research</div>
              <div className="text-purple-300 text-xs mt-1">
                Cosmology & Physics
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">🌍</div>
              <div className="text-white/70 text-sm">Based in</div>
              <div className="text-green-300 text-xs mt-1">Tunisia</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">💡</div>
              <div className="text-white/70 text-sm">Innovation</div>
              <div className="text-orange-300 text-xs mt-1">Driven</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              Core Expertise
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-cyan-400 font-medium">
                    Full Stack Development:
                  </span>
                  <span className="text-white/70 ml-2">
                    Modern, high-performance web applications
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-blue-400 font-medium">
                    Machine Learning:
                  </span>
                  <span className="text-white/70 ml-2">
                    Deep learning & AI research applications
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-purple-400 font-medium">
                    Data Science:
                  </span>
                  <span className="text-white/70 ml-2">
                    Advanced analytics & meaningful insights
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-pink-400 font-medium">Research:</span>
                  <span className="text-white/70 ml-2">
                    AI applications in theoretical physics
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              Mission
            </h3>
            <p className="text-white/80 leading-relaxed text-center">
              To become one of the best in the field—both as a developer
              crafting exceptional digital experiences and as a researcher
              pushing the boundaries of AI and theoretical physics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
