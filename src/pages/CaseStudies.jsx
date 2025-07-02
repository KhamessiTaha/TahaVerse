import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import CaseStudy from "../components/CaseStudy";
import Blog from "../components/Blog";
import metadata from "../metadata/metadata.js";
import StarsCanvas from "../components/StarsBackground";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("case-studies");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items by type
  const caseStudies = metadata.filter((item) => item.type === "case-study");
  const blogs = metadata.filter((item) => item.type === "blog");

  // Handle URL parameters for direct case study access
  useEffect(() => {
  if (id) {
    // Convert id to number if needed
    const itemId = typeof id === 'string' ? parseInt(id, 10) : id;
    const item = metadata.find((item) => item.id === itemId);
    if (item) {
      setSelectedItem(item);
      setActiveTab(item.type === "case-study" ? "case-studies" : "blogs");
    } else {
      // Handle case where item isn't found
      navigate('/case-studies');
    }
  }
}, [id, navigate]);

  // Handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Update URL without page reload
    navigate(`/case-studies/${item.id}`, { replace: true });
    window.scrollTo(0, 0);
  };

  // Handle back to list view
  const handleBackToList = () => {
    setSelectedItem(null);
    navigate('/case-studies', { replace: true });
  };

  // Handle back to home
  const handleBackToHome = () => {
    navigate('/');
  };

  // Enhanced card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -8, 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (selectedItem) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Stars background for individual items */}
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>
        <div className="relative z-10">
          {/* Navigation buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-6 left-6 z-50 flex gap-3"
          >
            <button
              onClick={handleBackToHome}
              className="group flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 hover:text-white hover:border-slate-600 transition-all duration-300"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </button>
            
            <button
              onClick={handleBackToList}
              className="group flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 hover:text-white hover:border-slate-600 transition-all duration-300"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </button>
          </motion.div>
          
          {selectedItem.type === "case-study" ? (
            <CaseStudy item={selectedItem} index={selectedItem.id} />
          ) : (
            <Blog item={selectedItem} index={selectedItem.id} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Stars background */}
      <div className="fixed inset-0 z-0">
        <StarsCanvas />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Back to Home button on main page */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-0 left-0 z-50"
        >
          <button
            onClick={handleBackToHome}
            className="group flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-gray-300 hover:text-white hover:border-slate-600 transition-all duration-300"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </button>
        </motion.div>

        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center pt-16"
        >
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight">
            My Projects & Writings
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Dive into my technical case studies and thought-provoking blog posts about 
            <span className="text-blue-400 font-semibold"> development</span>, 
            <span className="text-purple-400 font-semibold"> research</span>, and 
            <span className="text-pink-400 font-semibold"> innovative solutions</span>.
          </motion.p>
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="relative inline-flex bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
            <motion.div
              className="absolute inset-y-2 bg-gradient-to-r rounded-xl transition-all duration-300"
              animate={{
                left: activeTab === "case-studies" ? "8px" : "50%",
                width: activeTab === "case-studies" ? "calc(50% - 12px)" : "calc(50% - 12px)",
                background: activeTab === "case-studies" 
                  ? "linear-gradient(135deg, #3B82F6, #1E40AF)" 
                  : "linear-gradient(135deg, #A855F7, #7C3AED)"
              }}
            />
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`relative z-10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "case-studies"
                  ? "text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Case Studies
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {caseStudies.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`relative z-10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "blogs"
                  ? "text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Blog Posts
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {blogs.length}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Enhanced Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {activeTab === "case-studies"
            ? caseStudies.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/40 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
                  
                  <div className="relative p-8">
                    <div className="flex justify-between items-start mb-6">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 rounded-full border text-sm font-semibold ${
                          item.featured
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 shadow-lg shadow-yellow-500/10"
                            : "bg-slate-700/50 text-gray-300 border-slate-600/50"
                        }`}
                      >
                        {item.featured ? "✨ Featured" : item.status}
                      </motion.span>
                      <div className="flex items-center gap-2 text-gray-400 text-sm bg-slate-700/30 px-3 py-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                      {item.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-medium hover:bg-slate-600/50 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.date}
                      </span>
                      <motion.div
                        className="flex items-center gap-1 text-blue-400 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <span className="text-xs font-medium">Read more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))
            : blogs.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/40 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
                  
                  <div className="relative p-8">
                    <div className="flex justify-between items-start mb-6">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30 shadow-lg shadow-purple-500/10"
                      >
                        📝 Blog Post
                      </motion.span>
                      <div className="flex items-center gap-2 text-gray-400 text-sm bg-slate-700/30 px-3 py-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                      {item.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs font-medium hover:bg-slate-600/50 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                      {item.tags.length > 4 && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs font-medium">
                          +{item.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.date}
                      </span>
                      <motion.div
                        className="flex items-center gap-1 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <span className="text-xs font-medium">Read more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        {/* Enhanced empty state */}
        {((activeTab === "case-studies" && caseStudies.length === 0) || 
          (activeTab === "blogs" && blogs.length === 0)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">
              Coming Soon
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              {activeTab === "case-studies" 
                ? "New case studies are in development. Check back soon for detailed project breakdowns!"
                : "Fresh blog posts are being written. Stay tuned for insights and tutorials!"
              }
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;