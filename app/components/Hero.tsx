"use client"
import { ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const categories = [
  "EVENT PHOTOGRAPHY",
  "COMMERCIAL PHOTOGRAPHY",
  "PRODUCT PHOTOGRAPHY",
  "WEDDING PHOTOGRAPHY",
  "LANDSCAPE PHOTOGRAPHY",
  "BRANDING PHOTOGRAPHY",
  "PORTRAIT PHOTOGRAPHY",
]

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    alt: "Basketball player in action",
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Portrait photography",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Male portrait",
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    alt: "Soccer player",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    alt: "Portrait silhouette",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  },
]

export default function Hero() {
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Adjust animation based on screen size
    const pillWidth = isMobile ? 180 : 220
    const scrollWidth = categories.length * pillWidth
    const duration = isMobile ? 15 : 18

    const animate = async () => {
      while (true) {
        await controls.start({
          x: -scrollWidth,
          transition: { duration, ease: "linear" },
        })
        await controls.set({ x: 0 })
      }
    }
    animate()
  }, [controls, isMobile])

  return (
    <section className="w-full text-foreground py-1 sm:py-2 px-0 flex flex-col items-center min-h-screen sm:min-h-0">
      {/* Animated Category Navigation */}
      <nav className="w-full overflow-hidden bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 relative h-12 sm:h-14 md:h-16 lg:h-18 flex items-center">
          <motion.div
            className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4"
            animate={controls}
            initial={{ x: 0 }}
            style={{ minWidth: "max-content" }}
          >
            {categories.concat(categories).map((category, index) => (
              <span
                key={index}
                className="flex items-center px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 rounded-full bg-primary/70 hover:bg-primary/80 text-foreground/90 text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold tracking-wide shadow-sm border border-border transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Star size={isMobile ? 10 : 14} className="mr-1 sm:mr-2 text-accent flex-shrink-0" />
                <span className="truncate">{category}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Portfolio Grid */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 md:py-8 lg:py-10 w-full flex-1">
        {/* Mobile Grid (2 columns) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 h-[400px] sm:h-[500px] md:hidden">
          {portfolioImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer ${
                index === 0 ? "row-span-2" : index === 1 ? "col-span-1" : index === 2 ? "row-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-active:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Tablet Grid (3 columns) */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-3 h-[500px]">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0
                  ? "row-span-2"
                  : index === 1
                    ? "col-span-2"
                    : index === 2
                      ? "row-span-2"
                      : index === 3
                        ? "col-span-1"
                        : "col-span-1"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 1024px) 33vw, 25vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Desktop Grid (4 columns) */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-4 xl:gap-6 h-[500px] xl:h-[600px]">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl xl:rounded-2xl group cursor-pointer ${image.className}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover overlay with category info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 xl:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white">
                  <h3 className="font-semibold text-sm xl:text-base mb-1">{image.alt}</h3>
                  <p className="text-xs xl:text-sm text-white/80">Professional Photography</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Only on larger screens */}
        <div className="hidden md:flex justify-center mt-8 lg:mt-12">
          <motion.button
            className="group flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </main>

      {/* Mobile Call to Action */}
      <div className="md:hidden w-full px-4 pb-6">
        <motion.button
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-sm transition-all duration-300 shadow-lg active:scale-95"
          whileTap={{ scale: 0.95 }}
        >
          View Full Portfolio
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </section>
  )
}
