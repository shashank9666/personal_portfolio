export default function Projects() {
  const projects = [
    {
      title: "NextBlogger",
      period: "Aug 2025 – Present",
      description: "Full-stack blogging platform with authentication, dark/light mode, dynamic routing, and reusable UI components.",
      achievements: [
        "Reduced page load times by 30% through code splitting, caching, and component reuse.",
        "Secure blog creation, editing, and search with role-based access for 100+ users."
      ],
      tech: "Next.js, React, Node.js, Express.js, MongoDB, Tailwind CSS",
      link: "Live Demo"
    },
    {
      title: "3D Portfolio Website",
      period: "Jun 2025 – Present",
      description: "Interactive 3D portfolio featuring car and VRM character models, animations, and responsive layouts.",
      achievements: [
        "Increased user engagement by 40% using R3F scenes, GSAP animations, and optimized assets.",
        "Improved cross-device performance by 25% through model optimization, texture compression, and lazy loading."
      ],
      tech: "React Three Fiber, GSAP, React, Tailwind CSS",
      link: "Live Demo"
    },
    {
      title: "Medicinal Plants Identifier",
      period: "Jan 2023 – Jun 2023",
      description: "Flask web app to classify Indian medicinal plant leaves using a CNN with 90% accuracy.",
      achievements: [
        "Built an image upload and prediction pipeline; processed 500+ plant images with real-time feedback.",
        "The plant information was dynamically extracted, improving usability and learning by 35%."
      ],
      tech: "Flask, Python, CNN, HTML/CSS/JS",
      link: "Repository"
    }
  ];

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-center p-8"
      style={{
        backgroundColor: `rgb(var(--bg-color-rgb))`,
        color: "var(--text-color)",
        zIndex: 0
      }}
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h1>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: `rgba(var(--bg-color-rgb), 0.05)`,
                backdropFilter: `blur(var(--backdrop-blur))`,
                borderColor: "var(--border-color)"
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">{project.title}</h2>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                  <span className="text-sm md:text-base opacity-70">{project.period}</span>
                  <a 
                    href="#" 
                    className="text-sm md:text-base font-medium px-3 py-1 rounded-full transition-all hover:opacity-80"
                    style={{
                      backgroundColor: `rgba(var(--bg-color-rgb), 0.1)`,
                      border: `1px solid var(--border-color)`
                    }}
                  >
                    {project.link}
                  </a>
                </div>
              </div>
              
              <p className="text-base md:text-lg opacity-90 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Achievements:</h3>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1.5">•</span>
                      <span className="opacity-90">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: `rgba(var(--bg-color-rgb), 0.1)`,
                        border: `1px solid var(--border-color)`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-80">
          <p className="text-lg">
            Built and shipped 5+ full-stack projects using React / Next.js, Node.js / Express.js, and MongoDB with a focus on performance and clean architecture.
          </p>
        </div>
      </div>
    </section>
  );
}