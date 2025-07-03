import { useState, useEffect, useRef, useCallback } from "react";

const ProjectList = ({ projects, onProjectSelect, selectedProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const scrollContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Memoized project filtering
  const filteredProjects = useCallback(() => {
    if (!searchTerm) return projects;

    const term = searchTerm.toLowerCase();
    return projects.filter((project) => {
      const nameMatch = project.name.toLowerCase().includes(term);
      const techMatch = project.technologies.some((tech) =>
        tech.toLowerCase().includes(term)
      );
      const statusMatch = (
        Array.isArray(project.status) ? project.status : [project.status]
      ).some((status) => status.toLowerCase().includes(term));

      return nameMatch || techMatch || statusMatch;
    });
  }, [projects, searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        scrollContainerRef.current &&
        !scrollContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Reset search and highlight when closing
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setHighlightedIndex(-1);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      const projects = filteredProjects();
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.min(prev + 1, projects.length - 1));
        scrollIntoView(highlightedIndex + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
        scrollIntoView(highlightedIndex - 1);
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        e.preventDefault();
        const project = projects[highlightedIndex];
        onProjectSelect(project);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, highlightedIndex, filteredProjects, onProjectSelect]);

  const scrollIntoView = (index) => {
    if (dropdownRef.current && index >= 0) {
      const items = dropdownRef.current.querySelectorAll("button");
      if (items[index]) {
        items[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  };

  const handleProjectSelect = (project) => {
    onProjectSelect(project);
    setIsOpen(false);
  };

  const projectsToShow = filteredProjects();

  return (
    <div
      className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50"
      ref={scrollContainerRef}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group bg-black/70 backdrop-blur-md border border-cyan-400/40 rounded-xl p-2 sm:p-3 md:p-4 text-cyan-400 hover:bg-black/90 hover:border-cyan-400/70 transition-all duration-300 mb-2 sm:mb-4 shadow-lg hover:shadow-cyan-500/20 ${
          isOpen ? "w-[calc(100vw-1rem)] sm:w-96" : "w-auto"
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div
          className={`flex items-center gap-3 ${
            isOpen ? "justify-between" : "justify-start"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-all duration-300 ${
                  isOpen ? "rotate-180 text-cyan-300" : "text-cyan-400"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-cyan-300">
                Mission Control
              </span>
              <span className="text-xs text-cyan-500">
                {projects.length}{" "}
                {projects.length === 1 ? "Project" : "Projects"}
              </span>
            </div>
          </div>

          {/* Status indicator when expanded */}
          {isOpen && (
            <div className="flex items-center gap-2 text-xs text-cyan-400/80 animate-in fade-in duration-200">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Active</span>
            </div>
          )}
        </div>
      </button>

      {/* Enhanced Project List */}
      {isOpen && (
        <div
          className="bg-black/85 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-3 sm:p-4 md:p-5 w-[calc(100vw-1rem)] sm:w-96 max-h-[70vh] sm:max-h-[75vh] shadow-2xl shadow-cyan-500/10 animate-in slide-in-from-top-2 duration-300 overflow-hidden flex flex-col"
          role="listbox"
          ref={dropdownRef}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Space Projects
            </h3>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-cyan-400/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects, tech, status..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setHighlightedIndex(-1);
              }}
              className="w-full pl-8 pr-8 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200 text-sm"
              autoFocus
              aria-autocomplete="list"
              aria-controls="project-list-options"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
                aria-label="Clear search"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Results Counter */}
          {searchTerm && (
            <div className="mb-3 text-xs text-cyan-400/80">
              Found {projectsToShow.length} of {projects.length} projects
            </div>
          )}

          {/* Projects Container */}
          <div
            id="project-list-options"
            className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar pb-4"
            role="listbox"
            aria-label="Project options"
          >
            {projectsToShow.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <svg
                  className="mx-auto h-12 w-12 text-gray-600 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                  />
                </svg>
                <p className="text-sm">No projects found</p>
                <p className="text-xs text-gray-600 mt-1">
                  Try adjusting your search
                </p>
              </div>
            ) : (
              projectsToShow.map((project, index) => (
                <button
                  key={`${project.name}-${index}`}
                  onClick={() => handleProjectSelect(project)}
                  className={`group w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    selectedProject?.name === project.name
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/70 text-cyan-300 shadow-lg shadow-cyan-500/20"
                      : "bg-gray-800/40 border-gray-600/40 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/60 hover:shadow-lg"
                  } ${
                    highlightedIndex === index ? "ring-2 ring-cyan-400/50" : ""
                  }`}
                  role="option"
                  aria-selected={selectedProject?.name === project.name}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {project.name.split(" ")[0]}
                      </span>
                      <div>
                        <span className="font-bold text-base">
                          {project.name.slice(2)}
                        </span>
                        {project.featured && (
                          <div className="inline-flex items-center ml-2 px-2 py-0.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-full">
                            <svg
                              className="w-3 h-3 text-yellow-400 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs text-yellow-400 font-medium">
                              FEATURED
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {(Array.isArray(project.status)
                      ? project.status
                      : [project.status]
                    ).map((status, i) => (
                      <span
                        key={`${status}-${i}`}
                        className={`px-2 py-1 rounded-md text-xs font-medium border transition-colors ${
                          status === "Live"
                            ? "bg-green-500/20 text-green-400 border-green-500/50"
                            : status === "Development"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                            : status === "Complete"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                            : status === "Beta" || status === "Beta Testing"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                            : status === "Alpha"
                            ? "bg-orange-500/20 text-orange-400 border-orange-500/50"
                            : status === "Research"
                            ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/50"
                            : status === "Development"
                            ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                            : status === "Preprint"
                            ? "bg-violet-500/20 text-violet-400 border-violet-500/50"
                            : status === "Featured" || status === "Award Winner"
                            ? "bg-purple-500/20 text-purple-400 border-purple-500/50"
                            : status === "Maintained"
                            ? "bg-teal-500/20 text-teal-400 border-teal-500/50"
                            : status === "Stable"
                            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/50"
                            : status === "Portfolio"
                            ? "bg-rose-500/20 text-rose-400 border-rose-500/50"
                            : status === "Optimized"
                            ? "bg-lime-500/20 text-lime-400 border-lime-500/50"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/50"
                        }`}
                      >
                        {status}
                      </span>
                    ))}
                  </div>

                  {/* Technologies Preview */}
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <span className="truncate">
                      {project.technologies.slice(0, 3).join(", ")}
                      {project.technologies.length > 3 &&
                        ` +${project.technologies.length - 3} more`}
                    </span>
                  </div>

                  {/* Hover Effect Arrow */}
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-gray-700/50 flex items-center justify-between text-xs text-gray-500">
            <span>Navigate with ↑↓ keys</span>
            <span>ESC to close</span>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(55, 65, 81, 0.3);
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #06b6d4, #8b5cf6);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #0891b2, #7c3aed);
    box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
  }

  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #06b6d4 rgba(55, 65, 81, 0.3);
  }

  @media (max-width: 640px) {
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
  }

  @keyframes slide-in-from-top-2 {
    from {
      transform: translateY(-8px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-in {
    animation: slide-in-from-top-2 0.3s ease-out;
  }

  .fade-in {
    animation: fade-in 0.2s ease-out;
  }
`}</style>
    </div>
  );
};

export default ProjectList;
