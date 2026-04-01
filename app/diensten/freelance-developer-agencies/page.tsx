"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function FreelanceDeveloperAgenciesPage() {
    const faqData = [
        {
            question: "Kun je white-label voor een agency werken?",
            answer: "Ja. Ik kan white-label meewerken aan klantprojecten en aansluiten op jullie bestaande werkwijze, planning en communicatie."
        },
        {
            question: "Op welke manier kun je worden ingezet?",
            answer: "Dat kan per project, per sprint, voor vaste dagdelen of als tijdelijke versterking tijdens drukke periodes."
        },
        {
            question: "Werk je alleen aan nieuwe builds?",
            answer: "Nee. Ik kan ook instappen op bestaande projecten voor doorontwikkeling, optimalisaties, Shopify-aanpassingen of technische afronding."
        },
        {
            question: "Hoe snel kun je aansluiten?",
            answer: "Dat hangt af van de planning, maar meestal kan ik vrij snel schakelen als de scope en verwachtingen duidelijk zijn."
        },
        {
            question: "Met welke type agencies werk je samen?",
            answer: "Vooral met designbureaus, marketing agencies en webbureaus die een betrouwbare freelance developer zoeken voor uitvoering en technische ondersteuning."
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

    const service = services.find((item) => item.link === "/diensten/freelance-developer-agencies");

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
            <USPS />
            <FAQ questions={faqData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Contact />
        </>
    );
}
