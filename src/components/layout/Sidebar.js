'use client';

import { useState } from 'react';
import { FiHome, FiUser, FiGrid, FiFilm, FiMail, FiMenu, FiChevronLeft } from 'react-icons/fi';

const sidebarLinks = [
  { href: '/portfolio', label: 'Home', icon: <FiHome /> },
  { href: '/portfolio/about', label: 'About', icon: <FiUser /> },
  { href: '/portfolio/projects', label: 'Projects', icon: <FiGrid /> },
  { href: '/portfolio/reel', label: 'Reel', icon: <FiFilm /> },
  { href: '/portfolio/contact', label: 'Contact', icon: <FiMail /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      suppressHydrationWarning
      className={`hidden sm:flex flex-col fixed top-24 left-8 h-[calc(100vh-160px)]
      z-40 transition-all duration-500 ease-in-out
      bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl
      p-4 overflow-hidden
      ${collapsed ? 'w-16' : 'w-64'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 h-8">
        <h1
          className={`font-bold text-xl text-black px-2 whitespace-nowrap transition-opacity duration-300 ${
            collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-hidden={collapsed ? 'true' : 'false'}
        >
          Shashank Shetty
        </h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-xl hover:bg-black/10 transition-all duration-300 shrink-0 ${
            collapsed ? 'mx-auto' : ''
          }`}
          aria-expanded={!collapsed}
          aria-label={collapsed ? 'Open sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <FiMenu size={20} /> : <FiChevronLeft size={20} />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-2" aria-label="Primary">
        {sidebarLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center rounded-xl text-white hover:bg-black/10 transition-all duration-300 group h-12"
            title={link.label}
          >
            {/* Icon */}
            <span className="text-xl flex items-center justify-center w-6 h-6 shrink-0 relative left-1">
              {link.icon}
            </span>
            {/* Label */}
            <span
              className={`font-medium whitespace-nowrap transition-opacity duration-300 ml-3 ${
                collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-hidden={collapsed ? 'true' : 'false'}
            >
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Spacer */}
      <div className="grow" />

      {/* Footer */}
      <div
        className={`text-xs text-black/50 transition-all duration-300 mt-4 ${
          collapsed ? 'text-center' : 'px-2'
        }`}
        aria-hidden={collapsed ? 'true' : 'false'}
      >
        <span className={collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}>
          © Shashank Shetty
        </span>
      </div>
    </aside>
  );
}
