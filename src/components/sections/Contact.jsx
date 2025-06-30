import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'taha.khamessi@example.com',
      link: 'mailto:taha.khamessi@example.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: '/in/taha-khamessi',
      link: 'https://linkedin.com/in/taha-khamessi',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: '@taha-khamessi',
      link: 'https://github.com/taha-khamessi',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@taha_khamessi',
      link: 'https://twitter.com/taha_khamessi',
      color: 'from-sky-400 to-blue-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Ready to collaborate on innovative AI solutions? Let's discuss how we can build something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Send a Message</h3>
            <p className="text-white/70">
              Have a project in mind or want to discuss AI opportunities? I'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/80 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-white/80 font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell me about your project or ideas..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Send Message
                  </>
                )}
              </span>
              {!isSubmitting && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-white/70 mb-8">
              I'm always open to discussing new opportunities, collaborations, and innovative projects in AI and technology.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-xl`}>
                  {method.icon}
                </div>
                <div>
                  <div className="text-white font-medium">{method.title}</div>
                  <div className="text-white/60 text-sm">{method.value}</div>
                </div>
                <div className="ml-auto text-white/40 group-hover:text-cyan-400 transition-colors duration-300">
                  ↗
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
            <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span>⚡</span>
              Quick Response
            </h4>
            <p className="text-white/80 mb-4">
              I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via email or LinkedIn.
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Usually responds within a day
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
            <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <span>📅</span>
              Current Availability
            </h4>
            <p className="text-white/80 mb-4">
              Open to new opportunities and collaborations. Currently accepting projects in:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                AI/ML Consulting
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Research Collaborations
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Speaking Engagements
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}