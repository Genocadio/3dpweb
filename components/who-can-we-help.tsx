"use client"

import { Rocket, TrendingUp, Building2 } from "lucide-react"

export function WhoCanWeHelp() {
  const businessTypes = [
    {
      icon: Rocket,
      title: "Startups",
      description: "We help startups grasp a hold on the potential of data, explaining to them how to collect data and transform it.",
      color: "from-primary to-cyan-400",
    },
    {
      icon: TrendingUp,
      title: "Small Businesses",
      description: "Small businesses have a lot of potential. The only restriction they might have is the time to expand. This is where we help you.",
      color: "from-cyan-400 to-cyan-300",
    },
    {
      icon: Building2,
      title: "Large Enterprises",
      description: "We help large enterprises to improve the performance of large families of data and to make the best use of it.",
      color: "from-cyan-300 to-cyan-500",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Who Can We Help?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We can potentially help all kinds of businesses achieve their best with data science, regardless of the size of your business. Right from making businesses understand the potential of data to implementing the right structure to process it to make decisions.
          </p>
        </div>

        {/* Business Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {businessTypes.map((business, idx) => {
            const Icon = business.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 md:p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${business.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
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
