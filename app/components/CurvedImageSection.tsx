import Image from "next/image"

interface CurvedImageSectionProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default function CurvedImageSection({ title, subtitle, imageUrl }: CurvedImageSectionProps) {
  return (
    <section className="relative w-full bg-background text-foreground py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent" style={{ fontFamily: 'var(--font-heading)' }}>
            {title}
          </h1>
          <p className="text-lg text-gray-400">{subtitle}</p>
        </div>
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
} 