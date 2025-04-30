import Link from "next/link";
import Portfolio from "../components/homepage/portfolio";
import { getAllProjects } from "@/lib/server/getProjects";
import Blog from "@/components/homepage/blog";
import { getAllBlogs } from "@/lib/server/getBlogs";
import Services from "@/components/homepage/services";
import USPS from "@/components/homepage/usps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import GoogleReviews from "@/components/googleReviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "EL-Websolutions",
    description: "EL-Websolutions is een freelance webdeveloper die gespecialiseerd is in het bouwen van op maat gemaakte websites en webapplicaties. Met een focus op gebruiksvriendelijkheid en esthetiek, biedt EL-Websolutions oplossingen die aan jouw specifieke behoeften voldoen.",
};

export default async function HomePage() {
    const allProjects = await getAllProjects();
    const allBlogs = await getAllBlogs();
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
            answer: "Feedback is een essentieel onderdeel van het ontwikkelproces. In mijn standaardpakketten zijn twee revisierondes inbegrepen. We plannen momenten in waarop je jouw feedback kunt delen, en ik verwerk deze zo snel mogelijk."
        },
        {
            question: "In welke technologieën ben je gespecialiseerd?",
            answer: "Ik werk met moderne webtechnologieën zoals React, Next.js, TypeScript, Node.js en diverse CSS-frameworks zoals Tailwind CSS. Voor e-commerce werk ik met platformen als Shopify en WooCommerce."
        }
    ];

    return (
        <>
            <main className="shadow-md light-gradient-bg">
                <div className="container relative flex flex-col justify-center items-center pt-12 min-h-screen hero">
                    <p className="text-center sub-title px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 dark:bg-slate-100/10 backdrop-blur-md rounded-full text-primary animate-fade-in">
                        Beschikbaar voor projecten
                    </p>
                    <h1 className="text-center mb-6 leading-tight md:leading-snug">
                        Digitale ervaringen op maat
                    </h1>
                    <p className="text-center mb-8 md:mb-0 md:text-lg text-gray-700 dark:text-gray-400">
                        Full-stack developer gespecialiseerd in het bouwen van mooie, functionele en gebruiksvriendelijke websites
                    </p>
                    <p className="text-center hidden md:block text-lg mb-8 text-gray-700 dark:text-gray-400">
                        Op maat gemaakt. Afgestemd op de eisen van de klant en de doelgroep.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <div className="px-8 py-3 gradient-btn shadow-sm transition">Neem contact op</div>
                        </Link>
                        <Link href="/projecten">
                            <div className="py-3 px-8 rounded-lg bg-violet-100 bg-opacity-10 hover:bg-white hover:bg-opacity-20 shadow-sm transition">Bekijk projecten</div>
                        </Link>
                    </div>
                    <div></div>
                    <svg className="animate-bounce mt-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                    </svg>
                </div>
            </main>
            <Services />
            <Portfolio allProjects={allProjects} />  
            <USPS />
            <GoogleReviews />
            <CTA />
            <Blog allBlogs={allBlogs} />
            <FAQ questions={faqData} />
            <Contact />
        </>
    );
}
