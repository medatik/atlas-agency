"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Palette, X, HelpCircle, RotateCcw, CheckCircle } from "lucide-react";
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

  // Temporary state for current selections
  const [tempPrimaryColors, setTempPrimaryColors] = useState(formData.primaryColors);
  const [tempSecondaryColors, setTempSecondaryColors] = useState(formData.secondaryColors);
  const [tempShowColorsHelp, setTempShowColorsHelp] = useState(showColorsHelp);
  const [tempColorsCantDecideHelp, setTempColorsCantDecideHelp] = useState(formData.colorsCantDecideHelp);

  // Saved state for reverting
  const [savedPrimaryColors, setSavedPrimaryColors] = useState(formData.primaryColors);
  const [savedSecondaryColors, setSavedSecondaryColors] = useState(formData.secondaryColors);
  const [savedShowColorsHelp, setSavedShowColorsHelp] = useState(showColorsHelp);
  const [savedColorsCantDecideHelp, setSavedColorsCantDecideHelp] = useState(formData.colorsCantDecideHelp);

  // Update form data when temp state changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      primaryColors: tempPrimaryColors,
      secondaryColors: tempSecondaryColors,
      colorsCantDecideHelp: tempColorsCantDecideHelp
    }));
    setShowColorsHelp(tempShowColorsHelp);
  }, [tempPrimaryColors, tempSecondaryColors, tempShowColorsHelp, tempColorsCantDecideHelp, setFormData, setShowColorsHelp]);

  const handleColorChange = (color: any) => {
    setCurrentColor(color.hex);
  };

  const addColorToPrimary = () => {
    if (tempPrimaryColors.length < 4 && !tempPrimaryColors.includes(currentColor)) {
      setTempPrimaryColors(prev => [...prev, currentColor]);
    }
  };

  const addColorToSecondary = () => {
    if (tempSecondaryColors.length < 4 && !tempSecondaryColors.includes(currentColor)) {
      setTempSecondaryColors(prev => [...prev, currentColor]);
    }
  };

  const removeColor = (colorValue: string, type: 'primary' | 'secondary') => {
    if (type === 'primary') {
      setTempPrimaryColors(prev => prev.filter(color => color !== colorValue));
    } else {
      setTempSecondaryColors(prev => prev.filter(color => color !== colorValue));
    }
  };

  const handleColorsCantDecide = () => {
    setTempShowColorsHelp(!tempShowColorsHelp);
    if (!tempShowColorsHelp) {
      // Clear colors when choosing help
      setTempPrimaryColors([]);
      setTempSecondaryColors([]);
      setTempColorsCantDecideHelp(tempColorsCantDecideHelp || "");
    } else {
      // Clear help text when going back to manual selection
      setTempColorsCantDecideHelp("");
    }
  };

  const handleCancelColorsHelp = () => {
    // Revert to saved state instead of clearing
    setTempShowColorsHelp(savedShowColorsHelp);
    setTempPrimaryColors(savedPrimaryColors);
    setTempSecondaryColors(savedSecondaryColors);
    setTempColorsCantDecideHelp(savedColorsCantDecideHelp);
  };

  const handleConfirmSelection = () => {
    // Save current selections
    setSavedPrimaryColors(tempPrimaryColors);
    setSavedSecondaryColors(tempSecondaryColors);
    setSavedShowColorsHelp(tempShowColorsHelp);
    setSavedColorsCantDecideHelp(tempColorsCantDecideHelp);
  };

  const handleHelpTextChange = (value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setTempColorsCantDecideHelp(sanitizedValue);
  };

  // Check if there are unsaved changes
  const hasUnsavedChanges = () => {
    return (
      JSON.stringify(tempPrimaryColors) !== JSON.stringify(savedPrimaryColors) ||
      JSON.stringify(tempSecondaryColors) !== JSON.stringify(savedSecondaryColors) ||
      tempShowColorsHelp !== savedShowColorsHelp ||
      tempColorsCantDecideHelp !== savedColorsCantDecideHelp
    );
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
        {!tempShowColorsHelp ? (
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
                  <p className="text-xs text-muted-foreground">({tempPrimaryColors.length}/4) - Min: 2</p>
                </div>
                
                <div className="space-y-2" role="group" aria-labelledby="primary-colors-heading">
                  <h4 id="primary-colors-heading" className="sr-only">Primary Colors List</h4>
                  {tempPrimaryColors.map((color, index) => (
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
                        className="h-6 w-6 p-0 flex-shrink-0 hover:bg-red-100 hover:text-red-600"
                        aria-label={`Remove primary color ${color}`}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  
                  {tempPrimaryColors.length < 4 && (
                    <Button
                      variant="outline"
                      onClick={addColorToPrimary}
                      className="w-full text-xs sm:text-sm"
                      disabled={tempPrimaryColors.length >= 4 || tempPrimaryColors.includes(currentColor)}
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
                  <p className="text-xs text-muted-foreground">({tempSecondaryColors.length}/4) - Min: 2</p>
                </div>
                
                <div className="space-y-2" role="group" aria-labelledby="secondary-colors-heading">
                  <h4 id="secondary-colors-heading" className="sr-only">Secondary Colors List</h4>
                  {tempSecondaryColors.map((color, index) => (
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
                        className="h-6 w-6 p-0 flex-shrink-0 hover:bg-red-100 hover:text-red-600"
                        aria-label={`Remove secondary color ${color}`}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  
                  {tempSecondaryColors.length < 4 && (
                    <Button
                      variant="outline"
                      onClick={addColorToSecondary}
                      className="w-full text-xs sm:text-sm"
                      disabled={tempSecondaryColors.length >= 4 || tempSecondaryColors.includes(currentColor)}
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
              value={tempColorsCantDecideHelp}
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
              {tempColorsCantDecideHelp.length}/300 characters
            </p>
          </div>
        )}

        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="outline"
              onClick={handleColorsCantDecide}
              className={`flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base px-4 py-2 ${
                tempShowColorsHelp ? "ring-2 ring-primary" : ""
              }`}
              aria-pressed={tempShowColorsHelp}
            >
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
              <span className="text-center">{t.visualIdentity.step3.helpText}</span>
            </Button>
            
            {tempShowColorsHelp && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancelColorsHelp}
                className="flex items-center gap-1 h-8 px-3 hover:bg-red-100 hover:text-red-600 flex-shrink-0"
                aria-label="Cancel color help request"
              >
                <RotateCcw className="h-3 w-3" />
                <span className="text-xs">Cancel</span>
              </Button>
            )}
          </div>
        </div>

        {/* Confirm/Save button */}
        {hasUnsavedChanges() && (tempPrimaryColors.length > 0 || tempSecondaryColors.length > 0 || tempShowColorsHelp) && (
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleConfirmSelection}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Confirm Selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}