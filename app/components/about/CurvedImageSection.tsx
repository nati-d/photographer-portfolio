import Image from "next/image";

interface CurvedImageSectionProps {
  imageUrl?: string;
  altText?: string;
}

export function CurvedImageSection({ imageUrl, altText }: CurvedImageSectionProps) {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main curved image container */}
      <div className="relative">
        {/* Primary curved shape */}
        <div
          className="relative w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden bg-primary/80"
          style={{
            borderRadius: "60px 60px 40px 60px",
            clipPath: "polygon(0% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
          }}
        >
          <Image
            src={ "/images/bg.png"}
            alt={altText || "Zadig Shiferaw - Creative Professional"}
            fill
            className="object-cover object-center scale-105"
            priority
          />

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
        </div>

        {/* Secondary curved accent */}
        <div
          className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/60"
          style={{
            borderRadius: "50% 20% 50% 50%",
            clipPath: "polygon(0% 20%, 80% 0%, 100% 80%, 20% 100%)",
          }}
        />

        {/* Small decorative curve */}
        <div
          className="absolute top-8 -right-4 w-24 h-16 bg-primary/40"
          style={{
            borderRadius: "0 50px 50px 0",
          }}
        />

        {/* Text overlay */}
        <div className="absolute bottom-8 right-8 text-right z-10">
          <p className="text-muted-foreground text-xs mb-1 tracking-wider">SCROLL DOWN TO SEE</p>
          <p className="text-foreground text-sm font-medium">MY JOURNEY</p>
          <div className="w-8 h-0.5 bg-white/60 ml-auto mt-2"></div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/4 -left-8 w-16 h-16 bg-primary/30 rounded-full blur-sm"></div>
      <div className="absolute bottom-16 -right-8 w-20 h-12 bg-primary/20" style={{ borderRadius: "50px 0 0 50px" }} />
    </div>
  );
} 