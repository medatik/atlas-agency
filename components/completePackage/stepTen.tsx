"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, MessageSquare } from "lucide-react";
import { CompletePackageFormData, CompletePackageFormErrors, TimelineOption, CommunicationOption } from '@/lib/completePackageTypes';
import { sanitizeInput } from '@/lib/completePackageValidation';

interface StepTenProps {
  t: any;
  formData: CompletePackageFormData;
  setFormData: React.Dispatch<React.SetStateAction<CompletePackageFormData>>;
  errors: CompletePackageFormErrors;
}

export function StepTen({ t, formData, setFormData, errors }: StepTenProps) {
  const timelineOptions: TimelineOption[] = [
    { id: "rush", label: "Rush (2-3 weeks) - Additional fees may apply" },
    { id: "standard", label: "Standard (4-6 weeks) - Recommended timeline" },
    { id: "flexible", label: "Flexible (6+ weeks) - No rush, take your time" },
  ];

  const communicationOptions: CommunicationOption[] = [
    { id: "email", label: "Email updates and communication" },
    { id: "phone", label: "Phone calls for important updates" },
    { id: "video", label: "Video calls for reviews and feedback" },
  ];

  const handleInputChange = (field: keyof CompletePackageFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Star className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          PROJECT PREFERENCES
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Timeline, communication, and final details
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label className="text-base font-semibold flex items-center gap-2">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Project Timeline
          </Label>
          <RadioGroup
            value={formData.projectTimeline}
            onValueChange={(value) => setFormData(prev => ({ ...prev, projectTimeline: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.projectTimeline ? "projectTimeline-error" : undefined}
          >
            {timelineOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.projectTimeline === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, projectTimeline: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`timeline-${option.id}`}
                      aria-describedby={`timeline-${option.id}-description`}
                    />
                    <Label 
                      htmlFor={`timeline-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                      id={`timeline-${option.id}-description`}
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.projectTimeline && (
            <p id="projectTimeline-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.projectTimeline}
            </p>
          )}
        </div>

        <Separator />

        <div>
          <Label className="text-base font-semibold flex items-center gap-2">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Preferred Communication Method
          </Label>
          <RadioGroup
            value={formData.communicationPreference}
            onValueChange={(value) => setFormData(prev => ({ ...prev, communicationPreference: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.communicationPreference ? "communicationPreference-error" : undefined}
          >
            {communicationOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.communicationPreference === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, communicationPreference: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`communication-${option.id}`}
                      aria-describedby={`communication-${option.id}-description`}
                    />
                    <Label 
                      htmlFor={`communication-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                      id={`communication-${option.id}-description`}
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.communicationPreference && (
            <p id="communicationPreference-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.communicationPreference}
            </p>
          )}
        </div>

        <Separator />

        <div>
          <Label htmlFor="additionalRequests" className="text-sm font-medium">
            Anything you want to add? Just tell us
          </Label>
          <Textarea
            id="additionalRequests"
            value={formData.additionalRequests}
            onChange={(e) => handleInputChange('additionalRequests', e.target.value)}
            placeholder="Any additional requirements, preferences, or special requests for your complete package..."
            rows={4}
            className="mt-1"
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.additionalRequests.length}/500 characters
          </p>
        </div>

        <div>
          <Label htmlFor="finalNotes" className="text-sm font-medium">
            Final notes or questions
          </Label>
          <Textarea
            id="finalNotes"
            value={formData.finalNotes}
            onChange={(e) => handleInputChange('finalNotes', e.target.value)}
            placeholder="Any final details, questions, or information you'd like to share..."
            rows={4}
            className="mt-1"
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.finalNotes.length}/500 characters
          </p>
        </div>
      </div>
    </div>
  );
}