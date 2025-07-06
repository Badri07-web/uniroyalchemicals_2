import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle, Shield, Target, FileText, Users, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QualityPage() {
  const qualityStandards = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent product quality",
      icon: Award,
      status: "Certified",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System for sustainable manufacturing practices",
      icon: Globe,
      status: "Certified",
    },
    {
      name: "REACH Compliance",
      description: "European regulation compliance for chemical safety and registration",
      icon: Shield,
      status: "Compliant",
    },
    {
      name: "RoHS Compliance",
      description: "Restriction of Hazardous Substances directive compliance",
      icon: CheckCircle,
      status: "Compliant",
    },
  ]

  const qualityProcesses = [
    {
      title: "Raw Material Testing",
      description: "Rigorous testing of all incoming raw materials to ensure compliance with specifications",
      icon: FileText,
    },
    {
      title: "In-Process Quality Control",
      description: "Continuous monitoring and testing during manufacturing processes",
      icon: Target,
    },
    {
      title: "Final Product Testing",
      description: "Comprehensive testing of finished products before dispatch",
      icon: CheckCircle,
    },
    {
      title: "Customer Feedback Integration",
      description: "Continuous improvement based on customer feedback and market requirements",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">Quality Excellence</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Quality & Compliance</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Our commitment to quality excellence drives every aspect of our manufacturing process, ensuring consistent
              performance and reliability in all our PVC additives.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Quality Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest international standards and certifications to ensure product quality and
              regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard) => (
              <Card
                key={standard.name}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{standard.name}</CardTitle>
                  <CardDescription className="text-sm">{standard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-600 text-white">{standard.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Quality Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw material sourcing to final product delivery, our comprehensive quality management system ensures
              excellence at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => (
              <Card key={process.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <process.icon className="h-8 w-8 text-green-600" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{process.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Quality Metrics & Performance</h2>
                <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to quality is reflected in our key performance indicators and continuous improvement
                  initiatives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                  <div className="text-sm text-gray-600">Quality Compliance Rate</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Quality Monitoring</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
                  <div className="text-sm text-gray-600">Quality Compromises</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Traceability</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Quality+Testing+Laboratory"
                alt="Quality testing laboratory"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">ISO</div>
                  <div className="text-sm">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Testing Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced testing laboratories ensure comprehensive quality validation of all products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Physical Testing</CardTitle>
                <CardDescription>
                  Comprehensive physical property testing including tensile strength, impact resistance, and thermal
                  stability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Chemical Analysis</CardTitle>
                <CardDescription>
                  Advanced chemical analysis using spectroscopy, chromatography, and other analytical techniques.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Performance Testing</CardTitle>
                <CardDescription>
                  Real-world performance testing to validate product effectiveness in actual applications.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quality Documentation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete documentation and certificates available for all our products and processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Certificate of Analysis (COA)",
              "Material Safety Data Sheet (MSDS)",
              "ISO Certificates",
              "Quality Management Manuals",
              "Test Reports",
              "Compliance Certificates",
            ].map((doc) => (
              <Card
                key={doc}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{doc}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button size="sm" variant="outline" className="hover:bg-green-600 hover:text-white bg-transparent">
                    Request Document
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Experience Quality Excellence</h2>
            <p className="text-xl text-green-100">
              Partner with us for PVC additives that meet the highest quality standards and regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                Request Quality Documentation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
              >
                Schedule Quality Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
