"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Server } from "lucide-react";
import { WebDevFormData, WebDevFormErrors, ManagementOption } from '@/lib/webDevTypes';
import { sanitizeInput } from '@/lib/webDevValidation';

interface StepSixProps {
  t: any;
  formData: WebDevFormData;
  setFormData: React.Dispatch<React.SetStateAction<WebDevFormData>>;
  errors: WebDevFormErrors;
}

export function StepSix({ t, formData, setFormData, errors }: StepSixProps) {
  const adminPanelOptions = [
    { id: "yes", label: "Yes" },
    { id: "no", label: "No" },
    { id: "not-sure", label: "Not sure" },
  ];

  const domainHostingOptions = [
    { id: "yes", label: "Yes (text input)" },
    { id: "no", label: "No" },
  ];

  const managementOptions: ManagementOption[] = [
    { id: "monthly-updates", label: "Monthly updates" },
    { id: "hosting-support", label: "Hosting support" },
    { id: "seo-reports", label: "SEO reports" },
    { id: "no-thanks", label: "No thanks" },
  ];

  const handleInputChange = (field: keyof WebDevFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  const handleManagementToggle = (managementId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      managementHelp: checked
        ? [...prev.managementHelp, managementId]
        : prev.managementHelp.filter(id => id !== managementId)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Server className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          TECHNICAL & HOSTING
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Technical requirements and hosting preferences
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label className="text-sm font-medium">
            Need admin panel? <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.needAdminPanel}
            onValueChange={(value) => setFormData(prev => ({ ...prev, needAdminPanel: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.needAdminPanel ? "needAdminPanel-error" : undefined}
          >
            {adminPanelOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.needAdminPanel === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, needAdminPanel: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`admin-${option.id}`}
                    />
                    <Label 
                      htmlFor={`admin-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.needAdminPanel && (
            <p id="needAdminPanel-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.needAdminPanel}
            </p>
          )}
        </div>

        <div>
          <Label className="text-sm font-medium">
            Domain & hosting? <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.domainHosting}
            onValueChange={(value) => setFormData(prev => ({ ...prev, domainHosting: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.domainHosting ? "domainHosting-error" : undefined}
          >
            {domainHostingOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.domainHosting === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, domainHosting: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`domain-${option.id}`}
                    />
                    <Label 
                      htmlFor={`domain-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.domainHosting && (
            <p id="domainHosting-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.domainHosting}
            </p>
          )}
        </div>

        {formData.domainHosting === 'yes' && (
          <div>
            <Label htmlFor="domainName" className="text-sm font-medium">
              Please specify your domain name <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="domainName"
              value={formData.domainName}
              onChange={(e) => handleInputChange('domainName', e.target.value)}
              placeholder="e.g., mywebsite.com or I need help choosing"
              className={`mt-1 ${errors.domainName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.domainName ? "domainName-error" : undefined}
              maxLength={100}
            />
            {errors.domainName && (
              <p id="domainName-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.domainName}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.domainName.length}/100 characters
            </p>
          </div>
        )}

        <div>
          <Label className="text-sm font-medium">
            Help managing site after launch?
          </Label>
          <div className="mt-4 space-y-3">
            {managementOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`management-${option.id}`}
                  checked={formData.managementHelp.includes(option.id)}
                  onCheckedChange={(checked) => handleManagementToggle(option.id, checked as boolean)}
                />
                <Label
                  htmlFor={`management-${option.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}