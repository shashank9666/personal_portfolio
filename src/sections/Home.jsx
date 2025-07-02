import { useRef, useEffect } from 'react';
import Home_Scene from "../components/scene/Home_Scene";

const Home = () => {
  const sectionRef = useRef(null);
  const textBlockRef = useRef(null);
  const sceneRef = useRef(null);
  const ctaRef = useRef(null);

  // Initialize animations
  useEffect(() => {
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
    animateElement(textBlockRef.current, 200);
    animateElement(sceneRef.current, 400);
    animateElement(ctaRef.current, 600);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Subtle animated background circles */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 2}px`,
              height: `${Math.random() * 12 + 2}px`,
              backgroundColor: "var(--text)",
              opacity: 0.1,
              animation: `float-slow ${Math.random() * 10 + 10}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Left Text Block */}
        <div ref={textBlockRef} className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-block px-4 py-2 mt-4 mb-6 border border-[var(--text)] opacity-80 text-sm uppercase tracking-widest font-medium">
            MERN Stack Developer
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none mb-6 tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-blue-500">Shashank Shetty</span>
          </h1>
          <p className="text-lg sm:text-xl opacity-80 mb-10 max-w-2xl tracking-wide leading-relaxed">
            I craft pixel-perfect, high-performance web experiences using modern web technologies. 
            Passionate about creating immersive, interactive applications with clean code and 
            thoughtful architecture.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="rounded-xl inline-block px-8 py-3 border border-[var(--text)] text-center font-medium hover:bg-[var(--text)] hover:text-[var(--bg)] transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-xl inline-block px-8 py-3 bg-[var(--text)] text-[var(--bg)] font-medium border border-[var(--text)] hover:bg-transparent hover:text-[var(--text)] transition transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right 3D Showcase */}
        <div ref={sceneRef} className="flex-1 w-full h-[50vh] lg:h-[70vh] flex items-center justify-center">
          <Home_Scene />
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

export default Home;