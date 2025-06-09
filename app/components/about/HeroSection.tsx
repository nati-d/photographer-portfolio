import { StatsGrid } from "./StatsGrid";
import { CurvedImageSection } from "./CurvedImageSection";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Top curved header section */}
      <div className="relative">
        <div
          className="absolute top-0 right-0 w-full max-w-2xl h-24 bg-primary/30"
          style={{
            borderRadius: "0 0 0 80px",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-8 pt-16 pb-8 relative z-10">
          <p className="text-muted-foreground text-sm mb-3 tracking-[0.2em] font-light">ABOUT</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>ABOUT DAMIEN BRAUN</h2>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <StatsGrid />
      </div>

      {/* Main Curved Image Section */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <CurvedImageSection />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-32 left-12">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 border-l-2 border-t-2 border-border"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-border -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-border -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
} 