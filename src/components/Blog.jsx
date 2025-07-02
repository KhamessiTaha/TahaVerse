import { motion } from "framer-motion";
import { Calendar, Clock, BookOpen, ArrowRight, Share2, Heart } from "lucide-react";

const Blog = ({ item, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-10"></div>
      
      <motion.section
        id={`section-${index}`}
        className="relative z-20 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-lg font-semibold shadow-lg shadow-purple-500/10"
            >
              <BookOpen className="w-5 h-5" />
              Blog Post
            </motion.span>
          </div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 leading-tight"
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span className="font-medium">Share</span>
            </motion.div>
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {item.tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl opacity-75 blur"></div>
          
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-700/40">
            {/* Reading Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-700/50 rounded-t-3xl overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: "15%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>

            <div className="space-y-10">
              {/* Summary Section */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 uppercase tracking-wider">
                      Summary
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
                  </div>
                </div>
                
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-blue-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.summary}
                  </p>
                </div>
              </motion.div>

              {/* Key Points Section */}
              {item.keyPoints && (
                <motion.div
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-400 uppercase tracking-wider">
                        Key Topics Covered
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1"></div>
                    </div>
                  </div>

                  <div className="bg-slate-900/30 p-6 rounded-2xl border border-green-500/20">
                    <div className="grid gap-4">
                      {item.keyPoints.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                            <span className="text-slate-900 font-bold text-sm">{i + 1}</span>
                          </div>
                          <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Call to Action */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Want to read the full article?
                  </h4>
                  <p className="text-gray-300 mb-6 text-lg">
                    This is a preview of the blog post. Click below to dive deeper into the complete analysis, code examples, and detailed explanations.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5" />
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Engagement Stats (Mock) */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-8 pt-8 border-t border-slate-700/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">2.5k</div>
                  <div className="text-gray-400 text-sm">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">142</div>
                  <div className="text-gray-400 text-sm">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">38</div>
                  <div className="text-gray-400 text-sm">Comments</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Blog;