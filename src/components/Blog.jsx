import { motion } from "framer-motion";
import { Calendar, Clock, BookOpen, ArrowRight, Share2, Heart, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Blog = ({ item, index }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [mathLoaded, setMathLoaded] = useState(false);

  // Load KaTeX CSS and JS
  useEffect(() => {
    const loadKaTeX = async () => {
      // Load KaTeX CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.css';
      document.head.appendChild(link);

      // Load KaTeX JS
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.js';
      script.onload = () => {
        // Load auto-render extension
        const autoRenderScript = document.createElement('script');
        autoRenderScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/contrib/auto-render.min.js';
        autoRenderScript.onload = () => {
          setMathLoaded(true);
        };
        document.head.appendChild(autoRenderScript);
      };
      document.head.appendChild(script);
    };

    loadKaTeX();
  }, []);

  // Render math after component updates
  useEffect(() => {
    if (mathLoaded && window.renderMathInElement) {
      setTimeout(() => {
        window.renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
          ],
          throwOnError: false
        });
      }, 100);
    }
  }, [mathLoaded, item]);

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

  // Function to parse markdown-style content with better math handling
  const parseContent = (content) => {
    const lines = content.split('\n');
    const parsed = [];
    let currentSection = null;
    let inMathBlock = false;
    let mathContent = '';

    for (let line of lines) {
      const originalLine = line;
      line = line.trim();
      if (!line && !inMathBlock) continue;

      // Handle math blocks
      if (line.startsWith('$$') || line.includes('$$')) {
        if (inMathBlock) {
          // End of math block
          mathContent += line;
          if (currentSection) {
            currentSection.content.push({
              type: 'math',
              text: mathContent
            });
          }
          mathContent = '';
          inMathBlock = false;
        } else {
          // Start of math block
          inMathBlock = true;
          mathContent = line;
        }
        continue;
      }

      if (inMathBlock) {
        mathContent += '\n' + originalLine;
        continue;
      }

      if (line.startsWith('### ')) {
        if (currentSection) {
          parsed.push(currentSection);
        }
        currentSection = {
          type: 'section',
          title: line.replace('### ', ''),
          content: []
        };
      } else if (line.startsWith('## ')) {
        if (currentSection) {
          parsed.push(currentSection);
        }
        currentSection = {
          type: 'section',
          title: line.replace('## ', ''),
          content: []
        };
      } else if (line.startsWith('# ')) {
        if (currentSection) {
          parsed.push(currentSection);
        }
        currentSection = {
          type: 'section',
          title: line.replace('# ', ''),
          content: []
        };
      } else if (line.startsWith('- ')) {
        if (currentSection) {
          currentSection.content.push({
            type: 'bullet',
            text: line.replace('- ', '')
          });
        }
      } else if (line.startsWith('**') && line.endsWith('**')) {
        if (currentSection) {
          currentSection.content.push({
            type: 'bold',
            text: line.replace(/\*\*/g, '')
          });
        }
      } else if (line.length > 0) {
        if (currentSection) {
          currentSection.content.push({
            type: 'paragraph',
            text: line
          });
        }
      }
    }

    if (currentSection) {
      parsed.push(currentSection);
    }

    return parsed;
  };

  const parsedContent = parseContent(item.content);

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
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeOut" }}
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

              {/* Full Article Content */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400 uppercase tracking-wider">
                      Full Article
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-1"></div>
                  </div>
                </div>

                <div className="bg-slate-900/30 p-8 rounded-2xl border border-orange-500/20">
                  <div className="prose prose-lg max-w-none">
                    {parsedContent.map((section, sectionIndex) => (
                      <motion.div
                        key={sectionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: sectionIndex * 0.1 }}
                        className="mb-8"
                      >
                        {/* Section Title */}
                        <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                          {section.title.includes('🚀') && <span className="text-2xl">🚀</span>}
                          {section.title.includes('💡') && <span className="text-2xl">💡</span>}
                          {section.title.includes('🧰') && <span className="text-2xl">🧰</span>}
                          {section.title.includes('🛠') && <span className="text-2xl">🛠️</span>}
                          {section.title.includes('🤝') && <span className="text-2xl">🤝</span>}
                          {section.title.includes('🏆') && <span className="text-2xl">🏆</span>}
                          {section.title.includes('🧠') && <span className="text-2xl">🧠</span>}
                          {section.title.includes('🔬') && <span className="text-2xl">🔬</span>}
                          {section.title.includes('⚖️') && <span className="text-2xl">⚖️</span>}
                          {section.title.includes('⚗️') && <span className="text-2xl">⚗️</span>}
                          {section.title.includes('🔭') && <span className="text-2xl">🔭</span>}
                          {section.title.includes('📡') && <span className="text-2xl">📡</span>}
                          {section.title.includes('🔄') && <span className="text-2xl">🔄</span>}
                          {section.title.includes('✍️') && <span className="text-2xl">✍️</span>}
                          {section.title.includes('⚙️') && <span className="text-2xl">⚙️</span>}
                          {section.title.includes('🌍') && <span className="text-2xl">🌍</span>}
                          {section.title.replace(/[🚀💡🧰🛠🤝🏆🧠🔬⚖️⚗️🔭📡🔄✍️⚙️🌍]/g, '').trim()}
                        </h4>

                        {/* Section Content */}
                        <div className="space-y-4">
                          {section.content.map((content, contentIndex) => (
                            <div key={contentIndex}>
                              {content.type === 'paragraph' && (
                                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                  {content.text}
                                </p>
                              )}
                              {content.type === 'bullet' && (
                                <div className="flex items-start gap-3 mb-3">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                                  <span className="text-gray-300 leading-relaxed">
                                    {content.text}
                                  </span>
                                </div>
                              )}
                              {content.type === 'bold' && (
                                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600/30 mb-4">
                                  <span className="text-white font-semibold text-lg">
                                    {content.text}
                                  </span>
                                </div>
                              )}
                              {content.type === 'math' && (
                                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600/30 mb-4 overflow-x-auto">
                                  <div 
                                    className="text-white text-center"
                                    dangerouslySetInnerHTML={{ __html: content.text }}
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Article Footer */}
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
                    Thanks for Reading!
                  </h4>
                  <p className="text-gray-300 mb-6 text-lg">
                    I hope you found this article insightful. Feel free to reach out if you have questions or want to discuss any of these topics further.
                  </p>
                  
                  <div className="flex justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-300 rounded-xl font-medium border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300"
                    >
                      <Heart className="w-4 h-4" />
                      Like
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-300 rounded-xl font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Engagement Stats */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-8 pt-8 border-t border-slate-700/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">?</div>
                  <div className="text-gray-400 text-sm">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">?</div>
                  <div className="text-gray-400 text-sm">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">?</div>
                  <div className="text-gray-400 text-sm">Comments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">?</div>
                  <div className="text-gray-400 text-sm">Shares</div>
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