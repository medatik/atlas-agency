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
      buttonText : "Choose Service",
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
    visualIdentity: {
      welcome: "WELCOME TO",
      serviceTitle: "VISUAL IDENTITY SERVICE",
      backToHome: "Back to Home",
      progress: "Progress",
      nextStep: "NEXT STEP",
      previous: "Previous",
      submit: "LET THE MAGIC START",
      step1: {
        title: "LET'S GET STARTED",
        subtitle: "Tell us about your brand",
        brandName: "TYPE THE NAME OF YOUR BRAND",
        brandNamePlaceholder: "Enter your brand name",
        brandDescription: "DESCRIBE YOUR BRAND",
        brandDescriptionPlaceholder: "Tell us about your brand, its values, target audience, and what makes it unique...",
      },
      step2: {
        title: "LET'S START BY THE LOGO",
        subtitle: "CHOOSE WHAT TYPE OF LOGO YOU WANT",
        helpText: "CAN'T DECIDE? LET ATLAS AI HELP YOU",
      },
      logoTypes: {
        wordmark: "Wordmark",
        lettermark: "Lettermark", 
        pictorial: "Pictorial Mark",
        abstract: "Abstract Mark",
        mascot: "Mascot",
        combination: "Combination Mark",
      },
      step3: {
        title: "NOW THE COLORS",
        subtitle: "CHOOSE 2-3 PRIMARY COLORS / 2-4 SECONDARY COLORS",
        primaryColors: "PRIMARY COLORS",
        primaryColorsDesc: "Main colors that represent your brand",
        secondaryColors: "SECONDARY COLORS", 
        secondaryColorsDesc: "Supporting colors for accents and variety",
        helpText: "CAN'T DECIDE? LET ATLAS AI HELP YOU",
      },
      step4: {
        title: "TYPOGRAPHY",
        subtitle: "Choose your preferred font style",
        fontPreference: "DO YOU HAVE A SPECIFIC FONT YOU WANNA USE?",
        customFont: "Custom Font Name",
        customFontPlaceholder: "Enter the font name you prefer",
        additionalRequests: "ANYTHING YOU WANNA ADD? JUST TELL US",
        additionalRequestsPlaceholder: "Any additional requirements, preferences, or special requests...",
      },
      typography: {
        serif: "Serif (Traditional, elegant)",
        sansSerif: "Sans-serif (Modern, clean)",
        script: "Script (Handwritten, personal)",
        display: "Display (Bold, attention-grabbing)",
        custom: "I have a specific font in mind",
      },
      summary: {
        title: "Project Summary",
        optionsSelected: "options selected",
      },
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
      buttonText: "Choisir le Service",
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
    visualIdentity: {
      welcome: "BIENVENUE CHEZ",
      serviceTitle: "SERVICE D'IDENTITÉ VISUELLE",
      backToHome: "Retour à l'accueil",
      progress: "Progression",
      nextStep: "ÉTAPE SUIVANTE",
      previous: "Précédent",
      submit: "LAISSONS LA MAGIE COMMENCER",
      step1: {
        title: "COMMENÇONS",
        subtitle: "Parlez-nous de votre marque",
        brandName: "TAPEZ LE NOM DE VOTRE MARQUE",
        brandNamePlaceholder: "Entrez le nom de votre marque",
        brandDescription: "DÉCRIVEZ VOTRE MARQUE",
        brandDescriptionPlaceholder: "Parlez-nous de votre marque, ses valeurs, son public cible et ce qui la rend unique...",
      },
      step2: {
        title: "COMMENÇONS PAR LE LOGO",
        subtitle: "CHOISISSEZ LE TYPE DE LOGO QUE VOUS VOULEZ",
        helpText: "VOUS N'ARRIVEZ PAS À DÉCIDER ? LAISSEZ ATLAS AI VOUS AIDER",
      },
      logoTypes: {
        wordmark: "Logo-type",
        lettermark: "Monogramme",
        pictorial: "Marque Picturale",
        abstract: "Marque Abstraite",
        mascot: "Mascotte",
        combination: "Marque Combinée",
      },
      step3: {
        title: "MAINTENANT LES COULEURS",
        subtitle: "CHOISISSEZ 2-3 COULEURS PRIMAIRES / 2-4 COULEURS SECONDAIRES",
        primaryColors: "COULEURS PRIMAIRES",
        primaryColorsDesc: "Couleurs principales qui représentent votre marque",
        secondaryColors: "COULEURS SECONDAIRES",
        secondaryColorsDesc: "Couleurs de support pour les accents et la variété",
        helpText: "VOUS N'ARRIVEZ PAS À DÉCIDER ? LAISSEZ ATLAS AI VOUS AIDER",
      },
      step4: {
        title: "TYPOGRAPHIE",
        subtitle: "Choisissez votre style de police préféré",
        fontPreference: "AVEZ-VOUS UNE POLICE SPÉCIFIQUE QUE VOUS VOULEZ UTILISER ?",
        customFont: "Nom de la Police Personnalisée",
        customFontPlaceholder: "Entrez le nom de la police que vous préférez",
        additionalRequests: "QUELQUE CHOSE À AJOUTER ? DITES-NOUS SIMPLEMENT",
        additionalRequestsPlaceholder: "Toute exigence supplémentaire, préférences ou demandes spéciales...",
      },
      typography: {
        serif: "Serif (Traditionnel, élégant)",
        sansSerif: "Sans-serif (Moderne, épuré)",
        script: "Script (Manuscrit, personnel)",
        display: "Display (Gras, accrocheur)",
        custom: "J'ai une police spécifique en tête",
      },
      summary: {
        title: "Résumé du Projet",
        optionsSelected: "options sélectionnées",
      },
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
      buttonText: "اختر الخدمة",
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
    visualIdentity: {
      welcome: "مرحباً بك في",
      serviceTitle: "خدمة الهوية البصرية",
      backToHome: "العودة للرئيسية",
      progress: "التقدم",
      nextStep: "الخطوة التالية",
      previous: "السابق",
      submit: "لنبدأ السحر",
      step1: {
        title: "لنبدأ",
        subtitle: "أخبرنا عن علامتك التجارية",
        brandName: "اكتب اسم علامتك التجارية",
        brandNamePlaceholder: "أدخل اسم علامتك التجارية",
        brandDescription: "صف علامتك التجارية",
        brandDescriptionPlaceholder: "أخبرنا عن علامتك التجارية وقيمها وجمهورها المستهدف وما يجعلها فريدة...",
      },
      step2: {
        title: "لنبدأ بالشعار",
        subtitle: "اختر نوع الشعار الذي تريده",
        helpText: "لا تستطيع أن تقرر؟ دع أطلس الذكي يساعدك",
      },
      logoTypes: {
        wordmark: "شعار نصي",
        lettermark: "شعار حروف",
        pictorial: "شعار تصويري",
        abstract: "شعار مجرد",
        mascot: "شعار تميمة",
        combination: "شعار مركب",
      },
      step3: {
        title: "الآن الألوان",
        subtitle: "اختر 2-3 ألوان أساسية / 2-4 ألوان ثانوية",
        primaryColors: "الألوان الأساسية",
        primaryColorsDesc: "الألوان الرئيسية التي تمثل علامتك التجارية",
        secondaryColors: "الألوان الثانوية",
        secondaryColorsDesc: "ألوان داعمة للتأكيدات والتنوع",
        helpText: "لا تستطيع أن تقرر؟ دع أطلس الذكي يساعدك",
      },
      step4: {
        title: "الطباعة",
        subtitle: "اختر نمط الخط المفضل لديك",
        fontPreference: "هل لديك خط معين تريد استخدامه؟",
        customFont: "اسم الخط المخصص",
        customFontPlaceholder: "أدخل اسم الخط الذي تفضله",
        additionalRequests: "أي شيء تريد إضافته؟ فقط أخبرنا",
        additionalRequestsPlaceholder: "أي متطلبات إضافية أو تفضيلات أو طلبات خاصة...",
      },
      typography: {
        serif: "سيريف (تقليدي، أنيق)",
        sansSerif: "سان سيريف (حديث، نظيف)",
        script: "خط يدوي (شخصي)",
        display: "خط عرض (جريء، لافت)",
        custom: "لدي خط معين في ذهني",
      },
      summary: {
        title: "ملخص المشروع",
        optionsSelected: "خيارات مختارة",
      },
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}