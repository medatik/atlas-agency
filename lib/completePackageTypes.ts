export interface CompletePackageFormData {
  // Business Information
  businessName: string;
  businessDescription: string;
  
  // Visual Identity Section
  logoType: string;
  cantDecideHelp: string;
  primaryColors: string[];
  secondaryColors: string[];
  colorsCantDecideHelp: string;
  fontPreference: string;
  customFont: string;
  
  // Website Development Section
  websiteGoal: string;
  websiteGoalOther: string;
  designOption: string;
  selectedTemplate: string;
  templateContent: string;
  mainPages: string[];
  mainPagesOther: string;
  hasSitemap: string;
  sitemapDescription: string;
  multipleLanguages: string;
  languagesList: string;
  brandAssets: string[];
  websiteStyle: string[];
  websiteStyleOther: string;
  referenceWebsites: string;
  contentReady: string;
  featuresNeeded: string[];
  featuresOther: string;
  optionalAddons: string[];
  needAdminPanel: string;
  domainHosting: string;
  domainName: string;
  managementHelp: string[];
  
  // Project Preferences
  additionalRequests: string;
  projectTimeline: string;
  communicationPreference: string;
  finalNotes: string;
}

export interface CompletePackageFormErrors {
  [key: string]: string;
}

// Reuse existing types from other forms
export interface WebsiteGoalOption {
  id: string;
  label: string;
}

export interface DesignOption {
  id: string;
  label: string;
}

export interface Template {
  id: string;
  name: string;
  image: string;
  previewUrl: string;
}

export interface PageOption {
  id: string;
  label: string;
}

export interface BrandAssetOption {
  id: string;
  label: string;
}

export interface StyleOption {
  id: string;
  label: string;
}

export interface FeatureOption {
  id: string;
  label: string;
}

export interface AddonOption {
  id: string;
  label: string;
}

export interface ManagementOption {
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

export interface LogoType {
  id: string;
  label: string;
}

export interface FontOption {
  id: string;
  label: string;
}