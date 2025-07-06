import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CheckCircle, Cog, Zap, Settings, Wrench } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LubricantsPage() {
  const products = [
    {
      name: "External Lubricant EL-100",
      description: "General purpose external lubricant for PVC processing",
      features: [
        "Excellent metal release",
        "Improved surface finish",
        "Reduced processing torque",
        "Good thermal stability",
      ],
      applications: ["Extrusion", "Injection Molding", "Calendering", "Blow Molding"],
      specifications: {
        Type: "Calcium Stearate Based",
        "Melting Point": "140-150°C",
        "Bulk Density": "0.3-0.5 g/cm³",
        "Particle Size": "< 10 μm",
      },
    },
    {
      name: "Internal Lubricant IL-200",
      description: "High-performance internal lubricant for improved flow properties",
      features: ["Enhanced melt flow", "Reduced fusion time", "Improved processability", "Excellent compatibility"],
      applications: ["Rigid PVC Compounds", "Profile Extrusion", "Pipe Manufacturing", "Sheet Production"],
      specifications: {
        Type: "Fatty Acid Ester",
        "Melting Point": "60-70°C",
        "Saponification Value": "180-200 mg KOH/g",
        "Acid Value": "< 3 mg KOH/g",
      },
    },
    {
      name: "Processing Aid PA-300",
      description: "Specialized processing aid for enhanced PVC processing",
      features: ["Improved fusion characteristics", "Better surface quality", "Reduced plate-out", "Enhanced clarity"],
      applications: ["Clear PVC Applications", "Medical Tubing", "Food Grade Products", "High-Quality Profiles"],
      specifications: {
        Type: "Acrylic Polymer",
        "Glass Transition Temp": "105-115°C",
        "Bulk Density": "0.4-0.6 g/cm³",
        "Particle Size": "< 5 μm",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">
              <Cog className="h-4 w-4 mr-2" />
              Processing Enhancement Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Lubricants & Processing Aids</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Advanced lubricants and processing aids manufactured in Secunderabad, designed to optimize PVC processing
              performance, improve surface finish, and enhance production efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Product Overview</h2>
                <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our lubricants and processing aids are manufactured at our Secunderabad facility using advanced
                  formulation technology. These specialty additives optimize PVC processing by reducing friction,
                  improving flow properties, and enhancing surface quality.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Improved processing efficiency and reduced cycle times",
                    "Enhanced surface finish and appearance",
                    "Reduced equipment wear and maintenance costs",
                    "Better melt flow and fusion characteristics",
                    "Minimized plate-out and die build-up",
                    "Optimized processing temperature ranges",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="h-6 w-6 text-orange-600" />
                  <h3 className="text-lg font-semibold text-orange-800">Processing Optimization</h3>
                </div>
                <p className="text-orange-700">
                  Our lubricants are specifically formulated to optimize PVC processing conditions and improve overall
                  production efficiency.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Lubricant+Production"
                alt="Lubricant Production"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">Optimal</div>
                  <div className="text-sm">Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Lubricant Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of external lubricants, internal lubricants, and processing aids for various PVC
              processing applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Cog className="h-5 w-5 text-orange-600" />
                    {index === 0 && <Badge className="bg-orange-100 text-orange-800">External Lubricant</Badge>}
                    {index === 1 && <Badge className="bg-blue-100 text-blue-800">Internal Lubricant</Badge>}
                    {index === 2 && <Badge className="bg-green-100 text-green-800">Processing Aid</Badge>}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
                      Request Quote
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Datasheet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical specifications and application guidelines for our lubricant and processing aid
              products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="selection">Selection Guide</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Typical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4">Parameter</th>
                            <th className="text-left p-4">EL-100</th>
                            <th className="text-left p-4">IL-200</th>
                            <th className="text-left p-4">PA-300</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4">Type</td>
                            <td className="p-4">Calcium Stearate Based</td>
                            <td className="p-4">Fatty Acid Ester</td>
                            <td className="p-4">Acrylic Polymer</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Melting Point</td>
                            <td className="p-4">140-150°C</td>
                            <td className="p-4">60-70°C</td>
                            <td className="p-4">105-115°C</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Bulk Density</td>
                            <td className="p-4">0.3-0.5 g/cm³</td>
                            <td className="p-4">-</td>
                            <td className="p-4">0.4-0.6 g/cm³</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Particle Size</td>
                            <td className="p-4">&lt; 10 μm</td>
                            <td className="p-4">-</td>
                            <td className="p-4">&lt; 5 μm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-orange-600" />
                        External Lubrication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Metal release and mold release</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Surface finish improvement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Reduced processing torque</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Prevention of plate-out</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-orange-600" />
                        Internal Lubrication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Improved melt flow properties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Reduced fusion time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Enhanced processability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Better homogenization</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="processing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Processing Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Dosage Recommendations:</h4>
                      <ul className="space-y-2">
                        <li>• External Lubricants: 0.2-1.0 phr</li>
                        <li>• Internal Lubricants: 0.5-2.0 phr</li>
                        <li>• Processing Aids: 0.5-3.0 phr</li>
                        <li>• Adjust based on specific application requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Processing Conditions:</h4>
                      <ul className="space-y-2">
                        <li>• Add during dry blending stage</li>
                        <li>• Ensure uniform distribution</li>
                        <li>• Monitor processing temperatures</li>
                        <li>• Optimize based on equipment type</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="selection" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lubricant Selection Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Choose External Lubricants for:</h4>
                        <ul className="space-y-2 ml-4">
                          <li>• Improving surface finish and gloss</li>
                          <li>• Reducing equipment wear</li>
                          <li>• Preventing plate-out on processing equipment</li>
                          <li>• Enhancing mold release properties</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Choose Internal Lubricants for:</h4>
                        <ul className="space-y-2 ml-4">
                          <li>• Improving melt flow and fusion</li>
                          <li>• Reducing processing temperatures</li>
                          <li>• Enhancing polymer-polymer lubrication</li>
                          <li>• Optimizing processing efficiency</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Choose Processing Aids for:</h4>
                        <ul className="space-y-2 ml-4">
                          <li>• Improving fusion characteristics</li>
                          <li>• Enhancing clarity and transparency</li>
                          <li>• Reducing processing defects</li>
                          <li>• Optimizing high-quality applications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Processing Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Processing Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our lubricants and processing aids deliver measurable improvements in PVC processing performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Improved Efficiency</CardTitle>
                <CardDescription>
                  Reduced cycle times and enhanced processing speeds for increased productivity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Better Surface Quality</CardTitle>
                <CardDescription>
                  Enhanced surface finish and appearance with reduced defects and imperfections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Reduced Wear</CardTitle>
                <CardDescription>
                  Lower equipment wear and maintenance costs through improved lubrication.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Process Optimization</CardTitle>
                <CardDescription>
                  Optimized processing conditions for consistent quality and performance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Optimize Your PVC Processing</h2>
            <p className="text-xl text-orange-100">
              Contact our processing experts in Secunderabad to discuss your lubrication needs and improve your
              production efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
                Contact Processing Experts
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-900 bg-transparent"
              >
                Request Processing Evaluation
              </Button>
            </div>
            <div className="text-sm text-orange-200 mt-4">
              <p>📍 Registered Office: 6-18-043, Sikh Village, Secunderabad, Telangana 500009</p>
              <p>🏭 Factory: S.No 129, Kandlakoya Village, Medchal, TG</p>
              <p>📧 info@uniroyalchemicals.com | uniroyalindia@gmail.com</p>
              <p>📞 +91 9493015165 | +91 6304894331</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
