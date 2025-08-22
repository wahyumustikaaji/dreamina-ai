"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const images = [
  {
    src: "/assets/images/slider/hero-1.svg",
    alt: "Mountain landscape at sunset",
  },
  {
    src: "/assets/images/slider/hero-2.svg",
    alt: "Ocean waves on tropical beach",
  },
  {
    src: "/assets/images/slider/hero-3.svg",
    alt: "City skyline at night",
  },
  {
    src: "/assets/images/slider/hero-4.svg",
    alt: "Forest path with sunlight",
  },
  {
    src: "/assets/images/slider/hero-5.svg",
    alt: "Colorful flower field",
  },
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 8000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative h-screen">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" width={1920} height={1080} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`relative w-3 h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-white/60" : "bg-white/20 hover:bg-white/40 hover:scale-110"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <>
                <div className="absolute inset-0 rounded-full bg-white/20" />
                <div
                  className="absolute inset-0 rounded-full bg-white/60"
                  style={{ animationDelay: "0.5s" }}
                />
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
