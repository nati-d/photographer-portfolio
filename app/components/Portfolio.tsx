"use client";

import {useState} from "react";
import {ChevronLeft, ChevronRight, ArrowRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const projects = [
		{
			id: 1,
			title: "Wedding Moments",
			date: "2024",
			image: "/images/502194136_18412556155099981_1052276364770466784_n.jpg",
			alt: "Beautiful wedding photography capturing special moments",
		},
		{
			id: 2,
			title: "Family Portraits",
			date: "2024",
			image: "/images/502324451_18412556125099981_2652804483003989202_n.jpg",
			alt: "Heartwarming family portrait session",
		},
		{
			id: 3,
			title: "Graduation Celebration",
			date: "2024",
			image: "/images/502129863_18412556116099981_1311378094479355610_n.jpg",
			alt: "Graduation photography capturing achievement and joy",
		},
		{
			id: 4,
			title: "Maternity Session",
			date: "2024",
			image: "/images/502755273_18412556143099981_47781989276116718_n.jpg",
			alt: "Elegant maternity photography session",
		},
		{
			id: 5,
			title: "Wedding Ceremony",
			date: "2024",
			image: "/images/502737307_18412556509099981_5792549236110771942_n.jpg",
			alt: "Capturing the magic of wedding ceremonies",
		},
		{
			id: 6,
			title: "Family Bonds",
			date: "2024",
			image: "/images/502383572_18412556536099981_2688662488026217623_n.jpg",
			alt: "Family photography showcasing love and connection",
		},
		{
			id: 7,
			title: "Wedding Details",
			date: "2024",
			image: "/images/502105324_18412556518099981_8304748905028928472_n.jpg",
			alt: "Intimate wedding photography details",
		},
		{
			id: 8,
			title: "Portrait Session",
			date: "2024",
			image: "/images/502498258_18412627183099981_4710446254164197483_n.jpg",
			alt: "Professional portrait photography",
		},
		{
			id: 9,
			title: "Wedding Reception",
			date: "2024",
			image: "/images/503168975_18412935301099981_3999172963488165566_n.jpg",
			alt: "Wedding reception photography capturing celebration",
		},
	];

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 3 : prevIndex - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === projects.length - 3 ? 0 : prevIndex + 1));
	};

	return (
		<section className='w-full max-w-7xl mx-auto py-16 px-4'>
			<div className='mb-8'>
				<p className='caption mb-2 uppercase tracking-widest'>PORTFOLIO</p>
				<div className='flex justify-between items-center mt-2'>
					<h2
						className='text-3xl md:text-4xl font-extrabold'
						style={{fontFamily: "var(--font-heading)"}}
					>
						EXPLORE MY PHOTOGRAPHY WORK.
					</h2>
					<div className='flex items-center gap-4'>
						<button
							onClick={handlePrevious}
							className='w-10 h-10 rounded-md border border-border bg-button-bg flex items-center justify-center hover:bg-background/70 transition'
							aria-label='Previous projects'
						>
							<ChevronLeft className='w-5 h-5 text-foreground/70' />
						</button>
						<button
							onClick={handleNext}
							className='w-10 h-10 rounded-md border border-border bg-button-bg flex items-center justify-center hover:bg-background/70 transition'
							aria-label='Next projects'
						>
							<ChevronRight className='w-5 h-5 text-foreground/70' />
						</button>
						<Link
							href='/works'
							className='hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-md border border-border'
							style={{fontFamily: "var(--font-heading)"}}
						>
							View All Works <ArrowRight className='w-4 h-4' />
						</Link>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{projects.slice(currentIndex, currentIndex + 3).map((project) => (
					<div
						key={project.id}
						className='group relative rounded-md shadow-lg overflow-hidden flex flex-col'
					>
						<div className='aspect-[3/4] overflow-hidden rounded-t-md'>
							<Image
								src={project.image}
								alt={project.alt}
								width={400}
								height={533}
								className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
								priority
							/>
						</div>
						<div className='py-4 flex-1 flex flex-col justify-between'>
							<div>
								<div className='flex justify-between items-center'>
									<h3
										className='font-semibold text-lg'
										style={{fontFamily: "var(--font-heading)"}}
									>
										{project.title}
									</h3>
									<Link
										href={`/project/${project.id}`}
										className='flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium'
									>
										VIEW PROJECT <ArrowRight className='w-3 h-3' />
									</Link>
								</div>
								<p className='text-xs text-muted-foreground'>{project.date}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='mt-6 text-center md:hidden'>
				<Link
					href='/works'
					className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium px-4 py-2 rounded-md border border-border'
					style={{fontFamily: "var(--font-heading)"}}
				>
					View All Works <ArrowRight className='w-4 h-4' />
				</Link>
			</div>
		</section>
	);
}
