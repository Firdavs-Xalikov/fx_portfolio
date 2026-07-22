import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import type { Language } from "../../context/LanguageContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { scrollToElement } from "./SmoothScroll";
import { useTheme } from "../../context/ThemeContext";

const LANG_OPTIONS: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "uz", flag: "🇺🇿", label: "O'zbek" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANG_OPTIONS.find((l) => l.code === language) ?? LANG_OPTIONS[0];

  const NAV_LINKS = [
    { id: "hero", label: t("nav_home") },
    { id: "about", label: t("nav_about") },
    { id: "skills", label: t("nav_skills") },
    { id: "projects", label: t("nav_projects") },
    { id: "journey", label: t("nav_journey") },
    { id: "contact", label: t("nav_contact") },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Section observer & scroll position detection
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "journey", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToElement(id);
  };

  const handleSelectLang = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-[#05070A]/80 backdrop-blur-xl border-b border-white/[0.06] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div
              className="w-2.5 h-2.5 rounded-full transition-all duration-500"
              style={{
                backgroundColor: theme.accent,
                boxShadow: `0 0 10px ${theme.glow}`,
              }}
            />
            <span className="font-display font-semibold text-base tracking-tight text-[#D8E6F5] group-hover:text-[#4DA3FF] transition-colors">
              Firdavs Xalikov
            </span>
          </div>

          {/* Desktop Navigation Links with Soft Glow Highlight */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isLinkActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative font-sans text-xs uppercase tracking-widest py-1 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isLinkActive
                      ? "text-[#4DA3FF] font-semibold"
                      : "text-[#AFC3D8] hover:text-[#4DA3FF]"
                  }`}
                  style={
                    isLinkActive
                      ? {
                          textShadow: `0 0 14px rgba(77, 163, 255, 0.7)`,
                        }
                      : undefined
                  }
                >
                  {link.label}
                  {isLinkActive && (
                    <span
                      className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: theme.accent,
                        boxShadow: `0 0 8px ${theme.glow}`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Area: Theme Switcher + Language Selector + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme & 3D Selector */}
            <ThemeSwitcher />

            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-label={`Select Language. Current language: ${currentLang.label}`}
                aria-expanded={langDropdownOpen}
                className="flex items-center gap-2 px-3.5 py-1.5 border border-white/[0.08] bg-white/[0.03] text-[#F0F7FF] font-mono text-xs rounded-full hover:border-[#4DA3FF]/40 hover:text-[#4DA3FF] transition-all cursor-pointer"
              >
                <span className="text-sm leading-none">{currentLang.flag}</span>
                <span className="uppercase font-medium text-[#AFC3D8]">{currentLang.code}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#71839A] transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 border border-white/10 bg-[#080B10]/95 shadow-2xl rounded-xl overflow-hidden animate-[fadeIn_0.15s_ease-out] z-[60]">
                  {LANG_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => handleSelectLang(opt.code)}
                      aria-label={`Switch language to ${opt.label}`}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 font-sans text-xs transition-colors cursor-pointer ${
                        language === opt.code
                          ? "bg-white/10 text-[#4DA3FF] font-semibold"
                          : "text-[#AFC3D8] hover:bg-white/5 hover:text-[#4DA3FF]"
                      }`}
                    >
                      <span className="text-base leading-none">{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="p-2 border border-white/10 text-[#F0F7FF] rounded-full bg-white/5 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#05070A]/95 backdrop-blur-2xl flex flex-col justify-center px-8 py-20 lg:hidden">
          <div className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => {
              const isLinkActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-display text-2xl font-medium tracking-tight transition-colors py-2 cursor-pointer ${
                    isLinkActive ? "text-[#4DA3FF] font-semibold" : "text-[#AFC3D8] hover:text-[#4DA3FF]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
