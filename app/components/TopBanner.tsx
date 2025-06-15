import { ArrowUpRight } from "lucide-react";

export default function TopBanner() {
  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8 py-6 gap-4 md:gap-0 relative overflow-hidden ">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10">
        <svg width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="60" r="40" stroke="#fff" strokeWidth="2" fill="none" />
          <circle cx="160" cy="60" r="60" stroke="#fff" strokeWidth="2" fill="none" />
          <circle cx="160" cy="60" r="80" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="flex flex-col gap-1 z-10 items-center md:items-start text-center md:text-left w-full md:w-auto">
        <span className="uppercase text-xs tracking-widest text-muted-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
          Stunning Photography By
        </span>
        <span className="text-2xl md:text-4xl font-bold text-foreground/80" style={{ fontFamily: 'var(--font-heading)' }}>
          Zadig  Shiferaw
        </span>
      </div>
      <div className="flex flex-col items-center md:items-end z-10 w-full md:w-auto">
        <span className="text-base md:text-xl font-medium text-foreground/90 flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-0" style={{ fontFamily: 'var(--font-heading)' }}>
          LET'S
          <button className="inline-flex items-center ml-0 md:ml-2 mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-semibold text-base shadow hover:bg-accent/80 transition-colors">
            <ArrowUpRight size={18} />
          </button>
        </span>
        <span className="text-base md:text-xl font-medium text-foreground/90 -mt-1 text-center md:text-right" style={{ fontFamily: 'var(--font-heading)' }}>
          WORK TOGETHER
        </span>
      </div>
    </section>
  );
} 