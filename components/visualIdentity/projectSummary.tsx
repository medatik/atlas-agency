"use client"

import React from 'react';
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { FormData, Translation, LogoType, FontOption, TimelineOption, CommunicationOption } from '@/lib/types';

interface ProjectSummaryProps {
  t: Translation;
  formData: FormData;
  setShowSummary: React.Dispatch<React.SetStateAction<boolean>>;
  showColorsHelp: boolean;
}

export function ProjectSummary({ t, formData, setShowSummary, showColorsHelp }: ProjectSummaryProps) {
  const logoTypes: LogoType[] = [
    { id: "symbols", label: t.visualIdentity.step2.logoTypes.symbols.label },
    { id: "monograms", label: t.visualIdentity.step2.logoTypes.monograms.label },
    { id: "wordmarks", label: t.visualIdentity.step2.logoTypes.wordmarks.label },
    { id: "combination", label: t.visualIdentity.step2.logoTypes.combination.label },
    { id: "emblems", label: t.visualIdentity.step2.logoTypes.emblems.label },
    { id: "mascots", label: t.visualIdentity.step2.logoTypes.mascots.label },
  ];

  const fontPreferences: FontOption[] = [
    { id: "specific", label: t.visualIdentity.fontOptions.specific },
    { id: "help", label: t.visualIdentity.fontOptions.help },
  ];

  const timelineOptions: TimelineOption[] = [
    { id: "rush", label: t.visualIdentity.step5.timeline.rush },
    { id: "standard", label: t.visualIdentity.step5.timeline.standard },
    { id: "flexible", label: t.visualIdentity.step5.timeline.flexible },
  ];

  const communicationOptions: CommunicationOption[] = [
    { id: "email", label: t.visualIdentity.step5.communication.email },
    { id: "phone", label: t.visualIdentity.step5.communication.phone },
    { id: "video", label: t.visualIdentity.step5.communication.video },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container max-w-4xl">
        <div className="text-center space-y-6 mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {t.visualIdentity.summary.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.visualIdentity.summary.subtitle}
          </p>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-lg sm:text-xl">
              {t.visualIdentity.summary.projectDetails}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label className="font-semibold">{t.visualIdentity.step1.brandName}:</Label>
                <p className="text-muted-foreground">{formData.brandName}</p>
              </div>
              <div>
                <Label className="font-semibold">{t.visualIdentity.step2.title}:</Label>
                <p className="text-muted-foreground">
                  {formData.logoType === "cant-decide" 
                    ? t.visualIdentity.step2.helpText
                    : logoTypes.find(type => type.id === formData.logoType)?.label || "Not specified"
                  }
                </p>
              </div>
              <div>
                <Label className="font-semibold">{t.visualIdentity.step3.primaryColors}:</Label>
                <div className="flex gap-1 mt-1 flex-wrap">
                  {formData.primaryColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: color }}
                      aria-label={`Primary color ${color}`}
                    />
                  ))}
                  {formData.primaryColors.length === 0 && showColorsHelp && (
                    <span className="text-muted-foreground text-sm">AI Assistance Requested</span>
                  )}
                  {formData.primaryColors.length === 0 && !showColorsHelp && (
                    <span className="text-muted-foreground text-sm">None selected</span>
                  )}
                </div>
              </div>
              <div>
                <Label className="font-semibold">{t.visualIdentity.step3.secondaryColors}:</Label>
                <div className="flex gap-1 mt-1 flex-wrap">
                  {formData.secondaryColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: color }}
                      aria-label={`Secondary color ${color}`}
                    />
                  ))}
                  {formData.secondaryColors.length === 0 && showColorsHelp && (
                    <span className="text-muted-foreground text-sm">AI Assistance Requested</span>
                  )}
                  {formData.secondaryColors.length === 0 && !showColorsHelp && (
                    <span className="text-muted-foreground text-sm">None selected</span>
                  )}
                </div>
              </div>
              <div>
                <Label className="font-semibold">{t.visualIdentity.step4.title}:</Label>
                <p className="text-muted-foreground">
                  {fontPreferences.find(opt => opt.id === formData.fontPreference)?.label || "Not specified"}
                  {formData.customFont && ` (${formData.customFont})`}
                </p>
              </div>
              <div>
                <Label className="font-semibold">{t.visualIdentity.step5.timelineTitle}:</Label>
                <p className="text-muted-foreground">
                  {timelineOptions.find(opt => opt.id === formData.projectTimeline)?.label || "Not specified"}
                </p>
              </div>
            </div>

            {formData.brandDescription && (
              <div>
                <Label className="font-semibold">{t.visualIdentity.step1.brandDescription}:</Label>
                <p className="text-muted-foreground mt-1">{formData.brandDescription}</p>
              </div>
            )}

            {formData.additionalRequests && (
              <div>
                <Label className="font-semibold">{t.visualIdentity.step4.additionalRequests}:</Label>
                <p className="text-muted-foreground mt-1">{formData.additionalRequests}</p>
              </div>
            )}

            <div className="text-center pt-6">
              <p className="text-muted-foreground mb-4">{t.visualIdentity.summary.nextSteps}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setShowSummary(false)} 
                  variant="outline"
                  aria-label="Edit project details"
                >
                  {t.visualIdentity.summary.editProject}
                </Button>
                <Link href="/" aria-label="Return to home page">
                  <Button className="bg-primary hover:bg-primary/90">
                    {t.visualIdentity.backToHome}
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}