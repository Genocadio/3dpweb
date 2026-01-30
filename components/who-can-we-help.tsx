"use client"

import { Rocket, TrendingUp, Building2 } from "lucide-react"
import { HighlightedSection } from "./highlighted-section"

export function WhoCanWeHelp() {
  const businessTypes = [
    {
      icon: Rocket,
      title: "Startups",
      description:
        "3DP helps startups build strong data foundations by defining the right KPIs, setting up simple data systems, and creating clear dashboards. We turn early data into insights on customers, products, and markets. This enables startups to make smart decisions, show traction to investors, and scale sustainably.",
      color: "from-primary to-cyan-400",
    },
    {
      icon: TrendingUp,
      title: "SMEs",
      description:
        "3DP supports SMEs to unlock value from their existing data by improving data management and reporting. We introduce practical BI tools and dashboards that reveal performance, customer trends, and growth opportunities. This helps SMEs increase efficiency, competitiveness, and profitability.",
      color: "from-cyan-400 to-cyan-300",
    },
    {
      icon: Building2,
      title: "Large Enterprises",
      description:
        "3DP works with large enterprises to strengthen organization-wide data-driven decision-making. We develop data strategies, governance frameworks, and advanced analytics systems aligned with business goals. We also build staff capacity to embed a strong data-driven culture across the organization.",
      color: "from-cyan-300 to-cyan-500",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <HighlightedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent italic">
            Who We Serve
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with startups, SMEs, and large enterprises turn their data into actionable insights for better decisions and growth. Our support enables organizations to improve performance, efficiency, and strategy through data-driven approaches.
          </p>
        </HighlightedSection>

        {/* Business Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {businessTypes.map((business, idx) => {
            const Icon = business.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 md:p-8 rounded-3xl shadow-xl border border-transparent"
              >
                {/* Icon Container */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${business.color} w-fit scale-110`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3">{business.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {business.description}
                </p>

                {/* Bottom accent */}
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${business.color} mt-6`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
