import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CaseStudies from './pages/CaseStudies'
import CosmicScroll from './components/CosmicScroll';
import Resume from './pages/Resume'
import Certficates from './pages/Certificates'

function App() {
  return (
    
    <Router>
      <CosmicScroll>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudies />} />
        <Route path="/certificates" element={<Certficates />} />
      </Routes>
      </CosmicScroll>
    </Router>
  )
}

export default App