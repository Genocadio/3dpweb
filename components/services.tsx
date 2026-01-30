"use client"
import { Database, BarChart3, Workflow, GraduationCap, Lock, Sparkles } from "lucide-react"
import Image from "next/image"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Database,
    title: "Data Strategy",
    description:
      "We develop the data strategy that enables organizations to turn data into real value. Our team works with you to define the right people, processes, and technology, then builds a playbook aligned to your business goals. The result is a clear, practical strategy that positions you for long-term success.",
    image: "/business-strategy-meeting-with-data-charts.png",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Workflow,
    title: "Data Management",
    description:
      "We build the infrastructure you need to collect, connect, and make sense of your growing data. From the moment data is created and stored to when it's transformed and analyzed, we support you to work smarter at every stage of the data lifecycle.",
    image: "/data-infrastructure-and-cloud-computing.jpg",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Visualization",
    description:
      "We transform raw data into interactive dashboards and visualizations, making it easy to identify trends, monitor performance, and extract insights. Our solutions empower teams to quickly understand complex data and make informed, data-driven decisions.",
    image: "/interactive-business-intelligence-dashboard.jpg",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
  },
  {
    icon: Workflow,
    title: "Data Integration & Automation Services",
    description:
      "We Integrate data from various sources and automate workflows to streamline operations, ensuring seamless data flow across your organization.",
    image: "/automated-data-workflow-integration.jpg",
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
  },
  {
    icon: GraduationCap,
    title: "Training & Data Literacy Programs",
    description:
      "We provide hands-on training to enhance your team's data skills, ensuring your workforce can effectively use data tools and make informed, data-driven decisions.",
    image: "/professional-training-workshop-with-laptops.jpg",
    gradient: "from-pink-500/20 via-rose-500/20 to-fuchsia-500/20",
  },
  {
    icon: Lock,
    title: "Data Protection and Privacy",
    description:
      "We support you in complying with data privacy laws and create tailored data policies to protect and manage your information effectively.",
    image: "/data-security-and-privacy-protection.jpg",
    gradient: "from-slate-500/20 via-zinc-500/20 to-neutral-500/20",
  },
]

export function Services() {
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
    <section id="services" className="py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">

          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Our <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive data solutions tailored to transform your business and drive sustainable growth
          </p>
        </div>

        <CarouselWrapper isVisible={isVisible}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 hover:z-20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Image section */}
              <div className="relative h-36 md:h-40 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating icon badge */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-card/90 backdrop-blur-md border border-primary/20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content section */}
              <div className="relative p-4 md:p-5 space-y-3 md:space-y-4 flex-1 flex flex-col">
                {/* Animated line decoration */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  )
}
