/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(null); // Başlangıçda `null`, çünki yüklənmə gözləyirik

  // Tema yükləndikdən sonra işə düşəcək
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Əgər `localStorage`-də tema yoxdursa, sistemin mövcud temasına uyğun
      const systemPref = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemPref);
      localStorage.setItem("theme", systemPref ? "dark" : "light");
    }
  }, []);

  // Tema dəyişəndə class-ları dəyişmək və `localStorage`-i güncəlləmək
  useEffect(() => {
    if (isDarkMode === null) return; // `isDarkMode` hələ təyin olunmayıbsa, heç nə etmə

    document.body.classList.remove(isDarkMode ? "light-mode" : "dark-mode");
    document.body.classList.add(isDarkMode ? "dark-mode" : "light-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Sistem teması dəyişəndə dinləmək
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // `isDarkMode` null olduğu üçün, aşağıdakı renderi yalnız `isDarkMode` təyin olunandan sonra həyata keçiririk.
  if (isDarkMode === null) return null;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
