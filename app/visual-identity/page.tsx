"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Palette, Type, Eye, Sparkles, CheckCircle, HelpCircle, Star, Calendar, MessageSquare, X } from "lucide-react"
import Link from "next/link"
import { SketchPicker } from 'react-color'
import { useTheme } from "next-themes"

interface FormData {
  brandName: string
  brandDescription: string
  logoType: string
  cantDecideHelp: string
  primaryColors: string[]
  secondaryColors: string[]
  colorsCantDecideHelp: string
  fontPreference: string
  customFont: string
  additionalRequests: string
  projectTimeline: string
  communicationPreference: string
}

export default function VisualIdentityPage() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)
  const [currentColor, setCurrentColor] = useState("#ffffff")
  const [showColorsHelp, setShowColorsHelp] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    brandName: "",
    brandDescription: "",
    logoType: "",
    cantDecideHelp: "",
    primaryColors: [],
    secondaryColors: [],
    colorsCantDecideHelp: "",
    fontPreference: "",
    customFont: "",
    additionalRequests: "",
    projectTimeline: "",
    communicationPreference: "",
  })

  const totalSteps = 5

  const logoTypes = [
    { id: "1", label: t.visualIdentity.logoTypes.wordmark },
    { id: "2", label: t.visualIdentity.logoTypes.lettermark },
    { id: "3", label: t.visualIdentity.logoTypes.pictorial },
    { id: "4", label: t.visualIdentity.logoTypes.abstract },
    { id: "5", label: t.visualIdentity.logoTypes.mascot },
    { id: "6", label: t.visualIdentity.logoTypes.combination },
  ]

  const fontPreferences = [
    { id: "specific", label: t.visualIdentity.fontOptions.specific },
    { id: "help", label: t.visualIdentity.fontOptions.help },
  ]

  const timelineOptions = [
    { id: "rush", label: t.visualIdentity.step5.timeline.rush },
    { id: "standard", label: t.visualIdentity.step5.timeline.standard },
    { id: "flexible", label: t.visualIdentity.step5.timeline.flexible },
  ]

  const communicationOptions = [
    { id: "email", label: t.visualIdentity.step5.communication.email },
    { id: "phone", label: t.visualIdentity.step5.communication.phone },
    { id: "video", label: t.visualIdentity.step5.communication.video },
  ]

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return formData.brandName.trim() !== "" && formData.brandDescription.trim() !== ""
      case 2:
        return formData.logoType !== "" || formData.cantDecideHelp.trim() !== ""
      case 3:
        return (formData.primaryColors.length >= 2 && formData.secondaryColors.length >= 2) || 
               (showColorsHelp && formData.colorsCantDecideHelp.trim() !== "")
      case 4:
        if (formData.fontPreference === "specific") {
          return formData.fontPreference !== "" && formData.customFont.trim() !== ""
        }
        return formData.fontPreference !== ""
      case 5:
        return formData.projectTimeline !== "" && formData.communicationPreference !== ""
      default:
        return true
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps && canProceedToNext()) {
      setCurrentStep(currentStep + 1)
      scrollToTop()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      scrollToTop()
    }
  }

  const handleLogoTypeSelect = (typeId: string) => {
    setFormData(prev => ({
      ...prev,
      logoType: typeId,
      cantDecideHelp: "" // Clear help text when selecting a logo type
    }))
  }

  const handleCantDecide = () => {
    setFormData(prev => ({
      ...prev,
      logoType: "cant-decide",
      cantDecideHelp: prev.cantDecideHelp || ""
    }))
  }

  const handleColorsCantDecide = () => {
    setShowColorsHelp(!showColorsHelp)
    if (!showColorsHelp) {
      // Clear colors when choosing help
      setFormData(prev => ({
        ...prev,
        primaryColors: [],
        secondaryColors: [],
        colorsCantDecideHelp: prev.colorsCantDecideHelp || ""
      }))
    } else {
      // Clear help text when going back to manual selection
      setFormData(prev => ({
        ...prev,
        colorsCantDecideHelp: ""
      }))
    }
  }

  const handleColorChange = (color: any) => {
    setCurrentColor(color.hex)
  }

  const addColorToPrimary = () => {
    if (formData.primaryColors.length < 4 && !formData.primaryColors.includes(currentColor)) {
      setFormData(prev => ({
        ...prev,
        primaryColors: [...prev.primaryColors, currentColor]
      }))
    }
  }

  const addColorToSecondary = () => {
    if (formData.secondaryColors.length < 4 && !formData.secondaryColors.includes(currentColor)) {
      setFormData(prev => ({
        ...prev,
        secondaryColors: [...prev.secondaryColors, currentColor]
      }))
    }
  }

  const removeColor = (colorValue: string, type: 'primary' | 'secondary') => {
    const field = type === 'primary' ? 'primaryColors' : 'secondaryColors'
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter(color => color !== colorValue)
    }))
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    setShowSummary(true)
    scrollToTop()
  }

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
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.visualIdentity.step1.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground">{t.visualIdentity.step1.subtitle}</p>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <Label htmlFor="brandName" className="text-sm font-medium">
                  {t.visualIdentity.step1.brandName} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                  placeholder={t.visualIdentity.step1.brandNamePlaceholder}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="brandDescription" className="text-sm font-medium">
                  {t.visualIdentity.step1.brandDescription} <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="brandDescription"
                  value={formData.brandDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, brandDescription: e.target.value }))}
                  placeholder={t.visualIdentity.step1.brandDescriptionPlaceholder}
                  rows={4}
                  className="mt-1"
                  required
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.visualIdentity.step2.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground">{t.visualIdentity.step2.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {logoTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    formData.logoType === type.id
                      ? "ring-2 ring-primary bg-primary/5"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleLogoTypeSelect(type.id)}
                >
                  <CardContent className="p-3 sm:p-4 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-base sm:text-lg font-bold text-primary">{type.id}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{type.label}</p>
                    {formData.logoType === type.id && (
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto mt-2" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <Button
                variant="outline"
                onClick={handleCantDecide}
                className={`flex items-center gap-2 w-full sm:w-auto ${
                  formData.logoType === "cant-decide" ? "ring-2 ring-primary" : ""
                }`}
              >
                <HelpCircle className="h-4 w-4" />
                {t.visualIdentity.step2.helpText}
              </Button>

              {formData.logoType === "cant-decide" && (
                <div className="mt-4">
                  <Textarea
                    value={formData.cantDecideHelp}
                    onChange={(e) => setFormData(prev => ({ ...prev, cantDecideHelp: e.target.value }))}
                    placeholder={t.visualIdentity.step2.helpPlaceholder}
                    rows={3}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.visualIdentity.step3.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground">{t.visualIdentity.step3.subtitle}</p>
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
                        <Label className="text-base font-semibold">{t.visualIdentity.step3.primaryColors}</Label>
                        <p className="text-xs text-muted-foreground">{t.visualIdentity.step3.primaryColorsDesc}</p>
                        <p className="text-xs text-muted-foreground">({formData.primaryColors.length}/4) - Min: 2</p>
                      </div>
                      
                      <div className="space-y-2">
                        {formData.primaryColors.map((color, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 border rounded-lg">
                            <div
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded border flex-shrink-0"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-xs sm:text-sm font-mono flex-1 truncate">{color}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeColor(color, 'primary')}
                              className="h-6 w-6 p-0 flex-shrink-0"
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
                          >
                            <Palette className="h-4 w-4 mr-2" />
                            Add Primary Color
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Secondary Colors */}
                    <div className="space-y-4">
                      <div className="text-center">
                        <Label className="text-base font-semibold">{t.visualIdentity.step3.secondaryColors}</Label>
                        <p className="text-xs text-muted-foreground">{t.visualIdentity.step3.secondaryColorsDesc}</p>
                        <p className="text-xs text-muted-foreground">({formData.secondaryColors.length}/4) - Min: 2</p>
                      </div>
                      
                      <div className="space-y-2">
                        {formData.secondaryColors.map((color, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 border rounded-lg">
                            <div
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded border flex-shrink-0"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-xs sm:text-sm font-mono flex-1 truncate">{color}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeColor(color, 'secondary')}
                              className="h-6 w-6 p-0 flex-shrink-0"
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
                          >
                            <Palette className="h-4 w-4 mr-2" />
                            Add Secondary Color
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="max-w-2xl mx-auto">
                  <Textarea
                    value={formData.colorsCantDecideHelp}
                    onChange={(e) => setFormData(prev => ({ ...prev, colorsCantDecideHelp: e.target.value }))}
                    placeholder="Tell us about your brand style, industry, preferred mood, or any color preferences you have..."
                    rows={4}
                    className="w-full"
                  />
                </div>
              )}

              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={handleColorsCantDecide}
                  className={`flex items-center gap-2 w-full sm:w-auto ${
                    showColorsHelp ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <HelpCircle className="h-4 w-4" />
                  {t.visualIdentity.step3.helpText}
                </Button>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Type className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.visualIdentity.step4.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground">{t.visualIdentity.step4.subtitle}</p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <Label className="text-base font-semibold">{t.visualIdentity.step4.fontPreference}</Label>
                <RadioGroup
                  value={formData.fontPreference}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, fontPreference: value }))}
                  className="mt-4 space-y-4"
                >
                  {fontPreferences.map((option) => (
                    <Card
                      key={option.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        formData.fontPreference === option.id
                          ? "ring-2 ring-primary bg-primary/5"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, fontPreference: option.id }))}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="cursor-pointer text-sm sm:text-base">
                            {option.label}
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </RadioGroup>
              </div>

              {formData.fontPreference === 'specific' && (
                <div>
                  <Label htmlFor="customFont" className="text-sm font-medium">
                    {t.visualIdentity.step4.customFont} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="customFont"
                    value={formData.customFont}
                    onChange={(e) => setFormData(prev => ({ ...prev, customFont: e.target.value }))}
                    placeholder={t.visualIdentity.step4.customFontPlaceholder}
                    className="mt-1"
                    required
                  />
                </div>
              )}

              <Separator />

              <div>
                <Label htmlFor="additionalRequests" className="text-sm font-medium">
                  {t.visualIdentity.step4.additionalRequests}
                </Label>
                <Textarea
                  id="additionalRequests"
                  value={formData.additionalRequests}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalRequests: e.target.value }))}
                  placeholder={t.visualIdentity.step4.additionalRequestsPlaceholder}
                  rows={4}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.visualIdentity.step5.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground">{t.visualIdentity.step5.subtitle}</p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {t.visualIdentity.step5.timelineTitle}
                </Label>
                <RadioGroup
                  value={formData.projectTimeline}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, projectTimeline: value }))}
                  className="mt-4 space-y-3"
                >
                  {timelineOptions.map((option) => (
                    <Card
                      key={option.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        formData.projectTimeline === option.id
                          ? "ring-2 ring-primary bg-primary/5"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, projectTimeline: option.id }))}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="cursor-pointer text-sm sm:text-base">
                            {option.label}
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </RadioGroup>
              </div>

              <Separator />

              <div>
                <Label className="text-base font-semibold flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {t.visualIdentity.step5.communicationTitle}
                </Label>
                <RadioGroup
                  value={formData.communicationPreference}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, communicationPreference: value }))}
                  className="mt-4 space-y-3"
                >
                  {communicationOptions.map((option) => (
                    <Card
                      key={option.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        formData.communicationPreference === option.id
                          ? "ring-2 ring-primary bg-primary/5"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, communicationPreference: option.id }))}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="cursor-pointer text-sm sm:text-base">
                            {option.label}
                          </Label>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (showSummary) {
    return (
      <div className="min-h-screen py-8 sm:py-12">
        <div className="container max-w-4xl">
          <div className="text-center space-y-6 mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
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
              <CardTitle className="text-center text-lg sm:text-xl">{t.visualIdentity.summary.projectDetails}</CardTitle>
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
                  <Button onClick={() => setShowSummary(false)} variant="outline">
                    {t.visualIdentity.summary.editProject}
                  </Button>
                  <Link href="/">
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
    )
  }

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4 rtl:rotate-180" />
            {t.visualIdentity.backToHome}
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {t.visualIdentity.welcome} <span className="text-primary">ATLAS</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">{t.visualIdentity.serviceTitle}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">{t.visualIdentity.progress}</span>
            <span className="text-sm text-muted-foreground">
              {currentStep} / {totalSteps}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardContent className="p-4 sm:p-6 md:p-8">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {t.visualIdentity.previous}
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!canProceedToNext()}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {t.visualIdentity.nextStep}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceedToNext()}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {t.visualIdentity.submit}
              <CheckCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}