import { useState } from "react";
const ProjectList = ({ projects, onProjectSelect, selectedProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-30">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/60 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-3 text-cyan-400 hover:bg-black/80 transition-all duration-300 mb-4"
      >
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Projects ({projects.length})</span>
        </div>
      </button>

      {/* Project List */}
      {isOpen && (
        <div className="bg-black/80 backdrop-blur-md border border-cyan-400/30 rounded-xl p-4 max-w-sm max-h-96 overflow-y-auto">
          <h3 className="text-lg font-bold text-cyan-400 mb-3">All Projects</h3>
          <div className="space-y-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  onProjectSelect(project);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                  selectedProject?.name === project.name
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                    : 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{project.name.split(' ')[0]}</span>
                  <span className="font-semibold">{project.name.slice(2)}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-1">
                  {(Array.isArray(project.status) ? project.status : [project.status]).map((status, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded text-xs ${
                        status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' :
                        status === 'Complete' ? 'bg-emerald-500/20 text-emerald-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {status}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 truncate">
                  {project.technologies.slice(0, 3).join(', ')}
                  {project.technologies.length > 3 && '...'}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;