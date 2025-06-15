"use client";
import Link from "next/link";
import * as framerMotion from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect } from "react";

const categories = [
  { label: "Event Photography", href: "/event" },
  { label: "Commercial Photography", href: "/commercial" },
  { label: "Product Photography", href: "/product" },
  { label: "Wedding Photography", href: "/wedding" },
  { label: "Landscape Photography", href: "/landscape" },
  { label: "Portrait Photography", href: "/portrait" },
];

export default function BottomBanner() {

    const controls = useAnimation();
    useEffect(() => {
        const scrollWidth = categories.length * 220; // estimate pill width
        const animate = async () => {
          while (true) {
            await controls.start({ x: -scrollWidth, transition: { duration: 18, ease: "linear" } });
            await controls.set({ x: 0 });
          }
        };
        animate();
      }, [controls]);

  return (
    
      <div className="max-w-7xl  mx-auto py-16 px-4 flex flex-col items-end">
        {/* Responsive heading: h2 on small screens, h1 on md+ */}
        <h2 className="block md:hidden text-xl font-light tracking-wider mb-6 text-right text-foreground/70" style={{ fontFamily: 'var(--font-heading)' }}>
          ZEDO
        </h2>
        <h1 className="hidden md:block text-2xl font-light tracking-wider mb-12 text-right text-foreground/70" style={{ fontFamily: 'var(--font-heading)' }}>
          ZEDO
        </h1>
        <nav className="w-full overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 relative h-16 flex items-center">
          <motion.div
            className="flex gap-4"
            animate={controls}
            initial={{ x: 0 }}
            style={{ minWidth: "max-content" }}
          >
            {categories.concat(categories).map((category, index) => (
              <span
                key={index}
                className="flex items-center px-5 py-2 rounded-full bg-primary/70 text-foreground/90 text-xs md:text-sm font-semibold tracking-wide shadow-sm border border-border"
                style={{ fontFamily: 'var(--font-heading)', marginRight: 16 }}
              >
                <Star size={16} className="mr-2 text-accent" /> {category.label}
              </span>
            ))}
          </motion.div>
        </div>
      </nav>
      </div>
  );
} 