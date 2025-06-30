import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Passionate AI Engineer crafting intelligent solutions that bridge the gap between human imagination and technological possibility.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              My Journey
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              I'm a dedicated AI Engineer with a passion for developing cutting-edge artificial intelligence solutions. 
              My journey in technology spans across machine learning, deep learning, and software development, 
              always with a focus on creating meaningful impact through innovation.
            </p>
            <p className="text-white/80 leading-relaxed">
              Currently exploring the frontiers of AI research, I specialize in transforming complex problems 
              into elegant, intelligent solutions that push the boundaries of what's possible.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              What Drives Me
            </h3>
            <p className="text-white/80 leading-relaxed">
              I believe in the transformative power of AI to solve real-world challenges. 
              Whether it's developing intelligent systems, optimizing complex algorithms, 
              or researching novel approaches to machine learning, I'm committed to 
              pushing the envelope of what artificial intelligence can achieve.
            </p>
          </div>
        </div>

        {/* Right side - Stats and highlights */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
              <div className="text-white/70 text-sm">Research Papers</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white/70 text-sm">Learning Mode</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              Core Values
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-cyan-400 font-medium">Innovation:</span>
                  <span className="text-white/70 ml-2">Constantly pushing technological boundaries</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-blue-400 font-medium">Excellence:</span>
                  <span className="text-white/70 ml-2">Delivering high-quality, impactful solutions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-purple-400 font-medium">Collaboration:</span>
                  <span className="text-white/70 ml-2">Building together for greater impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}