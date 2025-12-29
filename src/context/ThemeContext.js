// contexts/ThemeContext.js
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  /* ----------------------------------
     Restore theme on page reload
  -----------------------------------*/
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme);

    document.documentElement.setAttribute('data-theme', savedTheme);

    // Apply CSS variables immediately (NO animation on load)
    document.documentElement.style.setProperty(
      '--bg-color',
      savedTheme === 'dark' ? 'rgba(0, 0, 0)' : 'rgba(255, 255, 255)'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      savedTheme === 'dark' ? '#ffffff' : '#000000'
    );
    document.documentElement.style.setProperty(
      '--border-color',
      savedTheme === 'dark' ? 'rgba(255, 255, 255)' : 'rgba(0, 0, 0)'
    );
    document.documentElement.style.setProperty('--backdrop-blur', '10px');
  }, []);

  /* ----------------------------------
     Scroll detection
  -----------------------------------*/
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ----------------------------------
     Toggle theme with GSAP animation
  -----------------------------------*/
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    gsap.to(document.documentElement, {
      duration: 0.35,
      css: {
        '--bg-color': newTheme === 'dark'
          ? 'rgba(0, 0, 0)'
          : 'rgba(255, 255, 255)',
        '--text-color': newTheme === 'dark'
          ? '#ffffff'
          : '#000000',
        '--border-color': newTheme === 'dark'
          ? 'rgba(255, 255, 255)'
          : 'rgba(0, 0, 0)',
        '--backdrop-blur': '10px',
      },
      ease: 'power2.inOut',
      onStart: () => {
        document.documentElement.setAttribute('data-theme', newTheme);
      },
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
