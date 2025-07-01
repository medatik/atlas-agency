"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Layout } from "lucide-react";
import { WebDevFormData, WebDevFormErrors, PageOption } from '@/lib/webDevTypes';
import { sanitizeInput } from '@/lib/webDevValidation';

interface StepThreeProps {
  t: any;
  formData: WebDevFormData;
  setFormData: React.Dispatch<React.SetStateAction<WebDevFormData>>;
  errors: WebDevFormErrors;
}

export function StepThree({ t, formData, setFormData, errors }: StepThreeProps) {
  const pageOptions: PageOption[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
    { id: "products", label: "Products/Shop" },
    { id: "blog", label: "Blog" },
    { id: "other", label: "Other" },
  ];

  const sitemapOptions = [
    { id: "yes", label: "Yes (upload or describe)" },
    { id: "no", label: "No, need help" },
  ];

  const languageOptions = [
    { id: "yes", label: "Yes (list languages)" },
    { id: "no", label: "No" },
  ];

  const handleInputChange = (field: keyof WebDevFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  const handlePageToggle = (pageId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      mainPages: checked
        ? [...prev.mainPages, pageId]
        : prev.mainPages.filter(id => id !== pageId)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Layout className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          PAGES & STRUCTURE
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Define your website structure and pages
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label className="text-sm font-medium">
            Main pages needed <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <div className="mt-4 space-y-3">
            {pageOptions.map((page) => (
              <div key={page.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`page-${page.id}`}
                  checked={formData.mainPages.includes(page.id)}
                  onCheckedChange={(checked) => handlePageToggle(page.id, checked as boolean)}
                />
                <Label
                  htmlFor={`page-${page.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {page.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.mainPages && (
            <p className="text-sm text-destructive mt-2" role="alert">
              {errors.mainPages}
            </p>
          )}
        </div>

        {formData.mainPages.includes("other") && (
          <div>
            <Label htmlFor="mainPagesOther" className="text-sm font-medium">
              Please specify other pages <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="mainPagesOther"
              value={formData.mainPagesOther}
              onChange={(e) => handleInputChange('mainPagesOther', e.target.value)}
              placeholder="List the other pages you need"
              className={`mt-1 ${errors.mainPagesOther ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.mainPagesOther ? "mainPagesOther-error" : undefined}
              maxLength={200}
            />
            {errors.mainPagesOther && (
              <p id="mainPagesOther-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.mainPagesOther}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.mainPagesOther.length}/200 characters
            </p>
          </div>
        )}

        <div>
          <Label className="text-sm font-medium">
            Do you have a sitemap or structure? <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.hasSitemap}
            onValueChange={(value) => setFormData(prev => ({ ...prev, hasSitemap: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.hasSitemap ? "hasSitemap-error" : undefined}
          >
            {sitemapOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.hasSitemap === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, hasSitemap: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`sitemap-${option.id}`}
                    />
                    <Label 
                      htmlFor={`sitemap-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.hasSitemap && (
            <p id="hasSitemap-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.hasSitemap}
            </p>
          )}
        </div>

        {formData.hasSitemap === 'yes' && (
          <div>
            <Label htmlFor="sitemapDescription" className="text-sm font-medium">
              Please describe your sitemap or structure <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Textarea
              id="sitemapDescription"
              value={formData.sitemapDescription}
              onChange={(e) => handleInputChange('sitemapDescription', e.target.value)}
              placeholder="Describe your website structure, page hierarchy, or upload details..."
              rows={4}
              className={`mt-1 ${errors.sitemapDescription ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.sitemapDescription ? "sitemapDescription-error" : undefined}
              maxLength={500}
            />
            {errors.sitemapDescription && (
              <p id="sitemapDescription-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.sitemapDescription}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.sitemapDescription.length}/500 characters
            </p>
          </div>
        )}

        <div>
          <Label className="text-sm font-medium">
            Multiple languages? <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.multipleLanguages}
            onValueChange={(value) => setFormData(prev => ({ ...prev, multipleLanguages: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.multipleLanguages ? "multipleLanguages-error" : undefined}
          >
            {languageOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.multipleLanguages === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, multipleLanguages: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`languages-${option.id}`}
                    />
                    <Label 
                      htmlFor={`languages-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.multipleLanguages && (
            <p id="multipleLanguages-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.multipleLanguages}
            </p>
          )}
        </div>

        {formData.multipleLanguages === 'yes' && (
          <div>
            <Label htmlFor="languagesList" className="text-sm font-medium">
              List the languages you need <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="languagesList"
              value={formData.languagesList}
              onChange={(e) => handleInputChange('languagesList', e.target.value)}
              placeholder="e.g., English, Spanish, French, Arabic"
              className={`mt-1 ${errors.languagesList ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              required
              aria-describedby={errors.languagesList ? "languagesList-error" : undefined}
              maxLength={200}
            />
            {errors.languagesList && (
              <p id="languagesList-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.languagesList}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.languagesList.length}/200 characters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}