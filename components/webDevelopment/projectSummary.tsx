"use client"

import React from 'react';
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { WebDevFormData } from '@/lib/webDevTypes';

interface ProjectSummaryProps {
  t: any;
  formData: WebDevFormData;
  setShowSummary: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProjectSummary({ t, formData, setShowSummary }: ProjectSummaryProps) {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container max-w-4xl">
        <div className="text-center space-y-6 mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            PROJECT SUBMITTED SUCCESSFULLY!
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Thank you for providing all the details! Here's a summary of your web development project.
          </p>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-lg sm:text-xl">
              Web Development Project Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label className="font-semibold">Business Name:</Label>
                <p className="text-muted-foreground">{formData.businessName}</p>
              </div>
              <div>
                <Label className="font-semibold">Website Goal:</Label>
                <p className="text-muted-foreground">
                  {formData.websiteGoal === "other" ? formData.websiteGoalOther : formData.websiteGoal}
                </p>
              </div>
              <div>
                <Label className="font-semibold">Design Option:</Label>
                <p className="text-muted-foreground">
                  {formData.designOption === "template" ? "Template-based design" : "Custom design"}
                </p>
              </div>
              {formData.selectedTemplate && (
                <div>
                  <Label className="font-semibold">Selected Template:</Label>
                  <p className="text-muted-foreground">{formData.selectedTemplate}</p>
                </div>
              )}
              <div>
                <Label className="font-semibold">Main Pages:</Label>
                <p className="text-muted-foreground">
                  {formData.mainPages.join(", ")}
                  {formData.mainPagesOther && `, ${formData.mainPagesOther}`}
                </p>
              </div>
              <div>
                <Label className="font-semibold">Multiple Languages:</Label>
                <p className="text-muted-foreground">
                  {formData.multipleLanguages === "yes" ? `Yes: ${formData.languagesList}` : "No"}
                </p>
              </div>
              <div>
                <Label className="font-semibold">Brand Assets:</Label>
                <p className="text-muted-foreground">{formData.brandAssets.join(", ")}</p>
              </div>
              <div>
                <Label className="font-semibold">Website Style:</Label>
                <p className="text-muted-foreground">
                  {formData.websiteStyle.join(", ")}
                  {formData.websiteStyleOther && `, ${formData.websiteStyleOther}`}
                </p>
              </div>
              <div>
                <Label className="font-semibold">Content Ready:</Label>
                <p className="text-muted-foreground">{formData.contentReady}</p>
              </div>
              <div>
                <Label className="font-semibold">Features Needed:</Label>
                <p className="text-muted-foreground">
                  {formData.featuresNeeded.join(", ")}
                  {formData.featuresOther && `, ${formData.featuresOther}`}
                </p>
              </div>
              <div>
                <Label className="font-semibold">Admin Panel:</Label>
                <p className="text-muted-foreground">{formData.needAdminPanel}</p>
              </div>
              <div>
                <Label className="font-semibold">Domain & Hosting:</Label>
                <p className="text-muted-foreground">
                  {formData.domainHosting === "yes" ? `Yes: ${formData.domainName}` : "No"}
                </p>
              </div>
              <div>
                <Label className="font-semibold">Project Timeline:</Label>
                <p className="text-muted-foreground">{formData.projectTimeline}</p>
              </div>
              <div>
                <Label className="font-semibold">Communication:</Label>
                <p className="text-muted-foreground">{formData.communicationPreference}</p>
              </div>
              <div>
                <Label className="font-semibold">Service Choice:</Label>
                <p className="text-muted-foreground">{formData.serviceChoice}</p>
              </div>
            </div>

            {formData.businessDescription && (
              <div>
                <Label className="font-semibold">Business Description:</Label>
                <p className="text-muted-foreground mt-1">{formData.businessDescription}</p>
              </div>
            )}

            {formData.templateContent && (
              <div>
                <Label className="font-semibold">Template Content Changes:</Label>
                <p className="text-muted-foreground mt-1">{formData.templateContent}</p>
              </div>
            )}

            {formData.referenceWebsites && (
              <div>
                <Label className="font-semibold">Reference Websites:</Label>
                <p className="text-muted-foreground mt-1">{formData.referenceWebsites}</p>
              </div>
            )}

            {formData.finalNotes && (
              <div>
                <Label className="font-semibold">Final Notes:</Label>
                <p className="text-muted-foreground mt-1">{formData.finalNotes}</p>
              </div>
            )}

            <div className="text-center pt-6">
              <p className="text-muted-foreground mb-4">
                We'll review your requirements and get back to you within 24 hours with a detailed proposal and timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setShowSummary(false)} 
                  variant="outline"
                  aria-label="Edit project details"
                >
                  Edit Project
                </Button>
                <Link href="/" aria-label="Return to home page">
                  <Button className="bg-primary hover:bg-primary/90">
                    Back to Home
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