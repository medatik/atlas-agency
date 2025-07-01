export interface WebDevFormData {
  businessName: string;
  businessDescription: string;
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
  projectTimeline: string;
  communicationPreference: string;
  finalNotes: string;
  serviceChoice: string;
}

export interface WebDevFormErrors {
  [key: string]: string;
}

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

export interface ServiceOption {
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