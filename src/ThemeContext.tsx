import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { ThemeVersion } from './theme';

interface ThemeContextType {
  theme: ThemeVersion;
  setTheme: (theme: ThemeVersion) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialTheme = (): ThemeVersion => {
    const savedTheme = localStorage.getItem('theme') as ThemeVersion | null;
    return savedTheme || 'accenture';
  };

  const [theme, setTheme] = useState<ThemeVersion>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Update data-theme attribute on html element for CSS
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'accenture' ? 'bbva' : 'accenture');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
