"use client";

import React from "react";

export default function About() {
  // Stats aligned with resume achievements
  const stats = [
    { value: "5+", label: "Full-Stack Projects", description: "Built and shipped using MERN stack" },
    { value: "20+", label: "Reusable Components", description: "Accelerated development by 25%" },
    { value: "30%", label: "Performance Boost", description: "Through optimization techniques" },
    { value: "40%", label: "Engagement Increase", description: "With 3D web experiences" }
  ];

  // Expertise areas based on resume skills and experience
  const expertise = [
    {
      title: "Full-Stack Development",
      description: "Skilled in building scalable full-stack applications with React.js, Next.js, Node.js, Express.js, and MongoDB. Experienced in REST API design, authentication, and performance optimization.",
      icon: "⚡",
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Frontend & 3D Experiences",
      description: "Created interactive 3D web experiences using React Three Fiber (R3F) and GSAP animations. Increased user engagement by 40% with optimized 3D scenes and responsive layouts.",
      icon: "🎮",
      technologies: ["React Three Fiber", "GSAP", "TypeScript", "Tailwind CSS", "WebGL"]
    },
    {
      title: "Performance Optimization",
      description: "Implemented code splitting, caching, and bundle optimization techniques across projects. Achieved up to 30% improvement in page load times and 25% faster development with reusable components.",
      icon: "🚀",
      technologies: ["Code Splitting", "Caching", "Lazy Loading", "Bundle Optimization"]
    },
    {
      title: "Project Delivery",
      description: "Experience in Agile methodologies with focus on clean architecture, secure authentication, and role-based access control. Collaborated using Git workflows and code reviews.",
      icon: "🔧",
      technologies: ["Git/GitHub", "Agile/Scrum", "Clean Code", "Debugging", "Postman"]
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-[rgb(var(--bg-color-rgb))] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-(--text-color) rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--text-color) rounded-full blur-xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--text-color) 1px, transparent 1px),
                           linear-gradient(90deg, var(--text-color) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-(--text-color) mb-6 tracking-tighter">
            ABOUT ME
          </h2>
          <div className="w-32 h-1 bg-(--text-color) mx-auto rounded-full opacity-80" />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 text-center">
            <p className="text-xl md:text-2xl text-(--text-color) opacity-90 leading-relaxed font-light max-w-4xl mx-auto mb-8">
              <span className="font-semibold">MERN Stack Developer</span> from Hyderabad, India with a <span className="font-semibold">B.Tech in Computer Science</span>. 
              I specialize in building <span className="font-semibold">scalable full-stack applications</span> and creating 
              <span className="font-semibold"> immersive 3D web experiences</span> with measurable improvements in engagement and performance.
            </p>
            
            <div className="mb-10">
              <p className="text-lg text-(--text-color) opacity-80 max-w-3xl mx-auto mb-6">
                With hands-on experience in developing 5+ full-stack projects, I focus on delivering clean, efficient code 
                and optimizing performance to enhance user experience. My work includes secure authentication systems, 
                role-based access control, and responsive designs that work seamlessly across devices.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["MERN Stack", "Next.js", "React Three Fiber", "TypeScript", "REST APIs", "Agile Development"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-(--text-color) text-[rgb(var(--bg-color-rgb))] text-sm font-medium rounded-full border border-(--text-color) opacity-90 hover:opacity-100 transition-opacity duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm border border-(--text-color) border-opacity-15 rounded-2xl p-8 max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-(--text-color) mb-6 opacity-90 text-center">EDUCATION & CERTIFICATIONS</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-(--text-color) mb-2 opacity-90">Education</h4>
                  <p className="text-(--text-color) opacity-80">
                    <span className="font-medium">B.Tech in Computer Science</span><br />
                    Jayaprakash Narayan College of Engineering (JPNCE)<br />
                    CGPA: 7.11 • 2020 - 2024
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-(--text-color) mb-2 opacity-90">Certifications</h4>
                  <ul className="space-y-2 text-(--text-color) opacity-80">
                    <li>• Introduction to Cybersecurity — Cisco</li>
                    <li>• Getting Started with Compute — AWS Educate</li>
                    <li>• React JS — NxtWave</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm border border-(--text-color) border-opacity-20 rounded-xl p-6 text-center hover:border-opacity-40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-black text-(--text-color) mb-2 opacity-90">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-(--text-color) mb-2 opacity-90">
                  {stat.label}
                </div>
                <div className="text-sm text-(--text-color) opacity-70">
                  {stat.description}
                </div>
                <div className="absolute inset-0 rounded-xl bg-(--text-color) opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>

          {/* Expertise Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm border border-(--text-color) border-opacity-15 rounded-2xl p-8 hover:border-opacity-40 transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="text-5xl mb-6 opacity-80">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-(--text-color) mb-4 opacity-90">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-(--text-color) opacity-80 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-(--bg-color) bg-opacity-10 text-(--text-color) text-xs font-medium rounded-full border border-(--text-color) border-opacity-20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-(--text-color) opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>

          {/* Languages & Strengths */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm border border-(--text-color) border-opacity-15 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-(--text-color) mb-6 opacity-90">LANGUAGES</h3>
              <div className="space-y-4">
                {[
                  { language: "English", level: "Professional Proficiency" },
                  { language: "Hindi", level: "Native/Bilingual" },
                  { language: "Telugu", level: "Native/Bilingual" }
                ].map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-(--text-color) opacity-90 font-medium">{lang.language}</span>
                    <span className="text-(--text-color) opacity-70 text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm border border-(--text-color) border-opacity-15 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-(--text-color) mb-6 opacity-90">KEY STRENGTHS</h3>
              <ul className="space-y-3">
                {[
                  "Full-stack development with MERN stack",
                  "REST API design and implementation",
                  "3D web experiences with React Three Fiber",
                  "Performance optimization and code splitting",
                  "Problem solving and debugging",
                  "Responsive web design",
                  "Agile methodology and collaboration",
                  "Clean code and reusable components"
                ].map((strength, index) => (
                  <li key={index} className="flex items-center text-(--text-color) opacity-80">
                    <span className="mr-2">•</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Tech Stack */}
          <div className="text-center border-t border-(--text-color) border-opacity-20 pt-16">
            <h3 className="text-3xl font-bold text-(--text-color) mb-10 opacity-90">TECHNICAL EXPERTISE</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", 
                "TypeScript", "JavaScript", "Tailwind CSS", "GSAP", 
                "React Three Fiber", "REST APIs", "WebSockets", "Git/GitHub", 
                "HTML5", "CSS3", "Python", "Flask", "SQLite", "Postman",
                "Agile/Scrum", "Responsive Design", "Performance Optimization"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm border border-(--text-color) border-opacity-15 rounded-full text-(--text-color) font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Career Goals */}
          <div className="text-center mt-20 pt-12 border-t border-(--text-color) border-opacity-20">
            <h3 className="text-2xl font-bold text-(--text-color) mb-6 opacity-90">CAREER OBJECTIVE</h3>
            <p className="text-lg text-(--text-color) opacity-80 max-w-3xl mx-auto">
              Seeking <span className="font-semibold">Full-Stack Development</span> and <span className="font-semibold">3D Web Project</span> opportunities 
              where I can leverage my technical skills to build innovative, high-performance applications. 
              Passionate about creating engaging user experiences and solving complex problems through clean, efficient code.
            </p>
            <p className="text-(--text-color) opacity-70 text-sm mt-4">
              Open to remote positions worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}