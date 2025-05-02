"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function MaintenanceSupportPage() {
    const faqData = [
        {
          question: "Wat valt er onder “onderhoud” van mijn website?",
          answer: "Onderhoud omvat o.a. updates van plugins en thema’s, beveiligingspatches, back-ups, het monitoren van de prestaties en het oplossen van technische problemen."
        },
        {
          question: "Hoe snel kan ik rekenen op support bij een probleem?",
          answer: "Bij urgente problemen reageer ik zo snel mogelijk — meestal binnen enkele uren. Voor minder dringende vragen kun je rekenen op een reactie binnen 1 werkdag."
        },
        {
          question: "Wat is inbegrepen in de maandelijkse supporturen?",
          answer: "Binnen deze uren kunnen bugs worden opgelost, kleine aanpassingen worden gedaan of nieuwe functies worden toegevoegd — afhankelijk van jouw wensen en het gekozen pakket."
        },
        {
          question: "Kan ik tussentijds overstappen naar een groter of kleiner pakket?",
          answer: "Ja, het is altijd mogelijk om het pakket op- of af te schalen, zolang dit vooraf wordt besproken."
        },
        {
          question: "Is deze dienst alleen voor websites die jij hebt gebouwd?",
          answer: "Nee, ik bied ook onderhoud en support aan voor bestaande websites, mits ze technisch geschikt zijn en ik vooraf een korte analyse kan doen."
        },
        {
          question: "Wat als ik geen wijzigingen heb in een maand?",
          answer: "Ook als er geen aanpassingen nodig zijn, worden er updates en checks uitgevoerd om de site veilig en up-to-date te houden. Ongebruikte supporturen kunnen niet worden meegenomen naar de volgende maand."
        }
    ];

    const maintenanceSupport = services.find(s => s.title === "Onderhoud & support");

    if (!maintenanceSupport) return null;


    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/10 dark:to-slate-900/10">
                <ServiceHero service={maintenanceSupport} />
                <ServiceDetails service={maintenanceSupport} />
            </div>
            <GoogleReviews />
            <FAQ questions={faqData} />
            <Contact />
        </>
    );
}
