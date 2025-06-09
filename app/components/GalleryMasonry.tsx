"use client"
import Masonry from "react-masonry-css"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Professional headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Natural lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Creative composition",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Studio work",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Environmental portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Artistic vision",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Contemporary style",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait Photography - Professional work",
  },
]

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
}

export default function GalleryMasonry() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-gray-400 text-sm mb-3 tracking-[0.2em] font-light">GALLERY</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">FEATURED WORK</h2>
            <p className="text-gray-400 text-sm max-w-2xl">
              A curated selection of my finest photography work, showcasing the diversity and depth of my artistic
              vision across various projects and collaborations.
            </p>
          </div>

          {/* Masonry Gallery */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="masonry-column flex flex-col gap-6"
          >
            {images.map((image, idx) => (
              <GalleryItem key={idx} src={image.src} alt={image.alt} index={idx} onImageClick={() => setSelectedImage(image)} />
            ))}
          </Masonry>
        </div>
      </div>

      {/* Modal for displaying the selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full p-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

interface GalleryItemProps {
  src: string
  alt: string
  index: number
  onImageClick: () => void
}

function GalleryItem({ src, alt, index, onImageClick }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500" onClick={onImageClick}>
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={600}
          height={800}
          className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
          style={{
            borderRadius: "1rem",
            filter: "brightness(0.9) contrast(1.1)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-white">
            <p className="text-xs text-gray-300 mb-1 tracking-wider">PORTFOLIO PIECE</p>
            <h3 className="text-sm font-medium">Creative Vision {String(index + 1).padStart(2, "0")}</h3>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  )
}
