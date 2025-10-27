"use client"
import { BookOpen } from "lucide-react"
import Image from "next/image"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { useEffect, useRef, useState } from "react"

const programs = [
  {
    title: "After-Work Data Analysis Training Program",
    description:
      "A hands-on, practical training designed for professionals across industries who want to make data-driven decisions, improve reporting, and enhance their competitiveness in the digital economy. Participants learn to use data effectively in their day-to-day work, whether they are in health, education, finance, agriculture, government, or non-profit sectors.",
    image: "/evening-professional-training-session.jpg",
  },
  {
    title: "Data Analysis Training",
    description:
      "A focused program that teaches participants how to explore, interpret, and visualize data to extract actionable insights. The training equips participants with the skills to make informed decisions, generate accurate reports, and communicate findings effectively.",
    image: "/data-analysis-training-with-charts.jpg",
  },
  {
    title: "Data Engineering Training",
    description:
      "A technical training that prepares participants to design, build, and maintain the data infrastructure. It covers data pipelines, integration, storage, and processing, enabling organizations to manage and leverage large volumes of data efficiently.",
    image: "/technical-data-engineering-workshop.jpg",
  },
  {
    title: "Data Protection Officers (DPO) Training",
    description:
      "A specialized program for those responsible for ensuring compliance with data privacy laws and regulations. Participants learn to implement data protection policies, manage risks, and safeguard sensitive information in accordance with global standards and local requirements.",
    image: "/data-privacy-and-compliance-training.jpg",
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
    <section id="training" className="py-12 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance">
            Training <span className="text-accent">Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empower your team with cutting-edge data skills through our comprehensive training programs
          </p>
        </div>

        <CarouselWrapper isVisible={isVisible}>
          {programs.map((program, index) => (
            <div
              key={index}
              className="training-card bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <div className="p-5 md:p-6 space-y-3 md:space-y-4 flex-1 flex flex-col">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground">{program.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  )
}
