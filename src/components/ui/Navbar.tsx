import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/useLanguage";
import type { Language } from "../../context/LanguageContext";

const LANG_OPTIONS: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "uz", flag: "🇺🇿", label: "O'zbek" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANG_OPTIONS.find((l) => l.code === language) ?? LANG_OPTIONS[0];

  const NAV_LINKS = [
    { id: "hero", label: t("nav_home") },
    { id: "about", label: t("nav_about") },
    { id: "journey", label: t("nav_journey") },
    { id: "skills", label: t("nav_skills") },
    { id: "projects", label: t("nav_projects") },
    { id: "achievements", label: t("nav_achievements") },
    { id: "goals", label: t("nav_goals") },
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

  useEffect(() => {
    const sectionIds = ["hero", "about", "timeline", "skills", "projects", "achievements", "goals", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectLang = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
        <nav className="w-full max-w-6xl flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl px-4 py-3 shadow-2xl">
          {/* Logo / Brand */}
          <div 
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="font-display font-extrabold text-blue-400 w-8 h-8 rounded-xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-sm transition-all group-hover:scale-105 group-hover:bg-blue-500/20">
              FX
            </div>
            <span className="font-display font-semibold text-sm text-slate-100 tracking-wide hidden sm:inline">Firdavs Xalikov</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isLinkActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative text-[11px] tracking-wider px-2.5 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    isLinkActive ? "text-blue-400 font-semibold" : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                  {isLinkActive && (
                    <span className="absolute left-2.5 right-2.5 bottom-1 h-[2px] bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Area: Flag Dropdown + Mobile Menu */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Flag Dropdown Selector — always visible */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-label={`Select Language. Current language: ${currentLang.label}`}
                aria-expanded={langDropdownOpen}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              >
                <span className="text-lg leading-none">{currentLang.flag}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown List */}
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden animate-[fadeIn_0.15s_ease-out] z-[60]">
                  {LANG_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => handleSelectLang(opt.code)}
                      aria-label={`Switch language to ${opt.label}`}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors cursor-pointer ${
                        language === opt.code
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="text-xl leading-none">{opt.flag}</span>
                      <span className="font-medium text-xs tracking-wide">{opt.label}</span>
                      {language === opt.code && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                      )}
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
                className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white bg-white/5 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/97 backdrop-blur-xl flex flex-col justify-center px-8 py-20 lg:hidden">
          <div className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => {
              const isLinkActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-2xl font-display font-medium tracking-wide transition-colors py-2 cursor-pointer ${
                    isLinkActive ? "text-blue-400" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="mt-8 flex justify-center flex-col items-center gap-4">
              {/* Mobile language selector */}
              <div className="flex items-center gap-3">
                {LANG_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => setLanguage(opt.code)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                      language === opt.code
                        ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                        : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="text-xl leading-none">{opt.flag}</span>
                    <span className="text-xs font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

