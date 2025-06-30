import React, { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ai');

  const skillCategories = {
    ai: {
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'TensorFlow', level: 90, icon: '🔥' },
        { name: 'PyTorch', level: 85, icon: '⚡' },
        { name: 'Scikit-learn', level: 95, icon: '📊' },
        { name: 'OpenCV', level: 80, icon: '👁️' },
        { name: 'Transformers', level: 88, icon: '🔄' },
        { name: 'LangChain', level: 82, icon: '🔗' }
      ]
    },
    programming: {
      title: 'Programming Languages',
      icon: '💻',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'R', level: 75, icon: '📈' },
        { name: 'SQL', level: 80, icon: '🗃️' },
        { name: 'C++', level: 70, icon: '⚙️' },
        { name: 'Bash', level: 85, icon: '🔧' }
      ]
    },
    tools: {
      title: 'Tools & Frameworks',
      icon: '🛠️',
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'Kubernetes', level: 75, icon: '☸️' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'React', level: 78, icon: '⚛️' },
        { name: 'FastAPI', level: 88, icon: '🚀' }
      ]
    },
    research: {
      title: 'Research & Analytics',
      icon: '🔬',
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Deep Learning', level: 90, icon: '🧠' },
        { name: 'NLP', level: 85, icon: '💬' },
        { name: 'Computer Vision', level: 82, icon: '👀' },
        { name: 'Data Analysis', level: 88, icon: '📊' },
        { name: 'Statistical Modeling', level: 80, icon: '📈' },
        { name: 'Research Methods', level: 85, icon: '🔍' }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          A comprehensive toolkit of technologies and methodologies that power innovative AI solutions.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </span>
            
            {/* Active indicator */}
            {activeCategory === key && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories[activeCategory].skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              <span className="text-cyan-400 font-bold">{skill.level}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              {/* Glow effect */}
              <div
                className={`absolute top-0 h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full opacity-30 blur-sm transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-bold text-cyan-400 mb-2">Continuous Learning</h3>
          <p className="text-white/70">Always exploring new technologies and methodologies to stay at the cutting edge.</p>
        </div>
        
        <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold text-purple-400 mb-2">Best Practices</h3>
          <p className="text-white/70">Committed to writing clean, efficient, and maintainable code following industry standards.</p>
        </div>
        
        <div className="text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6">
          <div className="text-4xl mb-4">🔬</div>
          <h3 className="text-xl font-bold text-green-400 mb-2">Research Focus</h3>
          <p className="text-white/70">Actively contributing to the AI research community through publications and open-source projects.</p>
        </div>
      </div>
    </div>
  );
}