// utils/theme.js
export const getCurrentTheme = () => {
  const theme = localStorage.getItem('theme');
  return theme === 'dark' ? 'dark' : 'light'; // Force light as default
};

export const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme); 
  localStorage.setItem('theme', theme);
};

export const toggleTheme = () => {
  const current = getCurrentTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  return newTheme;
};
