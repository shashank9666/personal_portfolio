'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme, scrolled } = useTheme();

  return (
    <header
      className={[
        "fixed top-4 left-1/2 transform -translate-x-1/2",
        "w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)]",
        "rounded-2xl z-50 px-6 py-3 flex items-center justify-between",
        "border shadow-lg transition-all",
        scrolled ? "shadow-2xl" : "",
      ].join(" ")}
      style={{
        // Glassmorphism: white or black translucent background with opacity
        backgroundColor:
          theme === 'light'
            ? 'rgba(255, 255, 255, 0.2)'  // white with 20% opacity
            : 'rgba(0, 0, 0, 0.3)',        // black with 30% opacity
        color: "var(--text-color)",
        borderColor: "var(--border-color)",
        backdropFilter: "blur(var(--backdrop-blur))",
        WebkitBackdropFilter: "blur(var(--backdrop-blur))",
        boxShadow: scrolled ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : undefined,
      }}
    >
      <div className="font-black text-2xl select-none" style={{ color: 'var(--text-color)' }}>
        3D Portfolio
      </div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-xl border bg-transparent font-semibold hover:opacity-80 transition"
        aria-label="Toggle theme"
        style={{
          borderColor: "var(--border-color)",
          color: "var(--text-color)"
        }}
      >
        {theme === 'light' ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
      </button>
    </header>
  );
}
