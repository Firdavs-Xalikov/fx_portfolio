export interface ProjectItem {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  tags: string[];
  image: string;
  imageWebp?: string;
  link: string;
  github: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "readforge-ai",
    title: {
      en: "ReadForge AI",
      uz: "ReadForge AI",
      ru: "ReadForge AI",
    },
    description: {
      en: "An AI-powered English reading practice platform built with Gemini AI. Users can practice reading comprehension with AI-generated stories, track their progress, build vocabulary, and improve their English skills through interactive exercises. Features include adaptive difficulty levels, progress analytics, and a gamified learning experience.",
      uz: "Gemini AI asosida yaratilgan ingliz tilida o'qish amaliyoti platformasi. Foydalanuvchilar sun'iy intellekt tomonidan yaratilgan hikoyalar bilan o'qish tushunishini mashq qilishlari, o'z taraqqiyotlarini kuzatishlari, lug'atlarini boyitishlari va interaktiv mashqlar orqali ingliz tili ko'nikmalarini oshirishlari mumkin.",
      ru: "Платформа для практики чтения на английском языке на базе Gemini AI. Пользователи могут практиковать понимание прочитанного с помощью историй, созданных ИИ, отслеживать свой прогресс, пополнять словарный запас и улучшать навыки английского языка через интерактивные упражнения.",
    },
    tags: ["Node.js", "Express", "Gemini AI", "SQLite", "Capacitor", "JavaScript"],
    image: "/readforge-preview.png",
    imageWebp: "/readforge-preview.webp",
    link: "https://readforge.uz",
    github: "https://github.com/Firdavs-Xalikov/ReadForge-AI",
  },
  {
    id: "fx-biography",
    title: {
      en: "FX Biography",
      uz: "FX Biography",
      ru: "FX Biography",
    },
    description: {
      en: "An interactive story-driven digital biography structured around abstract visual metaphors and emotional questions. Built with a 3D WebGL particle space, custom terminal commands, and an interactive dialogue agent to present academic and engineering milestones.",
      uz: "Mavhum vizual metaforalar va hissiy savollar asosida yaratilgan interaktiv raqamli biografiya. Akademik va muhandislik yutuqlarini taqdim etish uchun 3D WebGL zarralar fazosi, maxsus terminal buyruqlari va interaktiv muloqot agenti bilan jihozlangan.",
      ru: "Интерактивная цифровая автобиография, построенная на абстрактных визуальных метафорах и вопросах. Включает трехмерное космическое пространство частиц WebGL, кастомные терминальные команды и диалогового агента для презентации академических и инженерных вех.",
    },
    tags: ["Next.js", "React", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "/biography-preview.png",
    imageWebp: "/biography-preview.webp",
    link: "https://fx-biography.vercel.app",
    github: "https://github.com/Firdavs-Xalikov/fx_biography",
  },
];
