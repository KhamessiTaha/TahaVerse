import React, { useState, useEffect } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-cyan-400 to-blue-500",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Angular",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "Three.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-purple-400 to-pink-500",
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "NestJS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Spring Boot",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "REST APIs",
          logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwN2FjYyI+PHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJ6Ii8+PC9zdmc+",
        },
      ],
    },
    languages: {
      title: "Programming Languages",
      icon: "💻",
      color: "from-green-400 to-emerald-500",
      skills: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Dart",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        },
        {
          name: "SQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
      ],
    },
    ai: {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "from-orange-400 to-red-500",
      skills: [
        {
          name: "TensorFlow",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "PyTorch",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "Keras",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
        },
        {
          name: "Scikit-learn",
          logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmOTUwMCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgMTZDMTAuOSAxNiAxMCAxNS4xIDEwIDE0QzEwIDEyLjkgMTAuOSAxMiAxMiAxMkMxMy4xIDEyIDE0IDEyLjkgMTQgMTRDMTQgMTUuMSAxMy4xIDE2IDEyIDE2WiIvPjwvc3ZnPg==",
        },
        {
          name: "OpenCV",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
        },
        {
          name: "Pandas",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
          name: "NumPy",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
        {
          name: "Matplotlib",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
        },
      ],
    },
    databases: {
      title: "Databases & DevOps",
      icon: "🗄️",
      color: "from-teal-400 to-cyan-500",
      skills: [
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Firestore",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Full-stack developer with expertise in modern web technologies, AI/ML,
          and a passion for space technology.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-cyan-500/25`
                : "bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20"
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>
              <span className="text-base">{category.title}</span>
            </span>

            {/* Active indicator */}
            {activeCategory === key && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {skillCategories[activeCategory].skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300 border border-white/10">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain filter group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg items-center justify-center text-white font-bold text-lg hidden">
                  {skill.name.charAt(0)}
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Highlights - Dark Theme */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105">
          <div className="text-5xl mb-6 filter drop-shadow-lg">🚀</div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
            NASA Space Apps
          </h3>
          <p className="text-white/70 leading-relaxed">
            Global Finalist 2024 - Leading innovative space technology
            solutions.
          </p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105">
          <div className="text-5xl mb-6 filter drop-shadow-lg">🎓</div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
            Academic Achievements
          </h3>
          <p className="text-white/70 leading-relaxed">
            B.Sc Computer Science and ML Specialization Certificate.
          </p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 transform hover:scale-105">
          <div className="text-5xl mb-6 filter drop-shadow-lg">💡</div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3">
            Innovation Focus
          </h3>
          <p className="text-white/70 leading-relaxed">
            Passionate about web development, space tech, AI/ML, and philosophy.
          </p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Featured Certificates Section */}
      <div className="mt-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Featured Certificates
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional certifications that showcase expertise and continuous
            learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Certificate 1 */}
          <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105 hover:border-yellow-400/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🏆
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors">
                Machine Learning Specialization
              </h4>
              <p className="text-white/60 text-sm">
                Stanford University & DeepLearning.AI
              </p>
              <div className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                2024
              </div>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:border-blue-400/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ⚛️
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                React Developer Certification
              </h4>
              <p className="text-white/60 text-sm">Meta & Facebook</p>
              <div className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                2024
              </div>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:border-purple-400/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ☁️
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                AWS Cloud Practitioner
              </h4>
              <p className="text-white/60 text-sm">Amazon Web Services</p>
              <div className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                2024
              </div>
            </div>
          </div>
        </div>

        {/* View All Certificates Button */}
        <div className="text-center">
          <a
            href="/certificates"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Certificates</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* GitHub Contribution Graph - Compact Dark Edition */}
      <div className="my-20 text-center px-4">
        <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          GitHub Activity
        </h3>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Code, commit, repeat. Here's a detailed view of my development
          activity.
        </p>

        <div className="overflow-auto rounded-2xl border border-gray-700/50 bg-gray-900/95 backdrop-blur-sm p-6 md:p-8 inline-block w-full max-w-4xl shadow-lg shadow-gray-800/40 hover:shadow-gray-600/40 transition-all duration-300">
          <img
            src="https://ghchart.rshah.org/333333/KhamessiTaha"
            alt="Taha's GitHub Contribution Graph"
            className="mx-auto w-full max-w-3xl scale-100 hover:scale-[1.03] transition-transform duration-500 rounded-lg"
          />

          <div className="flex justify-center gap-4 mt-5 flex-wrap">
            {[
              { color: "bg-gray-600", label: "Low" },
              { color: "bg-gray-500", label: "Medium" },
              { color: "bg-gray-400", label: "High" },
              { color: "bg-gray-300", label: "Max" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${item.color} mr-2`}
                ></span>
                <span className="text-xs md:text-sm text-gray-300 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base text-gray-400/90 mt-5 font-mono flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-400"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <path d="M13 7h-2v6h6v-2h-4z"></path>
            </svg>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Fun Quote - Dark Theme */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-10 max-w-4xl mx-auto hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
          <div className="text-6xl mb-6 opacity-20">💻</div>
          <p className="text-xl text-white/80 italic mb-6 leading-relaxed font-light">
            "There are two ways to write error-free programs; only the third one
            works"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <p className="text-cyan-400 font-semibold text-lg">
              Taha's Programming Philosophy
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            opacity: 0.4;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
