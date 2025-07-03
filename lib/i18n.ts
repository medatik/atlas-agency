import { Translation } from './types';

export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      components: "Components",
    },
    auth: {
      signIn: "Sign In",
      signUp: "Sign Up",
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
    notFound: {
      title: "Page Not Found",
      message: "Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.",
      homeButton: "Go Home",
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
        helpText: "Can't decide? Let Atlas AI help you",
        cancelHelp: "Cancel help request",
        cancel: "Cancel",
        helpPlaceholder: "Tell us about your brand style, industry, or any preferences you have...",
        logoInfo: "Click the help icon on any card to learn more about that logo type",
        logoTypes: {
          symbols: {
            label: "Symbols",
            description: "A symbol-based logo that represents your brand through a distinctive mark.",
            advantages: [
              "You can create multiple configurations, known as lockups, allowing for greater flexibility",
              "Symbols work more effectively at smaller sizes than typography-based designs",
              "Symbols transcend language barriers, enabling the use of consistent images worldwide"
            ],
            disadvantages: [
              "You'll immediately know the business name when you first see a typography based design",
              "It will have no meaning until people have repeatedly seen the new symbol",
              "If you want the brand to be recognized by a symbol, like Nike, it can be a very costly and time-consuming pursuit"
            ]
          },
          monograms: {
            label: "Monograms & Letterforms",
            description: "A design based on letters and monograms that creates a unique visual identity.",
            advantages: [
              "It's quick and easy to explore ideas. Monograms and letterforms rely on simple shapes",
              "A monogram or lettermark will work more effectively in smaller sizes than a wordmark",
              "You can create multiple lockups for greater versatility"
            ],
            disadvantages: [
              "A Monogram isn't always ideal if the company is international",
              "When dealing with individual letters, creating an original mark can be challenging"
            ]
          },
          wordmarks: {
            label: "Wordmarks & Lettermarks",
            description: "A text-based logo that uses typography to create a distinctive brand mark.",
            advantages: [
              "You instantly know the company name",
              "Wordmarks and Lettermarks are often quicker and easier to design"
            ],
            disadvantages: [
              "They're not ideal for long names",
              "They're often not distinct enough to be memorable"
            ]
          },
          combination: {
            label: "Combination Marks",
            description: "A logo that combines both text and symbols into one unified design.",
            advantages: [
              "They can be distinct and memorable",
              "You instantly know the company name",
              "They ensure a consistent global identity"
            ],
            disadvantages: [
              "The symbol and the typography are mixed in most cases, so the logo can only be configured in a single way"
            ]
          },
          emblems: {
            label: "Emblems, Crests & Badges",
            description: "A traditional or badge-style design that combines imagery and text in a unified symbol.",
            advantages: [
              "Their classic appearance can convey a sense of unity and prestige",
              "They can include several elements to tell a story"
            ],
            disadvantages: [
              "They have limited versatility and are difficult to reproduce in small sizes",
              "Their design can be challenging due to complex details",
              "It can be hard to stand out in a market where many emblem logos are already used"
            ]
          },
          mascots: {
            label: "Mascots",
            description: "A character-based logo that gives your brand a friendly, approachable personality.",
            advantages: [
              "They can give a brand a lot of character and personality",
              "They help to build a stronger relationship with customers",
              "They can be easily separated from the logo for marketing"
            ],
            disadvantages: [
              "They can be time-consuming to create",
              "The mascot may appeal to some but offend others across cultures"
            ]
          }
        }
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
        subtitle: "CHOOSE 2-4 PRIMARY COLORS / 2-4 SECONDARY COLORS",
        primaryColors: "PRIMARY COLORS",
        primaryColorsDesc: "Main colors that represent your brand",
        secondaryColors: "SECONDARY COLORS", 
        secondaryColorsDesc: "Supporting colors for accents and variety",
        helpText: "Can't decide? Let Atlas AI help you",
        colorPickerText: "Select colors that represent your brand's personality and values",
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
      fontOptions: {
        specific: "I have a specific font in mind",
        help: "We can get you the perfect font",
      },
      step5: {
        title: "PROJECT PREFERENCES",
        subtitle: "Let us know your timeline and communication preferences",
        timelineTitle: "Project Timeline",
        communicationTitle: "Preferred Communication Method",
        timeline: {
          rush: "Rush (1-2 weeks) - Additional fees may apply",
          standard: "Standard (3-4 weeks) - Recommended timeline",
          flexible: "Flexible (4+ weeks) - No rush, take your time",
        },
        communication: {
          email: "Email updates and communication",
          phone: "Phone calls for important updates",
          video: "Video calls for reviews and feedback",
        },
      },
      summary: {
        title: "Project Summary",
        subtitle: "Thank you for providing all the details! Here's a summary of your project.",
        projectDetails: "Project Details",
        nextSteps: "We'll review your requirements and get back to you within 24 hours with a detailed proposal.",
        editProject: "Edit Project",
        optionsSelected: "options selected",
      },
    },
    toast: {
      previousData: {
        title: "Previous data loaded",
        description: "Your previously saved information has been restored."
      },
      requiredFields: {
        title: "Required fields missing",
        description: "Please complete all required fields before continuing."
      },
      incomplete: {
        title: "Incomplete information",
        description: "Please complete all required fields to submit your project."
      },
      success: {
        title: "Project submitted successfully!",
        description: "We'll review your requirements and get back to you soon."
      },
      error: {
        title: "Submission failed",
        description: "Something went wrong. Please try again."
      },
      dataSaved: {
        title: "Data saved",
        description: "Your information has been saved successfully."
      }
    },
    footer: {
      description: "Creating stunning visual identities and modern websites for businesses worldwide.",
      services: "Services",
      company: "Company",
      support: "Support",
      ourTeam: "Our Team",
      careers: "Careers",
      blog: "Blog",
      faq: "FAQ",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "© 2024 ATLAS Agency. All rights reserved."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      components: "Composants",
    },
    auth: {
      signIn: "Se Connecter",
      signUp: "S'inscrire",
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
    notFound: {
      title: "Page Non Trouvée",
      message: "Désolé, nous n'avons pas trouvé la page que vous recherchez. La page a peut-être été déplacée, supprimée ou l'URL est incorrecte.",
      homeButton: "Retour à l'Accueil",
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
        subtitle: "CHOISISSEZ LE TYPE DE LOGO QUE VOUS SOUHAITEZ",
        helpText: "Indécis ? Laissez Atlas AI vous aider",
        cancelHelp: "Annuler la demande d'aide",
        cancel: "Annuler",
        helpPlaceholder: "Parlez-nous du style de votre marque, de votre secteur d'activité ou de vos préférences...",
        logoInfo: "Cliquez sur l'icône d'aide de chaque carte pour en savoir plus sur ce type de logo",
        logoTypes: {
          symbols: {
            label: "Symboles",
            description: "Un logo basé sur un symbole qui représente votre marque par une marque distinctive.",
            advantages: [
              "Vous pouvez créer plusieurs configurations, permettant une plus grande flexibilité",
              "Les symboles fonctionnent plus efficacement en petite taille que les designs typographiques",
              "Les symboles transcendent les barrières linguistiques"
            ],
            disadvantages: [
              "Le nom de l'entreprise n'est pas immédiatement visible",
              "Il n'aura aucune signification jusqu'à ce que les gens l'aient vu plusieurs fois",
              "Établir la reconnaissance peut être coûteux et prendre du temps"
            ]
          },
          monograms: {
            label: "Monogrammes et Lettres",
            description: "Un design basé sur des lettres et des monogrammes qui crée une identité visuelle unique.",
            advantages: [
              "Rapide et facile à explorer",
              "Efficace en petite taille",
              "Permet plusieurs configurations"
            ],
            disadvantages: [
              "Pas idéal pour une entreprise internationale",
              "Création d'une marque originale difficile"
            ]
          },
          wordmarks: {
            label: "Logotypes",
            description: "Un logo textuel qui utilise la typographie pour créer une marque distinctive.",
            advantages: [
              "Nom de l'entreprise immédiatement visible",
              "Conception rapide et facile"
            ],
            disadvantages: [
              "Pas adapté aux noms longs",
              "Peut manquer de caractère distinctif"
            ]
          },
          combination: {
            label: "Marques Combinées",
            description: "Un logo qui combine texte et symboles dans un design unifié.",
            advantages: [
              "Distinctif et mémorable",
              "Nom de l'entreprise visible",
              "Identité globale cohérente"
            ],
            disadvantages: [
              "Configuration unique limitant la flexibilité"
            ]
          },
          emblems: {
            label: "Emblèmes et Écussons",
            description: "Un design traditionnel qui combine images et texte.",
            advantages: [
              "Apparence classique et prestigieuse",
              "Riche en éléments narratifs"
            ],
            disadvantages: [
              "Difficile à reproduire en petit format",
              "Conception complexe",
              "Différenciation difficile"
            ]
          },
          mascots: {
            label: "Mascottes",
            description: "Un logo avec un personnage donnant une personnalité à votre marque.",
            advantages: [
              "Forte personnalité de marque",
              "Connexion émotionnelle avec les clients",
              "Versatile en marketing"
            ],
            disadvantages: [
              "Long à créer",
              "Risques culturels"
            ]
          }
        }
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
        subtitle: "CHOISISSEZ 2-4 COULEURS PRIMAIRES / 2-4 COULEURS SECONDAIRES",
        primaryColors: "COULEURS PRIMAIRES",
        primaryColorsDesc: "Couleurs principales qui représentent votre marque",
        secondaryColors: "COULEURS SECONDAIRES",
        secondaryColorsDesc: "Couleurs de support pour les accents et la variété",
        helpText: "Vous n'arrivez pas à décider ? Laissez Atlas AI vous aider",
        colorPickerText: "Sélectionnez des couleurs qui représentent la personnalité et les valeurs de votre marque",
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
      fontOptions: {
        specific: "J'ai une police spécifique en tête",
        help: "Nous pouvons vous trouver la police parfaite",
      },
      step5: {
        title: "PRÉFÉRENCES DU PROJET",
        subtitle: "Faites-nous connaître vos délais et préférences de communication",
        timelineTitle: "Délai du Projet",
        communicationTitle: "Méthode de Communication Préférée",
        timeline: {
          rush: "Urgent (1-2 semaines) - Des frais supplémentaires peuvent s'appliquer",
          standard: "Standard (3-4 semaines) - Délai recommandé",
          flexible: "Flexible (4+ semaines) - Pas de précipitation, prenez votre temps",
        },
        communication: {
          email: "Mises à jour et communication par email",
          phone: "Appels téléphoniques pour les mises à jour importantes",
          video: "Appels vidéo pour les révisions et commentaires",
        },
      },
      summary: {
        title: "Résumé du Projet",
        subtitle: "Merci d'avoir fourni tous les détails ! Voici un résumé de votre projet.",
        projectDetails: "Détails du Projet",
        nextSteps: "Nous examinerons vos exigences et vous recontacterons dans les 24 heures avec une proposition détaillée.",
        editProject: "Modifier le Projet",
        optionsSelected: "options sélectionnées",
      },
    },
    toast: {
      previousData: {
        title: "Données précédentes chargées",
        description: "Vos informations précédemment sauvegardées ont été restaurées."
      },
      requiredFields: {
        title: "Champs obligatoires manquants",
        description: "Veuillez remplir tous les champs obligatoires avant de continuer."
      },
      incomplete: {
        title: "Informations incomplètes",
        description: "Veuillez remplir tous les champs obligatoires pour soumettre votre projet."
      },
      success: {
        title: "Projet soumis avec succès !",
        description: "Nous examinerons vos besoins et vous recontacterons bientôt."
      },
      error: {
        title: "Échec de la soumission",
        description: "Une erreur s'est produite. Veuillez réessayer."
      },
      dataSaved: {
        title: "Données sauvegardées",
        description: "Vos informations ont été sauvegardées avec succès."
      }
    },
    footer: {
      description: "Création d'identités visuelles et de sites web modernes pour les entreprises du monde entier.",
      services: "Services",
      company: "Entreprise",
      support: "Support",
      ourTeam: "Notre Équipe",
      careers: "Carrières",
      blog: "Blog",
      faq: "FAQ",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
      copyright: "© 2024 ATLAS Agency. Tous droits réservés."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      components: "المكونات",
    },
    auth: {
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب",
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
    notFound: {
      title: "الصفحة غير موجودة",
      message: "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقل الصفحة أو حذفها أو أن عنوان URL غير صحيح.",
      homeButton: "العودة للرئيسية",
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
        helpText: "متردد؟ دع Atlas AI يساعدك",
        cancelHelp: "إلغاء طلب المساعدة",
        cancel: "إلغاء",
        helpPlaceholder: "أخبرنا عن أسلوب علامتك التجارية وصناعتك وتفضيلاتك...",
        logoInfo: "انقر على أيقونة المساعدة في أي بطاقة لمعرفة المزيد عن نوع الشعار",
        logoTypes: {
          symbols: {
            label: "الرموز",
            description: "شعار قائم على رمز يمثل علامتك التجارية بعلامة مميزة.",
            advantages: [
              "إمكانية إنشاء تكوينات متعددة",
              "فعال في الأحجام الصغيرة",
              "يتجاوز حواجز اللغة"
            ],
            disadvantages: [
              "اسم الشركة غير مرئي مباشرة",
              "يحتاج وقت للاعتراف به",
              "بناء التعرف قد يكون مكلفاً"
            ]
          },
          monograms: {
            label: "المونوغرام والحروف",
            description: "تصميم قائم على الحروف يخلق هوية بصرية فريدة.",
            advantages: [
              "سريع وسهل التصميم",
              "فعال في الأحجام الصغيرة",
              "مرونة في التكوينات"
            ],
            disadvantages: [
              "غير مثالي للشركات الدولية",
              "صعوبة خلق تصميم أصلي"
            ]
          },
          wordmarks: {
            label: "الكلمات",
            description: "شعار نصي يستخدم الخط لإنشاء علامة مميزة.",
            advantages: [
              "وضوح اسم الشركة",
              "سهولة التصميم"
            ],
            disadvantages: [
              "غير مناسب للأسماء الطويلة",
              "قد يفتقر للتميز"
            ]
          },
          combination: {
            label: "العلامات المركبة",
            description: "شعار يجمع بين النص والرموز.",
            advantages: [
              "مميز وسهل التذكر",
              "وضوح اسم الشركة",
              "هوية متناسقة"
            ],
            disadvantages: [
              "مرونة محدودة في التكوين"
            ]
          },
          emblems: {
            label: "الشعارات والأختام",
            description: "تصميم تقليدي يجمع الصور والنص.",
            advantages: [
              "مظهر كلاسيكي وفخم",
              "غني بالعناصر القصصية"
            ],
            disadvantages: [
              "صعب التصغير",
              "تصميم معقد",
              "صعوبة التمييز"
            ]
          },
          mascots: {
            label: "التمائم",
            description: "شعار بشخصية تمنح علامتك التجارية شخصية ودية.",
            advantages: [
              "شخصية قوية للعلامة",
              "تواصل عاطفي مع العملاء",
              "مرونة في التسويق"
            ],
            disadvantages: [
              "يستغرق وقتاً طويلاً",
              "مخاطر ثقافية"
            ]
          }
        }
      },
      step3: {
        title: "الآن الألوان",
        subtitle: "اختر 2-4 ألوان أساسية / 2-4 ألوان ثانوية",
        primaryColors: "الألوان الأساسية",
        primaryColorsDesc: "الألوان الرئيسية التي تمثل علامتك التجارية",
        secondaryColors: "الألوان الثانوية",
        secondaryColorsDesc: "ألوان داعمة للتأكيدات والتنوع",
        helpText: "لا تستطيع أن تقرر؟ دع أطلس الذكي يساعدك",
        colorPickerText: "اختر الألوان التي تمثل شخصية وقيم علامتك التجارية",
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
      fontOptions: {
        specific: "لدي خط معين في ذهني",
        help: "يمكننا أن نجد لك الخط المثالي",
      },
      step5: {
        title: "تفضيلات المشروع",
        subtitle: "أخبرنا عن الجدول الزمني وتفضيلات التواصل",
        timelineTitle: "الجدول الزمني للمشروع",
        communicationTitle: "طريقة التواصل المفضلة",
        timeline: {
          rush: "عاجل (1-2 أسابيع) - قد تطبق رسوم إضافية",
          standard: "عادي (3-4 أسابيع) - الجدول الزمني الموصى به",
          flexible: "مرن (4+ أسابيع) - لا عجلة، خذ وقتك",
        },
        communication: {
          email: "التحديثات والتواصل عبر البريد الإلكتروني",
          phone: "المكالمات الهاتفية للتحديثات المهمة",
          video: "مكالمات الفيديو للمراجعات والتعليقات",
        },
      },
      summary: {
        title: "ملخص المشروع",
        subtitle: "شكراً لك على تقديم جميع التفاصيل! إليك ملخص مشروعك.",
        projectDetails: "تفاصيل المشروع",
        nextSteps: "سنراجع متطلباتك ونعود إليك خلال 24 ساعة بعرض مفصل.",
        editProject: "تعديل المشروع",
        optionsSelected: "خيارات مختارة",
      },
    },
    footer: {
      description: "إنشاء هويات بصرية مذهلة ومواقع ويب حديثة للشركات في جميع أنحاء العالم.",
      services: "الخدمات",
      company: "الشركة",
      support: "الدعم",
      ourTeam: "فريقنا",
      careers: "الوظائف",
      blog: "المدونة",
      faq: "الأسئلة الشائعة",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      copyright: "© 2024 وكالة أطلس. جميع الحقوق محفوظة."
    }
  },
};

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations.en;
}