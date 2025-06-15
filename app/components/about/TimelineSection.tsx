interface TimelineItem {
	year: string;
	description: string;
}

const timelineData: TimelineItem[] = [
	{
		year: "2012",
		description: "Started photography as a hobby",
	},
	{
		year: "2014",
		description: "Began freelancing part-time",
	},
	{
		year: "2016",
		description: "Turned professional full-time",
	},
	{
		year: "2018",
		description: "Added maternity, baby, and graduation photography",
	},
	{
		year: "2020",
		description: "Expanded editing team internationally",
	},
	{
		year: "2022",
		description: "Traveled for destination weddings",
	},
	{
		year: "2024",
		description: "Rebranded to Rod16 Photography",
	},
	{
		year: "2025",
		description: "Serving local & international clients with full photo services",
	},
];

export default function TimelineSection() {
	return (
		<section className='bg-background text-foreground py-24'>
			<div className='max-w-7xl mx-auto px-8'>
				{/* Section Header */}
				<div className='mb-16'>
					<p className='text-muted-foreground text-sm mb-3 tracking-[0.2em] font-light'>JOURNEY</p>
					<h2
						className='text-4xl md:text-5xl font-bold leading-tight'
						style={{fontFamily: "var(--font-heading)"}}
					>
						MY JOURNEY - A TIMELINE
					</h2>
				</div>

				{/* Timeline Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{timelineData.map((item, index) => (
						<TimelineCard
							key={index}
							year={item.year}
							description={item.description}
						/>
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

function TimelineCard({year, description}: TimelineCardProps) {
	return (
		<div className='bg-primary/70 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-primary/80 transition-all duration-300 group'>
			<div className='mb-6'>
				<h3 className='text-muted-foreground text-sm tracking-wider mb-2'>YEAR - {year}</h3>
				<div className='w-12 h-0.5 bg-white/20 group-hover:bg-white/40 transition-colors duration-300'></div>
			</div>

			<p className='text-muted-foreground text-sm leading-relaxed'>{description}</p>
		</div>
	);
}
