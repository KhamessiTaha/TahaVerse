import React, { useState } from 'react';

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "AI-Powered Document Analysis",
      description: "Advanced NLP system for extracting insights from unstructured documents using transformer models and custom neural architectures.",
      image: "/api/placeholder/600/400",
      technologies: ["PyTorch", "Transformers", "FastAPI", "Docker"],
      category: "NLP",
      status: "Production",
      metrics: {
        accuracy: "94%",
        speed: "2.3s",
        impact: "40% faster"
      },
      links: {
        github: "#",
        demo: "#",
        paper: "#"
      }
    },
    {
      id: 2,
      title: "Computer Vision Pipeline",
      description: "Real-time object detection and tracking system with custom CNN architecture optimized for edge deployment.",
      image: "/api/placeholder/600/400",
      technologies: ["TensorFlow", "OpenCV", "ONNX", "Kubernetes"],
      category: "Computer Vision",
      status: "Beta",
      metrics: {
        accuracy: "97%",
        fps: "60 FPS",
        latency: "15ms"
      },
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Predictive Analytics Engine",
      description: "Machine learning platform for forecasting business metrics with ensemble methods and automated feature engineering.",
      image: "/api/placeholder/600/400",
      technologies: ["Scikit-learn", "XGBoost", "Apache Spark", "MLflow"],
      category: "Machine Learning",
      status: "Production",
      metrics: {
        accuracy: "91%",
        models: "15+",
        data: "10TB+"
      },
      links: {
        github: "#",
        case_study: "#"
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return 'from-green-400 to-emerald-500';
      case 'Beta': return 'from-orange-400 to-yellow-500';
      case 'Research': return 'from-purple-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Showcasing innovative AI solutions that demonstrate cutting-edge technology and real-world impact.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-1 gap-12">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-[1.02]"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
              {/* Project Image */}
              <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${getStatusColor(project.status)} shadow-lg`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium text-cyan-400 bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-sm text-white/60 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg font-medium text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>💻</span>
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>🚀</span>
                      Demo
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>📄</span>
                      Paper
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
          </div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="text-center mt-16">
        <a
          href="/projects"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
        >
          <span>View All Projects</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}