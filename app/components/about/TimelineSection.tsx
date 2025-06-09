interface TimelineItem {
  year: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2005",
    description:
      "At 2005, Damien discovered his first camera, igniting his passion for photography and embarking on a journey that would shape his artistic vision, marking the beginning of his visual storytelling journey.",
  },
  {
    year: "2010",
    description:
      "Damien pursued a degree in Fine Arts with a focus on photography, refining his technical skills and artistic sensibilities.",
  },
  {
    year: "2012",
    description:
      "At 2012, Damien opened his first solo exhibition, showcasing his unique perspective and artistic vision to the world for the first time.",
  },
  {
    year: "2015",
    description:
      "Damien officially launched his photography business in 2015, offering portrait, event, and commercial photography services.",
  },
  {
    year: "2017",
    description:
      "Damien went solo beyond the USA, capturing outstanding commercial and cultural work from around the world.",
  },
  {
    year: "2020",
    description:
      "In 2020, Damien's dedication and creativity earned him several prestigious photography awards, cementing his position as a visionary photographer.",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-background text-foreground py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm mb-3 tracking-[0.2em] font-light">JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>DAMIEN'S JOURNEY - A TIMELINE</h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timelineData.map((item, index) => (
            <TimelineCard key={index} year={item.year} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  year: string;
  description: string;
}

function TimelineCard({ year, description }: TimelineCardProps) {
  return (
    <div className="bg-primary/70 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-primary/80 transition-all duration-300 group">
      <div className="mb-6">
        <h3 className="text-muted-foreground text-sm tracking-wider mb-2">YEAR - {year}</h3>
        <div className="w-12 h-0.5 bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
} 