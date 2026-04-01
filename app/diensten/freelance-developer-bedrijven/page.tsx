"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function FreelanceDeveloperBedrijvenPage() {
    const faqData = [
        {
            question: "Werk je ook op contractbasis voor bedrijven?",
            answer: "Ja. Ik kan op contractbasis of projectbasis aansluiten als tijdelijke developmentcapaciteit binnen een bedrijf."
        },
        {
            question: "Voor wat voor werk kun je worden ingezet?",
            answer: "Denk aan nieuwe features, websiteverbeteringen, technische support, doorontwikkeling of het oppakken van losse digitale projecten."
        },
        {
            question: "Moet er al een intern developmentteam zijn?",
            answer: "Nee. Ik kan zowel samenwerken met een intern team als zelfstandig werk oppakken wanneer er nog geen vaste developer in huis is."
        },
        {
            question: "Kun je ook meedenken over technische keuzes?",
            answer: "Ja. Naast uitvoering denk ik graag mee over haalbaarheid, prioriteiten en een praktische aanpak die past bij het bedrijf."
        },
        {
            question: "Is dit ook geschikt voor tijdelijke drukte?",
            answer: "Zeker. Juist bij tijdelijke piekdrukte of extra projecten is freelance inzet vaak een efficiënte oplossing."
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

    const service = services.find((item) => item.link === "/diensten/freelance-developer-bedrijven");

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
