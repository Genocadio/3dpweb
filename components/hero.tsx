"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/heroimages/analytics 1-CR54kQNG.png",
    "/heroimages/analytics 3-CGXYmW_D.png",
    "/heroimages/analytics 4-CRryzQSp.png",
    "/heroimages/analytics 5-CvEc05R4.png",
    "/heroimages/analytics 7-DUKB5NBz.png",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "zoom-in-95")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#102C43' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[#E3A641]/5 to-[#102C43]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-white">
              We enable organizations to transform data into <span className="text-primary">actionable insights</span> that drive{" "}
              <span className="text-primary">performance</span> and grawth
            </h1>

            <p className="text-xl text-white/80 text-pretty leading-relaxed">
              Transform your organization with strategic data solutions. From strategy to implementation, we help you
              turn data into actionable insights and competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-lg group" asChild>
                <a href="https://3dp-admin-portal.vercel.app/">
                  Data Maturity Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg border-white/60 text-white hover:bg-white/15 hover:text-white" asChild>
                <a href="#services">
                  View Services
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card p-4">
              {heroImages.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`Data Analytics Dashboard ${index + 1}`}
                  width={1920}
                  height={1080}
                  className={`rounded-xl object-contain w-full h-full absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{ padding: "inherit" }}
                />
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-primary w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
