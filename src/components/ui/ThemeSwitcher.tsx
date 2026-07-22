import { useState, useRef, useEffect } from "react";
import { Palette, Box, ChevronDown, Sparkles } from "lucide-react";
import { useTheme, THEMES, type ThemeId } from "../../context/ThemeContext";

const MODEL_NAMES = [
  "Glass Sphere",
  "Chrome Shape",
  "AI Chip",
  "Crystal Prism",
  "Metallic Ring",
  "Minimal Robot",
];

export default function ThemeSwitcher() {
  const { theme, themeId, setThemeId, activeModel, setActiveModel } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"themes" | "models">("themes");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Floating Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Theme & 3D Model Explorer"
        className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg group"
        style={{
          boxShadow: `0 0 16px ${theme.glow}25`,
        }}
      >
        <div
          className="w-3.5 h-3.5 rounded-full transition-colors duration-500 shrink-0"
          style={{
            backgroundColor: theme.accent,
            boxShadow: `0 0 8px ${theme.glow}`,
          }}
        />
        <span className="font-mono text-xs text-[#D8E6F5] font-medium tracking-wide">
          {theme.name}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#6B7F99] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Luxury Theme & Model Modal Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-80 rounded-2xl border border-white/10 bg-[#080B10]/95 backdrop-blur-2xl shadow-2xl p-4 z-[70] animate-[fadeIn_0.2s_ease-out]">
          {/* Header Tabs */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveTab("themes")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "themes"
                    ? "bg-white/10 text-[#D8E6F5] font-semibold"
                    : "text-[#8DA3B8] hover:text-[#D8E6F5]"
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-accent" />
                Themes (7)
              </button>
              <button
                onClick={() => setActiveTab("models")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "models"
                    ? "bg-white/10 text-[#D8E6F5] font-semibold"
                    : "text-[#8DA3B8] hover:text-[#D8E6F5]"
                }`}
              >
                <Box className="w-3.5 h-3.5 text-accent" />
                3D Models (6)
              </button>
            </div>
          </div>

          {/* Theme Selector Tab */}
          {activeTab === "themes" && (
            <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
              {(Object.keys(THEMES) as ThemeId[]).map((id) => {
                const t = THEMES[id];
                const isSelected = themeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => setThemeId(id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? "border-white/30 bg-white/[0.08]"
                        : "border-transparent hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full shrink-0"
                        style={{
                          backgroundColor: t.accent,
                          boxShadow: `0 0 10px ${t.glow}`,
                        }}
                      />
                      <div>
                        <p className="text-xs font-medium text-[#D8E6F5]">{t.name}</p>
                        <p className="text-[10px] text-[#8DA3B8]">{t.feeling.split(",")[0]}</p>
                      </div>
                    </div>
                    {isSelected && <Sparkles className="w-3.5 h-3.5 text-accent" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* 3D Model Selector Tab */}
          {activeTab === "models" && (
            <div className="grid grid-cols-2 gap-2">
              {MODEL_NAMES.map((name, idx) => {
                const isSelected = activeModel === idx;
                return (
                  <button
                    key={name}
                    onClick={() => setActiveModel(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-white/30 bg-white/[0.08] text-[#D8E6F5]"
                        : "border-white/5 hover:border-white/20 bg-white/[0.02] text-[#8DA3B8] hover:text-[#D8E6F5]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Box className={`w-3.5 h-3.5 ${isSelected ? "text-accent" : "text-[#6B7F99]"}`} />
                      <span className="text-xs font-medium">{name}</span>
                    </div>
                    <p className="text-[9px] text-[#6B7F99]">Model #{idx + 1}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
