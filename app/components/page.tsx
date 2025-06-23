"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Heart,
  Share,
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Info,
  Zap,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Globe,
} from "lucide-react"

// Add these imports at the top
import { useToast } from "@/hooks/use-toast"
import { Star, Crown, Shield, ZapIcon } from "lucide-react"

export default function ComponentsPage() {
  const { t } = useLanguage()

  // Add this inside the ComponentsPage function, after the existing componentSections array:
  const { toast } = useToast()

  // Replace the existing componentSections array with this expanded version:
  const componentSections = [
    {
      title: "Basic Components",
      description: "Essential UI components for any application",
      components: [
        {
          name: "Buttons",
          description: "Various button styles and states",
          demo: (
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline" className="bg-background text-foreground">
                Outline
              </Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          ),
        },
        {
          name: "Form Elements",
          description: "Input fields, textareas, and form controls",
          demo: (
            <div className="space-y-4 max-w-md">
              <Input placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Textarea placeholder="Enter your message" rows={3} />
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
            </div>
          ),
        },
        {
          name: "Badges & Labels",
          description: "Status indicators and labels",
          demo: (
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Error</Badge>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Success</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">Warning</Badge>
            </div>
          ),
        },
      ],
    },
    {
      title: "Layout Components",
      description: "Components for structuring your application layout",
      components: [
        {
          name: "Cards",
          description: "Flexible content containers",
          demo: (
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>A basic card with header and content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the card content area where you can place any information.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Card with Icon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cards can include icons and various content types.</p>
                </CardContent>
              </Card>
            </div>
          ),
        },
        {
          name: "Tabs",
          description: "Organize content in tabbed interfaces",
          demo: (
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tab1">Overview</TabsTrigger>
                <TabsTrigger value="tab2">Details</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p>Overview content goes here. This tab shows general information.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p>Detailed information and specifications are displayed in this tab.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p>Configuration options and settings can be found here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ),
        },
        {
          name: "Accordion",
          description: "Collapsible content sections",
          demo: (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer visual identity creation, web development, and complete branding packages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does a project take?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary depending on scope, but typically range from 2-8 weeks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer maintenance and support packages for all our projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
      ],
    },
    {
      title: "Interactive Components",
      description: "Components with user interactions and feedback",
      components: [
        {
          name: "Dropdown Menus",
          description: "Contextual menus and dropdowns",
          demo: (
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-background text-foreground">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Preferences
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ),
        },
        {
          name: "Progress Indicators",
          description: "Show progress and loading states",
          demo: (
            <div className="space-y-4">
              <div>
                <Label>Project Progress</Label>
                <Progress value={75} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-1">75% Complete</p>
              </div>
              <div>
                <Label>Skills Assessment</Label>
                <Progress value={90} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-1">90% Complete</p>
              </div>
            </div>
          ),
        },
        {
          name: "Toast Notifications",
          description: "User feedback and notification messages",
          demo: (
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Success!",
                    description: "Your action was completed successfully.",
                  })
                }}
              >
                Show Success Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Error occurred",
                    description: "Something went wrong. Please try again.",
                    variant: "destructive",
                  })
                }}
              >
                Show Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Information",
                    description: "Here's some important information for you.",
                  })
                }}
              >
                Show Info Toast
              </Button>
            </div>
          ),
        },
        {
          name: "Alerts & Notifications",
          description: "User feedback and status messages",
          demo: (
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>This is an informational alert with useful information.</AlertDescription>
              </Alert>
              <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  Success! Your changes have been saved.
                </AlertDescription>
              </Alert>
              <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                  Warning: Please review your information before proceeding.
                </AlertDescription>
              </Alert>
            </div>
          ),
        },
      ],
    },
    {
      title: "Pricing & Business Components",
      description: "Components for pricing, plans, and business features",
      components: [
        {
          name: "Pricing Cards",
          description: "Showcase pricing plans and packages",
          demo: (
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Basic
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Logo Design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Basic Brand Guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />2 Revisions
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative border-primary shadow-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Crown className="h-5 w-5 text-primary" />
                    Professional
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$79</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Complete Brand Identity
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Website Development
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />5 Revisions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Priority Support
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <ZapIcon className="h-5 w-5 text-purple-600" />
                    Enterprise
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$199</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Everything in Professional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Custom Development
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Unlimited Revisions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      24/7 Support
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          ),
        },
        {
          name: "Feature Comparison",
          description: "Compare features across different plans",
          demo: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">Basic</th>
                    <th className="text-center p-4">Pro</th>
                    <th className="text-center p-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Logo Design</td>
                    <td className="text-center p-4">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Website Development</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Priority Support</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ],
    },
    {
      title: "Data Display",
      description: "Components for displaying information and data",
      components: [
        {
          name: "Avatars & Profiles",
          description: "User avatars and profile displays",
          demo: (
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
        {
          name: "Statistics Cards",
          description: "Display key metrics and statistics",
          demo: (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                      <p className="text-2xl font-bold">324</p>
                    </div>
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Clients</p>
                      <p className="text-2xl font-bold">89</p>
                    </div>
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ),
        },
        {
          name: "Testimonial Cards",
          description: "Customer reviews and testimonials",
          demo: (
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Exceptional work! The team delivered exactly what we needed and exceeded our expectations."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">CEO, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Professional, creative, and delivered on time. Highly recommend their services!"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sarah Miller</p>
                      <p className="text-xs text-muted-foreground">Founder, StartupXYZ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ),
        },
        {
          name: "Service Cards",
          description: "Showcase services and features",
          demo: (
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Visual Identity</h3>
                  <p className="text-sm text-muted-foreground">Complete brand identity design</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <p className="text-sm text-muted-foreground">Modern responsive websites</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Digital Strategy</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive digital solutions</p>
                </CardContent>
              </Card>
            </div>
          ),
        },
      ],
    },
    {
      title: "Specialized Components",
      description: "Industry-specific and advanced components",
      components: [
        {
          name: "Contact Information",
          description: "Display contact details elegantly",
          demo: (
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@agency.com</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">123 Creative St, Design City</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ),
        },
        {
          name: "Team Member Cards",
          description: "Showcase team members and their roles",
          demo: (
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-1">John Doe</h3>
                  <p className="text-sm text-muted-foreground mb-3">Creative Director</p>
                  <p className="text-xs text-muted-foreground">
                    Leading creative vision and brand strategy for our clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-1">Sarah Miller</h3>
                  <p className="text-sm text-muted-foreground mb-3">Lead Developer</p>
                  <p className="text-xs text-muted-foreground">
                    Building modern, scalable web applications with cutting-edge technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-1">Mike Johnson</h3>
                  <p className="text-sm text-muted-foreground mb-3">UX Designer</p>
                  <p className="text-xs text-muted-foreground">
                    Creating intuitive user experiences that delight and engage users.
                  </p>
                </CardContent>
              </Card>
            </div>
          ),
        },
        {
          name: "Feature Highlights",
          description: "Showcase key features and benefits",
          demo: (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Responsive Design</h4>
                  <p className="text-sm text-muted-foreground">Works perfectly on all devices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Fast Performance</h4>
                  <p className="text-sm text-muted-foreground">Optimized for speed and efficiency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Mobile First</h4>
                  <p className="text-sm text-muted-foreground">Designed for mobile experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Monitor className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium">Modern UI</h4>
                  <p className="text-sm text-muted-foreground">Clean and contemporary design</p>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight">{t.components.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.components.description}</p>
        </div>

        <div className="space-y-16">
          {componentSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>

              <div className="grid gap-8">
                {section.components.map((component, componentIndex) => (
                  <Card key={componentIndex}>
                    <CardHeader>
                      <CardTitle className="text-xl">{component.name}</CardTitle>
                      <CardDescription>{component.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 border rounded-lg bg-muted/30">{component.demo}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Need Custom Components?</h3>
              <p className="text-muted-foreground mb-6">
                We can create custom components tailored to your specific needs. Contact us to discuss your
                requirements.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
