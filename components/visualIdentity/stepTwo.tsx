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

interface LogoTypeInfo {
  id: string;
  label: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  example: string;
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

  const logoTypes: LogoTypeInfo[] = [
    {
      id: "symbols",
      label: "Symbols",
      example: "/logos/apple.svg",
      description: "A symbol-based logo that represents your brand through a distinctive mark.",
      advantages: [
        "You can create multiple configurations, known as lockups, allowing for greater flexibility",
        "Symbols work more effectively at smaller sizes than typography-based designs",
        "Symbols transcend language barriers, enabling the use of consistent images worldwide"
      ],
      disadvantages: [
        "You'll immediately know the business name when you first see a typography based design",
        "It will have no meaning until people have repeatedly seen the new symbol",
        "If you want the brand to be recognized by a symbol, like Nike, it can be a very costly and time-consuming pursuit"
      ]
    },
    {
      id: "monograms",
      label: "Monograms & Letterforms",
      example: "/logos/hp.svg",
      description: "A design based on letters and monograms that creates a unique visual identity.",
      advantages: [
        "It's quick and easy to explore ideas. Monograms and letterforms rely on simple shapes, so designers can often find solutions that reflect the business offering",
        "A monogram or lettermark will work more effectively in smaller sizes than a wordmark",
        "You can create multiple lockups for greater versatility if there's a supporting wordmark"
      ],
      disadvantages: [
        "A Monogram isn't always ideal if the company is international and requires a multilingual identity. A globally recognizable pictorial or abstract symbol may be more effective",
        "When dealing with individual letters, creating an original mark can be challenging"
      ]
    },
    {
      id: "wordmarks",
      label: "Wordmarks & Lettermarks",
      example: "/logos/bbc.svg",
      description: "A text-based logo that uses typography to create a distinctive brand mark.",
      advantages: [
        "You instantly know the company name",
        "Wordmarks and Lettermarks are often quicker and easier to design, especially when using an existing font"
      ],
      disadvantages: [
        "They're not ideal for long names",
        "They're often not distinct enough to be memorable"
      ]
    },
    {
      id: "combination",
      label: "Combination Marks",
      example: "/logos/lays.svg",
      description: "A logo that combines both text and symbols into one unified design.",
      advantages: [
        "They can be distinct and memorable",
        "You instantly know the company name",
        "When letters are not styled, they transcend language barriers and ensure a consistent global identity"
      ],
      disadvantages: [
        "The symbol and the typography are mixed in most cases, so the logo can only be configured in a single way — making combination marks less versatile"
      ]
    },
    {
      id: "emblems",
      label: "Emblems, Crests & Badges",
      example: "/logos/mini.svg",
      description: "A traditional or badge-style design that combines imagery and text in a unified symbol.",
      advantages: [
        "Their classic appearance can be used to your advantage to convey a sense of unity, prestige, or history",
        "They're usually reasonably detailed, so they can include several intricate elements to tell a story or communicate different messages"
      ],
      disadvantages: [
        "They have limited versatility. They're often detailed, making them difficult to reproduce in small sizes, and usually only have one configuration",
        "Designing them can be challenging because they often include intricate details and patterns",
        "They follow a particular design style, making it harder to stand out in a crowded market where many Emblem logos are already used"
      ]
    },
    {
      id: "mascots",
      label: "Mascots",
      example: "/logos/michelin.svg",
      description: "A character-based logo that gives your brand a friendly, approachable personality.",
      advantages: [
        "They can give a brand a lot of character and personality",
        "They help to build a stronger relationship with customers",
        "They are easily separated from the logo as a valuable asset for many types of marketing"
      ],
      disadvantages: [
        "They can be time-consuming to create",
        "Cross-culturally, the Mascot may be engaging to some but offensive to others"
      ]
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
    setPreviousChoice(formData.logoType);
    setFormData(prev => ({
      ...prev,
      logoType: "cant-decide",
      cantDecideHelp: prev.cantDecideHelp || ""
    }));
  };

  const handleCancelCantDecide = () => {
    setFormData(prev => ({
      ...prev,
      logoType: previousChoice,
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

      <div className="text-center text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
        <Info className="h-4 w-4" />
        Click the help icon on any card to learn more about that logo type
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
                  src={type.example}
                  alt={`Example of ${type.label}`}
                  width={48}
                  height={48}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
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
            {t.visualIdentity.step2.helpText}
          </Button>

          {formData.logoType === "cant-decide" && previousChoice && (
            <Button
              variant="outline"
              onClick={handleCancelCantDecide}
              className="flex items-center gap-2 text-destructive hover:text-destructive"
            >
              Cancel
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