import Portfolio from "../components/Portfolio";
import { CurvedImageSection } from "../components/about/CurvedImageSection";
import GalleryMasonry from "../components/GalleryMasonry";
import FAQ from "../components/FAQ";

function PortfolioHeroSection() {
  return (
    <section className="min-h-[60vh] bg-background text-foreground relative overflow-hidden">
      <div className="relative">
        <div
          className="absolute top-0 right-0 w-full max-w-2xl h-24 bg-primary/30"
          style={{
            borderRadius: "0 0 0 80px",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-8 relative z-10">
          <p className="text-muted-foreground text-sm mb-3 tracking-[0.2em] font-light">PORTFOLIO</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>EXPLORE MY PHOTOGRAPHY WORK</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pb-8">
        <CurvedImageSection imageUrl="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" altText="Portfolio Hero" />
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4">
      <PortfolioHeroSection />
      <GalleryMasonry />
      <FAQ/>
    </main>
  );
} 