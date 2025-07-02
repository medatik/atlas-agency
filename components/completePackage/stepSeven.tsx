"use client"

import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Palette } from "lucide-react";
import { CompletePackageFormData, CompletePackageFormErrors, BrandAssetOption, StyleOption } from '@/lib/completePackageTypes';
import { sanitizeInput } from '@/lib/completePackageValidation';

interface StepSevenProps {
  t: any;
  formData: CompletePackageFormData;
  setFormData: React.Dispatch<React.SetStateAction<CompletePackageFormData>>;
  errors: CompletePackageFormErrors;
}

export function StepSeven({ t, formData, setFormData, errors }: StepSevenProps) {
  const brandAssetOptions: BrandAssetOption[] = [
    { id: "logo", label: "Logo" },
    { id: "colors", label: "Color palette" },
    { id: "fonts", label: "Fonts" },
    { id: "guidelines", label: "Brand guidelines" },
    { id: "none", label: "None available" },
  ];

  const styleOptions: StyleOption[] = [
    { id: "minimal", label: "Minimal" },
    { id: "bold", label: "Bold" },
    { id: "elegant", label: "Elegant" },
    { id: "playful", label: "Playful" },
    { id: "corporate", label: "Corporate" },
    { id: "natural", label: "Natural" },
    { id: "modern", label: "Modern" },
    { id: "other", label: "Other" },
  ];

  const handleInputChange = (field: keyof CompletePackageFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  const handleAssetToggle = (assetId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      brandAssets: checked
        ? [...prev.brandAssets, assetId]
        : prev.brandAssets.filter(id => id !== assetId)
    }));
  };

  const handleStyleToggle = (styleId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      websiteStyle: checked
        ? [...prev.websiteStyle, styleId]
        : prev.websiteStyle.filter(id => id !== styleId)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Palette className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          BRAND ASSETS & STYLE
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Tell us about your brand assets and preferred style
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label className="text-sm font-medium">
            Brand assets available <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <div className="mt-4 space-y-3">
            {brandAssetOptions.map((asset) => (
              <div key={asset.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`asset-${asset.id}`}
                  checked={formData.brandAssets.includes(asset.id)}
                  onCheckedChange={(checked) => handleAssetToggle(asset.id, checked as boolean)}
                />
                <Label
                  htmlFor={`asset-${asset.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {asset.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.brandAssets && (
            <p className="text-sm text-destructive mt-2" role="alert">
              {errors.brandAssets}
            </p>
          )}
        </div>

        <div>
          <Label className="text-sm font-medium">
            Website style <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {styleOptions.map((style) => (
              <div key={style.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`style-${style.id}`}
                  checked={formData.websiteStyle.includes(style.id)}
                  onCheckedChange={(checked) => handleStyleToggle(style.id, checked as boolean)}
                />
                <Label
                  htmlFor={`style-${style.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {style.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.websiteStyle && (
            <p className="text-sm text-destructive mt-2" role="alert">
              {errors.websiteStyle}
            </p>
          )}
        </div>

        {formData.websiteStyle.includes("other") && (
          <div>
            <Label htmlFor="websiteStyleOther" className="text-sm font-medium">
              Please specify your preferred style <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="websiteStyleOther"
              value={formData.websiteStyleOther}
              onChange={(e) => handleInputChange('websiteStyleOther', e.target.value)}
              placeholder="Describe your preferred website style"
              className={`mt-1 ${errors.websiteStyleOther ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.websiteStyleOther ? "websiteStyleOther-error" : undefined}
              maxLength={100}
            />
            {errors.websiteStyleOther && (
              <p id="websiteStyleOther-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.websiteStyleOther}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.websiteStyleOther.length}/100 characters
            </p>
          </div>
        )}

        <div>
          <Label htmlFor="referenceWebsites" className="text-sm font-medium">
            Websites you like or want us to reference
          </Label>
          <Textarea
            id="referenceWebsites"
            value={formData.referenceWebsites}
            onChange={(e) => handleInputChange('referenceWebsites', e.target.value)}
            placeholder="Share URLs or describe websites you admire and would like us to reference for inspiration..."
            rows={4}
            className="mt-1"
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.referenceWebsites.length}/500 characters
          </p>
        </div>
      </div>
    </div>
  );
}