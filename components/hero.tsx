"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Centered content */}
          <div className="space-y-8 animate-in fade-in duration-700">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-white">
              We enable organizations to transform data into <span className="text-primary">actionable insights</span> that drive{" "}
              <span className="text-primary">performance</span> and growth
            </h1>

            <p className="text-xl text-white/80 text-pretty leading-relaxed">
              Transform your organization with strategic data solutions. From strategy to implementation, we help you
              turn data into actionable insights and competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  )
}
