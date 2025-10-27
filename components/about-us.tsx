"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Zap, Target, TrendingUp } from "lucide-react"

export function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Data-driven decision making at every step"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Scalable strategies that grow with you"
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Proven track record of success"
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700" style={{opacity: isVisible ? 1 : 0}}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Who We <span className="text-primary">Are</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We specialize in providing comprehensive services that empower businesses to harness the full potential of their data. With a focus on driving informed decision-making, we offer a range of solutions designed to transform raw information into actionable insights.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-in fade-in"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Core Values */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 animate-in fade-in slide-in-from-bottom duration-700" style={{opacity: isVisible ? 1 : 0, transitionDelay: "400ms"}}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Commitment</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Excellence</h4>
                <p className="text-muted-foreground text-sm">
                  We deliver superior quality in every project, ensuring measurable results and lasting impact for our clients.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Partnership</h4>
                <p className="text-muted-foreground text-sm">
                  We view our clients as partners, working collaboratively to achieve shared goals and mutual success.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Transformation</h4>
                <p className="text-muted-foreground text-sm">
                  We enable digital transformation that empowers organizations to thrive in a data-driven world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
