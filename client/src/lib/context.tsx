import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "fr" | "en";
type Theme = "light" | "dark" | "high-contrast";
type FontSize = "normal" | "large" | "xl";

interface AppSettings {
  language: Language;
  theme: Theme;
  fontSize: FontSize;
  dyslexiaMode: boolean;
  kidsMode: boolean;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  setFontSize: (size: FontSize) => void;
  toggleDyslexiaMode: () => void;
  toggleKidsMode: () => void;
}

const SettingsContext = createContext<AppSettings | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [dyslexiaMode, setDyslexiaMode] = useState(false);
  const [kidsMode, setKidsMode] = useState(false);

  useEffect(() => {
    // Apply classes to body
    const body = document.body;
    body.classList.remove("dark", "high-contrast", "dyslexia-mode");
    
    if (theme === "dark") body.classList.add("dark");
    if (theme === "high-contrast") body.classList.add("high-contrast", "dark"); // High contrast often implies dark/high contrast
    
    if (dyslexiaMode) body.classList.add("dyslexia-mode");

    // Font size handling via CSS variable on root
    const root = document.documentElement;
    if (fontSize === "normal") root.style.fontSize = "16px";
    if (fontSize === "large") root.style.fontSize = "20px";
    if (fontSize === "xl") root.style.fontSize = "24px";
    
  }, [theme, dyslexiaMode, fontSize]);

  return (
    <SettingsContext.Provider
      value={{
        language,
        theme,
        fontSize,
        dyslexiaMode,
        kidsMode,
        setLanguage,
        setTheme,
        setFontSize,
        toggleDyslexiaMode: () => setDyslexiaMode(prev => !prev),
        toggleKidsMode: () => setKidsMode(prev => !prev),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
