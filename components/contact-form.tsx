"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productInterest: "",
      message: "",
    })

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCallClick = () => {
    window.location.href = "tel:+919493015165"
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. Our team will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleCallClick} className="bg-green-600 hover:bg-green-700">
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </Button>
            <Button variant="outline" onClick={() => setIsSubmitted(false)} className="bg-transparent">
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <Mail className="h-5 w-5 text-green-600" />
          Get in Touch
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          Fill out the form below and our team will get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="h-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium">
                Company Name
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="h-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productInterest" className="text-sm font-medium">
              Product Interest
            </Label>
            <Select value={formData.productInterest} onValueChange={(value) => handleChange("productInterest", value)}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Select a product category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lead-stabilisers">Lead Stabilisers</SelectItem>
                <SelectItem value="calcium-zinc-stabilisers">Calcium Zinc Stabilisers</SelectItem>
                <SelectItem value="plasticisers">Plasticisers</SelectItem>
                <SelectItem value="lubricants">Lubricants & Processing Aids</SelectItem>
                <SelectItem value="pvc-compounds">PVC Compounds</SelectItem>
                <SelectItem value="custom-solutions">Custom Solutions</SelectItem>
                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Please describe your requirements, application details, or any specific questions you have..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              className="resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 h-11" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
            <Button type="button" variant="outline" className="flex-1 bg-transparent h-11" onClick={handleCallClick}>
              <Phone className="h-4 w-4 mr-2" />
              Call Instead
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
