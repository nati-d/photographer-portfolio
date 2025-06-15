import Link from "next/link";
import {Facebook, Twitter, Linkedin, ArrowUpRight, Instagram} from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-primary w-full text-muted-foreground py-10 px-6 border-t border-border'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
					{/* Left section */}
					<div className='md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left'>
						<p className='text-xs uppercase mb-6 tracking-widest'>A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</p>
						<div className='flex flex-col items-center md:items-start'>
							<div className='flex items-center gap-2 mb-1'>
								<span className='text-2xl font-light text-foreground'>LET'S</span>
								<div className='bg-accent rounded-full w-8 h-8 flex items-center justify-center text-accent-foreground'>
									<ArrowUpRight size={18} />
								</div>
							</div>
							<p className='text-2xl font-light text-foreground'>WORK TOGETHER</p>
						</div>
					</div>

					{/* Navigation columns */}
					<div className='md:col-span-8 w-full'>
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left'>
							{/* Column 1 */}
							<div className='space-y-2'>
								<Link
									href='/home'
									className='block text-xs hover:text-accent transition-colors'
								>
									HOME
								</Link>
								<Link
									href='/about'
									className='block text-xs hover:text-accent transition-colors'
								>
									ABOUT
								</Link>
								<Link
									href='/portfolio'
									className='block text-xs hover:text-accent transition-colors'
								>
									PORTFOLIO
								</Link>
								<Link
									href='/services'
									className='block text-xs hover:text-accent transition-colors'
								>
									SERVICES
								</Link>
								<Link
									href='/contact'
									className='block text-xs hover:text-accent transition-colors'
								>
									CONTACT
								</Link>
							</div>

							{/* Column 2 */}
							<div className='space-y-2'>
								<Link
									href='/portfolio'
									className='block text-xs hover:text-accent transition-colors'
								>
									WEDDING PHOTOGRAPHY
								</Link>
								<Link
									href='/portfolio'
									className='block text-xs hover:text-accent transition-colors'
								>
									FAMILY PORTRAITS
								</Link>
								<Link
									href='/portfolio'
									className='block text-xs hover:text-accent transition-colors'
								>
									GRADUATION PHOTOGRAPHY
								</Link>
								<Link
									href='/portfolio'
									className='block text-xs hover:text-accent transition-colors'
								>
									MATERNITY PHOTOGRAPHY
								</Link>
								<Link
									href='/portfolio'
									className='block text-xs hover:text-accent transition-colors'
								>
									EVENT PHOTOGRAPHY
								</Link>
							</div>

							{/* Column 3 */}
							<div className='space-y-2'>
								<Link
									href='/services'
									className='block text-xs hover:text-accent transition-colors'
								>
									WEDDING PACKAGES
								</Link>
								<Link
									href='/services'
									className='block text-xs hover:text-accent transition-colors'
								>
									PORTRAIT SESSIONS
								</Link>
								<Link
									href='/services'
									className='block text-xs hover:text-accent transition-colors'
								>
									FASHION & COMMERCIAL
								</Link>
								<Link
									href='/services'
									className='block text-xs hover:text-accent transition-colors'
								>
									CUSTOM PROJECTS
								</Link>
								<Link
									href='/contact'
									className='block text-xs hover:text-accent transition-colors'
								>
									BOOK A SESSION
								</Link>
							</div>

							{/* Column 4 */}
							<div className='space-y-2'>
								<Link
									href='https://www.facebook.com/ethiorodphotography/'
									target='_blank'
									rel='noopener noreferrer'
									className='block text-xs hover:text-accent transition-colors'
								>
									FACEBOOK
								</Link>
								<Link
									href='https://www.instagram.com/rod16photograpy?igsh=MXU4N2JmdTlqaGVoZg%3D%3D&utm_source=qr'
									target='_blank'
									rel='noopener noreferrer'
									className='block text-xs hover:text-accent transition-colors'
								>
									INSTAGRAM
								</Link>
								<Link
									href='https://www.tiktok.com/@ethio16zedo?_t=ZM-8x9dHQdAdNu&_r=1'
									target='_blank'
									rel='noopener noreferrer'
									className='block text-xs hover:text-accent transition-colors'
								>
									TIKTOK
								</Link>
								<Link
									href='mailto:rod16zedo@gmail.com'
									className='block text-xs hover:text-accent transition-colors'
								>
									EMAIL
								</Link>
								<Link
									href='tel:+15714732196'
									className='block text-xs hover:text-accent transition-colors'
								>
									PHONE
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom section */}
				<div className='mt-12 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center'>
					<div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-2 md:mb-0 items-center justify-center'>
						<Link
							href='#'
							className='text-xs text-muted-foreground hover:text-accent transition-colors'
						>
							Terms & Conditions
						</Link>
						<Link
							href='#'
							className='text-xs text-muted-foreground hover:text-accent transition-colors'
						>
							Privacy Policy
						</Link>
					</div>

					<div className='text-xs text-muted-foreground'>© 2024 Rod16 Photography. All rights reserved.</div>
					<div className='flex items-center gap-4'>
						<a
							href='https://www.facebook.com/ethiorodphotography/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-accent transition-colors'
						>
							<Facebook size={16} />
						</a>
						<a
							href='https://www.instagram.com/rod16photograpy?igsh=MXU4N2JmdTlqaGVoZg%3D%3D&utm_source=qr'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-accent transition-colors'
						>
							<Instagram size={16} />
						</a>
						<a
							href='https://www.tiktok.com/@ethio16zedo?_t=ZM-8x9dHQdAdNu&_r=1'
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground hover:text-accent transition-colors'
						>
							<svg
								className='w-4 h-4'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
