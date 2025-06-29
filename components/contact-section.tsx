"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react"
import { ContactSectionProps, ContactFormData } from '@/lib/types'
import { validateEmail, sanitizeInput } from '@/lib/validation'

export function ContactSection({ t }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    const sanitizedValue = sanitizeInput(value)
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", formData)
      setIsSubmitted(true)
      setIsSubmitting(false)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitted(false)
        setErrors({})
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      setErrors({ submit: "Failed to send message. Please try again." })
    }
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@creativeagency.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Address", value: "123 Creative Street, Design City" },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Send us a message</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <Input
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      disabled={isSubmitting}
                      className={`text-sm sm:text-base ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      maxLength={50}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      disabled={isSubmitting}
                      className={`text-sm sm:text-base ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      maxLength={100}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder={t.contact.form.message}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className={`text-sm sm:text-base ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      maxLength={1000}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive mt-1" role="alert">
                        {errors.message}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  {errors.submit && (
                    <p className="text-sm text-destructive" role="alert">
                      {errors.submit}
                    </p>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t.contact.form.send}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Get in touch</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  We'd love to hear from you. Here's how you can reach us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm sm:text-base">{info.label}</div>
                      <div className="text-muted-foreground text-sm sm:text-base break-words">{info.value}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}