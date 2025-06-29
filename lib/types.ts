export interface Translation {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    components: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    learnMore: string;
  };
  services: {
    title: string;
    subtitle: string;
    buttonText: string;
    visual: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
    };
    combo: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  components: {
    title: string;
    description: string;
  };
  visualIdentity: {
    welcome: string;
    serviceTitle: string;
    backToHome: string;
    progress: string;
    nextStep: string;
    previous: string;
    submit: string;
    step1: {
      title: string;
      subtitle: string;
      brandName: string;
      brandNamePlaceholder: string;
      brandDescription: string;
      brandDescriptionPlaceholder: string;
    };
    step2: {
      title: string;
      subtitle: string;
      helpText: string;
      helpPlaceholder: string;
    };
    logoTypes: {
      wordmark: string;
      lettermark: string;
      pictorial: string;
      abstract: string;
      mascot: string;
      combination: string;
    };
    step3: {
      title: string;
      subtitle: string;
      primaryColors: string;
      primaryColorsDesc: string;
      secondaryColors: string;
      secondaryColorsDesc: string;
      helpText: string;
      colorPickerText: string;
    };
    step4: {
      title: string;
      subtitle: string;
      fontPreference: string;
      customFont: string;
      customFontPlaceholder: string;
      additionalRequests: string;
      additionalRequestsPlaceholder: string;
    };
    fontOptions: {
      specific: string;
      help: string;
    };
    step5: {
      title: string;
      subtitle: string;
      timelineTitle: string;
      communicationTitle: string;
      timeline: {
        rush: string;
        standard: string;
        flexible: string;
      };
      communication: {
        email: string;
        phone: string;
        video: string;
      };
    };
    summary: {
      title: string;
      subtitle: string;
      projectDetails: string;
      nextSteps: string;
      editProject: string;
      optionsSelected: string;
    };
  };
}

export interface FormData {
  brandName: string;
  brandDescription: string;
  logoType: string;
  cantDecideHelp: string;
  primaryColors: string[];
  secondaryColors: string[];
  colorsCantDecideHelp: string;
  fontPreference: string;
  customFont: string;
  additionalRequests: string;
  projectTimeline: string;
  communicationPreference: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface LogoType {
  id: string;
  label: string;
}

export interface FontOption {
  id: string;
  label: string;
}

export interface TimelineOption {
  id: string;
  label: string;
}

export interface CommunicationOption {
  id: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ServicesSectionProps {
  t: Translation;
}

export interface HeroSectionProps {
  t: Translation;
}

export interface AboutSectionProps {
  t: Translation;
}

export interface ContactSectionProps {
  t: Translation;
}