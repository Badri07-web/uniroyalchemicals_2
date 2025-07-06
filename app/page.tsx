import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Factory, Shield, Users, Phone, Mail, MapPin, Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallNowButton } from "@/components/call-now-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 py-16 md:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs md:text-sm">
                  Innovating with Integrity Since 1984
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Crafting Excellence in PVC Additives
                </h1>
                <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  With decades of expertise, we lead the way in Lead Stabilisers, Calcium Zinc Stabilisers, and
                  Plasticisers for diverse PVC applications across industries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 h-12 px-6" asChild>
                  <Link href="/products">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <CallNowButton
                  phoneNumber="+919493015165"
                  label="Call Now"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent h-12 px-6"
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent h-12 px-6"
                  asChild
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold">40+</div>
                  <div className="text-xs md:text-sm text-green-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold">Pan-India</div>
                  <div className="text-xs md:text-sm text-green-200">Presence</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold">Quality</div>
                  <div className="text-xs md:text-sm text-green-200">Assured</div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Manufacturing+Facility"
                  alt="Manufacturing facility"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600&text=PVC+Pipes+Manufacturing"
                alt="PVC Pipes in different colors"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-green-600 text-white p-4 md:p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold">1984</div>
                  <div className="text-xs md:text-sm">Established</div>
                </div>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">About Us</h2>
                <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
                  <p>
                    Uniroyal Chemicals Pvt Ltd is a leading name in PVC additive manufacturing in India. With nearly
                    four decades of expertise, we specialize in producing high-quality PVC additives, including Calcium
                    Zinc Stabilisers, Lead Stabilisers, Lubricants, and Plasticisers.
                  </p>
                  <p>
                    Our additives are designed to support industries such as piping, cables, and window profiles,
                    ensuring reliability and performance across applications.
                  </p>
                  <p>
                    As technical entrepreneurs, we leverage our industry knowledge to innovate and provide tailored
                    solutions for our clients. Our approach is driven by a commitment to sustainability, integrity, and
                    quality—ensuring that our products meet the evolving needs of a diverse market.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 p-4 md:p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">
                  Innovating with Integrity Since 1984
                </h3>
                <p className="text-green-700 text-sm md:text-base">
                  Four decades of excellence in PVC additive manufacturing, committed to quality and innovation.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Uniroyal Chemicals?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of expertise in PVC additive manufacturing, delivering innovative solutions that meet the
              highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Factory,
                title: "Manufacturing Excellence",
                description:
                  "State-of-the-art manufacturing facilities ensuring consistent quality and reliability in every product.",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control processes ensuring products meet international standards and customer specifications.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Focus",
                description:
                  "Continuous R&D efforts to develop cutting-edge PVC additives that meet evolving industry demands.",
              },
              {
                icon: Users,
                title: "Customer-Centric",
                description:
                  "Dedicated support team providing tailored solutions and technical expertise for diverse applications.",
              },
              {
                icon: Target,
                title: "Reliability",
                description: "Proven track record of consistent performance and dependable supply chain management.",
              },
              {
                icon: Award,
                title: "Sustainability",
                description:
                  "Committed to environmental responsibility with eco-friendly processes and sustainable practices.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of PVC additives designed to enhance performance and meet diverse industry
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Lead Stabilisers",
                description: "Traditional stabilizers for cost-effective PVC processing applications.",
                badge: "Popular",
                badgeColor: "bg-green-600",
                href: "/products/lead-stabilisers",
              },
              {
                title: "Calcium Zinc Stabilisers",
                description: "Eco-friendly stabilizers for food-grade and medical applications.",
                badge: "Eco-Friendly",
                badgeColor: "bg-green-600",
                href: "/products/calcium-zinc-stabilisers",
              },
              {
                title: "Plasticisers",
                description: "Flexibility enhancers for PVC compounds and applications.",
                badge: null,
                badgeColor: "",
                href: "/products/plasticisers",
              },
              {
                title: "Lubricants",
                description: "Processing aids for improved flow and surface finish.",
                badge: null,
                badgeColor: "",
                href: "/products/lubricants",
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${product.title.replace(" ", "+")}`}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge className={product.badgeColor}>{product.badge}</Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors bg-transparent"
                    asChild
                  >
                    <Link href={product.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our PVC additives support diverse industries with reliable performance and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {["Pipes & Fittings", "Cables & Wires", "Window Profiles", "Flooring", "Automotive", "Construction"].map(
              (industry) => (
                <Card
                  key={industry}
                  className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full" />
                    </div>
                    <CardTitle className="text-xs md:text-sm leading-tight">{industry}</CardTitle>
                  </CardHeader>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Ready to Discuss Your PVC Additive Needs?
                </h2>
                <p className="text-lg md:text-xl text-green-100">
                  Our technical experts are ready to help you find the perfect PVC additive solution for your specific
                  requirements.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: (
                      <div className="text-green-200 space-y-1">
                        <div>
                          <a href="tel:+919493015165" className="hover:text-white transition-colors">
                            +91 9493015165
                          </a>{" "}
                          |{" "}
                          <a href="tel:+916304894331" className="hover:text-white transition-colors">
                            +91 6304894331
                          </a>
                        </div>
                        <div>
                          <a href="tel:+914027847481" className="hover:text-white transition-colors">
                            +040 27847481
                          </a>
                        </div>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: (
                      <div className="text-green-200 space-y-1">
                        <div>
                          <a href="mailto:info@uniroyalchemicals.com" className="hover:text-white transition-colors">
                            info@uniroyalchemicals.com
                          </a>
                        </div>
                        <div>
                          <a href="mailto:uniroyalindia@gmail.com" className="hover:text-white transition-colors">
                            uniroyalindia@gmail.com
                          </a>
                        </div>
                      </div>
                    ),
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: (
                      <div className="text-green-200 space-y-1">
                        <div>Secunderabad, Telangana</div>
                        <div>Factory: Kandlakoya Village, Medchal</div>
                      </div>
                    ),
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm md:text-base">{contact.title}</div>
                      <div className="text-sm md:text-base">{contact.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <CallNowButton
                  phoneNumber="+919493015165"
                  label="Call Sales Team"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent h-12"
                />
                <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 h-12" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
