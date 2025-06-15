import Image from "next/image";
import Hero from "./components/Hero";
import TopBanner from "./components/TopBanner";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16  font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-4  row-start-2 items-center sm:items-start w-screen'>
				<TopBanner />
				<Hero />
				<About />
				<Services />
				<Process />
				<Portfolio />
				<FAQ />
				<Testimonials />
			</main>
		</div>
	);
}
