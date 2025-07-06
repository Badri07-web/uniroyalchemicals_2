import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Globe, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function ContactPage() {
  const offices = [
    {
      name: "Registered Office",
      address: "6-18-043, Sikh Village, Secunderabad, Telangana, 500009",
      phone: "+91 9493015165",
      email: "info@uniroyalchemicals.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4234567890123!2d78.4867!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE1LjAiTiA3OMKwMjknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    },
    {
      name: "Factory Location",
      address: "S.No 129, Kandlakoya Village, Medchal, TG (Adjacent to NH44, close to ORR)",
      phone: "+91 6304894331",
      email: "uniroyalindia@gmail.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM IST",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5234!3d17.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzI0LjEiTiA3OMKwMzEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    },
    {
      name: "Additional Contact",
      address: "Secunderabad, Telangana",
      phone: "+040 27847481",
      email: "info@uniroyalchemicals.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      mapUrl: "",
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "+91 9493015165 | +91 6304894331",
      availability: "Mon-Fri, 9 AM - 6 PM IST",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your inquiries",
      contact: "info@uniroyalchemicals.com",
      availability: "24/7 - Response within 24 hours",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      description: "Instant support via WhatsApp",
      contact: "Available on website",
      availability: "Mon-Fri, 9 AM - 5 PM IST",
    },
    {
      icon: Globe,
      title: "Factory Visits",
      description: "Schedule a visit to our manufacturing facility",
      contact: "Kandlakoya Village, Medchal",
      availability: "By appointment only",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Connect with our team of chemical experts specializing in PVC additives. We're here to help you find the
              right solutions for your specific needs and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to provide expert guidance and
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-green-600">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.availability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <ContactForm />
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Global Offices</h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <Card key={office.name} className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-600">{office.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                          <p className="text-gray-600">{office.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                          <p className="text-gray-600">{office.phone}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                          <p className="text-gray-600">{office.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-gray-400" />
                          <p className="text-gray-600">{office.hours}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Interactive Maps */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>

                {offices.slice(0, 2).map((office) => (
                  <div key={office.name} className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600">{office.name}</h4>
                    {office.mapUrl && (
                      <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src={office.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${office.name}`}
                        />
                      </div>
                    )}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium">{office.address}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                        <span>📞 {office.phone}</span>
                        <span>📧 {office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800 mb-2">Need Directions?</h4>
                  <p className="text-blue-700 text-sm">
                    Our factory is conveniently located adjacent to NH44 and close to the Outer Ring Road (ORR) for easy
                    access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our products, services, and processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your minimum order quantity?",
                answer:
                  "Minimum order quantities vary by product. Contact our sales team for specific MOQ information for your required products.",
              },
              {
                question: "Do you provide technical support?",
                answer:
                  "Yes, we offer comprehensive technical support including application guidance, troubleshooting, and custom formulation development.",
              },
              {
                question: "What certifications do your products have?",
                answer:
                  "Our products meet various international standards including ISO, FDA, REACH, and industry-specific certifications. Specific certifications vary by product.",
              },
              {
                question: "Can you develop custom formulations?",
                answer:
                  "Absolutely. Our R&D team specializes in developing custom chemical solutions tailored to specific customer requirements and applications.",
              },
              {
                question: "What are your typical lead times?",
                answer:
                  "Lead times vary by product and quantity. Standard products typically ship within 2-4 weeks, while custom formulations may require 6-12 weeks.",
              },
              {
                question: "Do you offer samples for testing?",
                answer:
                  "Yes, we provide samples for qualified customers to evaluate our products in their specific applications before placing orders.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">24/7 Emergency Support</h2>
            <p className="text-lg text-gray-600 mb-6">
              For urgent technical issues or emergency situations involving our products, our emergency hotline is
              available around the clock.
            </p>
            <div className="space-y-2">
              <p className="text-xl font-bold text-red-600">Emergency Hotline: +1 (800) 424-9300</p>
              <p className="text-gray-600">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
