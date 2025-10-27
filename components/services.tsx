"use client"
import { Database, BarChart3, Workflow, GraduationCap, Lock } from "lucide-react"
import Image from "next/image"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Database,
    title: "Data Strategy",
    description:
      "We develop the data strategy that helps organizations turn data into real value. Our team works with you to define the right people, processes, and technology, then builds a playbook aligned to your business goals. The result is a clear, practical strategy that positions you for long-term success.",
    image: "/business-strategy-meeting-with-data-charts.jpg",
  },
  {
    icon: Workflow,
    title: "Data Management",
    description:
      "We build the infrastructure you need to collect, connect, and make sense of your growing data. From the moment data is created and stored to when it's transformed and analyzed, we help you work smarter at every stage of the data lifecycle.",
    image: "/data-infrastructure-and-cloud-computing.jpg",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Visualization",
    description:
      "We transform raw data into interactive dashboards and visualizations, making it easy to identify trends, monitor performance, and extract insights. Our solutions help teams quickly understand complex data and make informed, data-driven decisions.",
    image: "/interactive-business-intelligence-dashboard.jpg",
  },
  {
    icon: Workflow,
    title: "Data Integration & Automation Services",
    description:
      "We Integrate data from various sources and automate workflows to streamline operations, ensuring seamless data flow across your organization.",
    image: "/automated-data-workflow-integration.jpg",
  },
  {
    icon: GraduationCap,
    title: "Training & Data Literacy Programs",
    description:
      "We provide hands-on training to enhance your team's data skills, ensuring your workforce can effectively use data tools and make informed, data-driven decisions.",
    image: "/professional-training-workshop-with-laptops.jpg",
  },
  {
    icon: Lock,
    title: "Data Protection and Privacy",
    description:
      "We help you comply with data privacy laws and create tailored data policies to protect and manage your information effectively.",
    image: "/data-security-and-privacy-protection.jpg",
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
    <section id="services" className="py-12 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive data solutions tailored to transform your business and drive growth
          </p>
        </div>

        <CarouselWrapper isVisible={isVisible}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-40 md:h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-5 md:p-6 space-y-3 md:space-y-4 flex-1 flex flex-col">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  )
}
