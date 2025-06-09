import HeroSection from "../components/about/HeroSection";
import BiographySection from "../components/about/BiographySection";
import TimelineSection from "../components/about/TimelineSection";
import Testimonials from "../components/Testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4">
      <HeroSection />
      <BiographySection />
      <TimelineSection />
      <Testimonials/>
      

    </main>
  );
} 