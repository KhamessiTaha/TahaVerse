import React, { useState, useMemo } from 'react';

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = useMemo(() => [
    {
      id: 1,
      title: "CosmicVue",
      description: "An award-winning immersive web application that transforms astronomical data into stunning 3D visualizations. CosmicVue provides real-time tracking of Near-Earth Objects using NASA APIs, featuring scientifically accurate orbital mechanics and breathtaking celestial renders. Recognized as a Global Finalist in the 2024 NASA International Space Apps Challenge.",
      image: "/assets/projects/cosmicvue.jpg",
      technologies: ["React", "Three.js", "NASA APIs", "JavaScript", "CSS3", "Responsive Design"],
      category: "Space Technology",
      status: "Live",
      metrics: {
        award: "NASA Finalist",
        recognition: "Global Recognition",
        impact: "Award Winner"
      },
      links: {
        github: "https://github.com/KhamessiTaha/CosmoArchitects",
        demo: "https://cosmicvue.netlify.app/"
      },
      highlight: "🏆 NASA Space Apps Challenge Global Finalist",
      gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
      accentColor: "from-indigo-400 to-purple-500"
    },
    {
      id: 2,
      title: "CCEditor",
      description: "A sophisticated real-time collaborative coding platform designed for seamless team development and educational purposes. Features multi-language syntax highlighting, intelligent code completion, instant synchronization across multiple users, version control integration, and comprehensive chat functionality. Built on Firebase with WebSocket optimization for minimal latency.",
      image: "/assets/projects/cceditor.png",
      technologies: ["React", "Firebase", "WebSocket", "CodeMirror", "Real-time Sync", "PWA"],
      category: "Web Development",
      status: "Live",
      metrics: {
        sync: "Real-time",
        users: "Multi-user",
        latency: "Minimal"
      },
      links: {
        github: "https://github.com/KhamessiTaha/CCE",
        demo: "https://cceditor-e1b05.web.app/"
      },
      highlight: "⚡ Real-time Collaborative Environment",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      accentColor: "from-emerald-400 to-cyan-500"
    },
    {
      id: 3,
      title: "HTRU2 Pulsar Detection",
      description: "A comprehensive end-to-end machine learning pipeline for classifying pulsar candidates in radio astronomy data. Benchmarks 10 ML algorithms with advanced class imbalance handling and SHAP for explainable AI interpretability. Achieved state-of-the-art performance with optimized SVM model and identified key astrophysical features. Complete with scientific documentation prepared for arXiv submission.",
      image: "/assets/projects/pulsar.jpg",
      technologies: ["Python", "Scikit-learn", "SHAP", "SVM Optimization", "Explainable AI", "Statistical Analysis"],
      category: "ML Research",
      status: "Research",
      metrics: {
        accuracy: "ROC 0.97",
        reduction: "90% Review",
        status: "arXiv Ready"
      },
      links: {
        github: "https://github.com/KhamessiTaha/HRTU2-Pulsar-Detection"
      },
      highlight: "🔬 State-of-the-art ML Performance",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      accentColor: "from-orange-400 to-pink-500"
    }
  ], []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'from-green-400 to-emerald-500';
      case 'Research': return 'from-purple-400 to-pink-500';
      case 'Beta': return 'from-orange-400 to-yellow-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getProjectIcon = (category) => {
    switch (category) {
      case 'Space Technology': return '🚀';
      case 'Web Development': return '💻';
      case 'ML Research': return '🔬';
      default: return '⚡';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Featured Projects
        </h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
        <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
          Showcasing innovative solutions that blend cutting-edge technology with real-world impact.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-24 mb-40">
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-2 rounded-full border border-dashed border-purple-400/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          
          <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg animate-pulse">
            <a
              href="/projects"
              className="group flex items-center gap-4 px-12 py-6 bg-gray-900/90 backdrop-blur-sm rounded-full font-bold text-white hover:bg-transparent transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl group-hover:animate-spin transition-transform duration-1000">🌌</span>
                <div className="text-center">
                  <div className="text-xl font-bold">Enter the Solar System</div>
                  <div className="text-sm text-white/70 group-hover:text-cyan-300 transition-colors duration-300">
                    Explore Projects as Planets
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl group-hover:translate-x-2 transition-transform duration-500">🚀</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300 delay-100 ml-1">→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        <p className="text-white/60 mt-8 text-lg">
          🪐 Journey through a 3D universe where each project orbits as a unique planet
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
            getStatusColor={getStatusColor}
            getProjectIcon={getProjectIcon}
          />
        ))}
      </div>

      
    </div>
  );
}

const ProjectCard = React.memo(({ project, index, getStatusColor, getProjectIcon }) => {
  return (
    <div className="relative">
      {/* Card Container - Removed all hover effects */}
      <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
        <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-5' : ''}`}>
          
          {/* Project Image Section */}
          <div className={`lg:col-span-2 relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
            <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                <div className="text-center">
                  <div className="text-6xl mb-3 opacity-30">{getProjectIcon(project.category)}</div>
                  <div className="text-white/60 text-sm font-medium">
                    Image: {project.image}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r ${getStatusColor(project.status)} shadow-lg backdrop-blur-sm border border-white/30`}>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 text-sm font-bold text-white bg-gradient-to-r ${project.accentColor} rounded-full shadow-lg backdrop-blur-sm border border-white/30`}>
                  {project.category}
                </span>
              </div>

              {/* Highlight Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-lg">
                  <p className="text-white font-semibold text-sm">{project.highlight}</p>
                </div>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="p-6 bg-gradient-to-r from-white/5 to-white/8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="text-center p-4 rounded-xl bg-white/10 border border-white/20"
                  >
                    <div className={`text-lg font-bold bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-xs text-white/70 capitalize mt-1 font-medium">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className={`lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-white/85 leading-relaxed text-base lg:text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 text-sm font-medium bg-white/10 text-white/90 rounded-lg border border-white/20`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons - Kept all hover effects */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg text-sm font-bold text-white transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 shadow-md"
                >
                  <span className="text-lg group-hover/btn:rotate-6 transition-transform duration-200">💻</span>
                  <span>View Code</span>
                  <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.accentColor} rounded-lg text-sm font-bold text-white transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 shadow-md`}
                >
                  <span className="text-lg group-hover/btn:rotate-6 transition-transform duration-200">🚀</span>
                  <span>Live Demo</span>
                  <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});