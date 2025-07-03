import { AiOutlineDownload, AiOutlineEye, AiOutlineExpand } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState } from "react"
import StarsCanvas from "../components/StarsBackground"

export default function Resume() {
  const [downloadingEnglish, setDownloadingEnglish] = useState(false)
  const [downloadingFrench, setDownloadingFrench] = useState(false)
  const [englishLoaded, setEnglishLoaded] = useState(false)
  const [frenchLoaded, setFrenchLoaded] = useState(false)

  const handleDownload = async (url, filename, setDownloading) => {
    setDownloading(true)
    try {
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Add a small delay for better UX
      setTimeout(() => setDownloading(false), 1500)
    } catch (error) {
      console.error('Download failed:', error)
      window.open(url, '_blank')
      setDownloading(false)
    }
  }

  const handleFullscreen = (src) => {
    window.open(src, '_blank', 'fullscreen=yes')
  }

  const DownloadButton = ({ onClick, loading, children, colorClass = "cyan" }) => {
    const colorClasses = {
      cyan: "text-cyan-300 hover:text-cyan-100 bg-cyan-900/30 hover:bg-cyan-800/40 border-cyan-500 hover:border-cyan-400",
      pink: "text-pink-300 hover:text-pink-100 bg-pink-900/30 hover:bg-pink-800/40 border-pink-500 hover:border-pink-400"
    }

    return (
      <button
        onClick={onClick}
        disabled={loading}
        className={`inline-flex items-center gap-2 ${colorClasses[colorClass]} border px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium`}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Downloading...
          </>
        ) : (
          children
        )}
      </button>
    )
  }

  const ResumeSection = ({ 
    title, 
    flag, 
    pdfSrc, 
    downloadUrl, 
    filename, 
    downloading, 
    setDownloading, 
    loaded, 
    setLoaded, 
    colorClass,
    downloadText,
    downloadButtonText 
  }) => (
    <div className="w-full group">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{flag}</span>
          <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            {title}
          </h2>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => handleFullscreen(pdfSrc)}
            className={`inline-flex items-center gap-2 ${colorClass === "cyan" ? "text-cyan-300 hover:text-cyan-100 bg-cyan-900/20 hover:bg-cyan-800/30 border-cyan-500/50" : "text-pink-300 hover:text-pink-100 bg-pink-900/20 hover:bg-pink-800/30 border-pink-500/50"} border px-4 py-2 rounded-full transition-all duration-300 hover:scale-105`}
          >
            <AiOutlineExpand className="w-4 h-4" />
            Fullscreen
          </button>
          
          <DownloadButton
            onClick={() => handleDownload(downloadUrl, filename, setDownloading)}
            loading={downloading}
            colorClass={colorClass}
          >
            <AiOutlineDownload className="w-4 h-4" />
            {downloadText}
          </DownloadButton>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-slate-600/70">
        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 rounded-2xl z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-3 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-300 font-medium">Loading PDF...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={pdfSrc}
          width="100%"
          height="700px"
          className="rounded-xl border border-slate-600/50 shadow-inner transition-opacity duration-500"
          title={`${title} PDF`}
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </div>

      <div className="flex justify-center mt-6">
        <DownloadButton
          onClick={() => handleDownload(downloadUrl, filename, setDownloading)}
          loading={downloading}
          colorClass={colorClass}
        >
          <AiOutlineDownload className="w-5 h-5" />
          {downloadButtonText}
        </DownloadButton>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen text-white relative overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
      {/* Stars Background */}
      <div className="fixed inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* Enhanced Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link
          to="/"
          className="group flex items-center gap-3 px-6 py-3 bg-slate-800/90 backdrop-blur-lg border border-slate-700/60 rounded-full text-gray-300 hover:text-white hover:border-slate-600 hover:bg-slate-700/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Enhanced Header */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-pulse">
              My Resume
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Browse or download my professional CVs below, available in both English and French formats.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <AiOutlineEye className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Click to preview</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <AiOutlineDownload className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-gray-300">Click to download</span>
            </div>
          </div>
        </div>

        {/* Resume Sections */}
        <div className="space-y-20">
          <ResumeSection
            title="English Resume"
            flag="🇬🇧"
            pdfSrc="/assets/cv/CV_English_Taha_Khamessi.pdf"
            downloadUrl="/cv/CV_English_Taha_Khamessi.pdf"
            filename="Taha_Khamessi_Resume_English.pdf"
            downloading={downloadingEnglish}
            setDownloading={setDownloadingEnglish}
            loaded={englishLoaded}
            setLoaded={setEnglishLoaded}
            colorClass="cyan"
            downloadText="Download"
            downloadButtonText="Download English CV"
          />

          <ResumeSection
            title="CV Français"
            flag="🇫🇷"
            pdfSrc="/assets/cv/CV_Francais_Taha_Khamessi.pdf"
            downloadUrl="/cv/CV_Francais_Taha_Khamessi.pdf"
            filename="Taha_Khamessi_CV_Francais.pdf"
            downloading={downloadingFrench}
            setDownloading={setDownloadingFrench}
            loaded={frenchLoaded}
            setLoaded={setFrenchLoaded}
            colorClass="pink"
            downloadText="Télécharger"
            downloadButtonText="Télécharger CV Français"
          />
        </div>

        {/* Footer with additional info */}
        <div className="text-center mt-20 pb-10">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Need a different format?</h3>
            <p className="text-gray-300 mb-4">
              If you need my resume in a different format or have any questions, feel free to reach out!
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 font-medium transition-colors"
            >
              Contact Me →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}