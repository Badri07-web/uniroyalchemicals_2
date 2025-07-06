"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Phone, ChevronUp } from "lucide-react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const whatsappNumbers = [
    { number: "919493015165", label: "Sales & Inquiries", displayNumber: "+91 94930 15165" },
    { number: "916304894331", label: "Technical Support", displayNumber: "+91 63048 94331" },
  ]

  const phoneNumbers = [
    { number: "+919493015165", label: "Sales & Inquiries" },
    { number: "+916304894331", label: "Technical Support" },
    { number: "+914027847481", label: "Main Office" },
  ]

  const handleWhatsAppClick = (number: string, label: string) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in learning more about Uniroyal Chemicals' PVC additives. I found your website and would like to discuss my requirements.`,
    )
    window.open(`https://wa.me/${number}?text=${message}`, "_blank")
  }

  const handleCallClick = (number: string) => {
    const cleanNumber = number.replace(/\s+/g, "").replace(/[^\d+]/g, "")
    window.location.href = `tel:${cleanNumber}`
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div
          className={`mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 ${isMobile ? "w-80 max-w-[calc(100vw-2rem)]" : "w-80"}`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-gray-900 text-sm">Contact Us</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Section */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">WhatsApp Chat</h4>
                <div className="space-y-2">
                  {whatsappNumbers.map((contact) => (
                    <button
                      key={contact.number}
                      className="w-full flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 border border-green-100"
                      onClick={() => handleWhatsAppClick(contact.number, contact.label)}
                    >
                      <div className="text-left">
                        <div className="font-medium text-gray-900 text-sm">{contact.label}</div>
                        <div className="text-xs text-gray-600">{contact.displayNumber}</div>
                      </div>
                      <MessageCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Call Section */}
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Call Now</h4>
                <div className="space-y-2">
                  {phoneNumbers.map((contact) => (
                    <button
                      key={contact.number}
                      className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 border border-blue-100"
                      onClick={() => handleCallClick(contact.number)}
                    >
                      <div className="text-left">
                        <div className="font-medium text-gray-900 text-sm">{contact.label}</div>
                        <div className="text-xs text-gray-600">{contact.number}</div>
                      </div>
                      <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500 text-center">Click to WhatsApp chat or call directly</div>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isMobile ? "w-12 h-12" : "w-14 h-14"
        }`}
        size="lg"
      >
        {isOpen ? (
          <ChevronUp className={`${isMobile ? "h-5 w-5" : "h-6 w-6"}`} />
        ) : (
          <MessageCircle className={`${isMobile ? "h-5 w-5" : "h-6 w-6"}`} />
        )}
      </Button>
    </div>
  )
}
