import { useState } from "react";
import { Link } from "react-router-dom";
import StarsCanvas from "../components/StarsBackground";

// Icon components to replace react-icons
const DownloadIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Career Essentials in Software Development by Microsoft",
      issuer: "Microsoft",
      date: "Oct 2024",
      category: "software-dev",
      description:
        "Comprehensive career development in software engineering principles and programming fundamentals",
      pdfSrc:
        "/assets/certificates/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf",
      downloadUrl:
        "/assets/certificates/CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf",
      credentialId:
        "5df1fcb4a73d2d8915f4460526a8dcb0c5d9d01f88d27325aa95e70f633ac293",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/5df1fcb4a73d2d8915f4460526a8dcb0c5d9d01f88d27325aa95e70f633ac293",
      previewImage: "/assets/certificates/previews/careeressentials.png",
      icon: "🏢",
      color: "from-blue-500 to-indigo-600",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
      id: 2,
      title: "Galactic Problem Solver: NASA Space Apps Challenge",
      issuer: "NASA International Space Apps Challenge",
      date: "Oct 2024",
      category: "competition",
      description:
        "Global hackathon focused on space and earth science challenges using React.js, Three.js, and data analysis",
      pdfSrc: "/assets/certificates/NASA Space Apps Challenge.pdf",
      downloadUrl: "/assets/certificates/NASA Space Apps Challenge.pdf",
      credentialId: null,
      credentialUrl:
        "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/cosmoarchitects/",
      previewImage: "/assets/certificates/previews/galacticproblemsolver.png",
      icon: "🚀",
      color: "from-red-500 to-orange-600",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    },
    {
      id: 3,
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "Jun 2024",
      category: "ai",
      description:
        "Complete specialization covering machine learning fundamentals, optimization, and practical applications",
      pdfSrc: "/assets/certificates/ml-specialization.pdf",
      downloadUrl: "/assets/certificates/ml-specialization.pdf",
      credentialId: "W2C26DYFWZKV",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/specialization/W2C26DYFWZKV",
      previewImage:
        "/assets/certificates/previews/machinelearningspecialization.png",
      icon: "🤖",
      color: "from-purple-500 to-pink-600",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      id: 4,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "Jun 2024",
      category: "ai",
      description:
        "Advanced supervised learning techniques including regression and classification algorithms",
      pdfSrc:
        "/assets/certificates/Supervised Machine Learning Regression and Classification.pdf",
      downloadUrl:
        "/assets/certificates/Supervised Machine Learning Regression and Classification.pdf",
      credentialId: "JPR9GVUYB4VM",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/JPR9GVUYB4VM",
      previewImage: "/assets/certificates/previews/supervisedlearning.png",
      icon: "📊",
      color: "from-green-500 to-teal-600",
      badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    },
    {
      id: 5,
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI",
      date: "Jun 2024",
      category: "ai",
      description:
        "Advanced ML techniques including clustering, recommendation systems, and reinforcement learning",
      pdfSrc: "/assets/certificates/Reinforcement Learning.pdf",
      downloadUrl: "/assets/certificates/Reinforcement Learning.pdf",
      credentialId: "2PH4R7C9Q2QN",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/2PH4R7C9Q2QN",
      previewImage: "/assets/certificates/previews/unsupervisedlearning.png",
      icon: "🔮",
      color: "from-cyan-500 to-blue-600",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    },
    {
      id: 6,
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI",
      date: "May 2024",
      category: "ai",
      description:
        "Deep dive into advanced machine learning algorithms and problem-solving methodologies",
      pdfSrc: "/assets/certificates/Advanced Learning Algorithms.pdf",
      downloadUrl: "/assets/certificates/Advanced Learning Algorithms.pdf",
      credentialId: "73AZR3QYY432",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/73AZR3QYY432",
      previewImage:
        "/assets/certificates/previews/advancedlearningalgorithms.png",
      icon: "⚡",
      color: "from-yellow-500 to-orange-600",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
    {
      id: 7,
      title: "Python Project for Data Science",
      issuer: "IBM",
      date: "Aug 2022",
      category: "data-science",
      description:
        "Hands-on Python project work covering SQL, deep learning, and data science applications",
      pdfSrc: "/assets/certificates/pythonprojects.pdf",
      downloadUrl: "/assets/certificates/pythonprojects.pdf",
      credentialId: "4b320f86-f917-4bb0-9de5-929c145901d1",
      credentialUrl:
        "https://www.credly.com/badges/4b320f86-f917-4bb0-9de5-929c145901d1/linked_in_profile",
      previewImage:
        "/assets/certificates/previews/python-project-for-data-science.png",
      icon: "🐍",
      color: "from-indigo-500 to-purple-600",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    },
    {
      id: 8,
      title: "Python for Data Science and AI",
      issuer: "IBM",
      date: "Apr 2020",
      category: "data-science",
      description:
        "This badge earner has the core skills in Python such as critical data structures, programming fundamentals and experience with core libraries for data science.",
      pdfSrc: "/assets/certificates/pythonfordatascienceandai.pdf",
      downloadUrl: "/assets/certificates/pythonfordatascienceandai.pdf",
      credentialId: "7517e8e3-7a1f-48aa-8858-956fad1bc302",
      credentialUrl:
        "https://www.credly.com/badges/7517e8e3-7a1f-48aa-8858-956fad1bc302/public_url",
      previewImage:
        "/assets/certificates/previews/python-for-data-science-and-ai.png",
      icon: "🐍",
      color: "from-indigo-500 to-purple-600",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    },
    {
      id: 9,
      title: "Data Science Methodology",
      issuer: "IBM",
      date: "Apr 2020",
      category: "data-science",
      description:
        "Applying Python fundamentals, working with Python data structures, and working with data in Python",
      pdfSrc: "/assets/certificates/datasciencemethodology.pdf",
      downloadUrl: "/assets/certificates/datasciencemethodology.pdf",
      credentialId: "a9841da6-ef29-4bd7-9782-edf29edc9c15",
      credentialUrl:
        "https://www.credly.com/badges/a9841da6-ef29-4bd7-9782-edf29edc9c15/public_url",
      previewImage:
        "/assets/certificates/previews/data-science-methodology.png",
      icon: "🐍",
      color: "from-indigo-500 to-purple-600",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    },
    {
      id: 10,
      title: "Analyzing the Universe",
      issuer: "Rutgers University",
      date: "Aug 2022",
      category: "astronomy",
      description:
        "Comprehensive study of astrophysics and cosmology with practical applications",
      pdfSrc: "/assets/certificates/Analyzing The Universe.pdf",
      downloadUrl: "/assets/certificates/Analyzing The Universe.pdf",
      credentialId: "YZ95ZHGL5R5Y",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/YZ95ZHGL5R5Y",
      previewImage: "/assets/certificates/previews/analyzingtheuniverse.png",
      icon: "🌌",
      color: "from-violet-500 to-purple-600",
      badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    },
    {
      id: 11,
      title: "Data-driven Astronomy",
      issuer: "University of Sydney",
      date: "May 2020",
      category: "astronomy",
      description:
        "Machine learning and data science applications in astronomy and astrophysics research",
      pdfSrc: "/assets/certificates/Data-driven Astronomy.pdf",
      downloadUrl: "/assets/certificates/Data-driven Astronomy.pdf",
      credentialId: "DTULVRDRHKDJ",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/DTULVRDRHKDJ",
      previewImage: "/assets/certificates/previews/datadrivenastronomy.png",
      icon: "🔭",
      color: "from-teal-500 to-cyan-600",
      badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    },
    {
      id: 12,
      title: "Astro 101: Black Holes",
      issuer: "University of Alberta",
      date: "May 2020",
      category: "astronomy",
      description:
        "Theoretical physics and mathematics of black holes and extreme gravitational phenomena",
      pdfSrc: "/assets/certificates/Astro 101 Black Holes.pdf",
      downloadUrl: "/assets/certificates/Astro 101 Black Holes.pdf",
      credentialId: "6SEXDSGBDQHR",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/6SEXDSGBDQHR",
      previewImage: "/assets/certificates/previews/astro101blackholes.png",
      icon: "🕳️",
      color: "from-gray-700 to-gray-900",
      badgeColor: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    },
    {
      id: 13,
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "May 2020",
      category: "ai",
      description:
        "Foundational deep learning concepts with Python implementation and practical applications",
      pdfSrc: "/assets/certificates/Neural Networks and Deep Learning.pdf",
      downloadUrl: "/assets/certificates/Neural Networks and Deep Learning.pdf",
      credentialId: "FA8KQMDSMWKU",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/FA8KQMDSMWKU",
      previewImage:
        "/assets/certificates/previews/neuralnetworksanddeeplearning.png",
      icon: "🧠",
      color: "from-pink-500 to-rose-600",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    },
    {
      id: 14,
      title: "Python for Data Science and AI",
      issuer: "IBM",
      date: "Apr 2020",
      category: "data-science",
      description:
        "Python programming for data science applications and artificial intelligence development",
      pdfSrc:
        "/assets/certificates/Python for Data Science, AI & Development.pdf",
      downloadUrl:
        "/assets/certificates/Python for Data Science, AI & Development.pdf",
      credentialId: "H3FJKM2L8VLC",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/H3FJKM2L8VLC",
      previewImage: "/assets/certificates/previews/pythonfordatascience.png",
      icon: "🎯",
      color: "from-emerald-500 to-green-600",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      id: 15,
      title: "Open Source tools for Data Science",
      issuer: "IBM",
      date: "Apr 2020",
      category: "data-science",
      description:
        "Comprehensive overview of open source tools and frameworks for data science workflows",
      pdfSrc: "/assets/certificates/Tools for Data Science.pdf",
      downloadUrl: "/assets/certificates/Tools for Data Science.pdf",
      credentialId: "SWAH7N7STE4K",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/H3FJKM2L8VLC",
      previewImage: "/assets/certificates/previews/toolsfordatascience.png",
      icon: "🛠️",
      color: "from-orange-500 to-red-600",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    },
    {
      id: 16,
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "Mar 2020",
      category: "programming",
      description:
        "Advanced Python data structures and algorithms for efficient programming solutions",
      pdfSrc: "/assets/certificates/Python Data Structures.pdf",
      downloadUrl: "/assets/certificates/Python Data Structures.pdf",
      credentialId: "H7A3V9XAJQBZ",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/H7A3V9XAJQBZ",
      previewImage: "/assets/certificates/previews/pythondatastructures.png",
      icon: "🏗️",
      color: "from-blue-600 to-indigo-700",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
      id: 17,
      title: "Data Science Fundamentals",
      issuer: "IBM",
      date: "Mar 2020",
      category: "data-science",
      description:
        "Core concepts and methodologies in data science with practical applications",
      pdfSrc: "/assets/certificates/Data Science.pdf",
      downloadUrl: "/assets/certificates/Data Science.pdf",
      credentialId: "PMJRHWQ6GDT2",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/PMJRHWQ6GDT2",
      previewImage: "/assets/certificates/previews/whatisdatascience.png",
      icon: "📈",
      color: "from-purple-600 to-pink-700",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
    {
      id: 18,
      title: "Programming for Everybody (Python 3)",
      issuer: "University of Michigan",
      date: "Jan 2020",
      category: "programming",
      description:
        "Introduction to programming concepts using Python 3 with practical exercises",
      pdfSrc: "/assets/certificates/Programming for Everybody.pdf",
      downloadUrl: "/assets/certificates/Programming for Everybody.pdf",
      credentialId: "ABBD5FHQBUB5",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/ABBD5FHQBUB5",
      previewImage: "/assets/certificates/previews/programmingforeverybody.png",
      icon: "📚",
      color: "from-green-600 to-teal-700",
      badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    },
    {
      id: 19,
      title: "Python Core",
      issuer: "Sololearn",
      date: "Nov 2019",
      category: "programming",
      description:
        "Python programming fundamentals including data structures and core concepts",
      pdfSrc: "/assets/certificates/Python Core.pdf",
      downloadUrl: "/certificates/Python Core.pdf",
      credentialId: "1073-14739594",
      credentialUrl: "https://www.sololearn.com/Certificate/1073-14739594/pdf/",
      previewImage: "/assets/certificates/previews/pythoncore.png",
      icon: "🐍",
      color: "from-yellow-600 to-orange-700",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
  ];

  const categories = [
    { key: "all", label: "All Certificates", icon: "🏆" },
    { key: "ai", label: "AI & Machine Learning", icon: "🤖" },
    { key: "data-science", label: "Data Science", icon: "📊" },
    { key: "programming", label: "Programming", icon: "💻" },
    { key: "astronomy", label: "Astronomy & Physics", icon: "🌌" },
    { key: "software-dev", label: "Software Development", icon: "🏢" },
    { key: "competition", label: "Competitions", icon: "🚀" },
  ];

  const filteredCertificates =
    selectedCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  const handleDownload = async (url, filename) => {
    try {
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, "_blank");
    }
  };

  const handleFullscreen = (src) => {
    // Create a modal or new window to display the PDF
    const newWindow = window.open("", "_blank", "width=1200,height=800");
    newWindow.document.write(`
    <html>
      <head>
        <title>Certificate Preview</title>
        <style>
          body { margin: 0; padding: 20px; background: #1a1a1a; }
          embed { width: 100%; height: calc(100vh - 40px); border: none; }
        </style>
      </head>
      <body>
        <embed src="${src}" type="application/pdf" />
      </body>
    </html>
  `);
  };

  // Calculate stats
  const totalCertificates = certificates.length;
  const uniqueIssuers = [...new Set(certificates.map((cert) => cert.issuer))]
    .length;
  const yearsActive = new Date().getFullYear() - 2019 + 1;

  return (
    <div className="min-h-screen text-white relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Stars Background */}
      <div className="fixed inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* Enhanced Back Button */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50">
        <Link
          to="/"
          className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-slate-800/90 backdrop-blur-lg border border-slate-700/60 rounded-full text-gray-300 hover:text-white hover:border-slate-600 hover:bg-slate-700/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium text-sm sm:text-base">Back to Home</span>
        </Link>
      </div>

      {/* Enhanced Header */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6 animate-pulse">
              My Professional Certificates
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive collection of professional certifications spanning
            AI, data science, programming, and astronomy. Representing{" "}
            {yearsActive} years of continuous learning and professional
            development.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <EyeIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Click to preview</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <DownloadIcon className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-gray-300">Click to download</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.key
                  ? "bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-lg shadow-yellow-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                <span className="text-xs sm:text-sm">{category.label}</span>
              </span>
              {selectedCategory === category.key && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-sm">
            Showing {filteredCertificates.length} of {totalCertificates}{" "}
            certificates
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:shadow-2xl hover:border-slate-600/70 transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {cert.icon}
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${cert.badgeColor}`}
                >
                  {cert.date}
                </div>
              </div>
              {/* Certificate Preview Image */}
              {cert.previewImage && (
                <div className="mb-4 overflow-hidden rounded-lg border border-slate-600/50">
                  <img
                    src={cert.previewImage}
                    alt={`${cert.title} preview`}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleFullscreen(cert.pdfSrc)}
                  />
                </div>
              )}

              {/* Certificate Content */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mt-3 text-xs text-gray-500 bg-slate-800/30 rounded-lg p-2">
                    <span className="font-medium">ID:</span>{" "}
                    {cert.credentialId.substring(0, 12)}...
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handleFullscreen(cert.pdfSrc)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2 bg-cyan-900/30 hover:bg-cyan-800/40 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-100 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
                >
                  <EyeIcon className="w-4 h-4" />
                  View
                </button>
                <button
                  onClick={() =>
                    handleDownload(
                      cert.downloadUrl,
                      `${cert.title.replace(/\s+/g, "_")}.pdf`
                    )
                  }
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-900/30 hover:bg-pink-800/40 border border-pink-500/50 hover:border-pink-400 text-pink-300 hover:text-pink-100 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <DownloadIcon className="w-4 h-4" />
                  Download
                </button>
                {cert.credentialUrl && (
                  <button
                    onClick={() => window.open(cert.credentialUrl, "_blank")}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-900/30 hover:bg-green-800/40 border border-green-500/50 hover:border-green-400 text-green-300 hover:text-green-100 rounded-lg transition-all duration-300 text-sm font-medium"
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Verify
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {totalCertificates}
            </div>
            <p className="text-gray-300 text-sm">Total Certificates</p>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {uniqueIssuers}
            </div>
            <p className="text-gray-300 text-sm">Unique Institutions</p>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {yearsActive}
            </div>
            <p className="text-gray-300 text-sm">Years of Learning</p>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {categories.length - 1}
            </div>
            <p className="text-gray-300 text-sm">Technology Areas</p>
          </div>
        </div>

        {/* Learning Journey Timeline */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-300">
            Learning Journey
          </h3>
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-gray-300 text-center">
              <span className="bg-yellow-500/20 px-3 py-1 rounded-full">
                2019
              </span>
              <span>Started with Python fundamentals</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-gray-300 text-center">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full">
                2020
              </span>
              <span>Expanded into AI, Data Science & Astronomy</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-gray-300 text-center">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full">
                2022
              </span>
              <span>Advanced data science and universe analysis</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-gray-300 text-center">
              <span className="bg-green-500/20 px-3 py-1 rounded-full">
                2024
              </span>
              <span>Machine Learning specialization & NASA competition</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-10">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 mb-4">
              From programming fundamentals to advanced AI and space science,
              this collection represents my dedication to continuous learning
              and professional growth across diverse technological domains.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 font-medium transition-colors"
            >
              Back to Portfolio →
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-float"
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

        .animate-float {
          animation: float linear infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
