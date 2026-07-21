import { Code2, Cpu, Wrench, Globe } from "lucide-react";
import type { ComponentType } from "react";

export interface SkillItem {
  name: Record<string, string>;
}

export interface SkillCategoryData {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: ComponentType<{ className?: string }>;
  accentColor: string;
  skills: SkillItem[];
}

export const SKILLS_CATEGORIES: SkillCategoryData[] = [
  {
    id: "programming",
    titleKey: "skills_prog_title",
    descriptionKey: "skills_prog_desc",
    icon: Code2,
    accentColor: "rgba(59, 130, 246, 0.15)",
    skills: [
      { name: { en: "HTML", uz: "HTML", ru: "HTML" } },
      { name: { en: "CSS", uz: "CSS", ru: "CSS" } },
      { name: { en: "JavaScript", uz: "JavaScript", ru: "JavaScript" } },
      { name: { en: "React", uz: "React", ru: "React" } },
      { name: { en: "Tailwind CSS", uz: "Tailwind CSS", ru: "Tailwind CSS" } },
      { name: { en: "Node.js", uz: "Node.js", ru: "Node.js" } },
    ],
  },
  {
    id: "technology",
    titleKey: "skills_tech_title",
    descriptionKey: "skills_tech_desc",
    icon: Cpu,
    accentColor: "rgba(6, 182, 212, 0.15)",
    skills: [
      { name: { en: "Artificial Intelligence tools", uz: "Sun'iy intellekt vositalari", ru: "Инструменты ИИ" } },
      { name: { en: "AI-assisted development", uz: "AI yordamida dasturlash", ru: "Разработка с помощью ИИ" } },
      { name: { en: "Prompt engineering", uz: "Prompt muhandisligi", ru: "Промпт-инжиниринг" } },
      { name: { en: "Learning modern technologies", uz: "Zamonaviy texnologiyalarni o'rganish", ru: "Изучение современных технологий" } },
    ],
  },
  {
    id: "languages",
    titleKey: "skills_lang_title",
    descriptionKey: "skills_lang_desc",
    icon: Globe,
    accentColor: "rgba(59, 130, 246, 0.12)",
    skills: [
      { name: { en: "Uzbek (Native)", uz: "O'zbekcha (Ona tili)", ru: "Узбекский (Родной)" } },
      { name: { en: "Russian (Fluent)", uz: "Ruscha (Erkin)", ru: "Русский (Свободно)" } },
      { name: { en: "English (IELTS 6.5)", uz: "Inglizcha (IELTS 6.5)", ru: "Английский (IELTS 6.5)" } },
    ],
  },
  {
    id: "other",
    titleKey: "skills_other_title",
    descriptionKey: "skills_other_desc",
    icon: Wrench,
    accentColor: "rgba(226, 232, 240, 0.15)",
    skills: [
      { name: { en: "Problem solving", uz: "Muammoni hal qilish", ru: "Решение задач" } },
      { name: { en: "Communication", uz: "Muloqot", ru: "Коммуникация" } },
      { name: { en: "Logistics", uz: "Logistika", ru: "Логистика" } },
      { name: { en: "Self-learning", uz: "Mustaqil o'rganish", ru: "Самообучение" } },
    ],
  },
];
