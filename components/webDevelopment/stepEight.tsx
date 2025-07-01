"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import { WebDevFormData, WebDevFormErrors, ServiceOption } from '@/lib/webDevTypes';
import { sanitizeInput } from '@/lib/webDevValidation';

interface StepEightProps {
  t: any;
  formData: WebDevFormData;
  setFormData: React.Dispatch<React.SetStateAction<WebDevFormData>>;
  errors: WebDevFormErrors;
}

export function StepEight({ t, formData, setFormData, errors }: StepEightProps) {
  const serviceOptions: ServiceOption[] = [
    { id: "logo-only", label: "Logo only" },
    { id: "visual-identity", label: "Visual identity package" },
    { id: "website-only", label: "Website only" },
    { id: "full-package", label: "Full package" },
    { id: "not-sure", label: "Not sure yet" },
  ];

  const handleInputChange = (field: keyof WebDevFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          FINAL NOTES & SERVICE CHOICE
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Any final details and service selection
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label htmlFor="finalNotes" className="text-sm font-medium">
            Anything else we should know?
          </Label>
          <Textarea
            id="finalNotes"
            value={formData.finalNotes}
            onChange={(e) => handleInputChange('finalNotes', e.target.value)}
            placeholder="Any additional information, special requirements, or questions you'd like to share..."
            rows={4}
            className="mt-1"
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.finalNotes.length}/500 characters
          </p>
        </div>

        <Separator />

        <div>
          <Label className="text-sm font-medium">
            Which service are you ordering? <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.serviceChoice}
            onValueChange={(value) => setFormData(prev => ({ ...prev, serviceChoice: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.serviceChoice ? "serviceChoice-error" : undefined}
          >
            {serviceOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.serviceChoice === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, serviceChoice: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`service-${option.id}`}
                      aria-describedby={`service-${option.id}-description`}
                    />
                    <Label 
                      htmlFor={`service-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                      id={`service-${option.id}-description`}
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.serviceChoice && (
            <p id="serviceChoice-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.serviceChoice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}