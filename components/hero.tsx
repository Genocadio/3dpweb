"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/80">Empowering Data-Driven Success</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              We Empower businesses to <span className="text-primary">discover</span> and{" "}
              <span className="text-accent">harness</span> the full potential of data
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Transform your organization with strategic data solutions. From strategy to implementation, we help you
              turn data into actionable insights and competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-lg group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg bg-transparent" asChild>
                <a href="#services">
                  View Services
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-card p-8">
              <Image
                src="/modern-data-analytics-dashboard-with-charts-and-gr.jpg"
                alt="Data Analytics Dashboard"
                width={600}
                height={600}
                className="rounded-2xl object-cover w-full h-full"
                loading="eager"
              />

              {/* Floating cards */}
              <div className="absolute top-8 right-8 glass-card rounded-2xl p-4 animate-in fade-in slide-in-from-right delay-300">
                <div className="text-sm text-muted-foreground">Data Quality</div>
                <div className="text-2xl font-bold text-primary">Excellent</div>
              </div>

              <div className="absolute bottom-8 left-8 glass-card rounded-2xl p-4 animate-in fade-in slide-in-from-left delay-500">
                <div className="text-sm text-muted-foreground">Analytics Impact</div>
                <div className="text-2xl font-bold text-accent">Significant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
