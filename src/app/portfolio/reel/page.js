"use client";

import { useEffect, useMemo, useState } from "react";

export default function Reel() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const stats = useMemo(
    () => [
      { value: "5+", label: "Full-Stack Projects" },
      { value: "30%", label: "Performance Gain" },
      { value: "40%", label: "Engagement Boost" },
      { value: "90%", label: "AI Accuracy" },
    ],
    []
  );

  const techStack = useMemo(
    () => [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "GSAP",
      "Three.js",
    ],
    []
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        backgroundColor: "rgb(var(--bg-color-rgb))",
        color: "var(--text-color)",
      }}
    >
      {/* Theme Toggle */}
      <button
        onClick={handleThemeToggle}
        className="absolute top-6 right-6 px-5 py-2 rounded-full font-medium border transition hover:scale-105"
        style={{
          borderColor: "var(--border-color)",
        }}
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="max-w-6xl w-full text-center">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl border backdrop-blur-md"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "rgba(var(--bg-color-rgb),0.5)",
              }}
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border text-sm font-medium"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "rgba(var(--bg-color-rgb),0.4)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="px-8 py-3 rounded-full font-semibold border transition hover:scale-105"
            style={{ borderColor: "var(--border-color)" }}
          >
            Explore Projects
          </button>
          <button
            className="px-8 py-3 rounded-full font-semibold text-white transition hover:scale-105"
            style={{ backgroundColor: "var(--accent-color)" }}
          >
            View Resume
          </button>
        </div>

        <p className="mt-10 text-lg opacity-70 max-w-2xl mx-auto">
          Building scalable MERN applications with clean UI, optimized
          performance, and production-ready architecture.
        </p>
      </div>
    </section>
  );
}
