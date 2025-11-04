import { useState, useRef } from "react";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form and show success message
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      setSubmitStatus("success");

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");

      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      title: "Email",
      value: "taha.khamessi@gmail.com",
      link: "mailto:taha.khamessi@gmail.com",
      color: "from-red-300 to-red-400",
      description: "Best for detailed discussions",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: "LinkedIn",
      value: "/in/taha-khamessi-396aba1a3",
      link: "https://www.linkedin.com/in/taha-khamessi-396aba1a3/",
      color: "from-blue-300 to-blue-400",
      description: "Professional networking",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      value: "@KhamessiTaha",
      link: "https://github.com/KhamessiTaha/",
      color: "from-gray-400 to-gray-500",
      description: "Code repositories & projects",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on innovative AI solutions? Let's discuss how we
            can build something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="flex flex-col justify-start">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-500 rounded-2xl blur opacity-10"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-slate-500 to-slate-600 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  Send a Message
                </h3>
                <p className="text-gray-300 mb-6">
                  Have a project in mind or want to discuss AI opportunities? I'd
                  love to hear from you.
                </p>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl">
                    <div className="flex items-center gap-2 text-green-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">
                        Message sent successfully!
                      </span>
                    </div>
                    <p className="text-green-300 text-sm mt-1 ml-7">
                      Thank you for reaching out. I'll get back to you within 24
                      hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-xl">
                    <div className="flex items-center gap-2 text-red-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">Failed to send message</span>
                    </div>
                    <p className="text-red-300 text-sm mt-1 ml-7">
                      Something went wrong. Please try again or email me directly
                      at taha.khamessi@gmail.com
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="user_name"
                        className="block text-gray-300 font-medium mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-slate-400 focus:bg-gray-800/60 focus:outline-none transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="user_email"
                        className="block text-gray-300 font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-slate-400 focus:bg-gray-800/60 focus:outline-none transition-all duration-300 group-hover:border-gray-500"
                        placeholder="your.email@example.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-slate-400 focus:bg-gray-800/60 focus:outline-none transition-all duration-300 group-hover:border-gray-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-slate-400 focus:bg-gray-800/60 focus:outline-none transition-all duration-300 resize-none group-hover:border-gray-500"
                      placeholder="Tell me about your project or ideas..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl font-semibold text-white hover:from-slate-500 hover:to-slate-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-slate-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          Send Message
                        </>
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-slate-500 to-slate-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-1-4a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                </div>
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations,
                and innovative projects in AI and technology.
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
                  className="group relative flex items-center gap-4 p-5 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:border-slate-500/60 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div
                    className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className="text-white font-semibold text-lg">
                      {method.title}
                    </div>
                    <div className="text-gray-400 text-sm mb-1">
                      {method.value}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {method.description}
                    </div>
                  </div>
                  <div className="relative z-10 text-gray-500 group-hover:text-slate-400 transition-all duration-300 transform group-hover:translate-x-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Response Time */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-500 rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-600/40 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-700/40 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  Quick Response
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent
                  matters, feel free to reach out via email or LinkedIn.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500/80 rounded-full animate-pulse"></div>
                    <span className="text-green-400/80 font-medium">
                      Usually responds within a day
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus - With Teamwill Logo */}
<div className="relative group">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
  <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-600/40 rounded-2xl p-8">
    <div className="text-center mb-8">
      <h4 className="text-3xl font-bold text-slate-300 mb-4 flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-700/40 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        Current Focus
      </h4>

      {/* --- TEAMWILL LOGO --- */}
      <div className="flex justify-center mb-4">
        <div className="p-2 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-xl inline-flex">
          <img
            src="/logos/teamwill-logo1.png"
            alt="Teamwill Group Logo"
  className="h-19 md:h-16 object-contain opacity-90 hover:opacity-100 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.4)] transition-all duration-300"
          />
        </div>
      </div>

      <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
        Currently working as a{" "}
        <span className="font-semibold text-slate-100">
          Consultant Technico-Fonctionnel at Teamwill Group
        </span>
        , focusing on digital transformation, system integration, and innovative business solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          icon: "⚙️",
          title: "Consulting & Implementation",
          description:
            "Designing and delivering end-to-end functional and technical solutions for enterprise systems.",
          color: "from-slate-600/30 to-slate-700/30",
        },
        {
          icon: "💡",
          title: "Digital Transformation",
          description:
            "Supporting business innovation through technology-driven process optimization and automation.",
          color: "from-gray-600/30 to-gray-700/30",
        },
        {
          icon: "🤝",
          title: "Collaborations & Knowledge Sharing",
          description:
            "Open to research partnerships, mentoring, and speaking engagements on tech-business alignment.",
          color: "from-stone-600/30 to-stone-700/30",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="group/item relative p-6 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:border-slate-500/60 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="relative z-10">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl mb-4 group-hover/item:scale-110 transition-transform duration-300 mx-auto`}
            >
              {item.icon}
            </div>
            <h5 className="text-xl font-bold text-white mb-3 text-center">
              {item.title}
            </h5>
            <p className="text-gray-300 text-center leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/40 rounded-full border border-slate-600/50">
        <div className="w-3 h-3 bg-blue-500/80 rounded-full animate-pulse"></div>
        <span className="text-blue-400/80 font-medium">
          Fully engaged at Teamwill Group | Open for collaborations & knowledge exchange
        </span>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}