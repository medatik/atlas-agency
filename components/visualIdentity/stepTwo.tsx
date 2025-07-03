"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Eye,
  CheckCircle,
  HelpCircle,
  Info
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FormData, FormErrors, Translation, LogoType } from '@/lib/types';
import { sanitizeInput } from '@/lib/validation';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface LogoTypeInfo {
  id: string;
  label: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  exampleLight: string;
  exampleDark: string;
}

interface StepTwoProps {
  t: Translation;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
}

export function StepTwo({ t, formData, setFormData, errors }: StepTwoProps) {
  const [selectedInfo, setSelectedInfo] = React.useState<LogoTypeInfo | null>(null);
  const [previousChoice, setPreviousChoice] = React.useState<string>("");
  const { theme } = useTheme();

  const logoTypes: LogoTypeInfo[] = [
    {
      id: "symbols",
      label: t.visualIdentity.step2.logoTypes.symbols.label,
      exampleLight: "/APPLE light theme.svg",
      exampleDark: "/APPLE dark theme.svg",
      description: t.visualIdentity.step2.logoTypes.symbols.description,
      advantages: t.visualIdentity.step2.logoTypes.symbols.advantages,
      disadvantages: t.visualIdentity.step2.logoTypes.symbols.disadvantages
    },
    {
      id: "monograms",
      label: t.visualIdentity.step2.logoTypes.monograms.label,
      exampleLight: "/HP light theme.svg",
      exampleDark: "/HP dark theme.svg",
      description: t.visualIdentity.step2.logoTypes.monograms.description,
      advantages: t.visualIdentity.step2.logoTypes.monograms.advantages,
      disadvantages: t.visualIdentity.step2.logoTypes.monograms.disadvantages
    },
    {
      id: "wordmarks",
      label: t.visualIdentity.step2.logoTypes.wordmarks.label,
      exampleLight: "/BBC light theme.svg",
      exampleDark: "/BBC dark theme.svg",
      description: t.visualIdentity.step2.logoTypes.wordmarks.description,
      advantages: t.visualIdentity.step2.logoTypes.wordmarks.advantages,
      disadvantages: t.visualIdentity.step2.logoTypes.wordmarks.disadvantages
    },
    {
      id: "combination",
      label: t.visualIdentity.step2.logoTypes.combination.label,
      exampleLight: "/macdo light theme.svg",
      exampleDark: "/macdo dark theme.svg",
      description: t.visualIdentity.step2.logoTypes.combination.description,
      advantages: t.visualIdentity.step2.logoTypes.combination.advantages,
      disadvantages: t.visualIdentity.step2.logoTypes.combination.disadvantages
    },
    {
      id: "emblems",
      label: t.visualIdentity.step2.logoTypes.emblems.label,
      exampleLight: "/MINI light theme.svg",
      exampleDark: "/MINI dark theme.svg",
      description: t.visualIdentity.step2.logoTypes.emblems.description,
      advantages: t.visualIdentity.step2.logoTypes.emblems.advantages,
      disadvantages: t.visualIdentity.step2.logoTypes.emblems.disadvantages
    },
    {
      id: "mascots",
      label: t.visualIdentity.step2.logoTypes.mascots.label,
      exampleLight: "/michelin lightt theme.svg",
      exampleDark: "/michelin dark theme.svg",
      description: t.visualIdentity.step2.logoTypes.mascots.description,
      advantages: t.visualIdentity.step2.logoTypes.mascots.advantages,
      disadvantages: t.visualIdentity.step2.logoTypes.mascots.disadvantages
    }
  ];

  const handleLogoTypeSelect = (typeId: string) => {
    setPreviousChoice(formData.logoType);
    setFormData(prev => ({
      ...prev,
      logoType: typeId,
      cantDecideHelp: ""
    }));
  };

  const handleCantDecide = () => {
    if (formData.logoType === "cant-decide") {
      // If already in "can't decide" mode, toggle back to previous choice or empty
      setFormData(prev => ({
        ...prev,
        logoType: previousChoice || "",
        cantDecideHelp: ""
      }));
    } else {
      // Store current choice before switching to "can't decide"
      setPreviousChoice(formData.logoType);
      setFormData(prev => ({
        ...prev,
        logoType: "cant-decide",
        cantDecideHelp: prev.cantDecideHelp || ""
      }));
    }
  };

  const handleCancelCantDecide = () => {
    setFormData(prev => ({
      ...prev,
      logoType: previousChoice || "",
      cantDecideHelp: ""
    }));
    setPreviousChoice("");
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

      <div className="text-center text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
        <Info className="h-4 w-4" />
        {t.visualIdentity.step2.logoInfo}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {logoTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
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
            <CardContent className="p-3 sm:p-4 text-center relative min-h-[160px] flex flex-col items-center justify-between">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3 rounded-lg bg-muted flex items-center justify-center">
                <Image
                  src={theme === 'dark' ? type.exampleDark : type.exampleLight}
                  alt={`Example of ${type.label}`}
                  width={48}
                  height={48}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-between">
                <p className="text-xs sm:text-sm font-medium">{type.label}</p>
                <div className="h-6 flex items-center justify-center">
                  {formData.logoType === type.id && (
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
                  )}
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 h-8 w-8 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedInfo(type);
                }}
              >
                <HelpCircle className="h-4 w-4" />
                <span className="sr-only">Learn more about {type.label}</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            onClick={handleCantDecide}
            className={`flex items-center gap-2 ${
              formData.logoType === "cant-decide" 
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "hover:bg-muted"
            }`}
            aria-pressed={formData.logoType === "cant-decide"}
          >
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            {formData.logoType === "cant-decide" ? t.visualIdentity.step2.cancelHelp : t.visualIdentity.step2.helpText}
          </Button>

          {formData.logoType === "cant-decide" && previousChoice && (
            <Button
              variant="outline"
              onClick={handleCancelCantDecide}
              className="flex items-center gap-2 text-destructive hover:text-destructive"
            >
              {t.visualIdentity.step2.cancel}
            </Button>
          )}
        </div>

        {formData.logoType === "cant-decide" && (
          <div className="mt-4 bg-muted/50 p-4 rounded-lg">
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

      <Dialog open={!!selectedInfo} onOpenChange={() => setSelectedInfo(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{selectedInfo?.label}</DialogTitle>
            <DialogDescription>
              {selectedInfo?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-sm text-primary mb-2">Advantages:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {selectedInfo?.advantages.map((advantage, idx) => (
                  <li key={idx}>{advantage}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm text-destructive mb-2">Disadvantages:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {selectedInfo?.disadvantages.map((disadvantage, idx) => (
                  <li key={idx}>{disadvantage}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}