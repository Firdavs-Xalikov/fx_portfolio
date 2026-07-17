import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Language = "en" | "uz" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
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
    projects_list: [
      {
        title: "ReadForge AI",
        description: "An AI-powered English reading practice platform built with Gemini AI. Users can practice reading comprehension with AI-generated stories, track their progress, build vocabulary, and improve their English skills through interactive exercises. Features include adaptive difficulty levels, progress analytics, and a gamified learning experience.",
        tags: ["Node.js", "Express", "Gemini AI", "SQLite", "Capacitor", "JavaScript"],
        image: "/readforge-preview.png",
        link: "https://readforge.uz"
      }
    ],
    
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

    timeline_events: [
      {
        year: "2019 - 2025",
        title: "Swimming Experience",
        category: "sports",
        description: "5-6 years of intensive training and dedication.",
        details: [
          "Consistent and rigorous schedule building resilience",
          "Demonstrated strong self-discipline, goal-setting, and physical consistency",
          "Learned commitment and team communication skills"
        ],
        iconName: "Activity"
      },
      {
        year: "2023",
        title: "Began IT & Software Journey",
        category: "it",
        description: "Started studying IT and programming from the fundamentals.",
        details: [
          "Began learning core frontend development standards (HTML, CSS, JavaScript)",
          "Explored modern software development workflows and tech libraries",
          "Established coding habits and self-learning methodologies"
        ],
        iconName: "BookOpen"
      },
      {
        year: "2025",
        title: "IELTS Academic Qualification",
        category: "academic",
        description: "Achieved an overall IELTS band score of 6.5.",
        details: [
          "Certified English proficiency for international academic institutions",
          "Demonstrated academic listening, reading, writing, and speaking skills"
        ],
        iconName: "FileCheck"
      },
      {
        year: "2025",
        title: "International Finance Lyceum Admission",
        category: "academic",
        description: "Entered the lyceum with a high competitive score.",
        details: [
          "Admission score: 105.1",
          "Focused on rigorous secondary academic and financial frameworks"
        ],
        iconName: "GraduationCap"
      },
      {
        year: "2024",
        title: "Logistics and Business Studies",
        category: "academic",
        description: "Studied logistic operations and business operations.",
        details: [
          "Gained deep knowledge about business processes, supply chains, and flow management",
          "Applied analytical mapping to organizational structures"
        ],
        iconName: "Briefcase"
      },
      {
        year: "2024 - 2025",
        title: "CODDY Camp Achievements",
        category: "it",
        description: "Excelled in competitive software camp and course tracks.",
        details: [
          "Earned 2-3 certificates of excellence",
          "Achieved 1st place among IT students in programming challenges"
        ],
        iconName: "Trophy"
      },
      {
        year: "2026",
        title: "SAT Academic Examination",
        category: "academic",
        description: "Scored 1190 in the SAT standardized college admission test.",
        details: [
          "Demonstrated strong mathematical logic and analytical reading capabilities",
          "Established credentials for US and international universities"
        ],
        iconName: "Sparkles"
      },
      {
        year: "2026",
        title: "Kyungdong University Entrance",
        category: "academic",
        description: "Secured admission with a scholarship.",
        details: [
          "Admitted to university engineering studies",
          "Recognized by the scholarship committee for academic credentials"
        ],
        iconName: "Award"
      }
    ],

    achievements_list: [
      {
        title: "Kyungdong University Admission",
        metric: "Scholarship",
        subMetric: "Full/Partial tuition support",
        description: "Secured university admission backed by a scholarship recognition program.",
        category: "academic",
        year: "2026",
        iconName: "Award"
      },
      {
        title: "IELTS Academic English Qualification",
        metric: "6.5 Band Score",
        subMetric: "Competent User Level",
        description: "Certified international English qualification demonstrating academic communication proficiency.",
        category: "language",
        year: "2025",
        iconName: "Globe"
      },
      {
        title: "SAT College Board Standardized Test",
        metric: "1190 Score",
        subMetric: "Math & Verbal Reasoning",
        description: "Proven problem-solving skills and academic capabilities on international standardized testing standards.",
        category: "academic",
        year: "2026",
        iconName: "ShieldCheck"
      },
      {
        title: "CODDY Camp Achievements",
        metric: "1st Place",
        subMetric: "Among IT Students",
        description: "Achieved first place among fellow programming students and earned 2-3 technical certificates of excellence.",
        category: "it",
        year: "2024 - 2025",
        iconName: "Trophy"
      },
      {
        title: "International Finance Lyceum",
        metric: "105.1 Score",
        subMetric: "Highly Competitive Admission",
        description: "Gained entry into the specialized secondary program with a high merit-based score.",
        category: "academic",
        year: "2025",
        iconName: "BookOpen"
      },
      {
        title: "Swimming Experience",
        metric: "5-6 Years",
        subMetric: "Consistency & Commitment",
        description: "Long-term sports experience showing discipline, consistency, commitment, and healthy habits.",
        category: "athletics",
        year: "2019 - 2025",
        iconName: "Activity"
      }
    ]
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
    projects_list: [
      {
        title: "ReadForge AI",
        description: "Gemini AI asosida yaratilgan ingliz tilida o'qish amaliyoti platformasi. Foydalanuvchilar sun'iy intellekt tomonidan yaratilgan hikoyalar bilan o'qish tushunishini mashq qilishlari, o'z taraqqiyotlarini kuzatishlari, lug'atlarini boyitishlari va interaktiv mashqlar orqali ingliz tili ko'nikmalarini oshirishlari mumkin.",
        tags: ["Node.js", "Express", "Gemini AI", "SQLite", "Capacitor", "JavaScript"],
        image: "/readforge-preview.png",
        link: "https://readforge.uz"
      }
    ],
    
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

    timeline_events: [
      {
        year: "2019 - 2025",
        title: "Suzish tajribasi",
        category: "sports",
        description: "5-6 yillik intensiv mashg'ulot va sadoqat.",
        details: [
          "Chidamlilikni shakllantiruvchi muntazam va qat'iy jadval",
          "Kuchli o'z-o'zini intizomga solish, maqsad qo'yish va jismoniy barqarorlikni ko'rsatdi",
          "Majburiyat va jamoaviy muloqot qobiliyatlarini o'rgandim"
        ],
        iconName: "Activity"
      },
      {
        year: "2023",
        title: "IT va dasturlash yo'lini boshladim",
        category: "it",
        description: "IT va dasturlashni asoslaridan o'rganishni boshladim.",
        details: [
          "Frontend dasturlashning asosiy standartlarini o'rganishni boshladim (HTML, CSS, JavaScript)",
          "Zamonaviy dasturiy ta'minotni ishlab chiqish jarayonlari va texnologik kutubxonalarni o'rgandim",
          "Kod yozish odatlari va mustaqil o'rganish usullarini shakllantirdim"
        ],
        iconName: "BookOpen"
      },
      {
        year: "2025",
        title: "IELTS Akademik Malakasi",
        category: "academic",
        description: "Umumiy 6.5 IELTS balliga erishdim.",
        details: [
          "Xalqaro akademik muassasalar uchun ingliz tili darajasi tasdiqlandi",
          "Akademik tinglash, o'qish, yozish va gapirish qobiliyatlarini namoyish etdi"
        ],
        iconName: "FileCheck"
      },
      {
        year: "2025",
        title: "Xalqaro Moliya Litseyiga Qabul",
        category: "academic",
        description: "Litseyga yuqori raqobatbardosh ball bilan kirdim.",
        details: [
          "Kirish balli: 105.1",
          "Qat'iy o'rta akademik va moliyaviy tizimlarga e'tibor qaratildi"
        ],
        iconName: "GraduationCap"
      },
      {
        year: "2024",
        title: "Logistika va Biznes O'rganishlari",
        category: "academic",
        description: "Logistika operatsiyalari va biznes jarayonlarini o'rgandim.",
        details: [
          "Biznes jarayonlari, ta'minot zanjirlari va oqimlarni boshqarish haqida chuqur bilimga ega bo'ldim",
          "Tashkiliy tuzilmalarga tahliliy xaritalashni qo'lladim"
        ],
        iconName: "Briefcase"
      },
      {
        year: "2024 - 2025",
        title: "CODDY Oromgohi Yutuqlari",
        category: "it",
        description: "Raqobatbardosh dasturiy ta'minot oromgohi va kurs yo'nalishlarida muvaffaqiyat qozondim.",
        details: [
          "2-3 ta mukammallik sertifikatlarini qo'lga kiritdim",
          "Dasturlash musobaqalarida IT talabalari orasida 1-o'rinni egalladim"
        ],
        iconName: "Trophy"
      },
      {
        year: "2026",
        title: "SAT Akademik Imtihoni",
        category: "academic",
        description: "Standartlashtirilgan SAT kollejga kirish imtihonida 1190 ball to'pladim.",
        details: [
          "Kuchli matematik mantiq va tahliliy o'qish qobiliyatlarini namoyish etdi",
          "AQSh va xalqaro universitetlar uchun hujjatlarni tayyorladim"
        ],
        iconName: "Sparkles"
      },
      {
        year: "2026",
        title: "Kyungdong Universitetiga Kirish",
        category: "academic",
        description: "Grant asosida o'qishga kirdim.",
        details: [
          "Universitetning muhandislik yo'nalishiga qabul qilindim",
          "Akademik yutuqlarim uchun grant komissiyasi tomonidan e'tirof etildim"
        ],
        iconName: "Award"
      }
    ],

    achievements_list: [
      {
        title: "Kyungdong Universitetiga Kirish",
        metric: "Grant",
        subMetric: "O'qish xarajatlarini to'liq/qisman qoplash",
        description: "Grant dasturi qo'llab-quvvatlovi ostida universitetga kirishni ta'minladi.",
        category: "academic",
        year: "2026",
        iconName: "Award"
      },
      {
        title: "IELTS Akademik Ingliz Tili Malakasi",
        metric: "6.5 Band Ball",
        subMetric: "Malakali foydalanuvchi darajasi",
        description: "Akademik muloqot qobiliyatini tasdiqlovchi sertifikatlangan xalqaro ingliz tili malakasi.",
        category: "language",
        year: "2025",
        iconName: "Globe"
      },
      {
        title: "SAT College Board Standart Imtihoni",
        metric: "1190 Ball",
        subMetric: "Matematika va verbal mantiq",
        description: "Xalqaro standartlashtirilgan test me'yorlariga ko'ra isbotlangan muammolarni hal qilish ko'nikmalari va akademik imkoniyatlar.",
        category: "academic",
        year: "2026",
        iconName: "ShieldCheck"
      },
      {
        title: "CODDY Oromgohi Yutuqlari",
        metric: "1-o'rin",
        subMetric: "IT talabalari orasida",
        description: "Dasturlash talabalari orasida birinchi o'rinni egallab, 2-3 ta texnik mukammallik sertifikatlarini qo'lga kiritdim.",
        category: "it",
        year: "2024 - 2025",
        iconName: "Trophy"
      },
      {
        title: "Xalqaro Moliya Litseyi",
        metric: "105.1 Ball",
        subMetric: "Yuqori raqobatbardosh kirish",
        description: "Yuqori imtiyozli ball bilan ixtisoslashtirilgan o'rta bosqich ta'limiga kirdim.",
        category: "academic",
        year: "2025",
        iconName: "BookOpen"
      },
      {
        title: "Suzish tajribasi",
        metric: "5-6 Yil",
        subMetric: "Izchillik va majburiyat",
        description: "Intizom, barqarorlik, majburiyat va sog'lom odatlarni ko'rsatadigan uzoq muddatli sport tajribasi.",
        category: "athletics",
        year: "2019 - 2025",
        iconName: "Activity"
      }
    ]
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
    projects_list: [
      {
        title: "ReadForge AI",
        description: "Платформа для практики чтения на английском языке на базе Gemini AI. Пользователи могут практиковать понимание прочитанного с помощью историй, созданных ИИ, отслеживать свой прогресс, пополнять словарный запас и улучшать навыки английского языка через интерактивные упражнения.",
        tags: ["Node.js", "Express", "Gemini AI", "SQLite", "Capacitor", "JavaScript"],
        image: "/readforge-preview.png",
        link: "https://readforge.uz"
      }
    ],
    
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

    timeline_events: [
      {
        year: "2019 - 2025",
        title: "Опыт в плавании",
        category: "sports",
        description: "5-6 лет интенсивных тренировок и преданности делу.",
        details: [
          "Последовательный и строгий график, развивающий устойчивость",
          "Продемонстрировал сильную самодисциплину, постановку целей и физическую стабильность",
          "Научился ответственности и навыкам командного общения"
        ],
        iconName: "Activity"
      },
      {
        year: "2023",
        title: "Начал путь в IT и ПО",
        category: "it",
        description: "Начал изучать IT и программирование с основ.",
        details: [
          "Начал изучать основные стандарты frontend-разработки (HTML, CSS, JavaScript)",
          "Изучил современные рабочие процессы разработки ПО и технологические библиотеки",
          "Сформировал привычки кодинга и методологию самообучения"
        ],
        iconName: "BookOpen"
      },
      {
        year: "2025",
        title: "Академическая квалификация IELTS",
        category: "academic",
        description: "Получил общий балл IELTS 6.5.",
        details: [
          "Подтвержденный уровень владения английским языком для международных академических институтов",
          "Продемонстрировал академические навыки аудирования, чтения, письма и говорения"
        ],
        iconName: "FileCheck"
      },
      {
        year: "2025",
        title: "Поступление в Международный финансовый лицей",
        category: "academic",
        description: "Поступил в лицей с высоким конкурентным баллом.",
        details: [
          "Проходной балл: 105.1",
          "Сосредоточился на строгих средних академических и финансовых структурах"
        ],
        iconName: "GraduationCap"
      },
      {
        year: "2024",
        title: "Изучение логистики и бизнеса",
        category: "academic",
        description: "Изучал логистические операции и бизнес-процессы.",
        details: [
          "Получил глубокие знания о бизнес-процессах, цепочках поставок и управлении потоками",
          "Применил аналитическое картирование к организационным структурам"
        ],
        iconName: "Briefcase"
      },
      {
        year: "2024 - 2025",
        title: "Достижения в лагере CODDY",
        category: "it",
        description: "Преуспел в конкурентном софтверном лагере и на курсах.",
        details: [
          "Получил 2-3 сертификата отличия",
          "Занял 1-е место среди студентов IT в соревнованиях по программированию"
        ],
        iconName: "Trophy"
      },
      {
        year: "2026",
        title: "Академический экзамен SAT",
        category: "academic",
        description: "Набрал 1190 баллов в стандартизованном тесте для поступления в колледж SAT.",
        details: [
          "Продемонстрировал сильную математическую логику и аналитические способности к чтению",
          "Создал базу документов для поступления в вузы США и мира"
        ],
        iconName: "Sparkles"
      },
      {
        year: "2026",
        title: "Поступление в Университет Кёндон",
        category: "academic",
        description: "Получил зачисление со стипендией.",
        details: [
          "Зачислен на инженерное обучение в университете",
          "Признан стипендиальным комитетом за академические заслуги"
        ],
        iconName: "Award"
      }
    ],

    achievements_list: [
      {
        title: "Поступление в Университет Кёндон",
        metric: "Стипендия",
        subMetric: "Полное/Частичное покрытие обучения",
        description: "Получил зачисление в университет при поддержке стипендиальной программы.",
        category: "academic",
        year: "2026",
        iconName: "Award"
      },
      {
        title: "Академическая квалификация IELTS",
        metric: "Балл 6.5",
        subMetric: "Уровень компетентного пользователя",
        description: "Сертифицированная международная квалификация по английскому языку, подтверждающая уровень академического общения.",
        category: "language",
        year: "2025",
        iconName: "Globe"
      },
      {
        title: "Стандартизованный тест SAT College Board",
        metric: "1190 Баллов",
        subMetric: "Математическое и вербальное мышление",
        description: "Подтвержденные навыки решения задач и академические способности по международным стандартам тестирования.",
        category: "academic",
        year: "2026",
        iconName: "ShieldCheck"
      },
      {
        title: "Достижения в лагере CODDY",
        metric: "1-е Место",
        subMetric: "Среди студентов IT",
        description: "Занял первое место среди студентов-программистов и получил 2-3 технических сертификата отличия.",
        category: "it",
        year: "2024 - 2025",
        iconName: "Trophy"
      },
      {
        title: "Международный финансовый лицей",
        metric: "105.1 Балла",
        subMetric: "Высококонкурентное поступление",
        description: "Получил зачисление в специализированную среднюю школу с высоким баллом.",
        category: "academic",
        year: "2025",
        iconName: "BookOpen"
      },
      {
        title: "Опыт в плавании",
        metric: "5-6 Лет",
        subMetric: "Последовательность и преданность",
        description: "Многолетний спортивный опыт, демонстрирующий дисциплину, последовательность, приверженность делу и здоровые привычки.",
        category: "athletics",
        year: "2019 - 2025",
        iconName: "Activity"
      }
    ]
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): any => {
    const translationSet = translations[language];
    // @ts-ignore
    return translationSet[key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
