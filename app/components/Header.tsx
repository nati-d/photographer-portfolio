"use client";

import {motion, AnimatePresence} from "framer-motion";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks = [
	{label: "Home", href: "/"},
	{label: "About", href: "/about"},
	{label: "Services", href: "/services"},
	{label: "Portfolio", href: "/portfolio"},
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className='w-full sticky top-0 z-30 bg-background/90 border-b border-border'>
			<div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>
				{/* Logo */}
				<div
					className='flex-1 flex items-center text-xl font-extrabold tracking-widest text-accent'
					style={{fontFamily: "var(--font-heading)"}}
				>
					ZEDO
				</div>
				{/* Centered Navigation - hidden on mobile */}
				<nav className='flex-1 hidden md:flex justify-center'>
					<div className='flex rounded-md overflow-hidden'>
						{navLinks.map((link) => {
							const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
							return (
								<Link
									key={link.label}
									href={link.href}
									className={`px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-widest focus:outline-none border-l border-border first:border-l-0 bg-transparent shadow-none transition-colors hover:text-accent ${
										isActive ? "text-accent font-bold" : ""
									}`}
									style={{fontFamily: "var(--font-heading)"}}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
				</nav>
				{/* Contact Me Button - hidden on mobile */}
				<div className='flex-1 hidden md:flex justify-end'>
					<Link
						href='/contact'
						className='px-5 py-2 rounded-md bg-button-bg text-foreground/90 font-semibold text-sm border border-border hover:bg-primary/70 transition-colors'
						style={{fontFamily: "var(--font-heading)"}}
					>
						Contact Me
					</Link>
				</div>
				{/* Hamburger menu for mobile */}
				<button
					className='md:hidden flex items-center justify-center p-2 rounded-md border border-border bg-background/70 hover:bg-primary/70 transition-colors'
					aria-label='Open menu'
					onClick={() => setMobileOpen(true)}
				>
					<Menu
						size={24}
						className='text-accent'
					/>
				</button>
			</div>
			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{x: "100%", opacity: 0}}
						animate={{x: 0, opacity: 1}}
						exit={{x: "100%", opacity: 0}}
						transition={{type: "spring", stiffness: 300, damping: 30}}
						className='fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col md:hidden'
					>
						<div className='flex items-center justify-between px-6 py-4 border-b border-border'>
							<span
								className='text-xl font-extrabold tracking-widest text-accent'
								style={{fontFamily: "var(--font-heading)"}}
							>
								DAMIEN
							</span>
							<button
								className='p-2 rounded-md border border-border bg-background/80 hover:bg-primary/70 transition-colors'
								aria-label='Close menu'
								onClick={() => setMobileOpen(false)}
							>
								<X
									size={24}
									className='text-accent'
								/>
							</button>
						</div>
						<nav className='flex flex-col gap-2 px-6 py-8'>
							{navLinks.map((link) => {
								const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
								return (
									<Link
										key={link.label}
										href={link.href}
										className={`block w-full px-4 py-3 rounded-md text-lg font-semibold uppercase tracking-widest text-foreground hover:bg-primary/80 hover:text-accent transition-colors border border-border mb-2 ${
											isActive ? "text-accent font-bold" : ""
										}`}
										style={{fontFamily: "var(--font-heading)"}}
										onClick={() => setMobileOpen(false)}
									>
										{link.label}
									</Link>
								);
							})}
							<Link
								href='/contact'
								className='mt-6 inline-flex items-center justify-center px-6 py-3 rounded-md bg-button-bg text-accent font-semibold text-base border border-border hover:bg-accent hover:text-primary transition-colors'
								style={{fontFamily: "var(--font-heading)"}}
								onClick={() => setMobileOpen(false)}
							>
								Contact Me
							</Link>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
