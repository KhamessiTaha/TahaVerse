import React from 'react';

export default function Blogs() {
  const featuredBlogs = [
    {
      id: 1,
      title: "The Future of Large Language Models",
      excerpt: "Exploring the latest advancements in LLMs and their potential impact on various industries.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["AI", "LLM", "Research"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Computer Vision in Edge Computing",
      excerpt: "How to optimize deep learning models for real-time inference on edge devices.",
      date: "2024-02-28",
      readTime: "12 min read",
      tags: ["Computer Vision", "Edge AI", "Optimization"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Building Robust ML Pipelines",
      excerpt: "Best practices for creating scalable and maintainable machine learning workflows.",
      date: "2024-02-10",
      readTime: "10 min read",
      tags: ["MLOps", "Pipeline", "Best Practices"],
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Latest Insights
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Sharing knowledge, research findings, and thoughts on the latest developments in AI and technology.
        </p>
      </div>

      {/* Featured Blogs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredBlogs.map((blog, index) => (
          <article
            key={blog.id}
            className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-4xl opacity-50">📝</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Date Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-sm font-medium text-white bg-black/50 backdrop-blur-sm rounded-full">
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-cyan-400 mb-3">
                <span>🔬</span>
                <span>{blog.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                {blog.title}
              </h3>
              
              <p className="text-white/70 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Read More Button */}
              <button className="group/btn flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                <span>Read More</span>
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Blog Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
          <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
          <div className="text-white/70">Articles Published</div>
        </div>
        <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
          <div className="text-3xl font-bold text-purple-400 mb-2">10k+</div>
          <div className="text-white/70">Readers Reached</div>
        </div>
        <div className="text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6">
          <div className="text-3xl font-bold text-green-400 mb-2">5</div>
          <div className="text-white/70">Research Papers</div>
        </div>
        <div className="text-center bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6">
          <div className="text-3xl font-bold text-orange-400 mb-2">15</div>
          <div className="text-white/70">Tech Talks</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/case-studies"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
        >
          <span>View All Articles</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}