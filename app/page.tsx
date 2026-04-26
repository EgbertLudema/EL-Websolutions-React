import Link from "next/link";
import Portfolio from "../components/homepage/portfolio";
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

export const dynamic = "force-dynamic";

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
            <main className="shadow-md light-gradient-bg">
                <div className="container relative flex flex-col gap-3 justify-center items-center pt-12 min-h-screen hero">
                    <p className="inline-flex items-center gap-2.5 px-4 py-1.5 text-sm font-medium text-primary bg-white/10 dark:bg-slate-100/10 backdrop-blur-md rounded-full animate-fade-in">
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/15">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.45)] animate-pulse"></span>
                        </span>
                        <span>Beschikbaar voor {availableMonth}</span>
                    </p>
                    <h1 className="max-w-4xl text-center mb-6 !leading-tight md:leading-snug md:text-4xl lg:text-5xl">
                        Freelance developer voor websites, Shopify en doorontwikkeling
                    </h1>
                    <p className="text-center mb-8 md:mb-0 md:text-lg text-gray-700 dark:text-gray-400">
                        Ik help bedrijven en agencies met maatwerk websites, Shopify development en betrouwbare technische ondersteuning.
                    </p>
                    <p className="text-center hidden md:block text-lg mb-8 text-gray-700 dark:text-gray-400">
                        Van nieuwe builds tot onderhoud en tijdelijke developmentcapaciteit.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <div className="px-8 py-3 gradient-btn shadow-sm transition">Neem contact op</div>
                        </Link>
                        <Link href="/projecten">
                            <div className="py-3 px-8 rounded-lg border border-primary/25 bg-white/40 text-slate-900 hover:bg-white hover:border-primary/40 shadow-sm backdrop-blur-sm transition dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900">
                                Bekijk projecten
                            </div>
                        </Link>
                    </div>
                    <Link
                        href="#services"
                        aria-label="Scroll naar de volgende sectie"
                        className="absolute inset-x-0 bottom-8 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-slate-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 dark:bg-slate-900/65 dark:text-slate-100 dark:hover:bg-slate-900 animate-[bounce_2.4s_ease-in-out_infinite]"
                    >
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </Link>
                </div>
            </main>
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
