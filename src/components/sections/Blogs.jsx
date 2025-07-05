import { Link } from "react-router-dom"

export default function Blogs() {
  const featuredBlogs = [
  {
    id: 1,
    title: "Building CosmicVue: From 10,000 to Top 40 at NASA Space Apps Challenge 2024",
    excerpt:
      "The journey of creating CosmicVue, an interactive 3D solar system visualization that earned Global Finalist status (top 40 out of 10,000+ submissions) at NASA's International Space Apps Challenge 2024. Learn how I built an award-winning space application as a solo developer.",
    date: "2024-11-15",
    readTime: "16 min read",
    tags: ["NASA", "Space Apps Challenge", "Three.js", "Vue.js", "3D Visualization", "Global Finalist"],
    image: "/assets/blogs/nasa.png",
    link: "/case-studies/10",
  },
  {
    id: 2,
    title: "Physics-Informed Neural Networks for Primordial Quantum Fluctuation Reconstruction",
    excerpt:
      "Novel application of Physics-Informed Neural Networks to reconstruct primordial quantum fluctuations from CMB data, incorporating the Mukhanov-Sasaki equation as a physics constraint to bridge traditional cosmological simulations with modern deep learning techniques.",
    date: "2025-02-20",
    readTime: "15 min read",
    tags: ["PINNs", "Cosmology", "Quantum Fluctuations", "Deep Learning", "CMB", "Mukhanov-Sasaki"],
    image: "/assets/blogs/pinn.png",
    link: "/case-studies/11",
  },
  {
    id: 3,
    title: "CarVision: AI-Powered Car Recognition System",
    excerpt:
      "A comprehensive deep dive into building CarVision, a graduation project that achieves 70% accuracy across 899 car models using ResNet50 transfer learning, complete dataset preprocessing pipeline, and mobile deployment strategies. From 1.45M images to real-time mobile intelligence.",
    date: "2024-08-10",
    readTime: "12 min read",
    tags: ["Computer Vision", "Transfer Learning", "Mobile AI", "Deep Learning", "TensorFlow"],
    image: "/assets/blogs/carvision.png",
    link: "/case-studies/12",
  },
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
              <div className="aspect-video bg-black/30">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-sm font-medium text-white bg-black/60 backdrop-blur-md rounded-full">
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
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
              <p className="text-white/70 mb-4 line-clamp-3">{blog.excerpt}</p>
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
              <Link
                to={blog.link}
                className="group/btn flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
              >
                <span>Read More</span>
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </article>
        ))}
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
  )
}