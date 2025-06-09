"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const services = [
  {
    name: "Individual Session",
    price: "$250",
    button: {
      label: "Book a Call",
      href: "#contact"
    },
    features: [
      "Ideal for capturing your unique personality and style.",
      "Includes a 2-hour photoshoot and 20 professionally edited images.",
      "Additional images can be purchased at $10 each."
    ]
  },
  {
    name: "Event Photography",
    price: "$500",
    button: {
      label: "Book a Call",
      href: "#contact"
    },
    features: [
      "Perfect for weddings, parties, and corporate events.",
      "Up to 6 hours of coverage and 100+ edited images.",
      "Online gallery for easy sharing with guests."
    ]
  },
  {
    name: "Commercial Photography",
    price: "$750",
    button: {
      label: "Book a Call",
      href: "#contact"
    },
    features: [
      "Professional images for your business and marketing needs.",
      "Includes product, branding, and team photos.",
      "Flexible scheduling and fast turnaround."
    ]
  },
  {
    name: "Wedding Photography",
    price: "$1,500",
    button: {
      label: "Book a Call",
      href: "#contact"
    },
    features: [
      "Full-day wedding coverage by two photographers.",
      "400+ professionally edited images and a custom album.",
      "Pre-wedding consultation and timeline planning."
    ]
  },
]

export default function Services() {
  return (
    <section className="w-full bg-background text-foreground py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-accent" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Services
          </h2>
          <p className="text-lg text-gray-400">
            Explore our range of photography services tailored to meet your needs.
          </p>
        </div>
        <div className="space-y-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row bg-primary/80 rounded-xl border border-border shadow-lg overflow-hidden"
            >
              {/* Left: Name, Price, Button */}
              <div className="md:w-1/3 flex flex-col items-start justify-center p-8 border-b md:border-b-0 md:border-r border-border">
                <span className="text-lg text-gray-400 mb-2">{service.name}</span>
                <span className="text-4xl font-bold text-white mb-6">{service.price}</span>
                <a
                  href={service.button.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1C1C21] text-accent font-semibold hover:bg-accent hover:text-primary transition-colors border border-border"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.button.label}
                  <ArrowUpRight size={18} />
                </a>
              </div>
              {/* Right: Features */}
              <div className="md:w-2/3 flex flex-col gap-4 p-8">
                {service.features.map((feature, fidx) => (
                  <div
                    key={fidx}
                    className="flex items-center gap-3 px-4 py-4 rounded-md border border-border bg-background/60 text-gray-200 text-base tracking-wide"
                  >
                    <Star size={18} className="text-accent flex-shrink-0" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 