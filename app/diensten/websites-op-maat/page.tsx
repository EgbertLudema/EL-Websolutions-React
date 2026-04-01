"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function WebsitesOpMaatPage() {
    const faqData = [
        {
            question: "Bouw je alleen websites of ook webshops?",
            answer: "Beide. Afhankelijk van het project bouw ik een website of webshop die past bij je doelen, inhoud en doelgroep."
        },
        {
            question: "Kun je ook helpen met structuur en inhoud?",
            answer: "Ja. Ik denk mee over pagina-opbouw, gebruiksvriendelijkheid en hoe de website logisch moet werken voor bezoekers."
        },
        {
            question: "Is maatwerk altijd nodig?",
            answer: "Niet altijd volledig, maar maatwerk is vaak wel de beste route als je een website wilt die goed aansluit op je merk en ambities."
        },
        {
            question: "Hoe lang duurt een websiteproject gemiddeld?",
            answer: "Dat hangt af van de omvang, maar kleinere trajecten kunnen binnen enkele weken klaar zijn en grotere projecten nemen meer tijd in beslag."
        },
        {
            question: "Kun je na oplevering ook blijven ondersteunen?",
            answer: "Ja. Ik kan ook na livegang helpen met onderhoud, verbeteringen en verdere doorontwikkeling."
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

    const service = services.find((item) => item.link === "/diensten/websites-op-maat");

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
