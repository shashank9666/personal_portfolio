const Projects = () => {
  const placeholderProjects = [
    {
      id: 1,
      title: "3D Product Configurator",
      description: "Interactive 3D product customizer with real-time updates and e-commerce integration.",
      technologies: ["React", "Three.js", "R3F", "Node.js", "MongoDB"],
      category: "3D Web Application",
    },
    {
      id: 2,
      title: "Virtual Showroom",
      description: "Immersive virtual space showcasing products with realistic lighting and physics simulations.",
      technologies: ["React", "WebGL", "GSAP", "Express"],
      category: "3D Experience",
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive 3D data visualization tool with real-time analytics and beautiful graphs.",
      technologies: ["React", "D3.js", "Three.js", "WebSockets"],
      category: "Data Visualization",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-28 overflow-hidden"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Subtle Floating Dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: "var(--text)",
              opacity: 0.1,
              animation: `float-slow ${Math.random() * 8 + 6}s infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1 mx-auto mb-6 opacity-60 bg-current"></div>
          <p className="mt-2 text-lg sm:text-xl opacity-80 max-w-2xl mx-auto">
            Showcasing immersive, 3D-driven web experiences built with the MERN stack and WebGL.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "3D Web Application", "3D Experience", "Data Visualization"].map((category) => (
            <button
              key={category}
              className="px-4 py-2 border border-current rounded-full text-sm font-medium opacity-80 hover:opacity-100 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--bg-accent)] border border-current rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition duration-500 hover:shadow-2xl"
            >
              {/* Placeholder Image */}
              <div className="relative h-48 bg-[var(--bg)] border-b border-current flex items-center justify-center opacity-80">
                <div className="text-center text-sm font-medium">{project.category}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-80 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-current rounded-full text-xs opacity-70 hover:opacity-100 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-2 border border-current rounded-lg text-sm font-medium hover:bg-current hover:text-[var(--bg)] transition">
                    View Details
                  </button>
                  <button className="w-10 h-10 border border-current rounded-lg flex items-center justify-center hover:bg-current hover:text-[var(--bg)] transition">
                    {/* Link Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
