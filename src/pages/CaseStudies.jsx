import { motion } from 'framer-motion';
import Navbar from "../components/layout/Navbar";

const CaseStudies = () => {
  const studies = [
    {
      title: "E-commerce Platform Optimization",
      problem: "High bounce rate and low conversion on mobile devices",
      solution: "Implemented progressive web app features and optimized images",
      approach: "Used React with lazy loading, service workers for caching",
      challenges: "Legacy codebase with tight coupling",
      results: "40% faster load times, 25% increase in conversions",
      learnings: "Importance of gradual refactoring and A/B testing"
    },
    // Add more case studies as needed
  ];

  return (
    
    <section id="case-studies" className="py-20 bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-light mb-12 text-center"
        >
          Case Studies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50"
            >
              <h3 className="text-xl font-medium text-blue-400 mb-4">{study.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-1">Problem & Solution</h4>
                  <p className="text-gray-300">{study.problem}</p>
                  <p className="text-gray-300 mt-2">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-1">Technical Approach</h4>
                  <p className="text-gray-300">{study.approach}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-1">Results & Impact</h4>
                  <p className="text-gray-300">{study.results}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-1">Key Learnings</h4>
                  <p className="text-gray-300">{study.learnings}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;