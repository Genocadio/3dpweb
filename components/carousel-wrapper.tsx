"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

interface CarouselWrapperProps {
  children: React.ReactNode
  className?: string
  isVisible?: boolean
}

export function CarouselWrapper({ children, className = "", isVisible = true }: CarouselWrapperProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      duration: 50,
      breakpoints: {
        "(min-width: 1024px)": { slidesToScroll: 1 },
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })],
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index, false)
      }
    },
    [emblaApi],
  )

  const childrenArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  )

  return (
    <div className="embla relative">
      <div 
        className="embla__viewport overflow-visible" 
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className={`embla__slide px-3 transition-opacity duration-200`}
              style={{
                flexShrink: 0,
                flexBasis: "100%",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-full transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                style={{
                  willChange: hoveredIndex === index ? "transform" : "auto",
                }}
              >
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {childrenArray.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-muted-foreground/50 hover:bg-muted-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          gap: 24px;
          backface-visibility: hidden;
          perspective: 1000px;
          align-items: stretch;
        }
        .embla__slide {
          flex-shrink: 0;
          min-height: 0;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
        }
        .embla__slide > div {
          display: flex;
          flex-direction: column;
          height: 100%;
          transform-origin: center;
        }
        @media (min-width: 768px) {
          .embla__slide {
            flex-basis: calc(50% - 12px) !important;
          }
        }
        @media (min-width: 1024px) {
          .embla__slide {
            flex-basis: calc(33.333% - 16px) !important;
          }
        }
      `}</style>
    </div>
  )
}

