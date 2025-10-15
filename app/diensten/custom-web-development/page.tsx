"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function CustomWebsitePage() {
    const faqData = [
        {
          question: "Wat is jouw ontwikkelproces?",
          answer: "Mijn ontwikkelproces begint met een grondig begrip van jouw wensen en doelen. Ik maak wireframes en prototypes ter goedkeuring voordat ik start met de ontwikkeling. Tijdens het hele traject geef ik regelmatig updates en is er ruimte voor feedback, zodat het eindproduct aan jouw verwachtingen voldoet."
        },
        {
          question: "Hoelang duurt het gemiddeld om een project af te ronden?",
          answer: "Gemiddeld duurt het 3-4 weken om een eenvoudige website te ontwikkelen. Complexere websites kunnen 1-3 maanden duren. De exacte tijdlijn hangt af van de specificaties en functionaliteiten die je nodig hebt. Tijdens ons eerste gesprek kan ik een nauwkeuriger tijdsbestek geven op basis van jouw wensen."
        },
        {
          question: "Is hosting inbegrepen in de prijs?",
          answer: "Nee, hosting is niet standaard inbegrepen. Voor het maken van een custom webshop, is het het gebruiksvriendelijk en het best om dit bij Vercel te hosten."
        },
        {
          question: "Bied je ook onderhoud en ondersteuning aan?",
          answer: "Ja, ik bied verschillende onderhoudspakketten aan om je website veilig, up-to-date en soepel draaiend te houden. Veel van deze pakketten bevatten maandelijks onderhoud, contentupdates, en technische ondersteuning. Dit zorgt ervoor dat je website altijd optimaal presteert."
        },
        {
          question: "Hoe bouw je een custom website?",
          answer: "Voor het bouwen van een custom website bouw ik een headless Wordpress website door de frontend te scheiden van de backend(Wordpress). Dit biedt de mogelijkheid om de frontend te bouwen met moderne technologieën zoals React, Next.js en Tailwind CSS. Dit zorgt voor een unieke en op maat gemaakte ervaring die is afgestemd op jouw specifieke behoeften."
        },
        {
          question: "Wat houd headless in?",
          answer: "Headless betekent dat de frontend van de backend is gescheiden. Dit biedt meer flexibiliteit en controle over het ontwerp en de functionaliteit van de website. Het stelt ons in staat om moderne technologieën te gebruiken voor de frontend, terwijl we profiteren van de contentbeheermogelijkheden van Wordpress aan de achterkant. Op deze manier blijft het mogelijk om de content eenvoudig te beheren, terwijl je wel een unieke op maat gemaakte website hebt."
        },
        {
          question: "Wat betekend CMS?",
          answer: "CMS staat voor Content Management System. Het stelt gebruikers in staat om eenvoudig inhoud toe te voegen, te bewerken en te publiceren op hun website. Een mooi voorbeeld hiervan is Wordpress."
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

    const customWebsite = services.find(s => s.title === "Custom web development");

    if (!customWebsite) return null;


    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/10 dark:to-slate-900/10">
                <ServiceHero service={customWebsite} />
                <ServiceDetails service={customWebsite} />
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
