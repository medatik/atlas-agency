"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";
import { FormData, FormErrors, Translation } from '@/lib/types';
import { sanitizeInput } from '@/lib/validation';

interface StepOneProps {
  t: Translation;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
}

export function StepOne({ t, formData, setFormData, errors }: StepOneProps) {
  const handleInputChange = (field: keyof FormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {t.visualIdentity.step1.title}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t.visualIdentity.step1.subtitle}
        </p>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        <div>
          <Label 
            htmlFor="brandName" 
            className="text-sm font-medium"
          >
            {t.visualIdentity.step1.brandName} <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <Input
            id="brandName"
            value={formData.brandName}
            onChange={(e) => handleInputChange('brandName', e.target.value)}
            placeholder={t.visualIdentity.step1.brandNamePlaceholder}
            className={`mt-1 ${errors.brandName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            required
            aria-describedby={errors.brandName ? "brandName-error" : undefined}
            maxLength={50}
          />
          {errors.brandName && (
            <p id="brandName-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.brandName}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            {formData.brandName.length}/50 characters
          </p>
        </div>

        <div>
          <Label 
            htmlFor="brandDescription" 
            className="text-sm font-medium"
          >
            {t.visualIdentity.step1.brandDescription} <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <Textarea
            id="brandDescription"
            value={formData.brandDescription}
            onChange={(e) => handleInputChange('brandDescription', e.target.value)}
            placeholder={t.visualIdentity.step1.brandDescriptionPlaceholder}
            rows={4}
            className={`mt-1 ${errors.brandDescription ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            required
            aria-describedby={errors.brandDescription ? "brandDescription-error" : undefined}
            maxLength={500}
          />
          {errors.brandDescription && (
            <p id="brandDescription-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.brandDescription}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            {formData.brandDescription.length}/500 characters
          </p>
        </div>
      </div>
    </div>
  );
}