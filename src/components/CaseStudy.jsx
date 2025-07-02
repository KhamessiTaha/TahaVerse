import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  Zap,
  Code,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Cpu,
  Rocket
} from "lucide-react";

const CaseStudy = ({ item, index }) => {
  const getStatusColor = (status) => {
    const colors = {
      Completed: "text-green-400 bg-green-400/10 border-green-400/20",
      "Beta Testing": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
      "Alpha Version": "text-orange-400 bg-orange-400/10 border-orange-400/20",
      "Research Phase": "text-purple-400 bg-purple-400/10 border-purple-400/20",
      "Live Production": "text-blue-400 bg-blue-400/10 border-blue-400/20",
      "Educational Tool": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      "Research Complete": "text-green-400 bg-green-400/10 border-green-400/20",
      Deployed: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      "Production Ready": "text-green-400 bg-green-400/10 border-green-400/20",
    };
    return colors[status] || "text-gray-400 bg-gray-400/10 border-gray-400/20";
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0  z-10"></div>
      
      <motion.section
        id={`section-${index}`}
        className="relative z-20 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-lg font-semibold shadow-lg ${getStatusColor(item.status)}`}
            >
              <Rocket className="w-5 h-5" />
              {item.status}
            </motion.span>
            
            {item.featured && (
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-lg font-semibold shadow-lg shadow-yellow-500/10"
              >
                <Award className="w-5 h-5" />
                Featured Project
              </motion.span>
            )}
          </div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight"
          >
            {item.title}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {item.subtitle}
          </motion.p>

          {/* Meta Information */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{item.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{item.readTime}</span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {item.tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {item.projectUrl && (
              <motion.a
                href={item.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            )}
            {item.githubUrl && (
              <motion.a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(71, 85, 105, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                Source Code
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Problem & Solution */}
          <motion.div
            variants={sectionVariants}
            className="space-y-8"
          >
            {/* Problem Section */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl opacity-75 blur"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 uppercase tracking-wider">
                      The Challenge
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-red-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">{item.problem}</p>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl opacity-75 blur"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 uppercase tracking-wider">
                      The Solution
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-green-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">{item.solution}</p>
                </div>
              </div>
            </div>

            {/* Technical Approach */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl opacity-75 blur"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 uppercase tracking-wider">
                      Technical Approach
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-purple-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">{item.approach}</p>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl opacity-75 blur"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400 uppercase tracking-wider">
                      Key Challenges
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-orange-500/20">
                  <div className="space-y-4">
                    {item.challenges.map((challenge, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors group"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <Zap className="w-3 h-3 text-slate-900" />
                        </div>
                        <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                          {challenge}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Results & Metrics */}
          <motion.div
            variants={sectionVariants}
            className="space-y-8"
          >
            {/* Results & Impact */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-75 blur"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 uppercase tracking-wider">
                      Results & Impact
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-blue-500/20 mb-6">
                  <p className="text-gray-300 leading-relaxed text-lg">{item.results}</p>
                </div>

                {/* Metrics Comparison */}
                {item.metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 p-6 rounded-2xl">
                      <div className="flex items-center gap-2 mb-4">
                        <BarChart3 className="w-5 h-5 text-red-400" />
                        <h4 className="text-red-400 font-bold text-lg">Before</h4>
                      </div>
                      <div className="space-y-3">
                        {Object.entries(item.metrics.before).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                            <span className="text-gray-300 font-medium">{key}</span>
                            <span className="text-red-300 font-bold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 p-6 rounded-2xl">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <h4 className="text-green-400 font-bold text-lg">After</h4>
                      </div>
                      <div className="space-y-3">
                        {Object.entries(item.metrics.after).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                            <span className="text-gray-300 font-medium">{key}</span>
                            <span className="text-green-300 font-bold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Key Learnings */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-3xl opacity-75 blur"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400 uppercase tracking-wider">
                      Key Learnings
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-yellow-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">{item.learnings}</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            {item.technologies && (
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl opacity-75 blur"></div>
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 uppercase tracking-wider">
                        Technologies Used
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-1"></div>
                    </div>
                  </div>
                  <div className="bg-slate-900/30 p-6 rounded-2xl border border-cyan-500/20">
                    <div className="flex flex-wrap gap-3">
                      {item.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-300 border border-cyan-500/30 rounded-xl text-sm font-medium shadow-lg"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudy;