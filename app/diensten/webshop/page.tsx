"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function WebshopPage() {
    const faqData = [
        {
          question: "Welke platformen bied je aan voor webshops?",
          answer: "Ik werk voornamelijk met WooCommerce (WordPress), maar ook Shopify. Samen kiezen we het platform dat het beste past bij jouw wensen, producten en groeiplannen."
        },
        {
          question: "Bouw je de webshop helemaal op maat of gebruik je een thema?",
          answer: "Beide opties zijn mogelijk. Ik bied zowel thema-gebaseerde oplossingen (snel en betaalbaar) als volledig custom webshops via de Oxygen Builder (meer vrijheid en maatwerk). Het hangt af van jouw wensen en budget."
        },
        {
          question: "Moet ik de Oxygen builder aanschaffen?",
          answer: "Als de webshop met Oxygen wordt gebouwd draait de webshop op mijn licent zolang je een onderhoudscontract hebt. Dit betekent dat je geen extra kosten hebt voor de Oxygen Builder. Als je geen onderhoudscontract hebt, zul je de licentie na oplevering zelf moeten aanschaffen."
        },
        {
          question: "Is de webshop geschikt voor mobiel gebruik?",
          answer: "Ja, elke webshop die ik bouw is volledig responsive, dus goed bruikbaar op smartphones en tablets."
        },
        {
          question: "Hoe lang duurt het om een webshop te bouwen?",
          answer: "Dat hangt af van de complexiteit en het gekozen pakket. Een thema-gebaseerde webshop kan binnen 2-3 weken live zijn. Een volledig maatwerk oplossing duurt minimaal 4-6 weken."
        },
        {
          question: "Bied je onderhoud & support aan na het opleveren?",
          answer: "Ja, ik bied verschillende onderhoudspakketten aan. Dit omvat updates, back-ups en content updates. Zo blijft jouw webshop altijd veilig en up-to-date."
        }
    ];

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (faqData ?? []).filter(i => i.question && i.answer).map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
            "@type": "Answer",
            text: item.answer, 
            },
        })),
    };

    const webshop = services.find(s => s.title === "Webshop");

    if (!webshop) return null;


    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/10 dark:to-slate-900/10">
                <ServiceHero service={webshop} />
                <ServiceDetails service={webshop} />
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
