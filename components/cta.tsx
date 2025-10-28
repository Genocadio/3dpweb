"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-card rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
            <div className="space-y-6 animate-in fade-in slide-in-from-left">
              <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                Ready to transform your <span className="text-primary">data strategy</span>?
              </h2>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Let's discuss how we can help you unlock the full potential of your data and drive meaningful business
                outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-lg group" asChild>
                  <a href="mailto:3dp.rwanda@gmail.com">
                    <Mail className="mr-2 w-5 h-5" />
                    Email Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg bg-transparent" asChild>
                  <a href="https://3dp-admin-portal.vercel.app/">Get Started</a>
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right delay-300">
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/professional-team-collaboration-on-data-project.jpg"
                  alt="Team Collaboration"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
