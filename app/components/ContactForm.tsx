"use client";

import {motion} from "framer-motion";
import {Facebook, Instagram, Mail, MapPin, Phone} from "lucide-react";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";

// Define the form schema with Zod
const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	phone: z.string().min(10, "Please enter a valid phone number").optional(),
	subject: z.string().min(2, "Subject must be at least 2 characters"),
	serviceType: z.string().min(1, "Please select a service type"),
	package: z.string().optional(),
	additionalInfo: z.string().optional(),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submissionStatus, setSubmissionStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({type: null, message: ""});

	const {
		register,
		handleSubmit,
		reset,
		control,
		watch,
		formState: {errors},
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const selectedService = watch("serviceType");

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		setSubmissionStatus({type: null, message: ""});

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

			setSubmissionStatus({
				type: "success",
				message: "Message sent successfully! We'll get back to you soon.",
			});
			reset();
		} catch (error) {
			console.error("Error sending message:", error);
			setSubmissionStatus({
				type: "error",
				message: "Failed to send message. Please try again later.",
			});
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
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='space-y-2'>
								<Label htmlFor='name'>Name</Label>
								<Input
									id='name'
									{...register("name")}
									placeholder='Your name'
									className='w-full'
								/>
								{errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
							</div>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									{...register("email")}
									placeholder='Your email'
									className='w-full'
								/>
								{errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
							</div>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='phone'>Phone Number (Optional)</Label>
							<Input
								id='phone'
								type='tel'
								{...register("phone")}
								placeholder='Your phone number'
								className='w-full'
							/>
							{errors.phone && <p className='text-sm text-red-500'>{errors.phone.message}</p>}
						</div>

						<div className='space-y-2'>
							<Label htmlFor='serviceType'>Service Type</Label>
							<Controller
								name='serviceType'
								control={control}
								render={({field}) => (
									<Select
										onValueChange={field.onChange}
										value={field.value}
									>
										<SelectTrigger>
											<SelectValue placeholder='Select a service' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='wedding'>Wedding Photography</SelectItem>
											<SelectItem value='portrait'>Portrait Photography</SelectItem>
											<SelectItem value='family'>Family Photography</SelectItem>
											<SelectItem value='graduation'>Graduation Photography</SelectItem>
											<SelectItem value='maternity'>Maternity Photography</SelectItem>
											<SelectItem value='other'>Other</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>
							{errors.serviceType && <p className='text-sm text-red-500'>{errors.serviceType.message}</p>}
						</div>

						{selectedService && (
							<div className='space-y-2'>
								<Label htmlFor='package'>Package Type (Optional)</Label>
								<Controller
									name='package'
									control={control}
									render={({field}) => (
										<Select
											onValueChange={field.onChange}
											value={field.value}
										>
											<SelectTrigger>
												<SelectValue placeholder='Select a package' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='basic'>Basic Package</SelectItem>
												<SelectItem value='standard'>Standard Package</SelectItem>
												<SelectItem value='premium'>Premium Package</SelectItem>
												<SelectItem value='custom'>Custom Package</SelectItem>
											</SelectContent>
										</Select>
									)}
								/>
							</div>
						)}

						<div className='space-y-2'>
							<Label htmlFor='subject'>Subject</Label>
							<Input
								id='subject'
								{...register("subject")}
								placeholder='Subject of your message'
								className='w-full'
							/>
							{errors.subject && <p className='text-sm text-red-500'>{errors.subject.message}</p>}
						</div>

						<div className='space-y-2'>
							<Label htmlFor='additionalInfo'>Additional Information (Optional)</Label>
							<Textarea
								id='additionalInfo'
								{...register("additionalInfo")}
								placeholder='Any specific requirements or details about your request'
								className='w-full min-h-[100px]'
							/>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='message'>Message</Label>
							<Textarea
								id='message'
								{...register("message")}
								placeholder='Your message'
								className='w-full min-h-[150px]'
							/>
							{errors.message && <p className='text-sm text-red-500'>{errors.message.message}</p>}
						</div>

						{submissionStatus.type && (
							<div className={`p-4 rounded-md ${submissionStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
								{submissionStatus.message}
							</div>
						)}

						<Button
							type='submit'
							disabled={isSubmitting}
							className='w-full bg-accent hover:bg-accent/90 text-white'
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
