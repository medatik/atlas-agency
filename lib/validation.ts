import { FormData, FormErrors } from './types';

export const validateStep1 = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!formData.brandName.trim()) {
    errors.brandName = "Brand name is required";
  } else if (formData.brandName.trim().length < 2) {
    errors.brandName = "Brand name must be at least 2 characters";
  } else if (formData.brandName.trim().length > 50) {
    errors.brandName = "Brand name must be less than 50 characters";
  }
  
  if (!formData.brandDescription.trim()) {
    errors.brandDescription = "Brand description is required";
  } else if (formData.brandDescription.trim().length < 10) {
    errors.brandDescription = "Brand description must be at least 10 characters";
  } else if (formData.brandDescription.trim().length > 500) {
    errors.brandDescription = "Brand description must be less than 500 characters";
  }
  
  return errors;
};

export const validateStep2 = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!formData.logoType) {
    errors.logoType = "Please select a logo type or request help";
  }
  
  if (formData.logoType === "cant-decide" && !formData.cantDecideHelp.trim()) {
    errors.cantDecideHelp = "Please describe your preferences to help us assist you";
  }
  
  return errors;
};

export const validateStep3 = (formData: FormData, showColorsHelp: boolean): FormErrors => {
  const errors: FormErrors = {};
  
  if (showColorsHelp) {
    if (!formData.colorsCantDecideHelp.trim()) {
      errors.colorsCantDecideHelp = "Please describe your color preferences to help us assist you";
    }
  } else {
    if (formData.primaryColors.length < 2) {
      errors.primaryColors = "Please select at least 2 primary colors";
    }
    
    if (formData.secondaryColors.length < 2) {
      errors.secondaryColors = "Please select at least 2 secondary colors";
    }
  }
  
  return errors;
};

export const validateStep4 = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!formData.fontPreference) {
    errors.fontPreference = "Please select a font preference";
  }
  
  if (formData.fontPreference === "specific" && !formData.customFont.trim()) {
    errors.customFont = "Please specify the font name";
  }
  
  return errors;
};

export const validateStep5 = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!formData.projectTimeline) {
    errors.projectTimeline = "Please select a project timeline";
  }
  
  if (!formData.communicationPreference) {
    errors.communicationPreference = "Please select a communication preference";
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