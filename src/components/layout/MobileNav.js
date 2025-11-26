"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { FiHome, FiUser, FiGrid, FiFilm, FiMail } from "react-icons/fi";

const links = [
  { id: "home", label: "Home", icon: <FiHome /> },
  { id: "about", label: "About", icon: <FiUser /> },
  { id: "projects", label: "Projects", icon: <FiGrid /> },
  { id: "reel", label: "Reel", icon: <FiFilm /> },
  { id: "contact", label: "Contact", icon: <FiMail /> },
];

export default function MobileNav() {
  const [active, setActive] = useState("home");
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const observerRef = useRef(null);

  const goTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }, []);

  // intersection observer to detect active section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ioOptions = {
      root: null,
      // triggers when section is near top of viewport
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          setActive(id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, ioOptions);

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  // keyboard left/right navigation
  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        const current = links.findIndex((l) => l.id === active);
        if (current === -1) return;
        const next =
          e.key === "ArrowRight"
            ? (current + 1) % links.length
            : (current - 1 + links.length) % links.length;
        goTo(links[next].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  return (
    <div className="sm:hidden">
      <nav
        ref={containerRef}
        aria-label="Mobile bottom navigation"
        className="fixed left-4 right-4 bottom-6 z-50"
        style={{
          borderRadius: "18px",
          backgroundColor: "rgba(var(--bg-color-rgb), 0.18)",
          border: "1px solid var(--border-color)",
          color: "var(--text-color)",
          backdropFilter: "blur(var(--backdrop-blur))",
          WebkitBackdropFilter: "blur(var(--backdrop-blur))",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
        }}
      >
        <div className="relative mx-3">
          <div className="px-2 pt-3" style={{ paddingBottom: "env(safe-area-inset-bottom, 12px)" }}>
            <ul className="flex items-center justify-between gap-1">
              {links.map((link, idx) => (
                <li key={link.id} ref={(el) => (itemRefs.current[idx] = el)} className="flex-1">
                  <button
                    onClick={() => goTo(link.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        goTo(link.id);
                      }
                    }}
                    aria-current={active === link.id ? "page" : undefined}
                    aria-label={link.label}
                    className={`w-full flex flex-col items-center gap-1 py-2 px-1 transition-colors focus:outline-none rounded-lg`}
                    style={{
                      color: "var(--text-color)",
                      opacity: active === link.id ? 1 : 0.65,
                      fontWeight: active === link.id ? 600 : 500,
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <span className="text-xl" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span className="text-[11px] leading-none select-none">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
