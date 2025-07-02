import { useState, useEffect } from 'react';
import { getCurrentTheme, applyTheme, toggleTheme } from '../../utils/theme';

const sections = ['home', 'about', 'projects'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const onScroll = () => {
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollOffset = window.scrollY + rect.top - 70;
      window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div
        className="mx-2 mt-2 rounded-2xl border"
        style={{ background: 'var(--nav-bg)', color: 'var(--nav-text)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <button className="text-xl font-bold" onClick={() => smoothScrollTo('home')}>
            3D Portfolio
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => smoothScrollTo(id)}
                className={`relative px-3 py-2 transition-colors ${
                  activeSection === id ? 'font-semibold text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Theme & Mobile Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTheme(toggleTheme())}
              className="p-2 border rounded-full"
              style={{ borderColor: 'var(--nav-text)' }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="flex flex-col px-4 py-2 border-t"
            style={{ borderColor: 'var(--border-color)' }}
          >
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => smoothScrollTo(id)}
                className={`py-2 text-left ${
                  activeSection === id ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
