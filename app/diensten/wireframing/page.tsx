"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function Wireframing() {
    const faqData = [
        {
          question: "Wat is een wireframe precies?",
          answer: "Een wireframe is een schematische weergave van een website of app. Het toont de indeling, structuur en functionaliteit, zonder afleiding van kleuren, afbeeldingen of tekststijlen."
        },
        {
          question: "Waarom is wireframing belangrijk?",
          answer: "Wireframing helpt om de gebruikerservaring te plannen, potentiële problemen vroegtijdig op te sporen en zorgt voor een duidelijk plan voordat het echte ontwerp en de ontwikkeling starten. Dit bespaart tijd en kosten op de lange termijn."
        },
        {
          question: "Is een wireframe hetzelfde als een ontwerp?",
          answer: "Nee. Een wireframe is een functionele schets van je website of app, zonder grafische afwerking. Het is een stap vóór het visuele ontwerp."
        },
        {
          question: "Wat krijg ik precies als eindresultaat?",
          answer: "Je ontvangt één of meerdere low-fidelity wireframes in PDF of via een tool zoals Figma(wat jouw voorkeur is). Deze tonen de structuur van je pagina’s, inclusief indeling van knoppen, navigatie en contentblokken."
        },
        {
          question: "Kan ik wijzigingen laten aanbrengen in de wireframes?",
          answer: "Ja, je kunt altijd feedback geven en 2 correctierondes zijn inbegrepen. Samen zorgen we dat het wireframe aansluit op jouw wensen en doelen."
        },
        {
          question: "Hoe lang duurt het maken van een wireframe?",
          answer: "Afhankelijk van de grootte van het project meestal 1 tot 2 werkdagen. De homepage kan na 1 werkdag al klaar zijn. Dit is natuurlijk afhankelijk van de complexiteit van de website en het aantal pagina's dat je wilt laten maken."
        },
        {
          question: "Voor welke projecten is wireframing geschikt?",
          answer: "Wireframing is nuttig voor alle soorten websites of applicaties — van eenvoudige landingspagina’s tot complexe platforms of webshops."
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

    const wireframing = services.find(s => s.title === "Wireframing");

    if (!wireframing) return null;


    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/10 dark:to-slate-900/10">
                <ServiceHero service={wireframing} />
                <ServiceDetails service={wireframing} />
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
