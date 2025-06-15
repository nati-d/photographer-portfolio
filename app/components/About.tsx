import Image from "next/image";
import {Facebook, Twitter, Instagram, Sparkle, Sparkles} from "lucide-react";

export default function About() {
	return (
		<section className='w-full max-w-7xl mx-auto px-4'>
			{/* Header */}
			<div className='flex flex-col md:flex-row justify-between items-start mb-12 gap-6'>
				<div>
					<p className='caption mb-2 uppercase tracking-widest'>ABOUT</p>
					<h2
						className='text-3xl md:text-4xl font-extrabold mb-0'
						style={{fontFamily: "var(--font-heading)"}}
					>
						I AM Zadig
					</h2>
				</div>
				<a
					href='#services'
					className='text-muted-foreground hover:text-accent transition-colors text-sm font-medium px-4 py-2 rounded-md border border-border ml-2'
					style={{fontFamily: "var(--font-heading)"}}
				>
					Know More →
				</a>
			</div>

			<div className='grid lg:grid-cols-2 gap-12 items-start'>
				{/* Portrait Image */}
				<div className='relative'>
					<div className='relative overflow-hidden rounded-lg shadow-lg'>
						<Image
							src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face'
							alt='Portrait of Damien'
							width={500}
							height={600}
							className='object-cover w-full h-[400px] md:h-[600px]'
							priority
						/>
					</div>
				</div>

				{/* Content */}
				<div className='space-y-10'>
					{/* Introduction Section */}
					<div>
						<div className='flex items-center gap-2 mb-4'>
							{/* <span className='text-accent text-xl font-bold'>
								<Sparkles />
							</span> */}
							<h2
								className='text-xl font-semibold text-accent m-0'
								style={{fontFamily: "var(--font-heading)"}}
							>
								Introduction
							</h2>
						</div>
						<p className='text-muted-foreground leading-relaxed text-base text-justify'>
							With over a decade of experience in photography, I specialize in capturing meaningful moments through weddings, portraits, and
							lifestyle imagery. My approach blends technical expertise with a creative eye, producing elegant, story-driven visuals. Over the
							years, I've worked with diverse clients across various cultures and events, building a strong reputation for professionalism and
							consistency. I offer detail-focused services both locally and internationally, delivering timeless images that truly connect.
						</p>
					</div>

					{/* Contact Information Section */}
					<div>
						<div className='flex items-center gap-2 mb-6'>
							{/* <span className='text-accent text-xl font-bold'>
								<Sparkles />
							</span> */}
							<h2
								className='text-xl font-semibold text-accent m-0'
								style={{fontFamily: "var(--font-heading)"}}
							>
								Contact Information
							</h2>
						</div>

						<div className='grid md:grid-cols-2 gap-6 mb-6'>
							<div>
								<p className='caption mb-1'>Email</p>
								<p className='text-base text-foreground font-medium'>rod16zedo@gmail.com</p>
							</div>
							<div>
								<p className='caption mb-1'>Phone Number</p>
								<p className='text-base text-foreground font-medium'>+1 (571) 473-2196 / (703) 898-8943</p>
							</div>
						</div>

						{/* Social Links and Actions */}
						<div className='flex flex-wrap items-center gap-4'>
							<div className='flex gap-3'>
								<a
									href='https://www.facebook.com/ethiorodphotography/'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/70 text-accent hover:bg-accent/10 transition-colors'
								>
									<Facebook className='w-5 h-5' />
								</a>
								<a
									href='https://www.instagram.com/rod16photograpy?igsh=MXU4N2JmdTlqaGVoZg%3D%3D&utm_source=qr'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/70 text-accent hover:bg-accent/10 transition-colors'
								>
									<Instagram className='w-5 h-5' />
								</a>
								<a
									href='https://www.tiktok.com/@ethio16zedo?_t=ZM-8x9dHQdAdNu&_r=1'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/70 text-accent hover:bg-accent/10 transition-colors'
								>
									<svg
										className='w-5 h-5'
										viewBox='0 0 24 24'
										fill='currentColor'
									>
										<path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
									</svg>
								</a>
							</div>

							<div className='flex gap-3 ml-auto'>
								<button
									className='border border-border text-foreground/90 hover:bg-primary/70 transition-colors px-5 py-2 rounded-full font-semibold text-base'
									style={{fontFamily: "var(--font-heading)"}}
								>
									{"Let's Work"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
