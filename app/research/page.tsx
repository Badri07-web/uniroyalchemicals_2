import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Microscope, Beaker, TrendingUp, Users, Target, Award, Zap } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Sustainable PVC Additives",
      description:
        "Developing eco-friendly alternatives to traditional PVC additives with reduced environmental impact",
      icon: Lightbulb,
      focus: ["Bio-based Plasticisers", "Green Stabilisers", "Recyclable Compounds"],
    },
    {
      title: "Performance Enhancement",
      description: "Advanced formulations for improved mechanical properties and durability",
      icon: TrendingUp,
      focus: ["Impact Modifiers", "Thermal Stabilisers", "Weather Resistance"],
    },
    {
      title: "Specialty Applications",
      description: "Custom solutions for niche markets and specialized industrial applications",
      icon: Target,
      focus: ["Medical Grade", "Food Contact", "High-Temperature Applications"],
    },
    {
      title: "Process Innovation",
      description: "Optimizing manufacturing processes for better efficiency and quality",
      icon: Zap,
      focus: ["Process Optimization", "Quality Enhancement", "Cost Reduction"],
    },
  ]

  const capabilities = [
    {
      name: "Material Science Laboratory",
      description: "Advanced laboratory for polymer research and additive development",
      equipment: ["Rheometer", "DSC", "TGA", "FTIR Spectroscopy"],
    },
    {
      name: "Formulation Development",
      description: "Custom formulation capabilities for specific customer requirements",
      equipment: ["High-Speed Mixers", "Twin-Screw Extruders", "Injection Molding"],
    },
    {
      name: "Performance Testing",
      description: "Comprehensive testing facilities for product validation",
      equipment: ["Tensile Testing", "Impact Testing", "Thermal Analysis", "Weathering Chamber"],
    },
    {
      name: "Pilot Plant Facility",
      description: "Scale-up capabilities from laboratory to commercial production",
      equipment: ["Pilot Reactors", "Distillation Units", "Filtration Systems", "Packaging Lines"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">Innovation & Research</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Research & Development</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Driving innovation in PVC additives through cutting-edge research, advanced materials science, and
              collaborative development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest heavily in research and development to create innovative solutions that address evolving market
              needs and environmental challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area) => (
              <Card key={area.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.focus.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">R&D Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art research facilities and experienced team enable us to develop innovative solutions
              from concept to commercial production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <Card key={capability.name} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Beaker className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{capability.name}</CardTitle>
                      <CardDescription className="text-base">{capability.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Equipment:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {capability.equipment.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Innovation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to commercialization, our systematic approach ensures successful product development.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Concept", description: "Identifying market needs and opportunities" },
              { step: "2", title: "Research", description: "Laboratory research and formulation development" },
              { step: "3", title: "Testing", description: "Comprehensive performance and quality testing" },
              { step: "4", title: "Scale-up", description: "Pilot plant trials and process optimization" },
              { step: "5", title: "Launch", description: "Commercial production and market introduction" },
            ].map((phase) => (
              <Card key={phase.step} className="text-center border-0 shadow-lg relative">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <CardDescription className="text-sm">{phase.description}</CardDescription>
                </CardHeader>
                {phase.step !== "5" && (
                  <div className="absolute top-8 -right-4 w-8 h-0.5 bg-green-600 hidden md:block"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration & Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Collaboration & Partnerships</h2>
                <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in collaborative innovation and actively partner with academic institutions, research
                  organizations, and industry leaders to accelerate technological advancement.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Academic Partnerships</h3>
                    <p className="text-gray-600">
                      Collaborating with leading universities and research institutes for fundamental research and
                      talent development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Microscope className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Industry Collaboration</h3>
                    <p className="text-gray-600">
                      Working closely with customers and industry partners to develop application-specific solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technology Transfer</h3>
                    <p className="text-gray-600">
                      Facilitating knowledge transfer and commercialization of research outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=R%26D+Laboratory"
                alt="Research and Development Laboratory"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">R&D</div>
                  <div className="text-sm">Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents & Publications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patents & Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research achievements are protected through intellectual property and shared with the scientific
              community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">15+</CardTitle>
                <CardDescription className="text-lg">Patents Filed</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">25+</CardTitle>
                <CardDescription className="text-lg">Research Publications</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">50+</CardTitle>
                <CardDescription className="text-lg">Innovation Projects</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Partner with Our Innovation Team</h2>
            <p className="text-xl text-green-100">
              Collaborate with our R&D experts to develop custom solutions for your specific applications and
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                Discuss Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
              >
                Download R&D Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
