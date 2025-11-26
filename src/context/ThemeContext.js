// contexts/ThemeContext.js
'use client';

import { createContext, useContext, useEffect, useState} from 'react';
import { gsap } from 'gsap';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Apply theme transition with GSAP - Exact black and white colors
    gsap.to(document.documentElement, {
      duration: 0.3,
      css: {
        '--bg-color': newTheme === 'dark' ? 'rgba(0, 0, 0)' : 'rgba(255, 255, 255)',
        '--text-color': newTheme === 'dark' ? '#ffffff' : '#000000',
        '--border-color': newTheme === 'dark' ? 'rgba(255, 255, 255)' : 'rgba(0, 0, 0)',
        '--backdrop-blur': '10px'
      },
      ease: "power2.inOut",
      onStart: () => {
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, scrolled }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};