export const locales = ["en", "fr", "ar"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      components: "Components",
    },
    hero: {
      title: "ATLAS Agency",
      subtitle: "Visual Identity & Web Development",
      description:
        "We create stunning visual identities and modern websites that help your business stand out in the digital world.",
      cta: "Get Started",
      learnMore: "Learn More",
    },
    services: {
      title: "Our Services",
      subtitle: "What we offer",
      visual: {
        title: "Visual Identity Creation",
        description: "Complete brand identity including logos, color schemes, typography, and brand guidelines.",
      },
      web: {
        title: "Website Development",
        description: "Modern, responsive websites built with the latest technologies and best practices.",
      },
      combo: {
        title: "Complete Package",
        description: "Full service combining visual identity and website development for a cohesive brand experience.",
      },
    },
    about: {
      title: "About Us",
      description:
        "We are a creative agency specializing in visual identity and web development. Our team combines artistic vision with technical expertise to deliver exceptional results.",
    },
    contact: {
      title: "Contact Us",
      description: "Ready to start your project? Get in touch with us today.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
    },
    components: {
      title: "Component Library",
      description: "Explore our comprehensive collection of reusable components",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      components: "Composants",
    },
    hero: {
      title: "ATLAS Agence",
      subtitle: "Identité Visuelle & Développement Web",
      description:
        "Nous créons des identités visuelles époustouflantes et des sites web modernes qui aident votre entreprise à se démarquer dans le monde numérique.",
      cta: "Commencer",
      learnMore: "En savoir plus",
    },
    services: {
      title: "Nos Services",
      subtitle: "Ce que nous offrons",
      visual: {
        title: "Création d'Identité Visuelle",
        description:
          "Identité de marque complète incluant logos, palettes de couleurs, typographie et directives de marque.",
      },
      web: {
        title: "Développement Web",
        description:
          "Sites web modernes et responsifs construits avec les dernières technologies et meilleures pratiques.",
      },
      combo: {
        title: "Package Complet",
        description:
          "Service complet combinant identité visuelle et développement web pour une expérience de marque cohérente.",
      },
    },
    about: {
      title: "À Propos de Nous",
      description:
        "Nous sommes une agence créative spécialisée dans l'identité visuelle et le développement web. Notre équipe combine vision artistique et expertise technique pour livrer des résultats exceptionnels.",
    },
    contact: {
      title: "Contactez-nous",
      description: "Prêt à commencer votre projet ? Contactez-nous dès aujourd'hui.",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer le message",
      },
    },
    components: {
      title: "Bibliothèque de Composants",
      description: "Explorez notre collection complète de composants réutilisables",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      components: "المكونات",
    },
    hero: {
      title: "وكالة أطلس",
      subtitle: "الهوية البصرية وتطوير المواقع",
      description: "نحن ننشئ هويات بصرية مذهلة ومواقع ويب حديثة تساعد عملك على التميز في العالم الرقمي.",
      cta: "ابدأ الآن",
      learnMore: "اعرف المزيد",
    },
    services: {
      title: "خدماتنا",
      subtitle: "ما نقدمه",
      visual: {
        title: "إنشاء الهوية البصرية",
        description:
          "هوية العلامة التجارية الكاملة بما في ذلك الشعارات وأنظمة الألوان والطباعة وإرشادات العلامة التجارية.",
      },
      web: {
        title: "تطوير المواقع الإلكترونية",
        description: "مواقع ويب حديثة ومتجاوبة مبنية بأحدث التقنيات وأفضل الممارسات.",
      },
      combo: {
        title: "الحزمة الكاملة",
        description: "خدمة شاملة تجمع بين الهوية البصرية وتطوير المواقع لتجربة علامة تجارية متماسكة.",
      },
    },
    about: {
      title: "من نحن",
      description:
        "نحن وكالة إبداعية متخصصة في الهوية البصرية وتطوير المواقع. يجمع فريقنا بين الرؤية الفنية والخبرة التقنية لتقديم نتائج استثنائية.",
    },
    contact: {
      title: "اتصل بنا",
      description: "مستعد لبدء مشروعك؟ تواصل معنا اليوم.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة",
      },
    },
    components: {
      title: "مكتبة المكونات",
      description: "استكشف مجموعتنا الشاملة من المكونات القابلة لإعادة الاستخدام",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
