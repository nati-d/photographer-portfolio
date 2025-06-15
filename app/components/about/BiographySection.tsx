export default function BiographySection() {
	return (
		<section className='bg-background text-foreground py-24'>
			<div className='max-w-7xl mx-auto px-8'>
				<h2
					className='text-3xl md:text-4xl font-light mb-12 tracking-wide'
					style={{fontFamily: "var(--font-heading)"}}
				>
					MY BIOGRAPHY
				</h2>

				<div className='space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed'>
					<p>
						I discovered my passion for photography by capturing special moments within my community, and witnessing the emotional impact of my work
						inspired me to pursue it professionally. With over 10 years of hands-on experience, I bring a deep understanding of lighting,
						composition, and storytelling to every project.
					</p>

					<p>
						My style is clean, emotional, and storytelling-focused—refined over the years to blend natural light with intentional artistry,
						capturing timeless and authentic moments. What drives me most is the joy I see on my clients' faces when they receive their photos,
						knowing I've preserved memories they will treasure forever.
					</p>

					<p>
						Storytelling and genuine connection are at the heart of my work, and I approach each shoot with trust, creativity, and respect, ensuring
						that every image reflects the unique story of the people in front of my lens.
					</p>
				</div>
			</div>
		</section>
	);
}
