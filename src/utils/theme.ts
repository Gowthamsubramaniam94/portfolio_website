import { ThemeMode } from '../types';

export const getInitialTheme = (): ThemeMode => {
  // Check if user has a stored preference
  const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
  if (savedTheme) {
    return savedTheme;
  }
  
  // Check if user has a system preference
  const userPrefersDark = window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  return userPrefersDark ? 'dark' : 'light';
};

export const setThemeClass = (theme: ThemeMode): void => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Store preference for next visit
  localStorage.setItem('theme', theme);
};