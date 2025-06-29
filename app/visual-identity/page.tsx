"use client"

import { useState } from "react"
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
import { ArrowLeft, ArrowRight, Palette, Type, Eye, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"

interface FormData {
  brandName: string
  brandDescription: string
  logoType: string
  logoOptions: string[]
  primaryColors: string[]
  secondaryColors: string[]
  typography: string
  customFont: string
  additionalRequests: string
}

export default function VisualIdentityPage() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    brandName: "",
    brandDescription: "",
    logoType: "",
    logoOptions: [],
    primaryColors: [],
    secondaryColors: [],
    typography: "",
    customFont: "",
    additionalRequests: "",
  })

  const totalSteps = 4

  const logoTypes = [
    { id: "1", label: t.visualIdentity.logoTypes.wordmark },
    { id: "2", label: t.visualIdentity.logoTypes.lettermark },
    { id: "3", label: t.visualIdentity.logoTypes.pictorial },
    { id: "4", label: t.visualIdentity.logoTypes.abstract },
    { id: "5", label: t.visualIdentity.logoTypes.mascot },
    { id: "6", label: t.visualIdentity.logoTypes.combination },
  ]

  const colorOptions = [
    { name: "Red", value: "#DC2626", hex: "#DC2626" },
    { name: "Blue", value: "#2563EB", hex: "#2563EB" },
    { name: "Green", value: "#16A34A", hex: "#16A34A" },
    { name: "Purple", value: "#9333EA", hex: "#9333EA" },
    { name: "Orange", value: "#EA580C", hex: "#EA580C" },
    { name: "Pink", value: "#DB2777", hex: "#DB2777" },
    { name: "Teal", value: "#0D9488", hex: "#0D9488" },
    { name: "Yellow", value: "#CA8A04", hex: "#CA8A04" },
  ]

  const typographyOptions = [
    { id: "serif", label: t.visualIdentity.typography.serif },
    { id: "sans-serif", label: t.visualIdentity.typography.sansSerif },
    { id: "script", label: t.visualIdentity.typography.script },
    { id: "display", label: t.visualIdentity.typography.display },
    { id: "custom", label: t.visualIdentity.typography.custom },
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleLogoOptionToggle = (optionId: string) => {
    setFormData(prev => ({
      ...prev,
      logoOptions: prev.logoOptions.includes(optionId)
        ? prev.logoOptions.filter(id => id !== optionId)
        : [...prev.logoOptions, optionId]
    }))
  }

  const handleColorToggle = (colorValue: string, type: 'primary' | 'secondary') => {
    const field = type === 'primary' ? 'primaryColors' : 'secondaryColors'
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(colorValue)
        ? prev[field].filter(color => color !== colorValue)
        : [...prev[field], colorValue]
    }))
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
              <h2 className="text-2xl sm:text-3xl font-bold">{t.visualIdentity.step1.title}</h2>
              <p className="text-muted-foreground">{t.visualIdentity.step1.subtitle}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="brandName" className="text-sm font-medium">
                  {t.visualIdentity.step1.brandName}
                </Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                  placeholder={t.visualIdentity.step1.brandNamePlaceholder}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="brandDescription" className="text-sm font-medium">
                  {t.visualIdentity.step1.brandDescription}
                </Label>
                <Textarea
                  id="brandDescription"
                  value={formData.brandDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, brandDescription: e.target.value }))}
                  placeholder={t.visualIdentity.step1.brandDescriptionPlaceholder}
                  rows={4}
                  className="mt-1"
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
              <h2 className="text-2xl sm:text-3xl font-bold">{t.visualIdentity.step2.title}</h2>
              <p className="text-muted-foreground">{t.visualIdentity.step2.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {logoTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    formData.logoOptions.includes(type.id)
                      ? "ring-2 ring-primary bg-primary/5"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleLogoOptionToggle(type.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{type.id}</span>
                    </div>
                    <p className="text-sm font-medium">{type.label}</p>
                    {formData.logoOptions.includes(type.id) && (
                      <CheckCircle className="h-5 w-5 text-primary mx-auto mt-2" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t.visualIdentity.step2.helpText}</p>
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
              <h2 className="text-2xl sm:text-3xl font-bold">{t.visualIdentity.step3.title}</h2>
              <p className="text-muted-foreground">{t.visualIdentity.step3.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-semibold">{t.visualIdentity.step3.primaryColors}</Label>
                <p className="text-sm text-muted-foreground mb-3">{t.visualIdentity.step3.primaryColorsDesc}</p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                  {colorOptions.map((color) => (
                    <div
                      key={`primary-${color.value}`}
                      className={`relative cursor-pointer rounded-lg p-1 transition-all duration-200 ${
                        formData.primaryColors.includes(color.value)
                          ? "ring-2 ring-primary ring-offset-2"
                          : "hover:scale-105"
                      }`}
                      onClick={() => handleColorToggle(color.value, 'primary')}
                    >
                      <div
                        className="w-full h-12 rounded-md"
                        style={{ backgroundColor: color.hex }}
                      />
                      {formData.primaryColors.includes(color.value) && (
                        <CheckCircle className="absolute -top-1 -right-1 h-5 w-5 text-primary bg-background rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <Label className="text-base font-semibold">{t.visualIdentity.step3.secondaryColors}</Label>
                <p className="text-sm text-muted-foreground mb-3">{t.visualIdentity.step3.secondaryColorsDesc}</p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                  {colorOptions.map((color) => (
                    <div
                      key={`secondary-${color.value}`}
                      className={`relative cursor-pointer rounded-lg p-1 transition-all duration-200 ${
                        formData.secondaryColors.includes(color.value)
                          ? "ring-2 ring-primary ring-offset-2"
                          : "hover:scale-105"
                      }`}
                      onClick={() => handleColorToggle(color.value, 'secondary')}
                    >
                      <div
                        className="w-full h-12 rounded-md"
                        style={{ backgroundColor: color.hex }}
                      />
                      {formData.secondaryColors.includes(color.value) && (
                        <CheckCircle className="absolute -top-1 -right-1 h-5 w-5 text-primary bg-background rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">{t.visualIdentity.step3.helpText}</p>
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
              <h2 className="text-2xl sm:text-3xl font-bold">{t.visualIdentity.step4.title}</h2>
              <p className="text-muted-foreground">{t.visualIdentity.step4.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-semibold">{t.visualIdentity.step4.fontPreference}</Label>
                <RadioGroup
                  value={formData.typography}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, typography: value }))}
                  className="mt-3"
                >
                  {typographyOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {formData.typography === 'custom' && (
                <div>
                  <Label htmlFor="customFont" className="text-sm font-medium">
                    {t.visualIdentity.step4.customFont}
                  </Label>
                  <Input
                    id="customFont"
                    value={formData.customFont}
                    onChange={(e) => setFormData(prev => ({ ...prev, customFont: e.target.value }))}
                    placeholder={t.visualIdentity.step4.customFontPlaceholder}
                    className="mt-1"
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

      default:
        return null
    }
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
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.visualIdentity.welcome} <span className="text-primary">ATLAS</span>
            </h1>
            <p className="text-lg text-muted-foreground">{t.visualIdentity.serviceTitle}</p>
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
          <CardContent className="p-6 sm:p-8">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {t.visualIdentity.previous}
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              {t.visualIdentity.nextStep}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Button>
          ) : (
            <Button
              onClick={() => {
                // Handle form submission
                console.log('Form submitted:', formData)
                // You can add your submission logic here
              }}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              {t.visualIdentity.submit}
              <CheckCircle className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Summary Card (visible on last step) */}
        {currentStep === totalSteps && (
          <Card className="mt-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">{t.visualIdentity.summary.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="font-semibold">{t.visualIdentity.step1.brandName}:</Label>
                  <p className="text-muted-foreground">{formData.brandName || "Not specified"}</p>
                </div>
                <div>
                  <Label className="font-semibold">{t.visualIdentity.step2.title}:</Label>
                  <p className="text-muted-foreground">
                    {formData.logoOptions.length} {t.visualIdentity.summary.optionsSelected}
                  </p>
                </div>
                <div>
                  <Label className="font-semibold">{t.visualIdentity.step3.primaryColors}:</Label>
                  <div className="flex gap-1 mt-1">
                    {formData.primaryColors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="font-semibold">{t.visualIdentity.step4.title}:</Label>
                  <p className="text-muted-foreground">
                    {typographyOptions.find(opt => opt.id === formData.typography)?.label || "Not specified"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}