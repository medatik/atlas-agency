"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles } from "lucide-react";
import { CompletePackageFormData, CompletePackageFormErrors, WebsiteGoalOption } from '@/lib/completePackageTypes';
import { sanitizeInput } from '@/lib/completePackageValidation';

interface StepOneProps {
  t: any;
  formData: CompletePackageFormData;
  setFormData: React.Dispatch<React.SetStateAction<CompletePackageFormData>>;
  errors: CompletePackageFormErrors;
}

export function StepOne({ t, formData, setFormData, errors }: StepOneProps) {
  const websiteGoals: WebsiteGoalOption[] = [
    { id: "informational", label: "Informational / Company site" },
    { id: "portfolio", label: "Portfolio" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "booking", label: "Booking" },
    { id: "blog", label: "Blog" },
    { id: "other", label: "Other" },
  ];

  const handleInputChange = (field: keyof CompletePackageFormData, value: string) => {
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
          PROJECT BASICS
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Tell us about your business and project goals
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label 
            htmlFor="businessName" 
            className="text-sm font-medium"
          >
            Business or Brand Name <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <Input
            id="businessName"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            placeholder="Enter your business or brand name"
            className={`mt-1 ${errors.businessName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            required
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
            maxLength={50}
          />
          {errors.businessName && (
            <p id="businessName-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.businessName}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            {formData.businessName.length}/50 characters
          </p>
        </div>

        <div>
          <Label 
            htmlFor="businessDescription" 
            className="text-sm font-medium"
          >
            Brief Description of Business or Project <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <Textarea
            id="businessDescription"
            value={formData.businessDescription}
            onChange={(e) => handleInputChange('businessDescription', e.target.value)}
            placeholder="Tell us about your business, what you do, your target audience, and your vision..."
            rows={4}
            className={`mt-1 ${errors.businessDescription ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            required
            aria-describedby={errors.businessDescription ? "businessDescription-error" : undefined}
            maxLength={500}
          />
          {errors.businessDescription && (
            <p id="businessDescription-error" className="text-sm text-destructive mt-1" role="alert">
              {errors.businessDescription}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            {formData.businessDescription.length}/500 characters
          </p>
        </div>

        <div>
          <Label className="text-sm font-medium">
            Main goal of the website <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.websiteGoal}
            onValueChange={(value) => setFormData(prev => ({ ...prev, websiteGoal: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.websiteGoal ? "websiteGoal-error" : undefined}
          >
            {websiteGoals.map((goal) => (
              <Card
                key={goal.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.websiteGoal === goal.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, websiteGoal: goal.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={goal.id} 
                      id={`goal-${goal.id}`}
                      aria-describedby={`goal-${goal.id}-description`}
                    />
                    <Label 
                      htmlFor={`goal-${goal.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                      id={`goal-${goal.id}-description`}
                    >
                      {goal.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.websiteGoal && (
            <p id="websiteGoal-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.websiteGoal}
            </p>
          )}
        </div>

        {formData.websiteGoal === 'other' && (
          <div>
            <Label htmlFor="websiteGoalOther" className="text-sm font-medium">
              Please specify your website goal <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="websiteGoalOther"
              value={formData.websiteGoalOther}
              onChange={(e) => handleInputChange('websiteGoalOther', e.target.value)}
              placeholder="Describe your specific website goal"
              className={`mt-1 ${errors.websiteGoalOther ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.websiteGoalOther ? "websiteGoalOther-error" : undefined}
              maxLength={100}
            />
            {errors.websiteGoalOther && (
              <p id="websiteGoalOther-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.websiteGoalOther}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.websiteGoalOther.length}/100 characters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}