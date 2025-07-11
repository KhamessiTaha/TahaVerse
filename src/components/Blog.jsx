import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Blog = ({ item, index }) => {
  const [activeSection, setActiveSection] = useState(null);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load MathJax dynamically
  useEffect(() => {
    // Configure MathJax before loading
    window.MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"],
        ],
        processEscapes: true,
        processEnvironments: true,
      },
      options: {
        skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
      },
      startup: {
        ready: () => {
          window.MathJax.startup.defaultReady();
          window.MathJax.startup.promise.then(() => {
            console.log("MathJax is ready");
          });
        },
      },
    };

    // Load MathJax script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    script.id = "MathJax-script";

    document.head.appendChild(script);

    return () => {
      const scriptElement = document.getElementById("MathJax-script");
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
      delete window.MathJax;
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Enhanced markdown processor
  const processMarkdown = (text) => {
    if (!text) return "";

    let processed = text; // ✅ Declare this BEFORE anything else

    const mathPlaceholders = [];
    const codeBlockPlaceholders = [];
    let i = 0;

    // 🔒 Extract multi-line code blocks first (```...```)
    processed = processed.replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      (match, lang, code) => {
        const key = `__CODE_BLOCK_${i}__`;
        codeBlockPlaceholders.push({
          key,
          content: `<pre><code class="language-${
            lang || "text"
          }">${code.trim()}</code></pre>`,
        });
        i++;
        return key;
      }
    );

    // 🔒 Extract display math blocks ($$...$$)
    processed = processed.replace(/\$\$([^$]+)\$\$/g, (match, math) => {
      const key = `__MATH_BLOCK_${i}__`;
      mathPlaceholders.push({
        key,
        content: `<div class="math-block">${match}</div>`,
      });
      i++;
      return key;
    });

    // 🔒 Extract inline math blocks ($...$)
    processed = processed.replace(/\$([^$\n]+?)\$/g, (match, math) => {
      const key = `__MATH_INLINE_${i}__`;
      mathPlaceholders.push({ key, content: match });
      i++;
      return key;
    });

    // ✅ Markdown formatting
    processed = processed.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
    processed = processed.replace(/^### (.+)$/gm, "<h3>$1</h3>");
    processed = processed.replace(/^## (.+)$/gm, "<h2>$1</h2>");
    processed = processed.replace(/^# (.+)$/gm, "<h1>$1</h1>");

    processed = processed.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    processed = processed.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // ✅ Handle inline code blocks (preserving structure)
    processed = processed.replace(/`([^`\n]+)`/g, "<code>$1</code>");

    processed = processed.replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Table handling
    processed = processed.replace(/\|(.+)\|/g, (match, content) => {
      const cells = content.split("|").map((cell) => cell.trim());
      const isHeader = content.includes("---");

      if (isHeader) {
        return ""; // Skip markdown header separators
      }

      const cellTags = cells
        .map((cell) =>
          content.includes("**")
            ? `<th>${cell.replace(/\*\*/g, "")}</th>`
            : `<td>${cell}</td>`
        )
        .join("");

      return `<tr>${cellTags}</tr>`;
    });

    processed = processed.replace(/(<tr>.*<\/tr>)/s, "<table>$1</table>");

    // ✅ Better paragraph handling - preserve code structure
    processed = processed.replace(/\n\n/g, "</p><p>");
    processed = processed.replace(/\n/g, "<br />");

    if (
      !processed.startsWith("<h") &&
      !processed.startsWith("<table") &&
      !processed.startsWith("<pre")
    ) {
      processed = "<p>" + processed + "</p>";
    }

    // 🔁 Restore code blocks first
    codeBlockPlaceholders.forEach(({ key, content }) => {
      processed = processed.replace(key, content);
    });

    // 🔁 Restore math blocks
    mathPlaceholders.forEach(({ key, content }) => {
      processed = processed.replace(key, content);
    });

    return processed;
  };

  // Process content for better rendering
  const processContent = (content) => {
    if (!content) return "";

    // Split content into sections
    const sections = content
      .split(/^### /gm)
      .filter((section) => section.trim());

    return sections.map((section, idx) => {
      if (idx === 0) return processMarkdown(section);
      return processMarkdown(`### ${section}`);
    });
  };

  const contentSections = processContent(item.content);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";
    script.async = true;
    script.id = "MathJax-script";

    // Set up configuration before loading
    window.MathJax = {
      tex: {
        inlineMath: [["$", "$"]],
        displayMath: [["$$", "$$"]],
        processEscapes: true,
        processEnvironments: true,
      },
      options: {
        skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
      },
      startup: {
        typeset: false, // We'll manually typeset later
      },
    };

    script.onload = () => {
      if (window.MathJax && window.MathJax.typeset) {
        window.MathJax.typeset();
      }
    };

    document.head.appendChild(script);

    return () => {
      const scriptElement = document.getElementById("MathJax-script");
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
      delete window.MathJax;
    };
  }, []);

  // Re-render MathJax when content changes
  useEffect(() => {
    if (window.MathJax?.typeset) {
      window.MathJax.typeset();
    }
  }, [contentSections]);

  return (
    <div className="min-h-screen text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl xl:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16">
          {/* Blog Post Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30 shadow-lg shadow-purple-500/10">
              📝 Blog Post
            </span>
            <div className="flex items-center gap-2 text-gray-400 text-sm bg-slate-700/30 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{item.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm bg-slate-700/30 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                />
              </svg>
              <span>{item.date}</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 leading-tight px-2 sm:px-0"
          >
            {item.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
          >
            {item.subtitle}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 px-2 sm:px-0"
          >
            {item.tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-slate-700/60 to-slate-600/60 backdrop-blur-sm text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300"
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Summary */}
          {item.summary && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Executive Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.summary}</p>
            </motion.div>
          )}

          {/* Key Points */}
          {item.keyPoints && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 mb-12"
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                Key Highlights
              </h3>
              <div className="space-y-4">
                {item.keyPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={itemVariants}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Content rendering */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 mx-2 sm:mx-0">
            <div className="blog-content-container">
              {contentSections.map((section, idx) => (
                <motion.div
                  key={idx}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="mb-12"
                >
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: section,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Published on {item.date}</span>
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:border-purple-400 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>Like</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 hover:border-blue-400 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <span>Share</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced styles for blog content */}
      <style jsx>{`
        .blog-content-container {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          line-height: 1.7;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3 {
          color: #c084fc;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .blog-content h1 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #c084fc, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 4rem;
        }

        .blog-content h2 {
          font-size: 2rem;
          color: #a855f7;
          margin-top: 3.5rem;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          color: #c084fc;
          margin-top: 2.5rem;
        }

        .blog-content p {
          color: #d1d5db;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .blog-content strong {
          color: #fbbf24;
          font-weight: 600;
        }

        .blog-content em {
          color: #c084fc;
          font-style: italic;
        }

        .blog-content code {
          background: #374151;
          color: #fbbf24;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-family: "Fira Code", "Monaco", "Cascadia Code", monospace;
          font-size: 0.9em;
          border: 1px solid #4b5563;
        }

        .blog-content pre {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 2rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .blog-content pre code {
          background: transparent;
          border: none;
          padding: 0;
          font-size: 0.95em;
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background: #1f2937;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #374151;
        }

        .blog-content th,
        .blog-content td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #374151;
          font-size: 0.95rem;
        }

        .blog-content th {
          background: #374151;
          color: #c084fc;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .blog-content td {
          color: #d1d5db;
          font-family: "Monaco", "Cascadia Code", monospace;
        }

        .blog-content tr:last-child td {
          border-bottom: none;
        }

        .blog-content tr:hover td {
          background: #2d3748;
        }

        .blog-content blockquote {
          border-left: 4px solid #c084fc;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #9ca3af;
          background: #1f2937;
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
        }

        .blog-content ul,
        .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .blog-content li {
          color: #d1d5db;
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }

        .blog-content a {
          color: #3b82f6;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .blog-content a:hover {
          color: #60a5fa;
          border-bottom-color: #60a5fa;
        }

        /* MathJax styling */
        .blog-content .MathJax {
          font-size: 1.1em !important;
        }

        .blog-content .MathJax_Display {
          margin: 1.5rem 0 !important;
          padding: 1rem;
          background: #1f2937;
          border-radius: 0.5rem;
          border: 1px solid #374151;
        }

        .blog-content mjx-container {
          color: #e5e7eb !important;
        }

        .blog-content mjx-container[display="true"] {
          margin: 1.5rem 0 !important;
          padding: 1rem;
          background: #1f2937;
          border-radius: 0.5rem;
          border: 1px solid #374151;
          text-align: center;
        }

        /* Responsive design */
        @media (max-width: 640px) {
          .blog-content-container {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .blog-content h1 {
            font-size: 1.75rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .blog-content h2 {
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .blog-content h3 {
            font-size: 1.25rem;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .blog-content p {
            font-size: 1rem;
            margin-bottom: 1rem;
            line-height: 1.7;
          }

          .blog-content table {
            font-size: 0.8rem;
            border-radius: 0.5rem;
          }

          .blog-content th,
          .blog-content td {
            padding: 0.5rem;
          }

          .blog-content pre {
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            font-size: 0.85rem;
          }

          .blog-content code {
            font-size: 0.8em;
            padding: 0.2rem 0.4rem;
          }

          .blog-content ul,
          .blog-content ol {
            padding-left: 1.5rem;
          }

          .math-block {
            margin: 1rem auto;
            padding: 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .blog-content table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
          }

          .blog-content pre {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
