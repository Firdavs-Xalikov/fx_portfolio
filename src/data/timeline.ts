export interface TimelineEventData {
  id: string;
  year: string;
  category: "it" | "academic" | "personal" | "sports";
  iconName: string;
  title: Record<string, string>;
  description: Record<string, string>;
  details: Record<string, string[]>;
}

export const TIMELINE_EVENTS_DATA: TimelineEventData[] = [
  {
    id: "swimming",
    year: "2019 - 2025",
    category: "sports",
    iconName: "Activity",
    title: {
      en: "Swimming Experience",
      uz: "Suzish tajribasi",
      ru: "Опыт в плавании",
    },
    description: {
      en: "5-6 years of intensive training and dedication.",
      uz: "5-6 yillik intensiv mashg'ulot va sadoqat.",
      ru: "5-6 лет интенсивных тренировок и преданности делу.",
    },
    details: {
      en: [
        "Consistent and rigorous schedule building resilience",
        "Demonstrated strong self-discipline, goal-setting, and physical consistency",
        "Learned commitment and team communication skills",
      ],
      uz: [
        "Chidamlilikni shakllantiruvchi muntazam va qat'iy jadval",
        "Kuchli o'z-o'zini intizomga solish, maqsad qo'yish va jismoniy barqarorlikni ko'rsatdi",
        "Majburiyat va jamoaviy muloqot qobiliyatlarini o'rgandim",
      ],
      ru: [
        "Последовательный и строгий график, развивающий устойчивость",
        "Продемонстрировал сильную самодисциплину, постановку целей и физическую стабильность",
        "Научился ответственности и навыкам командного общения",
      ],
    },
  },
  {
    id: "it-journey",
    year: "2023",
    category: "it",
    iconName: "BookOpen",
    title: {
      en: "Began IT & Software Journey",
      uz: "IT va dasturlash yo'lini boshladim",
      ru: "Начал путь в IT и ПО",
    },
    description: {
      en: "Started studying IT and programming from the fundamentals.",
      uz: "IT va dasturlashni asoslaridan o'rganishni boshladim.",
      ru: "Начал изучать IT и программирование с основ.",
    },
    details: {
      en: [
        "Began learning core frontend development standards (HTML, CSS, JavaScript)",
        "Explored modern software development workflows and tech libraries",
        "Established coding habits and self-learning methodologies",
      ],
      uz: [
        "Frontend dasturlashning asosiy standartlarini o'rganishni boshladim (HTML, CSS, JavaScript)",
        "Zamonaviy dasturiy ta'minotni ishlab chiqish jarayonlari va texnologik kutubxonalarni o'rgandim",
        "Kod yozish odatlari va mustaqil o'rganish usullarini shakllantirdim",
      ],
      ru: [
        "Начал изучать основные стандарты frontend-разработки (HTML, CSS, JavaScript)",
        "Изучил современные рабочие процессы разработки ПО и технологические библиотеки",
        "Сформировал привычки кодинга и методологию самообучения",
      ],
    },
  },
  {
    id: "ielts",
    year: "2025",
    category: "academic",
    iconName: "FileCheck",
    title: {
      en: "IELTS Academic Qualification",
      uz: "IELTS Akademik Malakasi",
      ru: "Академическая квалификация IELTS",
    },
    description: {
      en: "Achieved an overall IELTS band score of 6.5.",
      uz: "Umumiy 6.5 IELTS balliga erishdim.",
      ru: "Получил общий балл IELTS 6.5.",
    },
    details: {
      en: [
        "Certified English proficiency for international academic institutions",
        "Demonstrated academic listening, reading, writing, and speaking skills",
      ],
      uz: [
        "Xalqaro akademik muassasalar uchun ingliz tili darajasi tasdiqlandi",
        "Akademik tinglash, o'qish, yozish va gapirish qobiliyatlarini namoyish etdi",
      ],
      ru: [
        "Подтвержденный уровень владения английским языком для международных академических институтов",
        "Продемонстрировал академические навыки аудирования, чтения, письма и говорения",
      ],
    },
  },
  {
    id: "lyceum",
    year: "2025",
    category: "academic",
    iconName: "GraduationCap",
    title: {
      en: "International Finance Lyceum Admission",
      uz: "Xalqaro Moliya Litseyiga Qabul",
      ru: "Поступление в Международный финансовый лицей",
    },
    description: {
      en: "Entered the lyceum with a high competitive score.",
      uz: "Litseyga yuqori raqobatbardosh ball bilan kirdim.",
      ru: "Поступил в лицей с высоким конкурентным баллом.",
    },
    details: {
      en: [
        "Admission score: 105.1",
        "Focused on rigorous secondary academic and financial frameworks",
      ],
      uz: [
        "Kirish balli: 105.1",
        "Qat'iy o'rta akademik va moliyaviy tizimlarga e'tibor qaratildi",
      ],
      ru: [
        "Проходной балл: 105.1",
        "Сосредоточился на строгих средних академических и финансовых структурах",
      ],
    },
  },
  {
    id: "logistics",
    year: "2024",
    category: "academic",
    iconName: "Briefcase",
    title: {
      en: "Logistics and Business Studies",
      uz: "Logistika va Biznes O'rganishlari",
      ru: "Изучение логистики и бизнеса",
    },
    description: {
      en: "Studied logistic operations and business operations.",
      uz: "Logistika operatsiyalari va biznes jarayonlarini o'rgandim.",
      ru: "Изучал логистические операции и бизнес-процессы.",
    },
    details: {
      en: [
        "Gained deep knowledge about business processes, supply chains, and flow management",
        "Applied analytical mapping to organizational structures",
      ],
      uz: [
        "Biznes jarayonlari, ta'minot zanjirlari va oqimlarni boshqarish haqida chuqur bilimga ega bo'ldim",
        "Tashkiliy tuzilmalarga tahliliy xaritalashni qo'lladim",
      ],
      ru: [
        "Получил глубокие знания о бизнес-процессах, цепочках поставок и управлении потоками",
        "Применил аналитическое картирование к организационным структурам",
      ],
    },
  },
  {
    id: "coddy",
    year: "2024 - 2025",
    category: "it",
    iconName: "Trophy",
    title: {
      en: "CODDY Camp Achievements",
      uz: "CODDY Oromgohi Yutuqlari",
      ru: "Достижения в лагере CODDY",
    },
    description: {
      en: "Excelled in competitive software camp and course tracks.",
      uz: "Raqobatbardosh dasturiy ta'minot oromgohi va kurs yo'nalishlarida muvaffaqiyat qozondim.",
      ru: "Преуспел в конкурентном софтверном лагере и на курсах.",
    },
    details: {
      en: [
        "Earned 2-3 certificates of excellence",
        "Achieved 1st place among IT students in programming challenges",
      ],
      uz: [
        "2-3 ta mukammallik sertifikatlarini qo'lga kiritdim",
        "Dasturlash musobaqalarida IT talabalari orasida 1-o'rinni egalladim",
      ],
      ru: [
        "Получил 2-3 сертификата отличия",
        "Занял 1-е место среди студентов IT в соревнованиях по программированию",
      ],
    },
  },
  {
    id: "sat",
    year: "2026",
    category: "academic",
    iconName: "Sparkles",
    title: {
      en: "SAT Academic Examination",
      uz: "SAT Akademik Imtihoni",
      ru: "Академический экзамен SAT",
    },
    description: {
      en: "Scored 1190 in the SAT standardized college admission test.",
      uz: "Standartlashtirilgan SAT kollejga kirish imtihonida 1190 ball to'pladim.",
      ru: "Набрал 1190 баллов в стандартизованном тесте для поступления в колледж SAT.",
    },
    details: {
      en: [
        "Demonstrated strong mathematical logic and analytical reading capabilities",
        "Established credentials for US and international universities",
      ],
      uz: [
        "Kuchli matematik mantiq va tahliliy o'qish qobiliyatlarini namoyish etdi",
        "AQSh va xalqaro universitetlar uchun hujjatlarni tayyorladim",
      ],
      ru: [
        "Продемонстрировал сильную математическую логику и аналитические способности к чтению",
        "Создал базу документов для поступления в вузы США и мира",
      ],
    },
  },
  {
    id: "kdu",
    year: "2026",
    category: "academic",
    iconName: "Award",
    title: {
      en: "Kyungdong University Entrance",
      uz: "Kyungdong Universitetiga Kirish",
      ru: "Поступление в Университет Кёндон",
    },
    description: {
      en: "Secured admission with a scholarship.",
      uz: "Grant asosida o'qishga kirdim.",
      ru: "Получил зачисление со стипендией.",
    },
    details: {
      en: [
        "Admitted to university engineering studies",
        "Recognized by the scholarship committee for academic credentials",
      ],
      uz: [
        "Universitetning muhandislik yo'nalishiga qabul qilindim",
        "Akademik yutuqlarim uchun grant komissiyasi tomonidan e'tirof etildim",
      ],
      ru: [
        "Зачислен на инженерное обучение в университете",
        "Признан стипендиальным комитетом за академические заслуги",
      ],
    },
  },
];
