import Portfolio from "../components/homepage/portfolio";
import Hero from "@/components/homepage/Hero";
import { getAllProjects } from "@/lib/server/getProjects";
import Blog from "@/components/homepage/blog";
import { getAllBlogs } from "@/lib/server/getBlogs";
import Services from "@/components/homepage/services";
import USPS from "@/components/homepage/usps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/ContactSection";
import GoogleReviews from "@/components/googleReviews";
import type { Metadata } from "next";
import MyValues from "@/components/MyValues";

export const metadata: Metadata = {
    title: "EL-Websolutions",
    description: "Ik ben een freelance webdeveloper die gespecialiseerd is in het bouwen van op maat gemaakte websites. Met een focus op gebruiksvriendelijkheid en design, biedt ik oplossingen die aan jouw specifieke behoeften voldoen.",
};

// Revalidate hourly instead of forcing a dynamic render on every request — the only
// time-sensitive value on this page is the "Beschikbaar voor <month>" label, which only
// needs to change once a month, so ISR is far cheaper than force-dynamic without any
// noticeable staleness.
export const revalidate = 3600;

export default async function HomePage() {
    const allProjects = await getAllProjects();
    const allBlogs = await getAllBlogs();
    const now = new Date();
    const dateParts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Amsterdam",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }).formatToParts(now);
    const getPart = (type: "year" | "month" | "day") =>
        Number(dateParts.find((part) => part.type === type)?.value);
    const localYear = getPart("year");
    const localMonth = getPart("month");
    const localDay = getPart("day");
    const availableMonthDate = new Date(Date.UTC(localYear, localMonth - 1 + (localDay >= 21 ? 1 : 0), 1));
    const availableMonth = new Intl.DateTimeFormat("nl-NL", {
        month: "long",
        timeZone: "UTC",
    }).format(availableMonthDate);
    const faqData = [
        {
            question: "Hoe ziet jouw ontwikkelproces eruit?",
            answer: "Mijn ontwikkelproces begint met een grondig begrip van jouw wensen en doelen. Ik maak wireframes en prototypes ter goedkeuring voordat ik start met de ontwikkeling. Tijdens het hele traject geef ik regelmatig updates en is er ruimte voor feedback, zodat het eindproduct aan jouw verwachtingen voldoet."
        },
        {
            question: "Hoe lang duurt het om een project af te ronden?",
            answer: "De doorlooptijd hangt af van de complexiteit en omvang. Een eenvoudige website kan binnen 2–4 weken klaar zijn, terwijl complexere webapplicaties 2–3 maanden kunnen duren. Tijdens het eerste gesprek geef ik een nauwkeurigere inschatting op basis van jouw specifieke wensen."
        },
        {
            question: "Bied je ook onderhoud en ondersteuning aan?",
            answer: "Ja, ik bied diverse onderhoudspakketten aan om je website veilig, up-to-date en soepel draaiend te houden. Dit omvat regelmatige back-ups, beveiligingsupdates, prestatieoptimalisatie en inhoudelijke updates waar nodig."
        },
        {
            question: "Hoe ga je om met revisies en feedback?",
            answer: "Feedback is een essentieel onderdeel van het ontwikkelproces. In mijn standaardpakketten zijn twee revisierondes voor op de designs inbegrepen. We plannen momenten in waarop je jouw feedback kunt delen zodat ik deze kan verwerken in het design."
        },
        {
            question: "In welke technologieën ben je gespecialiseerd?",
            answer: "Ik werk met moderne webtechnologieën zoals Next.js en Payload CMS. Voor e-commerce werk ik met platformen als Shopify en WooCommerce."
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

    return (
        <>
            <Hero availableMonth={availableMonth} />
            <Services />
            <Portfolio allProjects={allProjects} />  
            <USPS />
            <GoogleReviews />
            <MyValues />
            <CTA />
            <Blog allBlogs={allBlogs} />
            <FAQ questions={faqData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Contact />
        </>
    );
}
