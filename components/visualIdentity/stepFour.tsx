"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Type, X } from "lucide-react";
import { FormData, FormErrors, Translation, FontOption } from '@/lib/types';
import { sanitizeInput } from '@/lib/validation';

interface StepFourProps {
  t: Translation;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
}

export function StepFour({ t, formData, setFormData, errors }: StepFourProps) {
  const fontPreferences: FontOption[] = [
    { id: "specific", label: t.visualIdentity.fontOptions.specific },
    { id: "help", label: t.visualIdentity.fontOptions.help },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  const handleCancelFontSelection = () => {
    setFormData(prev => ({
      ...prev,
      fontPreference: "",
      customFont: ""
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Type className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {t.visualIdentity.step4.title}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t.visualIdentity.step4.subtitle}
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <div className="flex items-center justify-between mb-4">
            <Label className="text-base font-semibold">
              {t.visualIdentity.step4.fontPreference}
            </Label>
            {formData.fontPreference && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancelFontSelection}
                className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                aria-label="Cancel font selection"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <RadioGroup
            value={formData.fontPreference}
            onValueChange={(value) => setFormData(prev => ({ ...prev, fontPreference: value }))}
            className="space-y-4"
            aria-describedby={errors.fontPreference ? "fontPreference-error" : undefined}
          >
            {fontPreferences.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 relative ${
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
              {t.visualIdentity.step4.customFont} <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="customFont"
              value={formData.customFont}
              onChange={(e) => handleInputChange('customFont', e.target.value)}
              placeholder={t.visualIdentity.step4.customFontPlaceholder}
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

        <Separator />

        <div>
          <Label htmlFor="additionalRequests" className="text-sm font-medium">
            {t.visualIdentity.step4.additionalRequests}
          </Label>
          <Textarea
            id="additionalRequests"
            value={formData.additionalRequests}
            onChange={(e) => handleInputChange('additionalRequests', e.target.value)}
            placeholder={t.visualIdentity.step4.additionalRequestsPlaceholder}
            rows={4}
            className="mt-1"
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.additionalRequests.length}/500 characters
          </p>
        </div>
      </div>
    </div>
  );
}