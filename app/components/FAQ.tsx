"use client";
import {useState} from "react";
import {ChevronRight} from "lucide-react";

const faqData = [
	{
		id: "item-1",
		question: "How far in advance should clients book you, and do you have a busy season?",
		answer: "I recommend clients book at least 1–3 months in advance, especially during the summer months, which are my busiest season due to weddings and graduations. Early booking ensures availability and allows time for personalized planning.",
	},
	{
		id: "item-2",
		question: "Do you offer pre-shoot consultations? If yes, what do these entail?",
		answer: "It depends on the customer's needs and preferences.",
	},
	{
		id: "item-3",
		question: "What's your availability for travel (local, national, international), and do you charge travel fees?",
		answer: "I'm available to travel locally, nationally, and internationally. Travel fees are based on distance and shared upfront.",
	},
	{
		id: "item-4",
		question: "How do you communicate with clients before, during, and after a shoot?",
		answer: `I maintain open and friendly communication throughout the entire process.
• Before the shoot – I connect through calls, texts, or emails to discuss ideas, expectations, and logistics.
• During the shoot – I guide gently and make sure clients feel relaxed and confident.
• After the shoot – I provide updates, share previews, and deliver final images on time, always staying in touch.`,
	},
	{
		id: "item-5",
		question: "What's your turnaround time for delivering final images, and how are they delivered?",
		answer: "Images are delivered through an online gallery, USB hard drive, and printing options including laminating and water profile album.",
	},
	{
		id: "item-6",
		question: "Do you provide sneak peeks or previews? If yes, how soon after the shoot?",
		answer: "Yes, I provide sneak peeks within 2–5 days after the shoot so clients can enjoy a quick look while the full gallery is being edited.",
	},
	{
		id: "item-7",
		question: "How do you handle revisions or additional requests from clients post-delivery?",
		answer: "I don't offer revisions or additional requests post-delivery.",
	},
	{
		id: "item-8",
		question: "What's your policy on cancellations, rescheduling, and refunds?",
		answer: "Clients can reschedule in advance based on availability. Late cancellations may lose the deposit. Refunds are limited and handled case by case.",
	},
	{
		id: "item-9",
		question: "Do you offer contracts or agreements? If yes, what key terms should clients know?",
		answer: "Yes, I provide a clear contract for every booking. It outlines key terms like shoot details, payment schedule, cancellation policy, image delivery timeline, and usage rights—so both sides are protected and expectations are clear.",
	},
	{
		id: "item-10",
		question: "How do you ensure client satisfaction throughout the process?",
		answer: "I listen closely to each client's vision, communicate clearly, deliver on time, and stay flexible to their needs—making sure they feel valued every step of the way.",
	},
];

function AccordionItem({faq, open, onClick}: {faq: any; open: boolean; onClick: () => void}) {
	return (
		<div className='border-b border-border'>
			<span
				className='w-full flex items-center justify-between py-6 text-left text-sm font-medium tracking-wide hover:text-accent transition-colors'
				onClick={onClick}
				aria-expanded={open}
				aria-controls={faq.id}
				style={{fontFamily: "var(--font-heading)"}}
			>
				<span>{faq.question}</span>
				<ChevronRight className={`w-5 h-5 ml-2 transition-transform ${open ? "rotate-90 text-accent" : "text-muted-foreground"}`} />
			</span>
			<div
				id={faq.id}
				className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
			>
				<div className='text-muted-foreground text-sm leading-relaxed pb-6 pr-2 whitespace-pre-line'>{faq.answer}</div>
			</div>
		</div>
	);
}

export default function FAQ() {
	const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({});

	const handleToggle = (id: string) => {
		setOpenItems((prev) => ({...prev, [id]: !prev[id]}));
	};

	return (
		<section className='w-full text-foreground py-16 px-4 md:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='mb-12'>
					<p className='caption mb-2 uppercase tracking-widest'>FAQ'S</p>
					<h2
						className='text-3xl md:text-4xl font-extrabold tracking-tight'
						style={{fontFamily: "var(--font-heading)"}}
					>
						FREQUENTLY ASKED QUESTIONS
					</h2>
				</div>
				<div className='grid md:grid-cols-2 gap-6'>
					<div className='space-y-4'>
						{faqData.slice(0, 5).map((faq) => (
							<AccordionItem
								key={faq.id}
								faq={faq}
								open={!!openItems[faq.id]}
								onClick={() => handleToggle(faq.id)}
							/>
						))}
					</div>
					<div className='space-y-4'>
						{faqData.slice(5).map((faq) => (
							<AccordionItem
								key={faq.id}
								faq={faq}
								open={!!openItems[faq.id]}
								onClick={() => handleToggle(faq.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
