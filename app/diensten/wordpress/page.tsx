"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function WordpressPage() {
    const faqData = [
        {
          question: "Wat is het voordeel van een WordPress-website met Oxygen Builder?",
          answer: "Oxygen Builder maakt het mogelijk om volledig maatwerk te leveren, zonder beperkingen van standaardthema’s. Je website is daardoor uniek, snel en precies zoals jij het wilt."
        },
        {
          question: "Kan ik zelf mijn website beheren na oplevering?",
          answer: "Ja! Je krijgt een duidelijke handleiding en een korte training, zodat je zelfstandig pagina’s, teksten en afbeeldingen kunt aanpassen."
        },
        {
          question: "Hoe lang duurt het bouwen van een WordPress-website?",
          answer: "Gemiddeld duurt dit 2 tot 4 weken, afhankelijk van de complexiteit en het aantal pagina’s. Met wireframes en ontwerp kan dit korter zijn."
        },
        {
          question: "Moet ik de Oxygen builder aanschaffen?",
          answer: "Zolang je een onderhoudscontract hebt, draait de website op mijn licentie. Dit betekent dat je geen extra kosten hebt voor de Oxygen Builder. Als je geen onderhoudscontract hebt, zul je de licentie na oplevering zelf moeten aanschaffen."
        },
        {
          question: "Is hosting inbegrepen in de prijs?",
          answer: "Nee, hosting is niet standaard inbegrepen, je kunt de hosting door mij laten doe of zelf iets regelen."
        },
        {
          question: "Is mijn website mobielvriendelijk?",
          answer: "Ja, standaard zijn alle websites die ik maak responsive. Dit betekent dat ze goed functioneren op zowel desktop- als mobiele apparaten."
        },
        {
          question: "Kan ik later nog nieuwe functies of pagina’s toevoegen?",
          answer: "Zeker! WordPress is zeer uitbreidbaar. Je kunt eenvoudig nieuwe pagina’s, contactformulieren, integraties of zelfs een webshop toevoegen."
        },
        {
          question: "Is SEO inbegrepen in het bouwproces?",
          answer: "Standaard zorg ik ervoor dat de basis SEO goed is ingesteld. Dit omvat het optimaliseren van titels, meta-beschrijvingen en URL-structuur. Voor uitgebreide SEO-diensten bied ik aparte pakketten aan."
        },
        {
          question: "Wat als ik na oplevering toch nog hulp nodig heb?",
          answer: "Geen probleem! Je kunt kiezen voor een aanvullend onderhouds- en supportpakket, waarmee ik je blijf ondersteunen en de site veilig en up-to-date blijft. Of je kunt me gewoon een berichtje sturen."
        }
    ];

    const wordpress = services.find(s => s.title === "Wordpress website");

    if (!wordpress) return null;


    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/10 dark:to-slate-900/10">
                <ServiceHero service={wordpress} />
                <ServiceDetails service={wordpress} />
            </div>
            <GoogleReviews />
            <USPS />
            <FAQ questions={faqData} />
            <Contact />
        </>
    );
}
