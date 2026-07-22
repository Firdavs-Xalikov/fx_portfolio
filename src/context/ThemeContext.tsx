import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeId =
  | "midnight-blue"
  | "purple-luxury"
  | "emerald-finance"
  | "titanium-gold"
  | "ice-blue"
  | "crimson-performance"
  | "slate-minimal";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  feeling: string;
  bg: string;
  sec: string;
  text: string;
  secText: string;
  accent: string;
  glow: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  "midnight-blue": {
    id: "midnight-blue",
    name: "Midnight Blue",
    feeling: "AI startup, Apple, Vercel, technology",
    bg: "#05070A",
    sec: "#0B1424",
    text: "#D8E6F5",
    secText: "#8DA3B8",
    accent: "#4DA3FF",
    glow: "#5D7CFF",
  },
  "purple-luxury": {
    id: "purple-luxury",
    name: "Purple Luxury",
    feeling: "Creative AI, premium software, innovation",
    bg: "#06060A",
    sec: "#11111A",
    text: "#E4DFF7",
    secText: "#9E94B8",
    accent: "#8B5CF6",
    glow: "#A855F7",
  },
  "emerald-finance": {
    id: "emerald-finance",
    name: "Emerald Finance",
    feeling: "Finance, business, enterprise",
    bg: "#050806",
    sec: "#0C1512",
    text: "#D7F3EA",
    secText: "#8AA89D",
    accent: "#00D084",
    glow: "#34D399",
  },
  "titanium-gold": {
    id: "titanium-gold",
    name: "Titanium Gold",
    feeling: "Luxury, Rolex, executive",
    bg: "#070707",
    sec: "#111111",
    text: "#E8DCC0",
    secText: "#B9AA88",
    accent: "#D4AF37",
    glow: "#FFD166",
  },
  "ice-blue": {
    id: "ice-blue",
    name: "Ice Blue",
    feeling: "Cybersecurity, futuristic technology",
    bg: "#04070C",
    sec: "#0A1420",
    text: "#D5F3FF",
    secText: "#8CB4C9",
    accent: "#38BDF8",
    glow: "#67E8F9",
  },
  "crimson-performance": {
    id: "crimson-performance",
    name: "Crimson Performance",
    feeling: "Power, speed, premium",
    bg: "#080506",
    sec: "#120A0B",
    text: "#F3DCDC",
    secText: "#B48A8A",
    accent: "#EF4444",
    glow: "#F87171",
  },
  "slate-minimal": {
    id: "slate-minimal",
    name: "Slate Minimal",
    feeling: "Linear, Notion, modern SaaS",
    bg: "#0B0F14",
    sec: "#141A22",
    text: "#D1D7E0",
    secText: "#8892A0",
    accent: "#7C8CFF",
    glow: "#5B8CFF",
  },
};

interface ThemeContextType {
  theme: ThemeConfig;
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
  activeModel: number;
  setActiveModel: (modelIndex: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<ThemeId>("midnight-blue");
  const [activeModel, setActiveModel] = useState<number>(0);

  const theme = THEMES[themeId];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-bg", theme.bg);
    root.style.setProperty("--theme-sec", theme.sec);
    root.style.setProperty("--theme-text", theme.text);
    root.style.setProperty("--theme-sec-text", theme.secText);
    root.style.setProperty("--theme-accent", theme.accent);
    root.style.setProperty("--theme-glow", theme.glow);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeId,
        setThemeId,
        activeModel,
        setActiveModel,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
