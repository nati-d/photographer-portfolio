interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "500+", label: "HAPPY CLIENTS" },
  { value: "10+", label: "DESIGN AWARDS" },
  { value: "05+", label: "YEARS IN BUSINESS" },
  { value: "10,000+", label: "CUPS OF COFFEE" },
  { value: "90%", label: "CLIENT RETENTION RATE" },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl">
      {stats.map((stat, index) => (
        <div key={index} className="text-center md:text-left">
          <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
          <div className="text-muted-foreground text-xs tracking-wider leading-relaxed">{stat.label}</div>
        </div>
      ))}
    </div>
  );
} 