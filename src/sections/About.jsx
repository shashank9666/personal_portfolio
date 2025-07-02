const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 w-full overflow-hidden"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Subtle Animated Dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      <div className="relative w-full px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">About Me</h2>
          <div className="w-32 h-1 mx-auto mb-6 opacity-60 bg-current"></div>
          <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-3xl mx-auto">
            Full-Stack Developer specializing in immersive 3D web experiences with MERN stack expertise.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* 3D Visual Section */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-[500px] w-full bg-[var(--bg-accent)] rounded-2xl shadow-xl border border-current overflow-hidden transition-all hover:shadow-2xl">
              {/* Placeholder for 3D scene */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-80">
                <div className="relative w-full h-72 bg-neutral-900 rounded-xl mb-6 flex items-center justify-center border border-current opacity-60">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="border border-current opacity-20"></div>
                    ))}
                  </div>
                  <span className="text-lg font-medium">Interactive 3D Scene</span>
                </div>
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-current opacity-50 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-current opacity-50 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-current opacity-50 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-current opacity-50 rounded-br-2xl" />
            </div>

            {/* Tech Stack */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {['MongoDB', 'Express', 'React', 'Node.js', 'Three.js', 'R3F'].map((tech, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-accent)] border border-current rounded-lg py-3 px-4 text-center font-medium opacity-80 hover:opacity-100 hover:shadow-sm transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Text Content Section */}
          <div className="lg:col-span-7">
            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Building <span className="opacity-80">Immersive Experiences</span> at the Intersection of Web & 3D
              </h3>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                I architect full-stack solutions that merge the power of MongoDB, Express, React, and Node.js with cutting-edge 3D technologies. My approach blends technical precision with creativity to craft performant and scalable web apps that enhance the user experience.
              </p>
              <div className="bg-[var(--bg-accent)] border-l-4 border-current opacity-70 p-4 rounded-r-lg mb-6">
                <p className="opacity-80 italic">
                  "The future of web development lies in spatial interfaces that engage users in three-dimensional spaces while preserving the accessibility of traditional web apps."
                </p>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[var(--bg-accent)] p-6 rounded-xl border border-current opacity-80 shadow-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-current opacity-60 mr-3"></span>
                  Core Competencies
                </h4>
                <ul className="space-y-3 opacity-80">
                  {[
                    '3D Web Application Development',
                    'MERN Stack Architecture',
                    'React Three Fiber Implementation',
                    'WebGL Performance Optimization',
                    'Real-time Data Visualization',
                    'Interactive UI/UX Design',
                    'RESTful API Integration',
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <span className="opacity-60 mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--bg-accent)] p-6 rounded-xl border border-current opacity-80 shadow-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-current opacity-60 mr-3"></span>
                  Development Principles
                </h4>
                <ul className="space-y-3 opacity-80">
                  {[
                    'Performance-first approach (60fps target)',
                    'Mobile-first responsive design',
                    'Progressive enhancement strategy',
                    'Component-based architecture',
                    'Clean, maintainable code',
                    'Accessibility as core requirement',
                    'Continuous learning mindset',
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start">
                      <span className="opacity-60 mr-2">•</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
