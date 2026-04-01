"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function OnderhoudDoorontwikkelingPage() {
    const faqData = [
        {
            question: "Is deze dienst alleen voor websites die jij zelf hebt gebouwd?",
            answer: "Nee. Ik kan ook bestaande websites en webshops onderhouden of doorontwikkelen, zolang de technische basis geschikt is."
        },
        {
            question: "Wat valt onder doorontwikkeling?",
            answer: "Dat kan gaan om nieuwe features, technische verbeteringen, snelheid, UX-aanpassingen, bugfixes en uitbreidingen van bestaande functionaliteit."
        },
        {
            question: "Kun je ook periodiek onderhoud doen?",
            answer: "Ja. Dat kan maandelijks, op afroep of in een vaste samenwerking, afhankelijk van wat het project nodig heeft."
        },
        {
            question: "Hoe snel kun je helpen bij problemen?",
            answer: "Bij urgente issues probeer ik snel te schakelen. Voor regulier werk plannen we samen prioriteiten en doorlooptijd in."
        },
        {
            question: "Is deze service ook interessant na livegang van een nieuw project?",
            answer: "Ja. Juist na livegang is het vaak waardevol om een vaste developer achter de hand te hebben voor verbeteringen en support."
        }
    ];

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    const service = services.find((item) => item.link === "/diensten/onderhoud-doorontwikkeling");

    if (!service) {
        return null;
    }

    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/10 dark:to-slate-900/10">
                <ServiceHero service={service} />
                <ServiceDetails service={service} />
            </div>
            <GoogleReviews />
            <FAQ questions={faqData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Contact />
        </>
    );
}
