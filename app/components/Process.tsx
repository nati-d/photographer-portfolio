"use client";
import {motion} from "framer-motion";
import {MessageSquare, Calendar, FileText, CreditCard, ClipboardCheck, Camera, ImageIcon} from "lucide-react";

const processSteps = [
	{
		icon: MessageSquare,
		title: "Initial Inquiry",
		description: "Client reaches out via website, email, or phone to discuss their photography needs",
		duration: "Same day response",
	},
	{
		icon: Calendar,
		title: "Consultation",
		description: "We discuss your vision, availability, and service details in a personalized consultation",
		duration: "30-60 minutes",
	},
	{
		icon: FileText,
		title: "Proposal & Quote",
		description: "I send a custom package proposal with detailed pricing and service information",
		duration: "Within 24 hours",
	},
	{
		icon: CreditCard,
		title: "Contract & Deposit",
		description: "Client signs the agreement and pays a retainer to secure the booking",
		duration: "Digital signing",
	},
	{
		icon: ClipboardCheck,
		title: "Final Planning",
		description: "We confirm the schedule, locations, shot list, and final expectations",
		duration: "1 week before",
	},
	{
		icon: Camera,
		title: "Shoot Day",
		description: "I arrive fully prepared with professional equipment ready to capture your special moments",
		duration: "As scheduled",
	},
	{
		icon: ImageIcon,
		title: "Delivery",
		description: "Professionally edited photos are delivered through a private online gallery",
		duration: "2-3 weeks",
	},
];

const containerVariants = {
	hidden: {opacity: 0},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: {opacity: 0, y: 30},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export default function Process() {
	return (
		<section className='w-full bg-gradient-to-b from-background to-muted/20 py-20 px-4 md:px-8'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<motion.div
					className='mb-16'
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
				>
					<p className='caption mb-2 uppercase tracking-widest'>PROCESS</p>
					<h2
						className='text-4xl md:text-5xl font-extrabold tracking-tight mb-4'
						style={{fontFamily: "var(--font-heading)"}}
					>
						How We Work Together
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl'>
						From initial contact to final delivery, here's what you can expect when working with us
					</p>
				</motion.div>

				{/* Timeline */}
				<motion.div
					className='relative'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, margin: "-100px"}}
				>
					{/* Vertical Line */}
					<div className='absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20 hidden lg:block transform -translate-x-px' />

					{/* Mobile Line */}
					<div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20 lg:hidden' />

					<div className='space-y-8 lg:space-y-12'>
						{processSteps.map((step, idx) => (
							<motion.div
								key={idx}
								variants={itemVariants}
								className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 ${
									idx % 2 === 0 ? "lg:flex-row-reverse" : ""
								}`}
							>
								{/* Content Card */}
								<div className='flex-1 ml-16 lg:ml-0'>
									<motion.div
										className='bg-card border border-border/50 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm'
										whileHover={{y: -2}}
									>
										<div className='flex flex-col gap-4'>
											{/* Header with Icon and Title */}
											<div className='flex items-center gap-4'>
												<div className='p-3 rounded-xl bg-accent/10'>
													<step.icon className='w-6 h-6 text-accent' />
												</div>
												<div>
													<h3
														className='text-xl font-semibold text-foreground'
														style={{fontFamily: "var(--font-heading)"}}
													>
														{step.title}
													</h3>
													<span className='text-sm font-medium text-accent'>{step.duration}</span>
												</div>
											</div>

											{/* Description */}
											<div className='pl-16 lg:pl-0'>
												<p className='text-muted-foreground leading-relaxed'>{step.description}</p>
											</div>
										</div>
									</motion.div>
								</div>

								{/* Timeline Node */}
								<div className='absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center'>
									<motion.div
										className='relative'
										whileHover={{scale: 1.1}}
										transition={{type: "spring", stiffness: 400, damping: 10}}
									>
										{/* Outer Ring */}
										<div className='w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 shadow-lg flex items-center justify-center'>
											{/* Inner Circle */}
											<div className='w-12 h-12 rounded-full bg-background border-2 border-accent/20 flex items-center justify-center'>
												<span className='text-sm font-bold text-accent'>{String(idx + 1).padStart(2, "0")}</span>
											</div>
										</div>

										{/* Pulse Animation */}
										<motion.div
											className='absolute inset-0 rounded-full bg-accent/20'
											animate={{
												scale: [1, 1.2, 1],
												opacity: [0.5, 0, 0.5],
											}}
											transition={{
												duration: 2,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
											}}
										/>
									</motion.div>
								</div>

								{/* Spacer for opposite side */}
								<div className='flex-1 hidden lg:block' />
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					className='text-center mt-16 pt-12 border-t border-border/50'
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6, delay: 0.3}}
				>
					<h3
						className='text-2xl font-semibold mb-4'
						style={{fontFamily: "var(--font-heading)"}}
					>
						Ready to Get Started?
					</h3>
					<p className='text-muted-foreground mb-6 max-w-md mx-auto'>
						Let's begin your photography journey with a simple conversation about your vision.
					</p>
					<motion.button
						className='bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors duration-200 shadow-lg hover:shadow-xl'
						whileHover={{scale: 1.05}}
						whileTap={{scale: 0.95}}
						style={{fontFamily: "var(--font-heading)"}}
					>
						Start Your Project
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
