"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings } from "lucide-react";
import { CompletePackageFormData, CompletePackageFormErrors, FeatureOption, AddonOption } from '@/lib/completePackageTypes';
import { sanitizeInput } from '@/lib/completePackageValidation';

interface StepEightProps {
  t: any;
  formData: CompletePackageFormData;
  setFormData: React.Dispatch<React.SetStateAction<CompletePackageFormData>>;
  errors: CompletePackageFormErrors;
}

export function StepEight({ t, formData, setFormData, errors }: StepEightProps) {
  const contentReadyOptions = [
    { id: "yes", label: "Yes" },
    { id: "no", label: "No" },
    { id: "partially", label: "Partially (need help)" },
  ];

  const featureOptions: FeatureOption[] = [
    { id: "contact-form", label: "Contact form" },
    { id: "blog", label: "Blog" },
    { id: "newsletter", label: "Newsletter signup" },
    { id: "product-filtering", label: "Product filtering" },
    { id: "cart-checkout", label: "Cart + checkout" },
    { id: "online-payment", label: "Online payment" },
    { id: "testimonials", label: "Testimonials" },
    { id: "social-media", label: "Social media links" },
    { id: "seo", label: "SEO optimization" },
    { id: "other", label: "Other" },
  ];

  const addonOptions: AddonOption[] = [
    { id: "blog-system", label: "Blog system" },
    { id: "booking-calendar", label: "Booking calendar" },
    { id: "cms-admin", label: "CMS admin panel" },
    { id: "copywriting", label: "Copywriting help" },
    { id: "product-filters", label: "Product filters" },
    { id: "language-switcher", label: "Language switcher" },
    { id: "stock-images", label: "Stock images" },
    { id: "seo-analytics", label: "SEO & Analytics setup" },
    { id: "monthly-maintenance", label: "Monthly maintenance" },
  ];

  const handleInputChange = (field: keyof CompletePackageFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  const handleFeatureToggle = (featureId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      featuresNeeded: checked
        ? [...prev.featuresNeeded, featureId]
        : prev.featuresNeeded.filter(id => id !== featureId)
    }));
  };

  const handleAddonToggle = (addonId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      optionalAddons: checked
        ? [...prev.optionalAddons, addonId]
        : prev.optionalAddons.filter(id => id !== addonId)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Settings className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          FEATURES & FUNCTIONALITY
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Define the features and functionality you need
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label className="text-sm font-medium">
            Content ready? <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.contentReady}
            onValueChange={(value) => setFormData(prev => ({ ...prev, contentReady: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.contentReady ? "contentReady-error" : undefined}
          >
            {contentReadyOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.contentReady === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, contentReady: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`content-${option.id}`}
                    />
                    <Label 
                      htmlFor={`content-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.contentReady && (
            <p id="contentReady-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.contentReady}
            </p>
          )}
        </div>

        <div>
          <Label className="text-sm font-medium">
            Features needed <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <div className="mt-4 space-y-3">
            {featureOptions.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`feature-${feature.id}`}
                  checked={formData.featuresNeeded.includes(feature.id)}
                  onCheckedChange={(checked) => handleFeatureToggle(feature.id, checked as boolean)}
                />
                <Label
                  htmlFor={`feature-${feature.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {feature.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.featuresNeeded && (
            <p className="text-sm text-destructive mt-2" role="alert">
              {errors.featuresNeeded}
            </p>
          )}
        </div>

        {formData.featuresNeeded.includes("other") && (
          <div>
            <Label htmlFor="featuresOther" className="text-sm font-medium">
              Please specify other features <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="featuresOther"
              value={formData.featuresOther}
              onChange={(e) => handleInputChange('featuresOther', e.target.value)}
              placeholder="Describe the other features you need"
              className={`mt-1 ${errors.featuresOther ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.featuresOther ? "featuresOther-error" : undefined}
              maxLength={200}
            />
            {errors.featuresOther && (
              <p id="featuresOther-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.featuresOther}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.featuresOther.length}/200 characters
            </p>
          </div>
        )}

        <div>
          <Label className="text-sm font-medium">
            Optional add-ons
          </Label>
          <div className="mt-4 space-y-3">
            {addonOptions.map((addon) => (
              <div key={addon.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`addon-${addon.id}`}
                  checked={formData.optionalAddons.includes(addon.id)}
                  onCheckedChange={(checked) => handleAddonToggle(addon.id, checked as boolean)}
                />
                <Label
                  htmlFor={`addon-${addon.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {addon.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}