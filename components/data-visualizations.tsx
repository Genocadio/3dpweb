"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, BarChart3, Database, CheckCircle, Target, Zap } from "lucide-react"

export function DataVisualizations() {
  const [isVisible, setIsVisible] = useState(false)
  const [stepsProgress, setStepsProgress] = useState(0)
  const [barProgresses, setBarProgresses] = useState([0, 0, 0, 0])
  const [pieProgress, setPieProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Success steps data
  const successSteps = [
    { label: "Plan", color: "#0ea5e9" },
    { label: "Execute", color: "#06b6d4" },
    { label: "Analyze", color: "#0891b2" },
    { label: "Optimize", color: "#0e7490" },
    { label: "Succeed", color: "#10b981" },
  ]

  // Bar chart data - each bar fills to 100%
  const barData = [
    { label: "Accuracy", color: "from-primary to-cyan-400" },
    { label: "Excellency", color: "from-cyan-400 to-cyan-300" },
    { label: "Innovation", color: "from-cyan-300 to-cyan-500" },
    { label: "Impact", color: "from-cyan-500 to-primary" },
  ]

  // Pie chart segments
  const pieSegments = [
    { startAngle: 0, endAngle: 108, color: "#0ea5e9", label: "Data Strategy" },
    { startAngle: 108, endAngle: 198, color: "#06b6d4", label: "Analytics" },
    { startAngle: 198, endAngle: 270, color: "#0891b2", label: "Integration" },
    { startAngle: 270, endAngle: 360, color: "#0e7490", label: "Training" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Animate steps progress
      const stepsDuration = 2000
      const stepsStartTime = Date.now()
      
      const animateSteps = () => {
        const elapsed = Date.now() - stepsStartTime
        const progress = Math.min(elapsed / stepsDuration, 1)
        setStepsProgress(progress)
        
        if (progress < 1) {
          requestAnimationFrame(animateSteps)
        }
      }
      
      animateSteps()

      // Animate bars sequentially
      const barDuration = 500 // Each bar takes 500ms
      const totalDuration = barDuration * 4 // Total 2000ms for all bars
      
      const animateBars = () => {
        const startTime = Date.now()
        
        const update = () => {
          const elapsed = Date.now() - startTime
          const progress = elapsed / totalDuration
          
          if (progress <= 1) {
            // Calculate progress for each bar
            const progresses = barData.map((_, idx) => {
              const startProgress = idx / barData.length
              const endProgress = (idx + 1) / barData.length
              
              if (progress < startProgress) return 0
              if (progress > endProgress) return 1
              
              return (progress - startProgress) / (endProgress - startProgress)
            })
            
            setBarProgresses(progresses)
            requestAnimationFrame(update)
          }
        }
        
        update()
      }
      
      animateBars()

      // Animate pie progress
      const pieDuration = 1600
      const pieStartTime = Date.now()
      
      const animatePie = () => {
        const elapsed = Date.now() - pieStartTime
        const progress = Math.min(elapsed / pieDuration, 1)
        setPieProgress(progress)
        
        if (progress < 1) {
          requestAnimationFrame(animatePie)
        }
      }
      
      animatePie()
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Data-Driven Insights
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualizing excellence in data strategy and analytics
          </p>
        </div>

        {/* Mobile Grid Layout - visible only on small screens */}
        <div className="md:hidden grid grid-cols-1 gap-6 md:gap-8">
          {/* Success Steps Chart - Mobile */}
          <div className="glass-card p-5 md:p-6 rounded-3xl animate-fade-in">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-2xl bg-primary/10">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Success Path</h3>
            </div>
            <div className="w-full h-48 flex items-end justify-center gap-1 px-4">
              {successSteps.map((step, idx) => {
                const stepProgress = Math.max(0, Math.min(1, (stepsProgress - idx * 0.2) * 5))
                const height = 30 + idx * 35
                
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full bg-gray-700/30 rounded-t-lg overflow-hidden relative" style={{ height: `${height}px` }}>
                      <div
                        className="transition-all duration-700 ease-out rounded-t-lg absolute bottom-0 w-full"
                        style={{
                          backgroundColor: step.color,
                          height: `${100 * stepProgress}%`,
                          boxShadow: stepProgress > 0 ? `0 0 12px ${step.color}80` : "none",
                        }}
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground text-center">{step.label}</span>
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4" />
              <span>Progressive Excellence</span>
            </div>
          </div>

          {/* Self-drawing Bar Chart - Mobile */}
          <div className="glass-card p-5 md:p-6 rounded-3xl animate-fade-in animation-delay-200">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-2xl bg-cyan-500/10">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Service Performance</h3>
            </div>
            <div className="w-full h-48 flex items-end justify-around gap-2 px-2">
              {barData.map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-cyan-500/20 rounded-t-lg overflow-hidden relative" style={{ height: "160px" }}>
                    <div
                      className={`bg-gradient-to-t ${bar.color} rounded-t-lg transition-all duration-500 ease-out absolute bottom-0 w-full`}
                      style={{
                        height: `${100 * barProgresses[idx]}%`,
                        transition: `height 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.5}s`
                      }}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground text-center">{bar.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4" />
              <span>Optimized Performance</span>
            </div>
          </div>

          {/* Self-drawing Pie Chart - Mobile */}
          <div className="glass-card p-5 md:p-6 rounded-3xl animate-fade-in animation-delay-400">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-2xl bg-cyan-600/10">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Service Distribution</h3>
            </div>
            <div className="w-full h-48 flex items-center justify-center relative">
              <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid">
                <g transform="translate(100,100)">
                  {pieSegments.map((segment, idx) => {
                    const segmentProgress = Math.max(0, Math.min(1, (pieProgress - idx * 0.25) * 4))
                    const currentEndAngle = segment.startAngle + (segment.endAngle - segment.startAngle) * segmentProgress
                    
                    const startRad = ((segment.startAngle - 90) * Math.PI) / 180
                    const endRad = ((currentEndAngle - 90) * Math.PI) / 180
                    const innerRadius = 50
                    const outerRadius = 70
                    
                    const x1 = Math.cos(startRad) * innerRadius
                    const y1 = Math.sin(startRad) * innerRadius
                    const x2 = Math.cos(startRad) * outerRadius
                    const y2 = Math.sin(startRad) * outerRadius
                    const x3 = Math.cos(endRad) * outerRadius
                    const y3 = Math.sin(endRad) * outerRadius
                    const x4 = Math.cos(endRad) * innerRadius
                    const y4 = Math.sin(endRad) * innerRadius
                    
                    const largeArc = currentEndAngle - segment.startAngle > 180 ? 1 : 0
                    
                    const path = [
                      `M ${x1} ${y1}`,
                      `L ${x2} ${y2}`,
                      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}`,
                      `L ${x4} ${y4}`,
                      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}`,
                    ].join(" ")
                    
                    return (
                      <path
                        key={idx}
                        d={path}
                        fill={segment.color}
                        className="transition-all"
                      />
                    )
                  })}
                </g>
              </svg>
              {/* Radial Labels */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid" className="pointer-events-none">
                  <g transform="translate(100,100)">
                    {pieSegments.map((segment, idx) => {
                      const midAngle = (segment.startAngle + segment.endAngle) / 2
                      const midRad = ((midAngle - 90) * Math.PI) / 180
                      const labelRadius = 95
                      const x = Math.cos(midRad) * labelRadius
                      const y = Math.sin(midRad) * labelRadius
                      
                      return (
                        <text
                          key={`label-${idx}`}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs md:text-sm font-semibold fill-muted-foreground"
                          style={{ fontSize: "11px" }}
                        >
                          {segment.label}
                        </text>
                      )
                    })}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Large Screen Grid Layout - visible only on large screens (no carousel) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {/* Success Steps Chart - Large Screen */}
          <div className="glass-card p-5 md:p-6 rounded-3xl animate-fade-in">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-2xl bg-primary/10">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Success Path</h3>
            </div>
            <div className="w-full h-48 flex items-end justify-center gap-1 px-4">
              {successSteps.map((step, idx) => {
                const stepProgress = Math.max(0, Math.min(1, (stepsProgress - idx * 0.2) * 5))
                const height = 30 + idx * 35
                
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full bg-gray-700/30 rounded-t-lg overflow-hidden relative" style={{ height: `${height}px` }}>
                      <div
                        className="transition-all duration-700 ease-out rounded-t-lg absolute bottom-0 w-full"
                        style={{
                          backgroundColor: step.color,
                          height: `${100 * stepProgress}%`,
                          boxShadow: stepProgress > 0 ? `0 0 12px ${step.color}80` : "none",
                        }}
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground text-center">{step.label}</span>
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4" />
              <span>Progressive Excellence</span>
            </div>
          </div>

          {/* Self-drawing Bar Chart - Large Screen */}
          <div className="glass-card p-5 md:p-6 rounded-3xl animate-fade-in animation-delay-200">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-2xl bg-cyan-500/10">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Service Performance</h3>
            </div>
            <div className="w-full h-48 flex items-end justify-around gap-2 px-2">
              {barData.map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-cyan-500/20 rounded-t-lg overflow-hidden relative" style={{ height: "160px" }}>
                    <div
                      className={`bg-gradient-to-t ${bar.color} rounded-t-lg transition-all duration-500 ease-out absolute bottom-0 w-full`}
                      style={{
                        height: `${100 * barProgresses[idx]}%`,
                        transition: `height 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.5}s`
                      }}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground text-center">{bar.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4" />
              <span>Optimized Performance</span>
            </div>
          </div>

          {/* Self-drawing Pie Chart - Large Screen */}
          <div className="glass-card p-5 md:p-6 rounded-3xl animate-fade-in animation-delay-400">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-2xl bg-cyan-600/10">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Service Distribution</h3>
            </div>
            <div className="w-full h-48 flex items-center justify-center relative">
              <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid">
                <g transform="translate(100,100)">
                  {pieSegments.map((segment, idx) => {
                    const segmentProgress = Math.max(0, Math.min(1, (pieProgress - idx * 0.25) * 4))
                    const currentEndAngle = segment.startAngle + (segment.endAngle - segment.startAngle) * segmentProgress
                    
                    const startRad = ((segment.startAngle - 90) * Math.PI) / 180
                    const endRad = ((currentEndAngle - 90) * Math.PI) / 180
                    const innerRadius = 50
                    const outerRadius = 70
                    
                    const x1 = Math.cos(startRad) * innerRadius
                    const y1 = Math.sin(startRad) * innerRadius
                    const x2 = Math.cos(startRad) * outerRadius
                    const y2 = Math.sin(startRad) * outerRadius
                    const x3 = Math.cos(endRad) * outerRadius
                    const y3 = Math.sin(endRad) * outerRadius
                    const x4 = Math.cos(endRad) * innerRadius
                    const y4 = Math.sin(endRad) * innerRadius
                    
                    const largeArc = currentEndAngle - segment.startAngle > 180 ? 1 : 0
                    
                    const path = [
                      `M ${x1} ${y1}`,
                      `L ${x2} ${y2}`,
                      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}`,
                      `L ${x4} ${y4}`,
                      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}`,
                    ].join(" ")
                    
                    return (
                      <path
                        key={idx}
                        d={path}
                        fill={segment.color}
                        className="transition-all"
                      />
                    )
                  })}
                </g>
              </svg>
              {/* Radial Labels */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid" className="pointer-events-none">
                  <g transform="translate(100,100)">
                    {pieSegments.map((segment, idx) => {
                      const midAngle = (segment.startAngle + segment.endAngle) / 2
                      const midRad = ((midAngle - 90) * Math.PI) / 180
                      const labelRadius = 95
                      const x = Math.cos(midRad) * labelRadius
                      const y = Math.sin(midRad) * labelRadius
                      
                      return (
                        <text
                          key={`label-${idx}`}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs md:text-sm font-semibold fill-muted-foreground"
                          style={{ fontSize: "11px" }}
                        >
                          {segment.label}
                        </text>
                      )
                    })}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Data Quality</h4>
              <p className="text-sm text-muted-foreground">Exceptional Standards</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Strategic Impact</h4>
              <p className="text-sm text-muted-foreground">Measurable Results</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-600/10">
              <CheckCircle className="w-6 h-6 text-cyan-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Analytical Excellence</h4>
              <p className="text-sm text-muted-foreground">Proven Methodology</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
