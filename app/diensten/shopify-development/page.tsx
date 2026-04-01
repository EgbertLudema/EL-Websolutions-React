"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function ShopifyDevelopmentPage() {
    const faqData = [
        {
            question: "Werk je alleen met nieuwe Shopify shops?",
            answer: "Nee. Ik werk zowel aan nieuwe Shopify shops als aan bestaande thema's die uitgebreid of verbeterd moeten worden."
        },
        {
            question: "Moet alles volledig custom worden gebouwd?",
            answer: "Nee. Vaak is het juist slimmer om vanuit een goede Shopify basis te werken en die gericht uit te breiden met maatwerk."
        },
        {
            question: "Welke aanpassingen kun je binnen Shopify doen?",
            answer: "Bijvoorbeeld custom secties, extra contentblokken, templates, productpresentatie, visuele verbeteringen en conversiegerichte uitbreidingen."
        },
        {
            question: "Kun je ook bestaande thema's verbeteren?",
            answer: "Ja. Ik kan ook binnen een bestaand thema werken en daar extra flexibiliteit of nieuwe functionaliteit aan toevoegen."
        },
        {
            question: "Is Shopify maatwerk geschikt voor groeiende webshops?",
            answer: "Zeker. Juist als je webshop groeit, helpt maatwerk om je branding, content en winkelervaring beter te laten aansluiten."
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

    const service = services.find((item) => item.link === "/diensten/shopify-development");

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
