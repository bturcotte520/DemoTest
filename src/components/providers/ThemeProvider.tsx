"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Mark as mounted after first render (localStorage is only available client-side)
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && stored !== theme) {
      // Use a timeout to defer the state update outside the effect body
      const id = setTimeout(() => setTheme(stored), 0);
      setMounted(true);
      return () => clearTimeout(id);
    }
    setMounted(true);
    return undefined;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Prevent hydration mismatch by rendering children with default theme until mounted
  // Always provide the context so useTheme() works
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
