import Image from "next/image";
import { Facebook, Twitter, Instagram, Sparkle, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div>
          <p className="caption mb-2 uppercase tracking-widest">ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-0" style={{ fontFamily: 'var(--font-heading)' }}>I AM DAMIEN</h2>
        </div>
        <a href="#services" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium px-4 py-2 rounded-md border border-border ml-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Know More →
          </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Portrait Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
              alt="Portrait of Damien"
              width={500}
              height={600}
              className="object-cover w-full h-[400px] md:h-[600px]"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Introduction Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-xl font-bold"><Sparkles/></span>
              <h2 className="text-xl font-semibold text-accent m-0" style={{ fontFamily: 'var(--font-heading)' }}>Introduction</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary.
              Born and raised in the heart of the countryside, I developed an early love for nature and its
              ever-changing moods. Based in the enchanting landscapes of the USA, I find inspiration in every corner
              of this diverse and captivating country. My goal is to freeze moments in time that tell stories, evoke
              emotions, and inspire others to see the beauty that surrounds us. Whether it's a majestic sunset over
              rolling hills, the quiet serenity of a forest path, or the vibrant energy of urban life, I strive to
              find the poetry of the heart.
            </p>
          </div>

          {/* Contact Information Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-accent text-xl font-bold"><Sparkles/></span>
              <h2 className="text-xl font-semibold text-accent m-0" style={{ fontFamily: 'var(--font-heading)' }}>Contact Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="caption mb-1">Email</p>
                <p className="text-base text-foreground font-medium">damien.doe.jpg@gmail.com</p>
              </div>
              <div>
                <p className="caption mb-1">Phone Number</p>
                <p className="text-base text-foreground font-medium">+00 000000000</p>
              </div>
            </div>

            {/* Social Links and Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/70 text-accent hover:bg-accent/10 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/70 text-accent hover:bg-accent/10 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/70 text-accent hover:bg-accent/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <div className="flex gap-3 ml-auto">
                <button className="border border-border text-foreground/90 hover:bg-primary/70 transition-colors px-5 py-2 rounded-full font-semibold text-base" style={{ fontFamily: 'var(--font-heading)' }}>
                  {"Let's Work"}
                </button>
                <button className="border border-border text-foreground/90 hover:bg-primary/70 transition-colors px-5 py-2 rounded-full font-semibold text-base" style={{ fontFamily: 'var(--font-heading)' }}>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 