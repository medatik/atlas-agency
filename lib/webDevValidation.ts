import { WebDevFormData, WebDevFormErrors } from './webDevTypes';

export const validateWebDevStep1 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (!formData.businessName.trim()) {
    errors.businessName = "Business name is required";
  } else if (formData.businessName.trim().length < 2) {
    errors.businessName = "Business name must be at least 2 characters";
  } else if (formData.businessName.trim().length > 50) {
    errors.businessName = "Business name must be less than 50 characters";
  }
  
  if (!formData.businessDescription.trim()) {
    errors.businessDescription = "Business description is required";
  } else if (formData.businessDescription.trim().length < 10) {
    errors.businessDescription = "Business description must be at least 10 characters";
  } else if (formData.businessDescription.trim().length > 500) {
    errors.businessDescription = "Business description must be less than 500 characters";
  }

  if (!formData.websiteGoal) {
    errors.websiteGoal = "Please select the main goal of your website";
  }

  if (formData.websiteGoal === "other" && !formData.websiteGoalOther.trim()) {
    errors.websiteGoalOther = "Please specify your website goal";
  }
  
  return errors;
};

export const validateWebDevStep2 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (!formData.designOption) {
    errors.designOption = "Please select a design option";
  }

  if (formData.designOption === "template" && !formData.selectedTemplate) {
    errors.selectedTemplate = "Please select a template";
  }

  if (formData.designOption === "template" && !formData.templateContent.trim()) {
    errors.templateContent = "Please describe what content you'd like us to replace";
  }
  
  return errors;
};

export const validateWebDevStep3 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (formData.mainPages.length === 0) {
    errors.mainPages = "Please select at least one main page";
  }

  if (formData.mainPages.includes("other") && !formData.mainPagesOther.trim()) {
    errors.mainPagesOther = "Please specify the other pages you need";
  }

  if (!formData.hasSitemap) {
    errors.hasSitemap = "Please let us know if you have a sitemap";
  }

  if (formData.hasSitemap === "yes" && !formData.sitemapDescription.trim()) {
    errors.sitemapDescription = "Please describe your sitemap or structure";
  }

  if (!formData.multipleLanguages) {
    errors.multipleLanguages = "Please specify if you need multiple languages";
  }

  if (formData.multipleLanguages === "yes" && !formData.languagesList.trim()) {
    errors.languagesList = "Please list the languages you need";
  }
  
  return errors;
};

export const validateWebDevStep4 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (formData.brandAssets.length === 0) {
    errors.brandAssets = "Please select your available brand assets or indicate if you have none";
  }

  if (formData.websiteStyle.length === 0) {
    errors.websiteStyle = "Please select at least one website style";
  }

  if (formData.websiteStyle.includes("other") && !formData.websiteStyleOther.trim()) {
    errors.websiteStyleOther = "Please specify your preferred style";
  }
  
  return errors;
};

export const validateWebDevStep5 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (!formData.contentReady) {
    errors.contentReady = "Please let us know about your content readiness";
  }

  if (formData.featuresNeeded.length === 0) {
    errors.featuresNeeded = "Please select the features you need";
  }

  if (formData.featuresNeeded.includes("other") && !formData.featuresOther.trim()) {
    errors.featuresOther = "Please specify the other features you need";
  }
  
  return errors;
};

export const validateWebDevStep6 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (!formData.needAdminPanel) {
    errors.needAdminPanel = "Please specify if you need an admin panel";
  }

  if (!formData.domainHosting) {
    errors.domainHosting = "Please let us know about your domain and hosting needs";
  }

  if (formData.domainHosting === "yes" && !formData.domainName.trim()) {
    errors.domainName = "Please specify your domain name";
  }
  
  return errors;
};

export const validateWebDevStep7 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (!formData.projectTimeline) {
    errors.projectTimeline = "Please select a project timeline";
  }
  
  if (!formData.communicationPreference) {
    errors.communicationPreference = "Please select a communication preference";
  }
  
  return errors;
};

export const validateWebDevStep8 = (formData: WebDevFormData): WebDevFormErrors => {
  const errors: WebDevFormErrors = {};
  
  if (!formData.serviceChoice) {
    errors.serviceChoice = "Please select which service you're ordering";
  }
  
  return errors;
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};