"use client"
import { BookOpen, GraduationCap, Award, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { useEffect, useRef, useState } from "react"

const programs = [
  {
    title: "After-Work Data Analysis Training Program",
    description:
      "Practical, hands-on training that helps professionals across sectors use data to improve decisions, reporting, and digital competitiveness.",
    image: "/evening-professional-training-session.jpg",
    icon: Users,
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    badge: "Popular",
    enrolled: 450,
  },
  {
    title: "Data Analysis Training",
    description:
      "A focused program that teaches participants to explore, visualize, and interpret data to generate actionable insights and informed decisions.",
    image: "/data-analysis-training-with-charts.jpg",
    icon: BookOpen,
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    badge: "Beginner Friendly",
    enrolled: 320,
  },
  {
    title: "Data Engineering Training",
    description:
      "Hands-on technical training to build, integrate, and maintain data infrastructure for efficient, large-scale data management.",
    image: "/technical-data-engineering-workshop.jpg",
    icon: GraduationCap,
    gradient: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
    badge: "Advanced",
    enrolled: 280,
  },
  {
    title: "Data Protection Officers (DPO) Training",
    description:
      "A specialized program for professionals to ensure data privacy compliance, manage risks, and protect sensitive information.",
    image: "/data-privacy-and-compliance-training.jpg",
    icon: Award,
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    badge: "Certified",
    enrolled: 195,
  },
]

export function Training() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5)
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="training" className="py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Training <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Programs</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Empower your team with cutting-edge data skills through our comprehensive, industry-leading training programs
          </p>
        </div>

        <CarouselWrapper isVisible={isVisible}>
          {programs.map((program, index) => (
            <div
              key={index}
              className="training-card group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:scale-105 hover:z-20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Image section */}
              <div className="relative h-36 md:h-40 overflow-hidden flex-shrink-0">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Badge */}
                {program.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-md text-accent-foreground text-xs font-semibold border border-accent shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {program.badge}
                  </div>
                )}
                
                {/* Floating icon badge */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-2xl bg-card/90 backdrop-blur-md border border-accent/20 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
                  <program.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Content section */}
              <div className="relative p-4 md:p-5 space-y-3 md:space-y-4 flex-1 flex flex-col">
                {/* Animated line decoration */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                {/* Decorative elements */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-1 h-1 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                  {program.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors duration-300">
                  {program.description}
                </p>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  )
}
