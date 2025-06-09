import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: 5,
    text: "Damien's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "John Smith",
    rating: 5,
    text: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Samantha Davis",
    rating: 5,
    text: "I was blown away by Damien's ability to capture the essence of our wedding day. His photographs are our cherished memories.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 px-4 md:px-8 text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <p className="caption mb-2 uppercase tracking-widest">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>WHAT MY CLIENTS SAY</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Total Reviews</span>
              <span className="text-2xl font-bold">325</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="p-2 rounded-md border border-border bg-button-bg hover:bg-background/70 text-foreground transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-md border border-border bg-button-bg hover:bg-background/70 text-foreground transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <button className="px-4 py-2 rounded-md border border-border bg-button-bg hover:bg-background/70 text-foreground transition-colors text-sm font-medium">
              View All Testimonials →
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-md bg-primary/80 border border-border shadow-lg p-6 flex flex-col">
              {/* Client Info */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{testimonial.name}</h3>
                <div className="flex gap-2">
                  <a href={testimonial.social.facebook} className="inline-flex items-center justify-center h-8 w-8 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href={testimonial.social.twitter} className="inline-flex items-center justify-center h-8 w-8 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href={testimonial.social.linkedin} className="inline-flex items-center justify-center h-8 w-8 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 