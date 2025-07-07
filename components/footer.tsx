import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/uniroyal-logo-actual.png"
                alt="Uniroyal Chemicals"
                width={32}
                height={32}
                className="w-8 h-8 brightness-0 invert"
              />
              <div>
                <div className="text-sm font-bold">UNIROYAL CHEMICALS</div>
                <div className="text-xs text-gray-400">PVT. LTD.</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Leading manufacturer of PVC additives in India since 1984, specializing in Lead Stabilisers, Calcium Zinc
              Stabilisers, and Plasticisers for diverse industrial applications.
            </p>
            {/* <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 p-2"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Industries", href: "/industries" },
                { name: "Quality & Certifications", href: "/quality" },
                { name: "R&D", href: "/research" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Lead Stabilisers", href: "/products/lead-stabilisers" },
                { name: "Calcium Zinc Stabilisers", href: "/products/calcium-zinc-stabilisers" },
                { name: "Plasticisers", href: "/products/plasticisers" },
                { name: "Lubricants", href: "/products/lubricants" },
                { name: "All Products", href: "/products" },
              ].map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm">Phone Numbers</h4>
                <div className="space-y-1">
                  {["+91 9493015165", "+91 6304894331", "+040 27847481"].map((phone) => (
                    <div key={phone} className="flex items-center space-x-2">
                      <Phone className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm">Email</h4>
                <div className="space-y-1">
                  {["info@uniroyalchemicals.com", "uniroyalindia@gmail.com"].map((email) => (
                    <div key={email} className="flex items-center space-x-2">
                      <Mail className="h-3 w-3 text-gray-400 flex-shrink-0" />
                      <a
                        href={`mailto:${email}`}
                        className="text-gray-300 hover:text-white transition-colors text-sm break-all"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm">Locations</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-3 w-3 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-white">Registered Office:</div>
                      <div className="text-gray-300 text-xs">
                        6-18-043, Sikh Village, Secunderabad, Telangana, 500009
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-3 w-3 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-white">Factory Location:</div>
                      <div className="text-gray-300 text-xs">S.No 129, Kandlakoya Village, Medchal, TG</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="space-y-3">
              <h4 className="font-medium text-sm">Newsletter</h4>
              <p className="text-xs text-gray-300">Get the latest updates on products and industry news.</p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm h-9 flex-1"
                />
                <Button size="sm" className="bg-green-600 hover:bg-green-700 h-9 px-4">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Uniroyal Chemicals. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <Link key={link} href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
