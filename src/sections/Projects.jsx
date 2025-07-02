import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectRef = useRef(null);
  const techRefs = useRef([]);

  useEffect(() => {
    // Animation setup
    const setupAnimations = () => {
      // Section animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
      });

      // Project card animation
      gsap.from(projectRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      // Tech tags animation
      techRefs.current.forEach((tech, index) => {
        if (tech) {
          gsap.from(tech, {
            opacity: 0,
            x: -20,
            duration: 0.5,
            delay: 0.6 + (index * 0.1),
            scrollTrigger: {
              trigger: tech,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });
        }
      });
    };

    setupAnimations();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const featuredProject = {
    title: "Medicinal Plant Identification System",
    description: "A deep learning application that identifies medicinal plants from images using Convolutional Neural Networks (CNN). Developed a Flask-based web interface with Bootstrap for user-friendly interaction. The system helps in recognizing various medicinal herbs with high accuracy, supporting conservation efforts and traditional medicine practices.",
    technologies: ["Python", "TensorFlow/Keras", "Flask", "Bootstrap", "CNN", "Image Processing"],
    features: [
      "Custom-trained CNN model with 94% accuracy",
      "Responsive web interface for easy upload and identification",
      "Detailed plant information display",
      "Admin panel for model retraining",
      "Scalable backend architecture"
    ],
    githubLink: "https://github.com/yourusername/medicinal-plant-id",
    demoLink: "#"
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full py-28 overflow-hidden"
      style={{ 
        backgroundColor: "var(--bg)", 
        color: "var(--text)" 
      }}
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
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Featured Project</h2>
          <div className="w-24 h-1 mx-auto mb-6 opacity-60" style={{ backgroundColor: "var(--text)" }}></div>
          <p className="mt-2 text-lg sm:text-xl opacity-80 max-w-2xl mx-auto">
            Highlighting my work in AI-powered plant identification systems
          </p>
        </div>

        {/* Single Project Showcase */}
        <div 
          ref={projectRef}
          className="rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl"
          style={{
            backgroundColor: "var(--bg-accent)",
            border: "1px solid var(--text)"
          }}
        >
          {/* Project Header */}
          <div className="p-8" style={{ borderBottom: "1px solid var(--text)" }}>
            <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
            <p className="opacity-80 text-lg leading-relaxed">{featuredProject.description}</p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Features */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                Key Features
              </h4>
              <ul className="space-y-3">
                {featuredProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Technologies */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {featuredProject.technologies.map((tech, index) => (
                  <span
                    key={tech}
                    ref={el => techRefs.current[index] = el}
                    className="px-4 py-2 rounded-full text-sm font-medium opacity-80 hover:opacity-100 transition-colors duration-200"
                    style={{
                      border: "1px solid var(--text)",
                      backgroundColor: "transparent",
                      color: "var(--text)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
          <p className="opacity-80 max-w-2xl mx-auto">
            I'm currently working on new projects that showcase my skills in full-stack development and 3D web experiences.
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;