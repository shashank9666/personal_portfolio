import Home_Scene from "../components/scene/Home_Scene";
import { FaReact, FaNodeJs, FaCss3Alt, FaMagic } from "react-icons/fa";
import { SiExpress, SiMongodb, SiThreedotjs } from "react-icons/si";

const Home = () => {
  const techStack = [
    { name: "React", icon: <FaReact className="mr-2 text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="mr-2 text-green-600 " /> },
    { name: "Express", icon: <SiExpress className="mr-2 " /> },
    { name: "MongoDB", icon: <SiMongodb className="mr-2 text-green-900  " /> },
    { name: "Tailwind", icon: <FaCss3Alt className="mr-2 text-blue-600" /> },
    { name: "React Three fiber + Three js", icon: <SiThreedotjs className="mr-2" /> },
    { name: "GSAP", icon: <FaMagic className="mr-2" /> }, // generic icon
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] overflow-hidden"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Subtle animated background circles */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 2}px`,
              height: `${Math.random() * 12 + 2}px`,
              backgroundColor: "var(--text)",
              opacity: 0.1,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className=" relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 py-16 ">
        {/* Left Text Block */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-block px-4 py-2 mt-4 mb-6 border border-current opacity-80 text-sm uppercase tracking-widest font-medium">
            MERN Stack Developer
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none mb-6 tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-blue-500">Shashank Shetty</span>
          </h1>
          <p className="text-lg sm:text-xl opacity-80 mb-10 max-w-2xl tracking-wide leading-relaxed">
            I craft pixel-perfect, high-performance web experiences using{" "}
            <b>MERN</b>, <b>React Three Fiber</b>, and modern tools. Passionate
            about turning ideas into scalable, interactive, and immersive web
            apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="rounded-xl inline-block px-8 py-3 border border-current text-center font-medium hover:bg-[var(--text)] hover:text-[var(--bg)] transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-xl inline-block px-8 py-3 bg-[var(--text)] text-[var(--bg)] font-medium border border-current hover:bg-transparent hover:text-[var(--text)] transition transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start opacity-90">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center rounded-2xl px-4 py-2 border border-current text-sm uppercase font-medium tracking-wide hover:bg-[var(--text)] hover:text-[var(--bg)] transition"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right 3D Showcase */}
        <div className="flex-1 w-full h-[50vh] lg:h-[70vh] flex items-center justify-center">
          <Home_Scene />
        </div>
      </div>
    </section>
  );
};

export default Home;
