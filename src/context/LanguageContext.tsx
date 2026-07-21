import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./languageContextInstance";
import type { Language } from "./languageContextInstance";
import { PROJECTS_DATA } from "../data/projects";
import { TIMELINE_EVENTS_DATA } from "../data/timeline";
import { ACHIEVEMENTS_DATA } from "../data/achievements";

export type { Language };

const baseTranslations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_journey: "Journey",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_achievements: "Achievements",
    nav_goals: "Goals",
    nav_contact: "Contact",
    status_text: "Seeking Global Opportunities",

    hero_tag: "Personal Portfolio",
    hero_title: "Firdavs Xalikov",
    hero_sub_title_student: "Student",
    hero_sub_title_developer: "Frontend Developer",
    hero_sub_title_enthusiast: "Technology Enthusiast",
    hero_intro: "Building my future through technology, discipline, and continuous learning.",
    hero_btn_achievements: "View Achievements",
    hero_btn_contact: "Connect with Me",
    hero_scroll: "Scroll Down",

    about_tag: "Identity",
    about_title: "About Me",
    about_subtitle: "Motivated international student dedicating daily efforts to mastering code, technology, and leadership.",
    about_quote: "Striving to become a global software engineer and build impactful digital products.",
    about_focus_label: "Current Focus",
    about_focus_val: "Kyungdong University CS & AI Study",
    about_languages_label: "Languages",
    about_journey_title: "My Journey & Vision",
    about_journey_p1: "I started my IT journey in 2023 and have been continuously developing my programming and technology skills. I am interested in frontend development, artificial intelligence, and modern software engineering. My goal is to become a global software engineer and create meaningful digital products.",
    about_journey_p2: "Focusing on practical execution, I dedicate my studies towards writing clean, performant React applications and incorporating modern AI methodologies into software development workflows.",
    about_val1_title: "Discipline & Consistency",
    about_val1_desc: "Developed through 6 years of swimming training. Translated to structured software development habits.",
    about_val2_title: "International Mindset",
    about_val2_desc: "Pursuing global education pathways, verified academic standards, and strong communication skills.",

    journey_tag: "Timeline",
    journey_title: "My Growth Journey",
    journey_all: "All",
    journey_academic: "Academic",
    journey_it: "IT / Tech",
    journey_sports: "Sports",

    skills_tag: "Capabilities",
    skills_title: "Skills & Expertise",
    skills_subtitle: "A breakdown of my programming languages, technological tools, and professional competencies.",
    skills_prog_title: "Programming",
    skills_prog_desc: "Core frontend and backend technologies for developing standard web apps.",
    skills_tech_title: "Technology",
    skills_tech_desc: "Modern artificial intelligence applications and modern engineering platforms.",
    skills_lang_title: "Languages Spoken",
    skills_lang_desc: "Linguistic fluencies and standardized international qualification levels.",
    skills_other_title: "Other Skills",
    skills_other_desc: "Interpersonal qualities, analytical tools, and professional capacities.",
    skills_domain: "Tracked Domain",
    skills_active: "Active",

    projects_tag: "Portfolio",
    projects_title: "My Projects",
    projects_subtitle: "Real-world applications I have designed, developed, and deployed.",
    projects_live: "Live Project",
    projects_visit: "Visit Website",

    achievements_tag: "Credentials",
    achievements_title: "Key Achievements",
    achievements_subtitle: "Verified academic, linguistic, technological, and athletic achievements.",
    achievements_verified: "Verified Entry",
    achievements_label: "Credentials",

    goals_tag: "Vision",
    goals_quote: "My future goals are to continue improving my software engineering skills, study computer science internationally, explore artificial intelligence, and build technologies that can make an impact.",
    goals_se_title: "Software Engineering",
    goals_se_desc: "Continue improving my software engineering skills and standard practices.",
    goals_global_title: "Global Education",
    goals_global_desc: "Study computer science internationally and build global experiences.",
    goals_tech_title: "Emerging Tech",
    goals_tech_desc: "Explore artificial intelligence and build technologies that can make an impact.",

    contact_tag: "Inquire",
    contact_title: "Connect With Me",
    contact_subtitle: "Reach out for academic collaborations, software engineering opportunities, or professional discussions.",
    contact_pochta: "Pochta Address",
    contact_telegram: "Telegram Signal",
    contact_github: "GitHub Profile",
    contact_instagram: "Instagram Account",
    contact_status: "Status: Available",
    contact_action_copy: "Copy Email",
    contact_action_copied: "Copied",
    contact_action_message: "Send Message",
    contact_action_profile: "View Profile",
    contact_action_follow: "Follow Profile",
    contact_footer_desc: "Designed & Engineered with Apple-minimalist aesthetics.",
    contact_footer_copy: "Firdavs Xalikov. All rights reserved.",
  },
  uz: {
    nav_home: "Asosiy",
    nav_about: "Haqimda",
    nav_journey: "Yo'l",
    nav_skills: "Ko'nikmalar",
    nav_projects: "Loyihalar",
    nav_achievements: "Yutuqlar",
    nav_goals: "Maqsadlar",
    nav_contact: "Aloqa",
    status_text: "Global imkoniyatlar",

    hero_tag: "Shaxsiy Portfolio",
    hero_title: "Firdavs Xalikov",
    hero_sub_title_student: "Talaba",
    hero_sub_title_developer: "Frontend Dasturchi",
    hero_sub_title_enthusiast: "Texnologiya Ishqibozi",
    hero_intro: "Kelajagimni texnologiya, intizom va doimiy o'rganish orqali qurmoqdaman.",
    hero_btn_achievements: "Yutuqlarni ko'rish",
    hero_btn_contact: "Men bilan bog'lanish",
    hero_scroll: "Pastga tushing",

    about_tag: "Shaxsiyat",
    about_title: "Men haqimda",
    about_subtitle: "Kod, texnologiya va yetakchilikni o'zlashtirishga har kuni kuch bag'ishlayotgan motivatsiyalangan xalqaro talaba.",
    about_quote: "Global miqyosdagi dasturiy injiner bo'lish va ta'sirli raqamli mahsulotlar yaratishga intilaman.",
    about_focus_label: "Hozirgi e'tibor",
    about_focus_val: "Kyungdong Universiteti CS & AI o'qishi",
    about_languages_label: "Tillar",
    about_journey_title: "Mening yo'lim va qarashlarim",
    about_journey_p1: "Men IT sohasidagi yo'limni 2023-yilda boshlaganman va o'z dasturlash va texnologiya ko'nikmalarimni doimiy ravishda rivojlantirib kelmoqdaman. Men frontend dasturlash, sun'iy intellekt va zamonaviy dasturiy injiniringga qiziqaman. Maqsadim — global miqyosdagi dasturiy injiner bo'lish va foydali raqamli mahsulotlar yaratishdir.",
    about_journey_p2: "Amaliy ijroga e'tibor qaratib, men o'z o'qishlarimni toza, samarali React ilovalarini yozishga va dasturiy ta'minotni ishlab chiqish jarayonlariga zamonaviy sun'iy intellekt usullarini kiritishga bag'ishlayman.",
    about_val1_title: "Intizom va izchillik",
    about_val1_desc: "5-6 yillik suzish mashg'ulotlari orqali shakllangan. Tizimli dasturiy ta'minot yaratish odatlariga aylangan.",
    about_val2_title: "Xalqaro dunyoqarash",
    about_val2_desc: "Global ta'lim yo'llari, tasdiqlangan akademik standartlar va kuchli muloqot qobiliyatlariga intilish.",

    journey_tag: "Xronologiya",
    journey_title: "Mening o'sish yo'lim",
    journey_all: "Hammasi",
    journey_academic: "Akademik",
    journey_it: "IT / Texno",
    journey_sports: "Sport",

    skills_tag: "Imkoniyatlar",
    skills_title: "Ko'nikmalar va tajriba",
    skills_subtitle: "Dasturlash tillari, texnologik vositalar va professional kompetentsiyalarimning tavsifi.",
    skills_prog_title: "Dasturlash",
    skills_prog_desc: "Standart veb-ilovalarni ishlab chiqish uchun asosiy frontend va backend texnologiyalari.",
    skills_tech_title: "Texnologiyalar",
    skills_tech_desc: "Zamonaviy sun'iy intellekt ilovalari va zamonaviy muhandislik platformalari.",
    skills_lang_title: "So'zlashadigan tillar",
    skills_lang_desc: "Til bilish qobiliyatlari va standartlashtirilgan xalqaro malaka darajalari.",
    skills_other_title: "Boshqa ko'nikmalar",
    skills_other_desc: "Shaxslararo fazilatlar, tahliliy vositalar va professional imkoniyatlar.",
    skills_domain: "Kuzatilgan soha",
    skills_active: "Faol",

    projects_tag: "Portfolio",
    projects_title: "Mening loyihalarim",
    projects_subtitle: "Men loyihalashtirgan, ishlab chiqqan va joylashtirilgan real ilovalar.",
    projects_live: "Jonli loyiha",
    projects_visit: "Saytga o'tish",

    achievements_tag: "Hujjatlar",
    achievements_title: "Asosiy yutuqlar",
    achievements_subtitle: "Tasdiqlangan akademik, til, texnologik va sport yutuqlari.",
    achievements_verified: "Tasdiqlangan yozuv",
    achievements_label: "Hujjatlar",

    goals_tag: "Qarashlar",
    goals_quote: "Kelajakdagi maqsadlarim — dasturiy ta'minot muhandisligi ko'nikmalarimni oshirishni davom ettirish, kompyuter ilmlarini xalqaro miqyosda o'rganish, sun'iy intellektni tadqiq qilish va ta'sir ko'rsatadigan texnologiyalarni yaratishdir.",
    goals_se_title: "Dasturiy ta'minot muhandisligi",
    goals_se_desc: "Dasturiy ta'minot muhandisligi ko'nikmalarimni va standart amaliyotlarimni oshirishni davom ettirish.",
    goals_global_title: "Global ta'lim",
    goals_global_desc: "Kompyuter ilmlarini xalqaro miqyosda o'rganish va global tajriba orttirish.",
    goals_tech_title: "Yangi texnologiyalar",
    goals_tech_desc: "Sun'iy intellektni tadqiq qilish va ta'sir ko'rsata oladigan texnologiyalarni yaratish.",

    contact_tag: "Aloqa",
    contact_title: "Men bilan bog'laning",
    contact_subtitle: "Akademik hamkorlik, dasturiy ta'minot muhandisligi imkoniyatlari yoki professional suhbatlar uchun bog'laning.",
    contact_pochta: "Pochta manzili",
    contact_telegram: "Telegram aloqasi",
    contact_github: "GitHub profili",
    contact_instagram: "Instagram sahifasi",
    contact_status: "Holati: Mavjud",
    contact_action_copy: "Nusxalash",
    contact_action_copied: "Nusxalandi",
    contact_action_message: "Xabar yuborish",
    contact_action_profile: "Profilni ko'rish",
    contact_action_follow: "Kuzatish",
    contact_footer_desc: "Apple-minimalist estetikasi bilan ishlab chiqilgan va yaratilgan.",
    contact_footer_copy: "Firdavs Xalikov. Barcha huquqlar himoyalangan.",
  },
  ru: {
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_journey: "Путь",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_achievements: "Достижения",
    nav_goals: "Цели",
    nav_contact: "Контакты",
    status_text: "Глобальные возможности",

    hero_tag: "Личное Портфолио",
    hero_title: "Фирдавс Халиков",
    hero_sub_title_student: "Студент",
    hero_sub_title_developer: "Frontend Разработчик",
    hero_sub_title_enthusiast: "Энтузиаст Технологий",
    hero_intro: "Строю свое будущее с помощью технологий, дисциплины и непрерывного обучения.",
    hero_btn_achievements: "Посмотреть достижения",
    hero_btn_contact: "Связаться со мной",
    hero_scroll: "Прокрутите вниз",

    about_tag: "Личность",
    about_title: "Обо мне",
    about_subtitle: "Мотивированный международный студент, ежедневно посвящающий усилия освоению кода, технологий и лидерства.",
    about_quote: "Стремлюсь стать глобальным инженером-программистом и создавать эффективные цифровые продукты.",
    about_focus_label: "Текущий фокус",
    about_focus_val: "Обучение CS & AI в Университете Кёндон",
    about_languages_label: "Языки",
    about_journey_title: "Мой путь и видение",
    about_journey_p1: "Я начал свой путь в IT в 2023 году и постоянно развиваю свои навыки программирования и технологий. Меня интересует frontend-разработка, искусственный интеллект и современная программная инженерия. Моя цель — стать глобальным инженером-программистом и создавать значимые цифровые продукты.",
    about_journey_p2: "Фокусируясь на практическом исполнении, я посвящаю учебу написанию чистых, производительных React-приложений и внедрению современных методологий ИИ в процессы разработки ПО.",
    about_val1_title: "Дисциплина и последовательность",
    about_val1_desc: "Сформировано благодаря 5-6 годам занятий плаванием. Перенесено в структурированные привычки разработки ПО.",
    about_val2_title: "Международное мышление",
    about_val2_desc: "Стремление к глобальным образовательным путям, подтвержденным академическим стандартам и сильным коммуникативным навыкам.",

    journey_tag: "Хронология",
    journey_title: "Мой путь развития",
    journey_all: "Все",
    journey_academic: "Академические",
    journey_it: "IT / Техно",
    journey_sports: "Спорт",

    skills_tag: "Возможности",
    skills_title: "Навыки и опыт",
    skills_subtitle: "Описание моих языков программирования, технологических инструментов и профессиональных компетенций.",
    skills_prog_title: "Программирование",
    skills_prog_desc: "Основные frontend и backend технологии для разработки стандартных веб-приложений.",
    skills_tech_title: "Технологии",
    skills_tech_desc: "Современные приложения искусственного интеллекта и инженерные платформы.",
    skills_lang_title: "Разговорные языки",
    skills_lang_desc: "Владение языками и стандартизованные международные уровни квалификации.",
    skills_other_title: "Другие навыки",
    skills_other_desc: "Межличностные качества, аналитические инструменты и профессиональные способности.",
    skills_domain: "Отслеживаемая область",
    skills_active: "Активно",

    projects_tag: "Портфолио",
    projects_title: "Мои проекты",
    projects_subtitle: "Реальные приложения, которые я спроектировал, разработал и развернул.",
    projects_live: "Активный проект",
    projects_visit: "Посетить сайт",

    achievements_tag: "Документы",
    achievements_title: "Ключевые достижения",
    achievements_subtitle: "Подтвержденные академические, языковые, технологические и спортивные достижения.",
    achievements_verified: "Подтвержденная запись",
    achievements_label: "Документы",

    goals_tag: "Видение",
    goals_quote: "Мои цели на будущее — продолжать совершенствовать свои навыки программной инженерии, изучать компьютерные науки на международном уровне, исследовать искусственный интеллект и создавать технологии, способные оказывать влияние.",
    goals_se_title: "Программная инженерия",
    goals_se_desc: "Продолжать совершенствовать навыки программной инженерии и стандартные методы разработки.",
    goals_global_title: "Глобальное образование",
    goals_global_desc: "Изучать компьютерные науки на международном уровне и получать глобальный опыт.",
    goals_tech_title: "Новые технологии",
    goals_tech_desc: "Исследовать искусственный интеллект и создавать технологии, способные оказывать влияние.",

    contact_tag: "Запрос",
    contact_title: "Связаться со мной",
    contact_subtitle: "Свяжитесь со мной для академического сотрудничества, возможностей разработки ПО или профессиональных обсуждений.",
    contact_pochta: "Почтовый адрес",
    contact_telegram: "Telegram контакт",
    contact_github: "Профиль GitHub",
    contact_instagram: "Instagram аккаунт",
    contact_status: "Статус: Доступен",
    contact_action_copy: "Копировать",
    contact_action_copied: "Скопировано",
    contact_action_message: "Отправить сообщение",
    contact_action_profile: "Просмотреть профиль",
    contact_action_follow: "Подписаться",
    contact_footer_desc: "Спроектировано и создано в соответствии с эстетикой Apple-минимализма.",
    contact_footer_copy: "Фирдавс Халиков. Все права защищены.",
  },
};

function getDynamicTranslations(lang: Language) {
  return {
    ...baseTranslations[lang],
    projects_list: PROJECTS_DATA.map((p) => ({
      title: p.title[lang] || p.title["en"],
      description: p.description[lang] || p.description["en"],
      tags: p.tags,
      image: p.image,
      imageWebp: p.imageWebp,
      link: p.link,
      github: p.github,
    })),
    timeline_events: TIMELINE_EVENTS_DATA.map((t) => ({
      year: t.year,
      title: t.title[lang] || t.title["en"],
      category: t.category,
      description: t.description[lang] || t.description["en"],
      details: t.details[lang] || t.details["en"],
      iconName: t.iconName,
    })),
    achievements_list: ACHIEVEMENTS_DATA.map((a) => ({
      title: a.title[lang] || a.title["en"],
      metric: a.metric[lang] || a.metric["en"],
      subMetric: a.subMetric ? a.subMetric[lang] || a.subMetric["en"] : undefined,
      description: a.description[lang] || a.description["en"],
      category: a.category,
      year: a.year,
      iconName: a.iconName,
    })),
  };
}

const translations = {
  en: getDynamicTranslations("en"),
  uz: getDynamicTranslations("uz"),
  ru: getDynamicTranslations("ru"),
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Keep <html lang="..."> in sync with LanguageContext
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): any => {
    const translationSet = translations[language];
    const value = translationSet ? (translationSet as any)[key] : undefined;
    if (value !== undefined) return value;
    
    // Fallback to English
    const fallbackValue = (translations.en as any)[key];
    if (fallbackValue !== undefined) return fallbackValue;

    // Fallback to key string
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
