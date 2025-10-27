"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Training } from "@/components/training"
import { AboutUs } from "@/components/about-us"
import { CTA } from "@/components/cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DataVisualizations } from "@/components/data-visualizations"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DataVisualizations />
      <AboutUs />
      <Services />
      <Training />
      <CTA />
      <Footer />
    </main>
  )
}
