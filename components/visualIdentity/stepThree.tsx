"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Palette, X, HelpCircle } from "lucide-react";
import { SketchPicker } from 'react-color';
import { useTheme } from "next-themes";
import { FormData, FormErrors, Translation } from '@/lib/types';
import { sanitizeInput } from '@/lib/validation';

interface StepThreeProps {
  t: Translation;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
  currentColor: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  showColorsHelp: boolean;
  setShowColorsHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StepThree({ 
  t, 
  formData, 
  setFormData, 
  errors, 
  currentColor, 
  setCurrentColor, 
  showColorsHelp, 
  setShowColorsHelp 
}: StepThreeProps) {
  const { theme } = useTheme();

  // Store the previous state when "Can't Decide" is clicked
  const [previousState, setPreviousState] = useState<{
    primaryColors: string[];
    secondaryColors: string[];
    colorsCantDecideHelp: string;
  } | null>(null);

  const handleColorChange = (color: any) => {
    setCurrentColor(color.hex);
  };

  const addColorToPrimary = () => {
    if (formData.primaryColors.length < 4 && !formData.primaryColors.includes(currentColor)) {
      setFormData(prev => ({
        ...prev,
        primaryColors: [...prev.primaryColors, currentColor]
      }));
    }
  };

  const addColorToSecondary = () => {
    if (formData.secondaryColors.length < 4 && !formData.secondaryColors.includes(currentColor)) {
      setFormData(prev => ({
        ...prev,
        secondaryColors: [...prev.secondaryColors, currentColor]
      }));
    }
  };

  const removeColor = (colorValue: string, type: 'primary' | 'secondary') => {
    const field = type === 'primary' ? 'primaryColors' : 'secondaryColors';
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter(color => color !== colorValue)
    }));
  };

  const handleColorsCantDecide = () => {
    if (!showColorsHelp) {
      // Store current state before switching to help mode
      setPreviousState({
        primaryColors: formData.primaryColors,
        secondaryColors: formData.secondaryColors,
        colorsCantDecideHelp: formData.colorsCantDecideHelp
      });
      
      // Clear colors when choosing help
      setFormData(prev => ({
        ...prev,
        primaryColors: [],
        secondaryColors: [],
        colorsCantDecideHelp: prev.colorsCantDecideHelp || ""
      }));
    } else {
      // Restore previous state when canceling help
      if (previousState) {
        setFormData(prev => ({
          ...prev,
          primaryColors: previousState.primaryColors,
          secondaryColors: previousState.secondaryColors,
          colorsCantDecideHelp: previousState.colorsCantDecideHelp
        }));
      } else {
        // Fallback: clear help text when going back to manual selection
        setFormData(prev => ({
          ...prev,
          colorsCantDecideHelp: ""
        }));
      }
    }
    
    setShowColorsHelp(!showColorsHelp);
  };

  const handleHelpTextChange = (value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, colorsCantDecideHelp: sanitizedValue }));
  };

  // Custom styles for dark mode color picker
  const colorPickerStyles = {
    default: {
      picker: {
        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
        border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: theme === 'dark' 
          ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' 
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      saturation: {
        borderRadius: '4px',
      },
      hue: {
        borderRadius: '4px',
      },
      alpha: {
        borderRadius: '4px',
      },
      color: {
        borderRadius: '4px',
      },
      swatch: {
        borderRadius: '4px',
      },
      input: {
        backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
        color: theme === 'dark' ? '#f9fafb' : '#111827',
        border: theme === 'dark' ? '1px solid #4b5563' : '1px solid #d1d5db',
        borderRadius: '4px',
      },
      label: {
        color: theme === 'dark' ? '#f9fafb' : '#111827',
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Palette className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {t.visualIdentity.step3.title}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t.visualIdentity.step3.subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {!showColorsHelp ? (
          <>
            {/* Color Picker - Always Visible */}
            <div className="flex justify-center">
              <div className="relative">
                <SketchPicker
                  color={currentColor}
                  onChange={handleColorChange}
                  disableAlpha={true}
                  styles={colorPickerStyles}
                  width="280px"
                />
              </div>
            </div>

            {/* Color Selection Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Primary Colors */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-base font-semibold">{t.visualIdentity.step3.primaryColors}</h3>
                  <p className="text-xs text-muted-foreground">{t.visualIdentity.step3.primaryColorsDesc}</p>
                  <p className="text-xs text-muted-foreground">({formData.primaryColors.length}/4) - Min: 2</p>
                </div>
                
                <div className="space-y-2" role="group" aria-labelledby="primary-colors-heading">
                  <h4 id="primary-colors-heading" className="sr-only">Primary Colors List</h4>
                  {formData.primaryColors.map((color, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 border rounded-lg">
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded border flex-shrink-0"
                        style={{ backgroundColor: color }}
                        aria-label={`Primary color ${color}`}
                      />
                      <span className="text-xs sm:text-sm font-mono flex-1 truncate">{color}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeColor(color, 'primary')}
                        className="h-6 w-6 p-0 flex-shrink-0"
                        aria-label={`Remove primary color ${color}`}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  
                  {formData.primaryColors.length < 4 && (
                    <Button
                      variant="outline"
                      onClick={addColorToPrimary}
                      className="w-full text-xs sm:text-sm"
                      disabled={formData.primaryColors.length >= 4 || formData.primaryColors.includes(currentColor)}
                      aria-label="Add current color to primary colors"
                    >
                      <Palette className="h-4 w-4 mr-2" />
                      Add Primary Color
                    </Button>
                  )}
                </div>
                {errors.primaryColors && (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.primaryColors}
                  </p>
                )}
              </div>

              {/* Secondary Colors */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-base font-semibold">{t.visualIdentity.step3.secondaryColors}</h3>
                  <p className="text-xs text-muted-foreground">{t.visualIdentity.step3.secondaryColorsDesc}</p>
                  <p className="text-xs text-muted-foreground">({formData.secondaryColors.length}/4) - Min: 2</p>
                </div>
                
                <div className="space-y-2" role="group" aria-labelledby="secondary-colors-heading">
                  <h4 id="secondary-colors-heading" className="sr-only">Secondary Colors List</h4>
                  {formData.secondaryColors.map((color, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 border rounded-lg">
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded border flex-shrink-0"
                        style={{ backgroundColor: color }}
                        aria-label={`Secondary color ${color}`}
                      />
                      <span className="text-xs sm:text-sm font-mono flex-1 truncate">{color}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeColor(color, 'secondary')}
                        className="h-6 w-6 p-0 flex-shrink-0"
                        aria-label={`Remove secondary color ${color}`}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  
                  {formData.secondaryColors.length < 4 && (
                    <Button
                      variant="outline"
                      onClick={addColorToSecondary}
                      className="w-full text-xs sm:text-sm"
                      disabled={formData.secondaryColors.length >= 4 || formData.secondaryColors.includes(currentColor)}
                      aria-label="Add current color to secondary colors"
                    >
                      <Palette className="h-4 w-4 mr-2" />
                      Add Secondary Color
                    </Button>
                  )}
                </div>
                {errors.secondaryColors && (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.secondaryColors}
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Textarea
              value={formData.colorsCantDecideHelp}
              onChange={(e) => handleHelpTextChange(e.target.value)}
              placeholder="Tell us about your brand style, industry, preferred mood, or any color preferences you have..."
              rows={4}
              className={`w-full ${errors.colorsCantDecideHelp ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              aria-describedby={errors.colorsCantDecideHelp ? "colorsCantDecideHelp-error" : undefined}
              maxLength={300}
            />
            {errors.colorsCantDecideHelp && (
              <p id="colorsCantDecideHelp-error" className="text-sm text-destructive mt-1" role="alert">
                {errors.colorsCantDecideHelp}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {formData.colorsCantDecideHelp.length}/300 characters
            </p>
          </div>
        )}

        <div className="text-center">
          <Button
            variant="outline"
            onClick={handleColorsCantDecide}
            className={`flex items-center gap-2 w-full sm:w-auto ${
              showColorsHelp ? "ring-2 ring-primary" : ""
            }`}
            aria-pressed={showColorsHelp}
          >
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            {t.visualIdentity.step3.helpText}
          </Button>
        </div>
      </div>
    </div>
  );
}