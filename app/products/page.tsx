import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search, Filter, Download, Star } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  const productCategories = [
    {
      name: "Lead Stabilisers",
      description: "Traditional stabilizers for cost-effective PVC processing",
      products: 150,
      featured: true,
      image: "/placeholder.svg?height=200&width=300&text=Lead+Stabilisers",
    },
    {
      name: "Calcium Zinc Stabilisers",
      description: "Eco-friendly stabilizers for food-grade and medical applications",
      products: 45,
      featured: true,
      image: "/placeholder.svg?height=200&width=300&text=Calcium+Zinc+Stabilisers",
    },
    {
      name: "Plasticisers",
      description: "Flexibility enhancers for PVC compounds",
      products: 32,
      featured: false,
      image: "/placeholder.svg?height=200&width=300&text=Plasticisers",
    },
    {
      name: "Lubricants",
      description: "Processing aids for improved flow and surface finish",
      products: 28,
      featured: false,
      image: "/placeholder.svg?height=200&width=300&text=Lubricants",
    },
    {
      name: "PVC Compounds",
      description: "Ready-to-use compounds for specific applications",
      products: 75,
      featured: true,
      image: "/placeholder.svg?height=200&width=300&text=PVC+Compounds",
    },
    {
      name: "Custom Formulations",
      description: "Tailored solutions for unique requirements",
      products: 42,
      featured: false,
      image: "/placeholder.svg?height=200&width=300&text=Custom+Formulations",
    },
  ]

  const featuredProducts = [
    {
      name: "Lead Stabiliser LS-101",
      category: "Lead Stabiliser",
      description: "Cost-effective stabilizer for general PVC applications",
      applications: ["Pipes", "Profiles", "Fittings"],
      datasheet: true,
    },
    {
      name: "Calcium Zinc Stabiliser CZ-202",
      category: "Calcium Zinc Stabiliser",
      description: "Eco-friendly stabilizer for food-grade PVC products",
      applications: ["Food Packaging", "Medical Devices", "Toys"],
      datasheet: true,
    },
    {
      name: "Plasticiser P-303",
      category: "Plasticiser",
      description: "General purpose plasticizer for flexible PVC compounds",
      applications: ["Cables", "Flooring", "Films"],
      datasheet: true,
    },
    {
      name: "Lubricant L-404",
      category: "Lubricant",
      description: "External lubricant for improved PVC processing",
      applications: ["Extrusion", "Injection Molding", "Calendering"],
      datasheet: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Product Portfolio</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Discover our comprehensive range of specialty chemicals, rubber additives, and performance materials
              designed to meet the most demanding industrial requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of chemical solutions organized by application and industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card
                key={category.name}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {category.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {category.products} Products
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most popular and innovative chemical solutions trusted by industry leaders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {product.category}
                      </Badge>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </div>
                    {product.datasheet && (
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-600">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <Badge key={app} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        Request Sample
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        Technical Data
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Featured Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Finder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Finder</h2>
              <p className="text-xl text-gray-600">
                Find the right chemical solution for your specific application and requirements.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="text-center text-2xl">Find Your Perfect Solution</CardTitle>
                <CardDescription className="text-center text-base">
                  Use our advanced search to filter products by application, industry, or chemical properties.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pvc-pipes">PVC Pipes</SelectItem>
                          <SelectItem value="pvc-profiles">PVC Profiles</SelectItem>
                          <SelectItem value="pvc-fittings">PVC Fittings</SelectItem>
                          <SelectItem value="pvc-cables">PVC Cables</SelectItem>
                          <SelectItem value="pvc-films">PVC Films</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Application</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select application" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stabilization">Stabilization</SelectItem>
                          <SelectItem value="plasticization">Plasticization</SelectItem>
                          <SelectItem value="lubrication">Lubrication</SelectItem>
                          <SelectItem value="impact-modification">Impact Modification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lead-stabiliser">Lead Stabiliser</SelectItem>
                          <SelectItem value="calcium-zinc-stabiliser">Calcium Zinc Stabiliser</SelectItem>
                          <SelectItem value="plasticiser">Plasticiser</SelectItem>
                          <SelectItem value="lubricant">Lubricant</SelectItem>
                          <SelectItem value="pvc-compound">PVC Compound</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                      <Input placeholder="Enter keywords or product name" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 px-12">
                    Search Products
                    <Search className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Need Custom Chemical Solutions?</h2>
            <p className="text-xl text-blue-100">
              Our R&D team can develop custom formulations tailored to your specific requirements and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Request Custom Solution
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
