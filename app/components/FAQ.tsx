"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    answer:
      "I specialize in portrait, wedding, and lifestyle photography. My style focuses on capturing authentic moments that tell unique stories.",
  },
  {
    id: "item-2",
    question: "WHAT IS YOUR EDITING PROCESS LIKE?",
    answer:
      "My editing process involves color correction, exposure adjustments, and artistic enhancements while maintaining the natural beauty of each image.",
  },
  {
    id: "item-3",
    question: "ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?",
    answer:
      "Yes, all packages include high-resolution digital files delivered through a secure online gallery within 2-3 weeks of your session.",
  },
  {
    id: "item-4",
    question: "DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?",
    answer:
      "Yes, prints are available for purchase. Explore the Prints section for more details on sizes and pricing.",
  },
  {
    id: "item-5",
    question: "HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?",
    answer:
      "You can book a session by contacting me through the contact form, email, or phone. I'll respond within 24 hours to discuss your needs.",
  },
  {
    id: "item-6",
    question: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
    answer:
      "I use professional Canon cameras with a variety of lenses, professional lighting equipment, and backup gear to ensure the highest quality results.",
  },
  {
    id: "item-7",
    question: "CAN I REQUEST A SPECIFIC LOCATION FOR A PHOTOGRAPHY SESSION?",
    answer:
      "I'm happy to work with you to choose the perfect location that matches your vision and style preferences.",
  },
  {
    id: "item-8",
    question: "HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?",
    answer:
      "Edited photos are typically delivered within 2-3 weeks after your session. Rush delivery options are available for an additional fee.",
  },
];

function AccordionItem({ faq, open, onClick }: { faq: any; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border">
      <span
        className="w-full flex items-center justify-between py-6 text-left text-sm font-medium tracking-wide hover:text-accent transition-colors "
        onClick={onClick}
        aria-expanded={open}
        aria-controls={faq.id}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <span>{faq.question}</span>
        <ChevronRight className={`w-5 h-5 ml-2 transition-transform ${open ? 'rotate-90 text-accent' : 'text-muted-foreground'}`} />
      </span>
      <div
        id={faq.id}
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-muted-foreground text-sm leading-relaxed pb-6 pr-2">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full text-foreground py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="caption mb-2 uppercase tracking-widest">FAQ'S</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqData.slice(0, 4).map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                open={!!openItems[faq.id]}
                onClick={() => handleToggle(faq.id)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {faqData.slice(4).map((faq) => (
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