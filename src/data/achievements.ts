export interface AchievementItemData {
  id: string;
  title: Record<string, string>;
  metric: Record<string, string>;
  subMetric?: Record<string, string>;
  description: Record<string, string>;
  category: "academic" | "language" | "it" | "athletics";
  year: string;
  iconName: string;
}

export const ACHIEVEMENTS_DATA: AchievementItemData[] = [
  {
    id: "kdu-admission",
    title: {
      en: "Kyungdong University Admission",
      uz: "Kyungdong Universitetiga Kirish",
      ru: "Поступление в Университет Кёндон",
    },
    metric: {
      en: "Scholarship",
      uz: "Grant",
      ru: "Стипендия",
    },
    subMetric: {
      en: "Full/Partial tuition support",
      uz: "O'qish xarajatlarini to'liq/qisman qoplash",
      ru: "Полное/Частичное покрытие обучения",
    },
    description: {
      en: "Secured university admission backed by a scholarship recognition program.",
      uz: "Grant dasturi qo'llab-quvvatlovi ostida universitetga kirishni ta'minladi.",
      ru: "Получил зачисление в университет при поддержке стипендиальной программы.",
    },
    category: "academic",
    year: "2026",
    iconName: "Award",
  },
  {
    id: "ielts-qualification",
    title: {
      en: "IELTS Academic English Qualification",
      uz: "IELTS Akademik Ingliz Tili Malakasi",
      ru: "Академическая квалификация IELTS",
    },
    metric: {
      en: "6.5 Band Score",
      uz: "6.5 Band Ball",
      ru: "Балл 6.5",
    },
    subMetric: {
      en: "Competent User Level",
      uz: "Malakali foydalanuvchi darajasi",
      ru: "Уровень компетентного пользователя",
    },
    description: {
      en: "Certified international English qualification demonstrating academic communication proficiency.",
      uz: "Akademik muloqot qobiliyatini tasdiqlovchi sertifikatlangan xalqaro ingliz tili malakasi.",
      ru: "Сертифицированная международная квалификация по английскому языку, подтверждающая уровень академического общения.",
    },
    category: "language",
    year: "2025",
    iconName: "Globe",
  },
  {
    id: "sat-test",
    title: {
      en: "SAT College Board Standardized Test",
      uz: "SAT College Board Standart Imtihoni",
      ru: "Стандартизованный тест SAT College Board",
    },
    metric: {
      en: "1190 Score",
      uz: "1190 Ball",
      ru: "1190 Баллов",
    },
    subMetric: {
      en: "Math & Verbal Reasoning",
      uz: "Matematika va verbal mantiq",
      ru: "Математическое и вербальное мышление",
    },
    description: {
      en: "Proven problem-solving skills and academic capabilities on international standardized testing standards.",
      uz: "Xalqaro standartlashtirilgan test me'yorlariga ko'ra isbotlangan muammolarni hal qilish ko'nikmalari va akademik imkoniyatlar.",
      ru: "Подтвержденные навыки решения задач и академические способности по международным стандартам тестирования.",
    },
    category: "academic",
    year: "2026",
    iconName: "ShieldCheck",
  },
  {
    id: "coddy-achievements",
    title: {
      en: "CODDY Camp Achievements",
      uz: "CODDY Oromgohi Yutuqlari",
      ru: "Достижения в лагере CODDY",
    },
    metric: {
      en: "1st Place",
      uz: "1-o'rin",
      ru: "1-е Место",
    },
    subMetric: {
      en: "Among IT Students",
      uz: "IT talabalari orasida",
      ru: "Среди студентов IT",
    },
    description: {
      en: "Achieved first place among fellow programming students and earned 2-3 technical certificates of excellence.",
      uz: "Dasturlash talabalari orasida birinchi o'rinni egallab, 2-3 ta texnik mukammallik sertifikatlarini qo'lga kiritdim.",
      ru: "Занял первое место среди студентов-программистов и получил 2-3 технических сертификата отличия.",
    },
    category: "it",
    year: "2024 - 2025",
    iconName: "Trophy",
  },
  {
    id: "finance-lyceum",
    title: {
      en: "International Finance Lyceum",
      uz: "Xalqaro Moliya Litseyi",
      ru: "Международный финансовый лицей",
    },
    metric: {
      en: "105.1 Score",
      uz: "105.1 Ball",
      ru: "105.1 Балла",
    },
    subMetric: {
      en: "Highly Competitive Admission",
      uz: "Yuqori raqobatbardosh kirish",
      ru: "Высококонкурентное поступление",
    },
    description: {
      en: "Gained entry into the specialized secondary program with a high merit-based score.",
      uz: "Yuqori imtiyozli ball bilan ixtisoslashtirilgan o'rta bosqich ta'limiga kirdim.",
      ru: "Получил зачисление в специализированную среднюю школу с высоким баллом.",
    },
    category: "academic",
    year: "2025",
    iconName: "BookOpen",
  },
  {
    id: "swimming-athletics",
    title: {
      en: "Swimming Experience",
      uz: "Suzish tajribasi",
      ru: "Опыт в плавании",
    },
    metric: {
      en: "5-6 Years",
      uz: "5-6 Yil",
      ru: "5-6 Лет",
    },
    subMetric: {
      en: "Consistency & Commitment",
      uz: "Izchillik va majburiyat",
      ru: "Последовательность и преданность",
    },
    description: {
      en: "Long-term sports experience showing discipline, consistency, commitment, and healthy habits.",
      uz: "Intizom, barqarorlik, majburiyat va sog'lom odatlarni ko'rsatadigan uzoq muddatli sport tajribasi.",
      ru: "Многолетний спортивный опыт, демонстрирующий дисциплину, последовательность, приверженность делу и здоровые привычки.",
    },
    category: "athletics",
    year: "2019 - 2025",
    iconName: "Activity",
  },
];
