'use client';

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-4 left-0 mx-8 w-[calc(100vw-6rem)] rounded-2xl z-50",
        "px-6 py-3 flex items-center justify-between",
        "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all",
        scrolled ? "shadow-2xl border-white/30" : "",
      ].join(" ")}
    >
      <div className="font-black text-2xl text-white select-none">
        3D Portfolio
      </div>
      <button
        className="ml-auto px-4 py-2 rounded-xl border border-black/10 bg-black/5 text-black font-semibold hover:bg-black/10 transition"
        aria-label="Toggle theme"
      >
        Theme
      </button>
    </header>
  );
}
