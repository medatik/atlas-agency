"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Eye, CheckCircle, HelpCircle, X } from "lucide-react";
import { FormData, FormErrors, Translation, LogoType } from '@/lib/types';
import { sanitizeInput } from '@/lib/validation';

interface StepTwoProps {
  t: Translation;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
}

export function StepTwo({ t, formData, setFormData, errors }: StepTwoProps) {
  const logoTypes: LogoType[] = [
    { id: "1", label: t.visualIdentity.logoTypes.wordmark },
    { id: "2", label: t.visualIdentity.logoTypes.lettermark },
    { id: "3", label: t.visualIdentity.logoTypes.pictorial },
    { id: "4", label: t.visualIdentity.logoTypes.abstract },
    { id: "5", label: t.visualIdentity.logoTypes.mascot },
    { id: "6", label: t.visualIdentity.logoTypes.combination },
  ];

  const handleLogoTypeSelect = (typeId: string) => {
    setFormData(prev => ({
      ...prev,
      logoType: typeId,
      cantDecideHelp: "" // Clear help text when selecting a logo type
    }));
  };

  const handleCantDecide = () => {
    setFormData(prev => ({
      ...prev,
      logoType: "cant-decide",
      cantDecideHelp: prev.cantDecideHelp || ""
    }));
  };

  const handleCancelSelection = () => {
    setFormData(prev => ({
      ...prev,
      logoType: "",
      cantDecideHelp: ""
    }));
  };

  const handleHelpTextChange = (value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, cantDecideHelp: sanitizedValue }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Eye className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {t.visualIdentity.step2.title}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t.visualIdentity.step2.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {logoTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 relative ${
              formData.logoType === type.id
                ? "ring-2 ring-primary bg-primary/5"
                : "hover:bg-muted/50"
            }`}
            onClick={() => handleLogoTypeSelect(type.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLogoTypeSelect(type.id);
              }
            }}
            aria-pressed={formData.logoType === type.id}
            aria-label={`Select ${type.label} logo type`}
          >
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-primary" aria-hidden="true">
                  {type.id}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium">{type.label}</p>
              {formData.logoType === type.id && (
                <>
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto mt-2" aria-hidden="true" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancelSelection();
                    }}
                    className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600"
                    aria-label="Cancel selection"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="outline"
            onClick={handleCantDecide}
            className={`flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base px-4 py-2 ${
              formData.logoType === "cant-decide" ? "ring-2 ring-primary" : ""
            }`}
            aria-pressed={formData.logoType === "cant-decide"}
          >
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            <span className="text-center">{t.visualIdentity.step2.helpText}</span>
          </Button>
          
          {formData.logoType === "cant-decide" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancelSelection}
              className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 flex-shrink-0"
              aria-label="Cancel help request"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {formData.logoType === "cant-decide" && (
          <div className="mt-4">
            <Textarea
              value={formData.cantDecideHelp}
              onChange={(e) => handleHelpTextChange(e.target.value)}
              placeholder={t.visualIdentity.step2.helpPlaceholder}
              rows={3}
              className={`w-full ${errors.cantDecideHelp ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              aria-describedby={errors.cantDecideHelp ? "cantDecideHelp-error" : undefined}
              maxLength={300}
            />
            {errors.cantDecideHelp && (
              <p id="cantDecideHelp-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.cantDecideHelp}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.cantDecideHelp.length}/300 characters
            </p>
          </div>
        )}
      </div>

      {errors.logoType && (
        <p className="text-sm text-destructive text-center" role="alert">
          {errors.logoType}
        </p>
      )}
    </div>
  );
}