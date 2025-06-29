"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { ErrorBoundary } from "@/components/ui/errorBoundary"
import { LoadingOverlay } from "@/components/ui/loadingSpinner"

// Import step components
import { StepOne } from "@/components/visualIdentity/stepOne"
import { StepTwo } from "@/components/visualIdentity/stepTwo"
import { StepThree } from "@/components/visualIdentity/stepThree"
import { StepFour } from "@/components/visualIdentity/stepFour"
import { StepFive } from "@/components/visualIdentity/stepFive"
import { ProjectSummary } from "@/components/visualIdentity/projectSummary"

// Import types and validation
import { FormData, FormErrors } from '@/lib/types'
import { 
  validateStep1, 
  validateStep2, 
  validateStep3, 
  validateStep4, 
  validateStep5 
} from '@/lib/validation'

export default function VisualIdentityPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  
  // State management
  const [currentStep, setCurrentStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)
  const [currentColor, setCurrentColor] = useState("#ffffff")
  const [showColorsHelp, setShowColorsHelp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  
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

  // Validation function for current step
  const validateCurrentStep = (): boolean => {
    let stepErrors: FormErrors = {}
    
    switch (currentStep) {
      case 1:
        stepErrors = validateStep1(formData)
        break
      case 2:
        stepErrors = validateStep2(formData)
        break
      case 3:
        stepErrors = validateStep3(formData, showColorsHelp)
        break
      case 4:
        stepErrors = validateStep4(formData)
        break
      case 5:
        stepErrors = validateStep5(formData)
        break
      default:
        return true
    }
    
    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Navigation handlers
  const handleNext = async () => {
    if (!validateCurrentStep()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 300))
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      setErrors({}) // Clear errors when moving to next step
      scrollToTop()
    }
    
    setIsLoading(false)
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({}) // Clear errors when going back
      scrollToTop()
    }
  }

  const handleSubmit = async () => {
    if (!validateCurrentStep()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', formData)
      
      toast({
        title: "Project submitted successfully!",
        description: "We'll review your requirements and get back to you soon.",
      })
      
      setShowSummary(true)
      scrollToTop()
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Clear errors when form data changes
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrors({})
    }
  }, [formData])

  // Render step content
  const renderStepContent = () => {
    const stepProps = {
      t,
      formData,
      setFormData,
      errors
    }

    switch (currentStep) {
      case 1:
        return <StepOne {...stepProps} />
      case 2:
        return <StepTwo {...stepProps} />
      case 3:
        return (
          <StepThree 
            {...stepProps}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            showColorsHelp={showColorsHelp}
            setShowColorsHelp={setShowColorsHelp}
          />
        )
      case 4:
        return <StepFour {...stepProps} />
      case 5:
        return <StepFive {...stepProps} />
      default:
        return null
    }
  }

  // Show project summary
  if (showSummary) {
    return (
      <ErrorBoundary>
        <ProjectSummary 
          t={t}
          formData={formData}
          setShowSummary={setShowSummary}
          showColorsHelp={showColorsHelp}
        />
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <LoadingOverlay isLoading={isLoading} text="Processing...">
        <div className="min-h-screen py-8 sm:py-12">
          <div className="container max-w-4xl">
            {/* Header */}
            <div className="text-center space-y-4 mb-8">
              <Link 
                href="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Return to home page"
              >
                <ArrowLeft className="mr-2 h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                {t.visualIdentity.backToHome}
              </Link>
              
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  {t.visualIdentity.welcome} <span className="text-primary">ATLAS</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {t.visualIdentity.serviceTitle}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
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
                  aria-label={`Progress: ${currentStep} of ${totalSteps} steps completed`}
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
                disabled={currentStep === 1 || isLoading}
                className="flex items-center gap-2 w-full sm:w-auto focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Go to previous step"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                {t.visualIdentity.previous}
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 w-full sm:w-auto focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Go to next step"
                >
                  {t.visualIdentity.nextStep}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 w-full sm:w-auto focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Submit project details"
                >
                  {t.visualIdentity.submit}
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </ErrorBoundary>
  )
}