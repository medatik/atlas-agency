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
import { StepOne } from "@/components/completePackage/stepOne"
import { StepTwo } from "@/components/completePackage/stepTwo"
import { StepThree } from "@/components/completePackage/stepThree"
import { StepFour } from "@/components/completePackage/stepFour"
import { StepFive } from "@/components/completePackage/stepFive"
import { StepSix } from "@/components/completePackage/stepSix"
import { StepSeven } from "@/components/completePackage/stepSeven"
import { StepEight } from "@/components/completePackage/stepEight"
import { StepNine } from "@/components/completePackage/stepNine"
import { StepTen } from "@/components/completePackage/stepTen"
import { ProjectSummary } from "@/components/completePackage/projectSummary"

// Import types and validation
import { CompletePackageFormData, CompletePackageFormErrors } from '@/lib/completePackageTypes'
import { 
  validateCompletePackageStep1, 
  validateCompletePackageStep2, 
  validateCompletePackageStep3, 
  validateCompletePackageStep4, 
  validateCompletePackageStep5,
  validateCompletePackageStep6,
  validateCompletePackageStep7,
  validateCompletePackageStep8,
  validateCompletePackageStep9,
  validateCompletePackageStep10
} from '@/lib/completePackageValidation'

export default function CompletePackagePage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  
  // State management
  const [currentStep, setCurrentStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)
  const [currentColor, setCurrentColor] = useState("#ffffff")
  const [showColorsHelp, setShowColorsHelp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)  // New state for save feedback
  const [errors, setErrors] = useState<CompletePackageFormErrors>({})
  
  const [formData, setFormData] = useState<CompletePackageFormData>({
    // Business Information
    businessName: "",
    businessDescription: "",
    
    // Visual Identity Section
    logoType: "",
    cantDecideHelp: "",
    primaryColors: [],
    secondaryColors: [],
    colorsCantDecideHelp: "",
    fontPreference: "",
    customFont: "",
    
    // Website Development Section
    websiteGoal: "",
    websiteGoalOther: "",
    designOption: "",
    selectedTemplate: "",
    templateContent: "",
    mainPages: [],
    mainPagesOther: "",
    hasSitemap: "",
    sitemapDescription: "",
    multipleLanguages: "",
    languagesList: "",
    brandAssets: [],
    websiteStyle: [],
    websiteStyleOther: "",
    referenceWebsites: "",
    contentReady: "",
    featuresNeeded: [],
    featuresOther: "",
    optionalAddons: [],
    needAdminPanel: "",
    domainHosting: "",
    domainName: "",
    managementHelp: [],
    
    // Project Preferences
    additionalRequests: "",
    projectTimeline: "",
    communicationPreference: "",
    finalNotes: "",
  })

  const totalSteps = 10

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('completePackageFormData')
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData)
        
        toast({
          title: t.toast.previousData.title,
          description: t.toast.previousData.description,
        })
      } catch (error) {
        console.error('Error loading saved data:', error)
      }
    }
  }, [toast, t])

  // Save data whenever formData changes
  useEffect(() => {
    if (formData.businessName || formData.businessDescription) {
      setIsSaving(true)
      const saveTimeout = setTimeout(() => {
        localStorage.setItem('completePackageFormData', JSON.stringify(formData))
        setIsSaving(false)
      }, 500) // Debounce save
      
      return () => clearTimeout(saveTimeout)
    }
  }, [formData])

  // Validation function for current step
  const validateCurrentStep = (): boolean => {
    let stepErrors: CompletePackageFormErrors = {}
    
    switch (currentStep) {
      case 1:
        stepErrors = validateCompletePackageStep1(formData)
        break
      case 2:
        stepErrors = validateCompletePackageStep2(formData)
        break
      case 3:
        stepErrors = validateCompletePackageStep3(formData, showColorsHelp)
        break
      case 4:
        stepErrors = validateCompletePackageStep4(formData)
        break
      case 5:
        stepErrors = validateCompletePackageStep5(formData)
        break
      case 6:
        stepErrors = validateCompletePackageStep6(formData)
        break
      case 7:
        stepErrors = validateCompletePackageStep7(formData)
        break
      case 8:
        stepErrors = validateCompletePackageStep8(formData)
        break
      case 9:
        stepErrors = validateCompletePackageStep9(formData)
        break
      case 10:
        stepErrors = validateCompletePackageStep10(formData)
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
        title: t.toast.requiredFields.title,
        description: t.toast.requiredFields.description,
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
        title: t.toast.incomplete.title,
        description: t.toast.incomplete.description,
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
        title: t.toast.success.title,
        description: t.toast.success.description,
      })
      
      // Clear saved data after successful submission
      localStorage.removeItem('completePackageFormData')
      
      setShowSummary(true)
      scrollToTop()
    } catch (error) {
      toast({
        title: t.toast.error.title,
        description: t.toast.error.description,
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
      case 6:
        return <StepSix {...stepProps} />
      case 7:
        return <StepSeven {...stepProps} />
      case 8:
        return <StepEight {...stepProps} />
      case 9:
        return <StepNine {...stepProps} />
      case 10:
        return <StepTen {...stepProps} />
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
                Back to Home
              </Link>
              
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  WELCOME TO <span className="text-primary">ATLAS</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  COMPLETE PACKAGE SERVICE
                </p>
                <p className="text-sm text-muted-foreground">
                  Visual Identity + Website Development
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progress</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {currentStep} / {totalSteps}
                  </span>
                  {isSaving && (
                    <span className="text-xs text-muted-foreground animate-pulse">
                      Saving...
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  aria-label={`Progress: ${currentStep} of ${totalSteps} steps completed`}
                />
              </div>
            </div>

            {/* Main Content */}
            <Card className="mb-8 transition-all duration-300 ease-in-out">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="transition-opacity duration-300 ease-in-out">
                  {renderStepContent()}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1 || isLoading}
                className="flex items-center gap-2 w-full sm:w-auto focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                aria-label="Go to previous step"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 w-full sm:w-auto focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                  aria-label="Go to next step"
                >
                  NEXT STEP
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 w-full sm:w-auto focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                  aria-label="Submit project details"
                >
                  LET THE MAGIC START
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