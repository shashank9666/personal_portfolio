"use client";

import { useState, useEffect } from "react";
import Home from "@/components/r3f_components/Home/page.js";
import About from "./about/page";
import Projects from "./projects/page";
import Reel from "./reel/page";
import Contact from "./contact/page";

export default function PortfolioHome() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const main = document.getElementById("scroll-container");
    if (!main) return;

    const onScroll = () => {
      setShowScroll(main.scrollTop > 200);
    };

    main.addEventListener("scroll", onScroll);
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const main = document.getElementById("scroll-container");
    main?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main
        id="scroll-container"
        className="w-screen h-screen overflow-y-scroll scroll-smooth"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          marginLeft: "auto", // Adjust if Sidebar occupies fixed space on left
        }}
      >
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Home />
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <About />
        </section>
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <Projects />
        </section>
        <section
          id="reel"
          className="min-h-screen flex items-center justify-center"
        >
          <Reel />
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <Contact />
        </section>
      </main>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="mb-16"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "3.5rem",
          height: "3.5rem",
          fontSize: "1.8rem",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          opacity: showScroll ? 1 : 0,
          pointerEvents: showScroll ? "auto" : "none",
          transition: "opacity 0.3s ease",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ↑
      </button>
    </>
  );
}
