"use client";

import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiGrid,
  FiFilm,
  FiMail,
  FiMenu,
  FiChevronLeft,
} from "react-icons/fi";

const sidebarLinks = [
  { id: "home", label: "Home", icon: <FiHome /> },
  { id: "about", label: "About", icon: <FiUser /> },
  { id: "projects", label: "Projects", icon: <FiGrid /> },
  { id: "reel", label: "Reel", icon: <FiFilm /> },
  { id: "contact", label: "Contact", icon: <FiMail /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      suppressHydrationWarning
      className={`hidden sm:flex flex-col fixed top-24 left-4 sm:left-8 h-[calc(100vh-160px)]
      z-40 transition-all duration-300 ease-in-out
      border rounded-2xl shadow-2xl p-4 overflow-hidden
      ${collapsed ? "w-16" : "w-64"}`}
      style={{
        backgroundColor: "rgba(var(--bg-color-rgb), 0.2)", // or your current bg
        borderColor: "var(--border-color)",
        borderWidth: "1px", // <-- add this to match header border thickness
        color: "var(--text-color)",
        backdropFilter: "blur(var(--backdrop-blur))",
        WebkitBackdropFilter: "blur(var(--backdrop-blur))",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 h-8">
        <h1
          className={`font-bold text-xl px-2 whitespace-nowrap transition-all duration-300 ${
            collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={collapsed ? "true" : "false"}
          style={{ color: "var(--text-color)" }}
        >
          Shashank Shetty
        </h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-xl hover:bg-black/10 transition-all duration-300 shrink-0 ${
            collapsed ? "mx-auto" : ""
          }`}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Open sidebar" : "Collapse sidebar"}
          style={{ color: "var(--text-color)" }}
        >
          {collapsed ? <FiMenu size={20} /> : <FiChevronLeft size={20} />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-2" aria-label="Primary">
        {sidebarLinks.map((link) => (
          <div
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection(link.id)}
            className={`flex items-center rounded-xl hover:bg-black/10 transition-all duration-300 group h-12 cursor-pointer ${
              collapsed ? "justify-center px-0" : "px-3"
            }`}
            style={{ color: "var(--text-color)" }}
          >
            <span
              className={`flex items-center justify-center shrink-0 transition-all duration-300 ${
                collapsed ? "w-full" : "w-8"
              }`}
              style={{ color: "var(--text-color)" }}
            >
              {link.icon}
            </span>
            <span
              className={`font-medium whitespace-nowrap transition-all duration-300 ${
                collapsed
                  ? "opacity-0 w-0 pointer-events-none"
                  : "opacity-100 w-auto ml-3"
              }`}
              aria-hidden={collapsed ? "true" : "false"}
              style={{ color: "var(--text-color)" }}
            >
              {link.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Spacer */}
      <div className="grow" />
    </aside>
  );
}
