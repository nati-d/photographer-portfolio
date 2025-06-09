"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Faces of Resilience",
      date: "March 2023",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop",
      alt: "Portrait of a person with headwrap against orange background",
    },
    {
      id: 2,
      title: "A Wedding Tale",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1770&auto=format&fit=crop",
      alt: "Person in elegant wedding attire",
    },
    {
      id: 3,
      title: "Product Elegance",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=1770&auto=format&fit=crop",
      alt: "Luxury product with gold elements",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="mb-8">
        <p className="caption mb-2 uppercase tracking-widest">PORTFOLIO</p>
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>
            EXPLORE MY PHOTOGRAPHY WORK.
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-md border border-border bg-button-bg flex items-center justify-center hover:bg-background/70 transition"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/70" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-md border border-border bg-button-bg flex items-center justify-center hover:bg-background/70 transition"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5 text-foreground/70" />
            </button>
            <Link href="/works" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-md border border-border" style={{ fontFamily: 'var(--font-heading)' }}>
              View All Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.slice(currentIndex, currentIndex + 3).map((project) => (
          <div key={project.id} className="group relative rounded-md shadow-lg overflow-hidden flex flex-col">
            <div className="aspect-[3/4] overflow-hidden rounded-t-md">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.alt}
                width={400}
                height={533}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div className="py-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{project.title}</h3>
                  <Link
                    href={`/project/${project.id}`}
                    className="flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium"
                  >
                    VIEW PROJECT <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground">{project.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center md:hidden">
        <Link href="/works" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-md border border-border" style={{ fontFamily: 'var(--font-heading)' }}>
          View All Works <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
} 