"use client";
import {motion} from "framer-motion";
import {ArrowUpRight, Star, Camera, Heart, ShoppingBag, Globe, Package, Package2, PackageCheck} from "lucide-react";

const services = [
	{
		name: "Wedding Photography",
		price: "From $1,800",
		button: {
			label: "Book a Call",
			href: "/contact",
		},
		features: [
			"6–10 hours of coverage",
			"Two photographers (optional add-on)",
			"Professionally edited high-resolution images",
			"Online gallery & download access",
			"Engagement session add-on: starting at $350",
			"Destination wedding packages available upon request",
		],
	},
	{
		name: "Portrait Photography",
		price: "From $350",
		button: {
			label: "Book a Call",
			href: "/contact",
		},
		features: [
			"1–2 hour session",
			"Up to 2 locations",
			"15+ fully edited images",
			"Private gallery delivery",
			"Professional Headshots: starting at $250",
			"30-minute session included",
		],
	},
	{
		name: "Fashion & Commercial",
		price: "From $700",
		button: {
			label: "Book a Call",
			href: "/contact",
		},
		features: [
			"Half-day & full-day rates available",
			"Fashion lookbooks & editorial shoots",
			"Product photography",
			"Personal branding & content creation",
			"Planning consultation included",
			"Basic usage rights provided",
		],
	},
	{
		name: "Custom Projects & Travel",
		price: "Custom Quote",
		button: {
			label: "Book a Call",
			href: "/contact",
		},
		features: [
			"Available for travel photography",
			"Event coverage services",
			"Cultural/documentary photography",
			"Custom quotes based on project needs",
			"Flexible scheduling options",
			"Contact for personalized quote",
		],
	},
];

export default function Services() {
	return (
		<section
			id='services'
			className='w-full bg-background text-foreground py-24'
		>
			<div className='max-w-7xl mx-auto px-8'>
				<div className='mb-12'>
					<p className='text-lg text-gray-400'>
						Professional photography services tailored to your needs. From weddings to commercial shoots, I offer comprehensive packages to capture
						your special moments.
					</p>
					<h2
						className='text-3xl md:text-4xl font-extrabold mb-4 text-accent'
						style={{fontFamily: "var(--font-heading)"}}
					>
						Photography Services & Pricing
					</h2>
				</div>
				<div className='space-y-12 mb-12'>
					{services.map((service, idx) => (
						<motion.div
							key={idx}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{duration: 0.5, delay: idx * 0.1}}
							className='flex flex-col md:flex-row bg-primary/80 rounded-xl border border-border shadow-lg overflow-hidden'
						>
							{/* Left: Name, Price, Button */}
							<div className='md:w-1/3 flex flex-col items-start justify-center p-8 border-b md:border-b-0 md:border-r border-border'>
								<span className='text-lg text-gray-400 mb-2'>{service.name}</span>
								<span className='text-4xl font-bold text-white mb-6'>{service.price}</span>
								<a
									href={service.button.href}
									className='inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1C1C21] text-accent font-semibold hover:bg-accent hover:text-primary transition-colors border border-border'
									style={{fontFamily: "var(--font-heading)"}}
								>
									{service.button.label}
									<ArrowUpRight size={18} />
								</a>
							</div>
							{/* Right: Features */}
							<div className='md:w-2/3 flex flex-col gap-4 p-8'>
								{service.features.map((feature, fidx) => (
									<div
										key={fidx}
										className='flex items-center gap-3 px-4 py-4 rounded-md border border-border bg-background/60 text-gray-200 text-base tracking-wide'
									>
										<Star
											size={18}
											className='text-accent flex-shrink-0'
										/>
										<span className='leading-snug'>{feature}</span>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Package Tiers Section */}
				<div className='mb-24'>
					<div className='mb-12'>
						<p className='text-lg text-gray-400'>Choose the perfect package that suits your needs and budget</p>
						<h2
							className='text-3xl md:text-4xl font-extrabold mb-4 text-accent'
							style={{fontFamily: "var(--font-heading)"}}
						>
							Package Tiers
						</h2>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{/* Basic Package */}
						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{duration: 0.5, delay: 0.1}}
							className='bg-primary/80 rounded-xl border border-border p-8'
						>
							<div className='flex items-center gap-3 mb-6'>
								<Package className='w-8 h-8 text-accent' />
								<h3 className='text-2xl font-bold text-white'>Basic Package</h3>
							</div>
							<p className='text-gray-400 mb-6'>Ideal for clients who want quality coverage on a budget</p>
							<ul className='space-y-4 mb-8'>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>2-4 hours coverage</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Professional editing</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Online gallery</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Standard delivery</span>
								</li>
							</ul>
							<a
								href='/contact'
								className='inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 rounded-md bg-[#1C1C21] text-accent font-semibold hover:bg-accent hover:text-primary transition-colors border border-border'
								style={{fontFamily: "var(--font-heading)"}}
							>
								Contact Me
								<ArrowUpRight size={18} />
							</a>
						</motion.div>

						{/* Premium Package */}
						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{duration: 0.5, delay: 0.2}}
							className='bg-primary/80 rounded-xl border border-border p-8 relative'
						>
							<div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold'>
								Most Popular
							</div>
							<div className='flex items-center gap-3 mb-6'>
								<Package2 className='w-8 h-8 text-accent' />
								<h3 className='text-2xl font-bold text-white'>Premium Package</h3>
							</div>
							<p className='text-gray-400 mb-6'>Most popular option with extended coverage</p>
							<ul className='space-y-4 mb-8'>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>6-8 hours coverage</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Multiple locations</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>High-res images</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>USB drive option</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Priority delivery</span>
								</li>
							</ul>
							<a
								href='/contact'
								className='inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors'
								style={{fontFamily: "var(--font-heading)"}}
							>
								Contact Me
								<ArrowUpRight size={18} />
							</a>
						</motion.div>

						{/* Deluxe Package */}
						<motion.div
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{duration: 0.5, delay: 0.3}}
							className='bg-primary/80 rounded-xl border border-border p-8'
						>
							<div className='flex items-center gap-3 mb-6'>
								<PackageCheck className='w-8 h-8 text-accent' />
								<h3 className='text-2xl font-bold text-white'>Deluxe Package</h3>
							</div>
							<p className='text-gray-400 mb-6'>Full-day experience with VIP treatment</p>
							<ul className='space-y-4 mb-8'>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>10+ hours coverage</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Two photographers</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Luxury photo album</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Same-day previews</span>
								</li>
								<li className='flex items-center gap-3 text-gray-200'>
									<Star
										size={18}
										className='text-accent flex-shrink-0'
									/>
									<span>Local travel included</span>
								</li>
							</ul>
							<a
								href='/contact'
								className='inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 rounded-md bg-[#1C1C21] text-accent font-semibold hover:bg-accent hover:text-primary transition-colors border border-border'
								style={{fontFamily: "var(--font-heading)"}}
							>
								Contact Me
								<ArrowUpRight size={18} />
							</a>
						</motion.div>
					</div>
				</div>

				{/* Booking Information */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.5, delay: 0.4}}
					className='mt-16 bg-primary/80 rounded-xl border border-border p-8 text-center'
				>
					<h3
						className='text-2xl font-bold mb-4 text-accent'
						style={{fontFamily: "var(--font-heading)"}}
					>
						Booking & Availability
					</h3>
					<p className='text-gray-400 mb-6'>
						To secure your session, a 25% deposit is required upon booking. Flexible payment plans are available for select packages.
					</p>
					<a
						href='/contact'
						className='inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-semibold text-base'
						style={{fontFamily: "var(--font-heading)"}}
					>
						Contact Me
						<ArrowUpRight size={18} />
					</a>
				</motion.div>
			</div>
		</section>
	);
}
