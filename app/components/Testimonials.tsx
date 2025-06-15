"use client";
import {ChevronLeft, ChevronRight, Star} from "lucide-react";
import {useState} from "react";

const testimonials = [
	{
		id: 1,
		name: "Sarah & Michael",
		rating: 5,
		text: "Zadig captured our wedding day perfectly! His attention to detail and ability to capture genuine emotions made our photos truly special. Every time we look at our album, we relive those beautiful moments.",
	},
	{
		id: 2,
		name: "The Johnson Family",
		rating: 5,
		text: "Our family photoshoot was such a wonderful experience. Zadig made us all feel comfortable and natural, and the results were beyond our expectations. The photos perfectly captured our family's personality.",
	},
	{
		id: 3,
		name: "Emily Chen",
		rating: 5,
		text: "I was nervous about my graduation photos, but Zadig made the whole process so easy and fun. The photos turned out amazing - they really captured the joy and pride of the moment. Highly recommend!",
	},
	{
		id: 4,
		name: "Maria & David",
		rating: 5,
		text: "Our maternity shoot with Zadig was absolutely magical. He captured the love and anticipation perfectly. The photos are so natural and beautiful - exactly what we wanted to remember this special time.",
	},
	{
		id: 5,
		name: "The Thompson Family",
		rating: 5,
		text: "Zadig's attention to detail and ability to capture candid moments made our family session so special. The photos are full of life and personality - they tell our family's story perfectly.",
	},
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const scrollLeft = () => {
		setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 3));
	};

	const scrollRight = () => {
		setCurrentIndex((prev) => (prev < testimonials.length - 3 ? prev + 1 : 0));
	};

	return (
		<section className='w-full py-16 px-4 md:px-8 text-foreground'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-12'>
					<div className='mb-6 md:mb-0'>
						<p className='caption mb-2 uppercase tracking-widest'>TESTIMONIALS</p>
						<h2
							className='text-3xl md:text-4xl font-extrabold mb-4'
							style={{fontFamily: "var(--font-heading)"}}
						>
							WHAT MY CLIENTS SAY
						</h2>
					</div>

					<div className='flex items-center gap-4'>
						<div className='flex gap-2'>
							<button
								onClick={scrollLeft}
								className='p-2 rounded-md border border-border bg-button-bg hover:bg-background/70 text-foreground transition-colors'
							>
								<ChevronLeft className='h-4 w-4' />
							</button>
							<button
								onClick={scrollRight}
								className='p-2 rounded-md border border-border bg-button-bg hover:bg-background/70 text-foreground transition-colors'
							>
								<ChevronRight className='h-4 w-4' />
							</button>
						</div>
					</div>
				</div>

				{/* Testimonials Grid */}
				<div className='relative overflow-hidden'>
					<div
						className='flex transition-transform duration-500 ease-in-out gap-6'
						style={{transform: `translateX(-${currentIndex * (100 / 3)}%)`}}
					>
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								className='min-w-[calc(33.333%-1rem)] rounded-md bg-primary/80 border border-border shadow-lg p-6 flex flex-col'
							>
								{/* Client Info */}
								<div className='mb-4'>
									<h3
										className='font-semibold text-lg'
										style={{fontFamily: "var(--font-heading)"}}
									>
										{testimonial.name}
									</h3>
								</div>

								{/* Star Rating */}
								<div className='flex gap-1 mb-4'>
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className='h-4 w-4 fill-yellow-400 text-yellow-400'
										/>
									))}
								</div>

								{/* Testimonial Text */}
								<p className='text-muted-foreground leading-relaxed'>{testimonial.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
