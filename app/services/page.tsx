import { CurvedImageSection } from "../components/about/CurvedImageSection";
import FAQ from "../components/FAQ";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent" style={{ fontFamily: 'var(--font-heading)' }}>
          Our Services
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Discover our professional photography services tailored to your needs.
        </p>
      </div>
      <CurvedImageSection
        imageUrl="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
        altText="Portfolio Hero"
      />
      <Services />
      <FAQ/>
    </main>
  )
} 