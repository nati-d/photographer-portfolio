"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";
import {useState} from "react";
import {X} from "lucide-react";

const images = [
	{
		src: "/images/502194136_18412556155099981_1052276364770466784_n.jpg",
		alt: "Portrait Photography - Professional headshot",
	},
	{
		src: "/images/502324451_18412556125099981_2652804483003989202_n.jpg",
		alt: "Portrait Photography - Natural lighting",
	},
	{
		src: "/images/502129863_18412556116099981_1311378094479355610_n.jpg",
		alt: "Portrait Photography - Creative composition",
	},
	{
		src: "/images/502755273_18412556143099981_47781989276116718_n.jpg",
		alt: "Portrait Photography - Studio work",
	},
	{
		src: "/images/502737307_18412556509099981_5792549236110771942_n.jpg",
		alt: "Portrait Photography - Environmental portrait",
	},
	{
		src: "/images/502383572_18412556536099981_2688662488026217623_n.jpg",
		alt: "Portrait Photography - Artistic vision",
	},
	{
		src: "/images/502105324_18412556518099981_8304748905028928472_n.jpg",
		alt: "Portrait Photography - Contemporary style",
	},
	{
		src: "/images/502498258_18412627183099981_4710446254164197483_n.jpg",
		alt: "Portrait Photography - Professional work",
	},
	{
		src: "/images/503168975_18412935301099981_3999172963488165566_n.jpg",
		alt: "Portrait Photography - Creative vision",
	},
	{
		src: "/images/503308805_18412935319099981_2093735867967919903_n.jpg",
		alt: "Portrait Photography - Natural moments",
	},
	{
		src: "/images/503313228_18412935280099981_5267327022873650856_n.jpg",
		alt: "Portrait Photography - Studio lighting",
	},
	{
		src: "/images/503050265_18412935331099981_7814691206751838892_n.jpg",
		alt: "Portrait Photography - Artistic composition",
	},
	{
		src: "/images/503481967_18412935343099981_2832138011827731427_n.jpg",
		alt: "Portrait Photography - Professional style",
	},
	{
		src: "/images/503203344_18412935844099981_78300836652171071_n.jpg",
		alt: "Portrait Photography - Creative work",
	},
	{
		src: "/images/503173103_18412935817099981_1925314235091529319_n.jpg",
		alt: "Portrait Photography - Natural style",
	},
	{
		src: "/images/503098269_18412935826099981_4821021129856159262_n.jpg",
		alt: "Portrait Photography - Studio composition",
	},
	{
		src: "/images/503033971_18412936228099981_4815665650177808941_n.jpg",
		alt: "Portrait Photography - Artistic moments",
	},
	{
		src: "/images/503147294_18412936282099981_1162567887289490800_n.jpg",
		alt: "Portrait Photography - Professional composition",
	},
	{
		src: "/images/503511712_18412936258099981_6985321346665829356_n.jpg",
		alt: "Portrait Photography - Creative style",
	},
	{
		src: "/images/503031806_18412936270099981_9015697711171552514_n.jpg",
		alt: "Portrait Photography - Natural composition",
	},
	{
		src: "/images/503102962_18412936249099981_7413022984305265578_n.jpg",
		alt: "Portrait Photography - Studio vision",
	},
	{
		src: "/images/503177202_18412936237099981_840640285851978416_n.jpg",
		alt: "Portrait Photography - Artistic work",
	},
];

const breakpointColumnsObj = {
	default: 4,
	1100: 2,
	700: 1,
};

export default function GalleryMasonry() {
	const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);

	return (
		<section className='bg-black text-white py-24'>
			<div className='container mx-auto px-8'>
				<div className='max-w-7xl mx-auto'>
					{/* Section Header */}
					<div className='mb-16'>
						<p className='text-gray-400 text-sm mb-3 tracking-[0.2em] font-light'>GALLERY</p>
						<h2 className='text-4xl md:text-5xl font-bold leading-tight mb-4'>FEATURED WORK</h2>
						<p className='text-gray-400 text-sm max-w-2xl'>
							A curated selection of my finest photography work, showcasing the diversity and depth of my artistic vision across various projects
							and collaborations.
						</p>
					</div>

					{/* Masonry Gallery */}
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className='flex gap-6'
						columnClassName='masonry-column flex flex-col gap-6'
					>
						{images.map((image, idx) => (
							<GalleryItem
								key={idx}
								src={image.src}
								alt={image.alt}
								index={idx}
								onImageClick={() => setSelectedImage(image)}
							/>
						))}
					</Masonry>
				</div>
			</div>

			{/* Modal for displaying the selected image */}
			{selectedImage && (
				<div
					className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
					onClick={() => setSelectedImage(null)}
				>
					<div className='relative max-w-4xl w-full p-4'>
						<Image
							src={selectedImage.src}
							alt={selectedImage.alt}
							width={1200}
							height={800}
							className='w-full h-auto object-contain'
						/>
						<button
							className='absolute top-4 right-4 bg-white text-black rounded-full p-2'
							onClick={() => setSelectedImage(null)}
						>
							<X size={24} />
						</button>
					</div>
				</div>
			)}
		</section>
	);
}

interface GalleryItemProps {
	src: string;
	alt: string;
	index: number;
	onImageClick: () => void;
}

function GalleryItem({src, alt, index, onImageClick}: GalleryItemProps) {
	return (
		<div
			className='group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500'
			onClick={onImageClick}
		>
			<div className='relative overflow-hidden rounded-2xl'>
				<Image
					src={src}
					alt={alt}
					width={600}
					height={800}
					className='w-full h-auto object-cover transition-all duration-700 group-hover:scale-110'
					style={{
						borderRadius: "1rem",
						filter: "brightness(0.9) contrast(1.1)",
					}}
				/>

				{/* Overlay */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

				{/* Hover Content */}
				<div className='absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
					<div className='text-white'>
						<p className='text-xs text-gray-300 mb-1 tracking-wider'>PORTFOLIO PIECE</p>
						<h3 className='text-sm font-medium'>Creative Vision {String(index + 1).padStart(2, "0")}</h3>
					</div>
				</div>

				{/* Corner accent */}
				<div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
			</div>
		</div>
	);
}
