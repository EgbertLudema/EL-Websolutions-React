import CTA from '@/components/CTA';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import CardsFriesland from '@/components/Landingspages/CardsFriesland';
import { FaArrowRight, FaCartShopping, FaWordpress, FaWrench } from 'react-icons/fa6';
import { LuPenTool, LuLaptop } from 'react-icons/lu';
import { TbWorldSearch } from 'react-icons/tb';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'Website laten maken in Friesland | Webdesign & SEO | EL-Websolutions',
    description:
        'Op zoek naar webdesign in Friesland? EL-Websolutions bouwt snelle WordPress, WooCommerce, Shopify en maatwerk websites. Vraag een gratis kennismaking aan!',
};

export default function FrieslandPage() {
    const faqData = [
        {
        question: 'Wat kost een website in Friesland?',
        answer:
            'De prijs hangt af van ontwerp, aantal pagina&rsquo;s en functies (zoals webshop of meertaligheid). Je krijgt vooraf een heldere prijsinschatting en planning.',
        },
        {
        question: 'Hoe snel kan mijn website live?',
        answer:
            'Een compacte site staat vaak binnen 2 tot 4 weken live. Bij grotere projecten werk ik met korte sprints en tussentijdse opleveringen.',
        },
        {
        question: 'Werk je met WordPress of maatwerk?',
        answer:
            'Beide. In veel gevallen is WordPress ideaal. Hierbij maak ik GEEN gebruik van een template, maar bouw ik de website 100% op maar. Voor maximale snelheid en flexibiliteit bouw ik maatwerk met Next.js en Payload CMS.',
        },
        {
        question: 'Kun je mijn bestaande site verbeteren?',
        answer:
            'Ja. Ik start met een scan op snelheid, SEO, toegankelijkheid en content. Op basis daarvan optimaliseer ik gericht of plannen we een redesign.',
        },
        {
        question: 'Is meertaligheid (NL/ENG/FRL) mogelijk?',
        answer:
            'Zeker. Ik richt URL-structuur, metadata en content per taal netjes in, zodat vindbaarheid en consistentie geborgd zijn.',
        },
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
        <div>
            <main className="mt-[87px] relative flex flex-col justify-center">
                {/* HERO */}
                <section className="bg-sky-100 dark:bg-sky-100/10">
                    <div className="container min-h-[80vh] flex flex-col items-center justify-center gap-8 py-32">
                        <h1 className="text-center text-6xl">Website laten maken in Friesland</h1>
                        <p className="text-center text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Voor Friese ondernemers die online het verschil willen maken. 
                            Ik ontwerp en bouw websites die <em>snel</em> laden, helder gestructureerd zijn 
                            en converteren. Van zzp&rsquo;ers tot MKB en organisaties in de hele provincie.
                        </p>
                        <div className="flex justify-center flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <div className="flex flex-row gap-2 items-center px-8 py-3 gradient-btn shadow-sm transition">
                                    Vraag een gratis kennismaking aan
                                    <FaArrowRight />
                                </div>
                            </Link>
                            <Link href="/projecten">
                                <div className="py-3 px-8 rounded-lg bg-violet-100 bg-opacity-10 hover:bg-white hover:bg-opacity-20 shadow-sm transition">
                                    Bekijk recente projecten
                                </div>
                            </Link>
                        </div>
                        <p className="text-center text-slate-500 mt-4 text-sm">
                            Heldere prijs • Snelle oplevering • Geen verplichtingen
                        </p>
                    </div>
                </section>

                {/* USP CARDS – PROVINCIE-FOCUS */}
                <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <div className="container flex flex-col gap-4 my-20">
                        <h2 className="text-center text-slate-700 dark:text-slate-300">Waarom EL-Websolutions voor Friesland?</h2>
                        <CardsFriesland />
                    </div>
                </section>

                {/* DIENSTEN – ANDERE COPY */}
                <section className="container flex flex-col gap-8 my-20">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-3/5 flex flex-col gap-4">
                            <h2 className="text-slate-700 dark:text-slate-300">Van idee naar impactvolle website</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                We starten met een klikbaar wireframe zodat navigatie en contentflow direct kloppen. 
                                Daarna vertalen we dit naar een schaalbare, snelle website met aandacht voor toegankelijkheid, 
                                performance en SEO. Perfect voor sectoren die in Friesland sterk vertegenwoordigd zijn 
                                (toerisme, bouw, zorg, retail, maakindustrie).
                            </p>
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4">Wat ik voor je regel</h3>
                                <ul className="text-slate-600 dark:text-slate-400 flex flex-col gap-2">
                                    <li className="flex flex-row flex-wrap items-center">
                                        <LuPenTool className="text-primary mr-2" />
                                        <strong className="mr-1">Wireframing</strong> – snel itereren met een klikbare blauwdruk.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <FaWordpress className="text-primary mr-2" />
                                        <strong className="mr-1">WordPress websites</strong> – solide CMS dat je zelf kunt beheren.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <FaCartShopping className="text-primary mr-2" />
                                        <strong className="mr-1">WooCommerce & Shopify</strong> – verkoop lokaal of landelijk zonder gedoe.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <LuLaptop className="text-primary mr-2" />
                                        <strong className="mr-1">Next.js + Payload CMS</strong> – maatwerk met topsnelheid en flexibiliteit.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <TbWorldSearch className="text-primary mr-2" />
                                        <strong className="mr-1">SEO & content</strong> – technische optimalisaties + logische contentstructuur.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <FaWrench className="text-primary mr-2" />
                                        <strong className="mr-1">Onderhoud & doorontwikkeling</strong> – updates, uitbreidingen en support.
                                    </li>
                                </ul>
                            </div>
                            <Link href="/diensten" className="w-auto">
                                <div className="inline-flex flex-row gap-2 items-center px-8 py-3 primary-btn transition rounded-lg">
                                    Bekijk alle diensten
                                    <FaArrowRight />
                                </div>
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5 flex justify-center items-center">
                            <Image
                                className="bg-slate-200 dark:bg-slate-900 transition-all duration-100 rounded-lg shadow-lg"
                                src="/images/services/image_5.jpg"
                                width={1200}
                                height={600}
                                alt="Webdesign en website laten maken in Friesland"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* DOELGROEP + INTERNE LINKS */}
                <section className="bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-900 dark:to-slate-950">
                    <div className="container flex flex-col gap-8 my-20">
                        <h2 className="text-center text-slate-700 dark:text-slate-300">Provinciebreed actief</h2>
                        <p className="text-center text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            Ik help <strong>zzp&rsquo;ers</strong>, <strong>MKB</strong> en organisaties in heel <strong>Friesland</strong>: 
                            van de binnenstad van Leeuwarden tot de Friese Meren en de Waddenkust. 
                            Focus op wat telt: vindbaarheid, snelheid en conversie.
                        </p>
                        <div className="text-center">
                            <span className="text-sm text-slate-500">
                                Ook aparte landingspagina&rsquo;s voor:{" "}
                                <Link className="underline hover:opacity-80" href="/website-sneek">Sneek</Link>,{" "}
                                <Link className="underline hover:opacity-80" href="/website-bolsward">Bolsward</Link>,{" "}
                            </span>
                        </div>
                    </div>
                </section>
            </main>

            {/* CTA */}
            <section className="xl:container rounded-lg overflow-clip mb-12">
                <CTA
                    title="Sterker online aanwezig in Friesland?"
                    text="Laat weten wat je plannen zijn, dan stuur ik snel een duidelijk voorstel met vervolgstappen."
                />
            </section>

            <FAQ questions={faqData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
        </div>
    );
}
