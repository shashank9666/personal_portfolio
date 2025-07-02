import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FaReact, FaNodeJs, FaCss3Alt, FaMagic } from "react-icons/fa";
import { SiExpress, SiMongodb, SiThreedotjs } from "react-icons/si";

// Rotating Torus Knot Component
const RotatingTorusKnot = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};

// 3D Scene Component
const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#61DAFB" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#F04964" />
      <RotatingTorusKnot />
    </>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const dotsContainerRef = useRef(null);
  const visualSectionRef = useRef(null);
  const contentSectionRef = useRef(null);

  const techStack = [
    { name: "React", icon: <FaReact className="mr-2 text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="mr-2 text-green-600" /> },
    { name: "Express", icon: <SiExpress className="mr-2" /> },
    { name: "MongoDB", icon: <SiMongodb className="mr-2 text-green-900" /> },
    { name: "Tailwind", icon: <FaCss3Alt className="mr-2 text-blue-600" /> },
    { name: "React Three Fiber + Three.js", icon: <SiThreedotjs className="mr-2" /> },
    { name: "GSAP", icon: <FaMagic className="mr-2" /> },
  ];

  // Initialize animations
  useEffect(() => {
    // Simple fade-in animations
    const animateElement = (element, delay = 0) => {
      if (!element) return;
      
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };

    // Animate elements
    animateElement(sectionRef.current, 100);
    animateElement(headingRef.current, 200);
    animateElement(visualSectionRef.current, 400);
    animateElement(contentSectionRef.current, 600);

    // Animate dots
    if (dotsContainerRef.current) {
      const dots = dotsContainerRef.current.querySelectorAll('div');
      dots.forEach((dot) => {
        animateElement(dot, Math.random() * 500);
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Subtle Animated Dots */}
      <div ref={dotsContainerRef} className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
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
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">About Me</h2>
          <div className="w-32 h-1 mx-auto mb-6 opacity-60 bg-current"></div>
          <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-3xl mx-auto">
            Full-Stack Developer specializing in immersive 3D web experiences with MERN stack expertise.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* 3D Visual Section */}
          <div ref={visualSectionRef} className="lg:col-span-5 flex flex-col">
            <div className="relative h-[500px] w-full bg-[var(--bg-accent)] rounded-2xl shadow-xl border border-[var(--text)] overflow-hidden transition-all hover:shadow-2xl">
              {/* R3F Canvas */}
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
              >
                <Suspense fallback={null}>
                  <Scene3D />
                </Suspense>
              </Canvas>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--text)] opacity-50 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--text)] opacity-50 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--text)] opacity-50 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--text)] opacity-50 rounded-br-2xl" />
            </div>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start opacity-90">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center rounded-2xl px-4 py-2 border border-[var(--text)] text-sm uppercase font-medium tracking-wide hover:bg-[var(--text)] hover:text-[var(--bg)] transition"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Text Content Section */}
          <div ref={contentSectionRef} className="lg:col-span-7">
            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Building <span className="opacity-80">Immersive Experiences</span> at the Intersection of Web & 3D
              </h3>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                I architect full-stack solutions that merge the power of MongoDB, Express, React, and Node.js with cutting-edge 3D technologies. My approach blends technical precision with creativity to craft performant and scalable web apps that enhance the user experience.
              </p>
              <div className="bg-[var(--bg-accent)] border-l-4 border-blue-400 p-4 rounded-r-lg mb-6 hover:opacity-100 transition-opacity duration-300">
                <p className="opacity-80 italic">
                  "The future of web development lies in spatial interfaces that engage users in three-dimensional spaces while preserving the accessibility of traditional web apps."
                </p>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[var(--bg-accent)] p-6 rounded-xl border border-[var(--text)] shadow-sm hover:shadow-md hover:opacity-100 transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-400 opacity-60 mr-3"></span>
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
                    <li key={index} className="flex items-start hover:text-blue-400 transition-colors duration-200">
                      <span className="opacity-60 mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--bg-accent)] p-6 rounded-xl border border-[var(--text)] shadow-sm hover:shadow-md hover:opacity-100 transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-400 opacity-60 mr-3"></span>
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
                    <li key={index} className="flex items-start hover:text-blue-400 transition-colors duration-200">
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

      {/* Animation Styles */}
      <style jsx>{`
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

export default About;