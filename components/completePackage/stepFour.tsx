"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Type } from "lucide-react";
import { CompletePackageFormData, CompletePackageFormErrors, FontOption } from '@/lib/completePackageTypes';
import { sanitizeInput } from '@/lib/completePackageValidation';

interface StepFourProps {
  t: any;
  formData: CompletePackageFormData;
  setFormData: React.Dispatch<React.SetStateAction<CompletePackageFormData>>;
  errors: CompletePackageFormErrors;
}

export function StepFour({ t, formData, setFormData, errors }: StepFourProps) {
  const fontPreferences: FontOption[] = [
    { id: "specific", label: "I have a specific font in mind" },
    { id: "help", label: "We can get you the perfect font" },
  ];

  const handleInputChange = (field: keyof CompletePackageFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Type className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          TYPOGRAPHY
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Choose your preferred font style for your brand
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label className="text-base font-semibold">
            Do you have a specific font you want to use?
          </Label>
          <RadioGroup
            value={formData.fontPreference}
            onValueChange={(value) => setFormData(prev => ({ ...prev, fontPreference: value }))}
            className="mt-4 space-y-4"
            aria-describedby={errors.fontPreference ? "fontPreference-error" : undefined}
          >
            {fontPreferences.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.fontPreference === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, fontPreference: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={option.id}
                      aria-describedby={`${option.id}-description`}
                    />
                    <Label 
                      htmlFor={option.id} 
                      className="cursor-pointer text-sm sm:text-base"
                      id={`${option.id}-description`}
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.fontPreference && (
            <p id="fontPreference-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.fontPreference}
            </p>
          )}
        </div>

        {formData.fontPreference === 'specific' && (
          <div>
            <Label htmlFor="customFont" className="text-sm font-medium">
              Custom Font Name <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="customFont"
              value={formData.customFont}
              onChange={(e) => handleInputChange('customFont', e.target.value)}
              placeholder="Enter the font name you prefer"
              className={`mt-1 ${errors.customFont ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.customFont ? "customFont-error" : undefined}
              maxLength={50}
            />
            {errors.customFont && (
              <p id="customFont-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.customFont}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.customFont.length}/50 characters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}