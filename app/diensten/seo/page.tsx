"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import Contact from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function SEOPage() {
    const faqData = [
        {
          question: "Hoe wordt de prijs van een project bepaald?",
          answer: "De prijs van een project is afhankelijk van de manier waarop de website gebouwd is(bijvoorbeeld Wordpress of custom), het aantal pagina's en de SEO status nu. Na een eerste gesprek kan ik een schatting geven van de kosten."
        },
        {
          question: "Hoe lang duurt het om alles te optimaliseren?",
          answer: "Een simpele Wordpress website kan binnen 2 dagen geoptimaliseerd worden. Een custom website kan 1-2 weken duren, afhankelijk van de complexiteit. Voor een nauwkeurige inschatting is een eerste gesprek nodig."
        },
        {
          question: "Schrijf je ook content voor websites?",
          answer: "Ja, ik schrijf ook content voor websites. Dit omvat SEO-geoptimaliseerde teksten die zijn afgestemd op jouw doelgroep. Dit laat ik doen in samenwerking met een gespecialiseerde SEO-copywriter."
        },
    ];

    const seo = services.find(s => s.title === "Basic SEO");

    if (!seo) return null;


    return (
        <>
            <div className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/10 dark:to-slate-900/10">
                <ServiceHero service={seo} />
                <ServiceDetails service={seo} />
            </div>            
            <GoogleReviews />
            <FAQ questions={faqData} />
            <Contact />
        </>
    );
}
