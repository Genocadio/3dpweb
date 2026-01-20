"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`${isScrolled ? "bg-white/15" : "bg-white/25"} backdrop-blur-md border border-white/30 rounded-xl px-3 py-1.5`}> 
              <Image 
                src="/loggo.webp" 
                alt="3DP DataPro Logo" 
                width={180} 
                height={80}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className={`flex items-center gap-6 px-6 py-2 rounded-full transition-all duration-300 ${isScrolled ? "bg-white/20 backdrop-blur-md border border-white/30 shadow-lg" : "bg-white/25 backdrop-blur-md border border-white/30 shadow-md"}`}>
              <a href="#hero" className={`${isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-white"} transition-colors`}>
                Home
              </a>
              <a href="#services" className={`${isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-white"} transition-colors`}>
                Services
              </a>
              <a href="#training" className={`${isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-white"} transition-colors`}>
                Training
              </a>
              <a href="#about" className={`${isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-white"} transition-colors`}>
                About
              </a>
            </div>
            <Button className="rounded-full" asChild>
              <a href="https://3dp-admin-portal.vercel.app/">Data Maturity Assessment</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
            <a
              href="#hero"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#training"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Training
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button className="w-full rounded-full" asChild>
              <a href="https://3dp-admin-portal.vercel.app/">Data Maturity Assessment</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
