import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Globe, TrendingUp, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-600 hover:bg-green-700 text-white mb-6">Since 1984</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Four Decades of PVC Additive Excellence</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              From our founding in 1984 to today, Uniroyal Chemicals has been at the forefront of PVC additive
              development, serving industries across India with innovative solutions and unwavering commitment to
              quality.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">40+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">Pan-India</div>
              <div className="text-gray-600">Operations</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">100+</div>
              <div className="text-gray-600">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1984 as Uniroyal Chemicals Pvt Ltd, we emerged as a pioneer in PVC additive manufacturing
                  in India.
                </p>
                <p>
                  We are a leading PVC additive manufacturer in India, specializing in Lead Stabilisers, Calcium Zinc
                  Stabilisers, and Plasticisers.
                </p>
                <p>
                  Our focus lies in providing solutions for piping, cables, window profiles, and other critical PVC
                  applications.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Company+History"
                alt="Company History"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence and innovation in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To develop and deliver innovative specialty chemical solutions that enable our customers to achieve
                  superior performance while maintaining the highest standards of safety, quality, and environmental
                  responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in specialty chemicals, recognized for our innovation, reliability, and
                  commitment to sustainable solutions that create value for customers, employees, and communities
                  worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Innovation & Excellence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Safety & Sustainability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Customer Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Integrity & Trust</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Uniroyal Chemicals into the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "B. Sri Krishna",
                title: "CEO & Leader",
                experience: "25+ years in chemical industry",
              },
              {
                name: "A. Kumar",
                title: "Head Of Production",
                experience: "20+ years in R&D leadership",
              },
              {
                name: "M. Singh",
                title: "Cheif Technical Officer",
                experience: "18+ years in operations",
              },
            ].map((leader) => (
              <Card
                key={leader.name}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                    <Image
                      src={`/placeholder.svg?height=96&width=96&text=${leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}`}
                      alt={leader.name}
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">{leader.title}</CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <p className="text-gray-600 text-sm">{leader.experience}</p>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and compliance is demonstrated through rigorous certifications and adherence to
              international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "ISO 9001:2015",
              "ISO 14001:2015",
              "OHSAS 18001",
              "REACH Compliance",
              "FDA Approved",
              "GMP Certified",
              "Kosher Certified",
              "Halal Certified",
            ].map((cert) => (
              <Card key={cert} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{cert}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Partner with Industry Leaders?</h2>
            <p className="text-xl text-green-100">
              Join thousands of companies worldwide who trust Uniroyal Chemicals for their specialty chemical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-green-600">
                Contact Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
              >
                Download Company Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
