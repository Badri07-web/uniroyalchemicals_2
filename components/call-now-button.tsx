"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface CallNowButtonProps {
  phoneNumber: string
  label?: string
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "sm" | "default" | "lg"
  className?: string
  fullWidth?: boolean
}

export function CallNowButton({
  phoneNumber,
  label = "Call Now",
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
}: CallNowButtonProps) {
  const handleCall = () => {
    // Clean phone number for tel: protocol
    const cleanNumber = phoneNumber.replace(/\s+/g, "").replace(/[^\d+]/g, "")
    window.location.href = `tel:${cleanNumber}`
  }

  return (
    <Button
      onClick={handleCall}
      variant={variant}
      size={size}
      className={`${fullWidth ? "w-full" : ""} ${className} transition-all duration-200 hover:scale-105 active:scale-95`}
    >
      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
      <span className="truncate">{label}</span>
    </Button>
  )
}
