"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import { WebDevFormData, WebDevFormErrors, DesignOption, Template } from '@/lib/webDevTypes';
import { sanitizeInput } from '@/lib/webDevValidation';

interface StepTwoProps {
  t: any;
  formData: WebDevFormData;
  setFormData: React.Dispatch<React.SetStateAction<WebDevFormData>>;
  errors: WebDevFormErrors;
}

export function StepTwo({ t, formData, setFormData, errors }: StepTwoProps) {
  const designOptions: DesignOption[] = [
    { id: "template", label: "Use one of our templates" },
    { id: "custom", label: "Custom design (additional fees apply)" },
  ];

  const templates: Template[] = [
    {
      id: "modern-business",
      name: "Modern Business",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      previewUrl: "#"
    },
    {
      id: "creative-portfolio",
      name: "Creative Portfolio",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      previewUrl: "#"
    },
    {
      id: "ecommerce-store",
      name: "E-commerce Store",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      previewUrl: "#"
    },
    {
      id: "restaurant-cafe",
      name: "Restaurant & Cafe",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      previewUrl: "#"
    },
    {
      id: "agency-corporate",
      name: "Agency Corporate",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      previewUrl: "#"
    },
    {
      id: "blog-magazine",
      name: "Blog & Magazine",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      previewUrl: "#"
    }
  ];

  const handleInputChange = (field: keyof WebDevFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Eye className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          DESIGN OPTIONS
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Choose between our templates or custom design
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <Label className="text-sm font-medium">
            Would you like to use a website template or a custom design? <span className="text-red-500" aria-label="required">*</span>
          </Label>
          <RadioGroup
            value={formData.designOption}
            onValueChange={(value) => setFormData(prev => ({ ...prev, designOption: value }))}
            className="mt-4 space-y-3"
            aria-describedby={errors.designOption ? "designOption-error" : undefined}
          >
            {designOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  formData.designOption === option.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setFormData(prev => ({ ...prev, designOption: option.id }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`design-${option.id}`}
                      aria-describedby={`design-${option.id}-description`}
                    />
                    <Label 
                      htmlFor={`design-${option.id}`} 
                      className="cursor-pointer text-sm sm:text-base"
                      id={`design-${option.id}-description`}
                    >
                      {option.label}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          {errors.designOption && (
            <p id="designOption-error" className="text-sm text-destructive mt-2" role="alert">
              {errors.designOption}
            </p>
          )}
        </div>

        {formData.designOption === 'template' && (
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium">
                Choose a template <span className="text-red-500" aria-label="required">*</span>
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {templates.map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                      formData.selectedTemplate === template.id
                        ? "ring-2 ring-primary bg-primary/5"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, selectedTemplate: template.id }))}
                  >
                    <CardContent className="p-3">
                      <div className="space-y-3">
                        <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                          <img
                            src={template.image}
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium text-sm">{template.name}</h3>
                          <div className="flex items-center justify-between">
                            <RadioGroupItem 
                              value={template.id} 
                              id={`template-${template.id}`}
                              checked={formData.selectedTemplate === template.id}
                              onChange={() => setFormData(prev => ({ ...prev, selectedTemplate: template.id }))}
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(template.previewUrl, '_blank');
                              }}
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {errors.selectedTemplate && (
                <p className="text-sm text-destructive mt-2" role="alert">
                  {errors.selectedTemplate}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="templateContent" className="text-sm font-medium">
                What content would you like us to replace in the template? <span className="text-red-500" aria-label="required">*</span>
              </Label>
              <Textarea
                id="templateContent"
                value={formData.templateContent}
                onChange={(e) => handleInputChange('templateContent', e.target.value)}
                placeholder="Describe what text, images, and content you'd like us to replace with your own..."
                rows={4}
                className={`mt-1 ${errors.templateContent ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                required
                aria-describedby={errors.templateContent ? "templateContent-error" : undefined}
                maxLength={500}
              />
              {errors.templateContent && (
                <p id="templateContent-error" className="text-sm text-destructive mt-1" role="alert">
                  {errors.templateContent}
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {formData.templateContent.length}/500 characters
              </p>
            </div>
          </div>
        )}

        {formData.designOption === 'custom' && (
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">
              Great choice! We'll create a completely custom design tailored to your brand and requirements.
              Additional design fees will apply and will be discussed in your project proposal.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}