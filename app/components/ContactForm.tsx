"use client";

import {motion} from "framer-motion";
import {Facebook, Instagram, Mail, MapPin, Phone} from "lucide-react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useState} from "react";

// Define the form schema with Zod
const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	subject: z.string().min(5, "Subject must be at least 5 characters"),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to send message");
			}

			setSubmitStatus("success");
			reset();
		} catch (error) {
			console.error("Error sending message:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className='w-full max-w-7xl mx-auto px-4 py-16'>
			<div className='grid lg:grid-cols-2 gap-12'>
				{/* Contact Information */}
				<div className='space-y-8'>
					<div>
						<h3
							className='text-2xl font-bold mb-4'
							style={{fontFamily: "var(--font-heading)"}}
						>
							Get in Touch
						</h3>
						<p className='text-muted-foreground'>Have a project in mind? Let's discuss how we can work together to create something amazing.</p>
					</div>

					<div className='space-y-6'>
						<div className='flex items-start gap-4'>
							<div className='p-3 rounded-full bg-primary/20 text-accent'>
								<Mail size={20} />
							</div>
							<div>
								<h4 className='font-semibold mb-1'>Email</h4>
								<a
									href='mailto:rod16zedo@gmail.com'
									className='text-muted-foreground hover:text-accent transition-colors'
								>
									rod16zedo@gmail.com
								</a>
							</div>
						</div>

						<div className='flex items-start gap-4'>
							<div className='p-3 rounded-full bg-primary/20 text-accent'>
								<Phone size={20} />
							</div>
							<div>
								<h4 className='font-semibold mb-1'>Phone</h4>
								<a
									href='tel:+15714732196'
									className='text-muted-foreground hover:text-accent transition-colors'
								>
									+1 (571) 473-2196
								</a>
								<br />
								<a
									href='tel:+17038988943'
									className='text-muted-foreground hover:text-accent transition-colors'
								>
									(703) 898-8943
								</a>
							</div>
						</div>

						<div className='flex items-start gap-4'>
							<div className='p-3 rounded-full bg-primary/20 text-accent'>
								<MapPin size={20} />
							</div>
							<div>
								<h4 className='font-semibold mb-1'>Location</h4>
								<p className='text-muted-foreground'>Washington DC Metropolitan Area</p>
							</div>
						</div>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Follow Me</h4>
						<div className='flex gap-4'>
							<a
								href='https://www.facebook.com/ethiorodphotography/'
								target='_blank'
								rel='noopener noreferrer'
								className='p-3 rounded-full bg-primary/20 text-accent hover:bg-accent/20 transition-colors'
							>
								<Facebook size={20} />
							</a>
							<a
								href='https://www.instagram.com/rod16photograpy?igsh=MXU4N2JmdTlqaGVoZg%3D%3D&utm_source=qr'
								target='_blank'
								rel='noopener noreferrer'
								className='p-3 rounded-full bg-primary/20 text-accent hover:bg-accent/20 transition-colors'
							>
								<Instagram size={20} />
							</a>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
					className='bg-primary/20 rounded-2xl p-8 border border-border'
				>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-6'
					>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium mb-2'
								>
									Name
								</label>
								<input
									{...register("name")}
									type='text'
									id='name'
									className={`w-full px-4 py-2 rounded-lg bg-background border ${
										errors.name ? "border-red-500" : "border-border"
									} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
									placeholder='Your name'
								/>
								{errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
							</div>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium mb-2'
								>
									Email
								</label>
								<input
									{...register("email")}
									type='email'
									id='email'
									className={`w-full px-4 py-2 rounded-lg bg-background border ${
										errors.email ? "border-red-500" : "border-border"
									} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
									placeholder='Your email'
								/>
								{errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
							</div>
						</div>

						<div>
							<label
								htmlFor='subject'
								className='block text-sm font-medium mb-2'
							>
								Subject
							</label>
							<input
								{...register("subject")}
								type='text'
								id='subject'
								className={`w-full px-4 py-2 rounded-lg bg-background border ${
									errors.subject ? "border-red-500" : "border-border"
								} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
								placeholder="What's this about?"
							/>
							{errors.subject && <p className='mt-1 text-sm text-red-500'>{errors.subject.message}</p>}
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium mb-2'
							>
								Message
							</label>
							<textarea
								{...register("message")}
								id='message'
								rows={6}
								className={`w-full px-4 py-2 rounded-lg bg-background border ${
									errors.message ? "border-red-500" : "border-border"
								} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none`}
								placeholder='Your message'
							/>
							{errors.message && <p className='mt-1 text-sm text-red-500'>{errors.message.message}</p>}
						</div>

						{submitStatus === "success" && <p className='text-green-500 text-sm'>Message sent successfully!</p>}
						{submitStatus === "error" && <p className='text-red-500 text-sm'>Failed to send message. Please try again.</p>}

						<motion.button
							type='submit'
							disabled={isSubmitting}
							whileHover={{scale: 1.02}}
							whileTap={{scale: 0.98}}
							className={`w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors ${
								isSubmitting ? "opacity-50 cursor-not-allowed" : ""
							}`}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</motion.button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
