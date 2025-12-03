import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEME_KEY = 'almadegranja_theme';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-muted/60 dark:border-brand-muted/30 bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light shadow-soft transition-colors"
      aria-label="Cambiar modo de color"
    >
      <span className="transition-transform duration-300 ease-out" aria-hidden>
        {isDark ? <Moon size={22} strokeWidth={1.75} className="text-brand-text dark:text-brand-light" /> : <Sun size={22} strokeWidth={1.75} className="text-brand-text dark:text-brand-light" />}
      </span>
    </button>
  );
};

export default DarkModeToggle;
