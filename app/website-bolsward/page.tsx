import CTA from '@/components/CTA';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import CardsBolsward from '@/components/Landingspages/CardsBolsward';
import { FaArrowRight, FaCartShopping, FaWordpress, FaWrench } from 'react-icons/fa6';
import { LuPenTool, LuLaptop } from 'react-icons/lu';
import { TbWorldSearch } from 'react-icons/tb';

export const metadata: Metadata = {
    title: 'Webdesign & website laten maken in Bolsward | EL-Websolutions',
    description:
        'Zoek je webdesign in Bolsward? EL-Websolutions bouwt snelle WordPress-sites, WooCommerce & Shopify webshops en maatwerk Next.js + Payload CMS — gericht op resultaat in Súdwest-Fryslân.',
};

export default function AboutPage() {
    return (
        <div>
            <main className="mt-[87px] relative flex flex-col justify-center">
                {/* HERO */}
                <section className="bg-sky-100">
                    <div className="container min-h-[80vh] flex flex-col items-center justify-center gap-8 py-32">
                        <h1 className="text-center text-6xl">Webdesign & website laten maken in Bolsward</h1>
                        <p className="text-center text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Als ondernemer in <strong>Bolsward</strong> wil je online meteen overtuigen. 
                            Ik ontwerp en ontwikkel websites die <em>snel laden</em>, logisch zijn ingericht en aansluiten bij jouw klanten in 
                            <strong> Súdwest-Fryslân</strong>. Van een compacte site voor de ambachtelijke winkel tot een schaalbare oplossing voor het MKB.
                        </p>
                        <div className="flex justify-center flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <div className="flex flex-row gap-2 items-center px-8 py-3 gradient-btn shadow-sm transition">
                                    Plan gratis kennismaking
                                    <FaArrowRight />
                                </div>
                            </Link>
                            <Link href="/projecten">
                                <div className="py-3 px-8 rounded-lg bg-violet-100 bg-opacity-10 hover:bg-white hover:bg-opacity-20 shadow-sm transition">
                                    Bekijk gerealiseerde projecten
                                </div>
                            </Link>
                        </div>
                        <p className="text-center text-slate-500 mt-4 text-sm">
                            Friese nuchterheid • Duidelijke prijsafspraken • Reactie binnen 24 uur
                        </p>
                    </div>
                </section>

                {/* USP CARDS – UNIEK VOOR BOLSWARD */}
                <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <div className="container flex flex-col gap-4 my-20">
                        <h2 className="text-center text-slate-700 dark:text-slate-300">Waarom kiezen voor EL-Websolutions in Bolsward?</h2>
                        <CardsBolsward />
                    </div>
                </section>

                {/* SERVICES BLOK – ANDERE COPY DAN SNEEK */}
                <section className="container flex flex-col gap-8 my-20">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-3/5 flex flex-col gap-4">
                            <h2 className="text-slate-700 dark:text-slate-300">Van schets tot snelle live-site</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                Jouw website wordt gebouwd met oog voor structuur, toegankelijkheid en conversie. 
                                Geen ruis, wel een glasheldere navigatie en een ontwerp dat past bij jouw verhaal. 
                                We werken in korte sprints, zodat je snel voortgang ziet en kunt bijsturen waar nodig.
                            </p>
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4">Wat ik voor je regel</h3>
                                <ul className="text-slate-600 dark:text-slate-400 flex flex-col gap-2">
                                    <li className="flex flex-row flex-wrap items-center">
                                        <LuPenTool className="text-primary mr-2" />
                                        <strong className="mr-1">Wireframing</strong> – een snelle blauwdruk van de structuur van je website.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <FaWordpress className="text-primary mr-2" />
                                        <strong className="mr-1">WordPress websites</strong> – solide basis die je zelf kunt beheren.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <FaCartShopping className="text-primary mr-2" />
                                        <strong className="mr-1">WooCommerce & Shopify</strong> – klaar voor online verkoop, lokaal, landelijk of wereldwijd.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <LuLaptop className="text-primary mr-2" />
                                        <strong className="mr-1">Next.js + Payload CMS</strong> – maatwerk, razendsnel en uitstekend schaalbaar, goed voor custom oplossingen.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <TbWorldSearch className="text-primary mr-2" />
                                        <strong className="mr-1">SEO & contentstructuur</strong> – betere vindbaarheid door techniek én logische opbouw.
                                    </li>
                                    <li className="flex flex-row flex-wrap items-center">
                                        <FaWrench className="text-primary mr-2" />
                                        <strong className="mr-1">Onderhoud & support</strong> – updates, uitbreidingen en continue optimalisatie.
                                    </li>
                                </ul>
                            </div>
                            <Link href="/diensten" className="w-auto">
                                <div className="inline-flex flex-row gap-2 items-center px-8 py-3 primary-btn transition rounded-lg">
                                    Ontdek alle diensten
                                    <FaArrowRight />
                                </div>
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5 flex justify-center items-center">
                            <Image
                                className="bg-slate-200 dark:bg-slate-900 transition-all duration-100 rounded-lg shadow-lg"
                                src="/images/services/wordpress_thumbnail.jpg"
                                width={1200}
                                height={600}
                                alt="Webdesign en website laten maken in Bolsward"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* DOELGROEP – LOKAAL INGEKLEURD */}
                <section className="bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-900 dark:to-slate-950">
                    <div className="container flex flex-col gap-8 my-20">
                        <h2 className="text-center text-slate-700 dark:text-slate-300">Gemaakt voor ondernemers in en rond Bolsward</h2>
                        <p className="text-center text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            Denk aan lokale specialisten, zorgpraktijken, horeca en vakzaken in de binnenstad van <strong>Bolsward</strong>, 
                            maar ook groeiende <strong>zzp&rsquo;ers</strong> en <strong>MKB</strong> in de regio <strong>Súdwest-Fryslân</strong>. 
                            We richten je site in op wat klanten écht willen doen: contact opnemen, afspraken plannen of direct bestellen.
                        </p>
                        <div className="text-center">
                            <span className="text-sm text-slate-500">
                                Ook actief in: <Link className="underline hover:opacity-80" href="/website-sneek">Sneek</Link>
                                {/* ,{' '}
                                <Link className="underline hover:opacity-80" href="/harlingen">Harlingen</Link>,{' '}
                                <Link className="underline hover:opacity-80" href="/workum">Workum</Link> en omgeving. */}
                            </span>
                        </div>
                    </div>
                </section>
            </main>

            {/* CTA */}
            <section className="xl:container rounded-lg overflow-clip mb-12">
                <CTA
                    title="Sterker online zichtbaar worden in Bolsward?"
                    text="Stuur een bericht en ontvang snel een vrijblijvend voorstel met heldere vervolgstappen."
                />
            </section>

            {/* Structured data: FAQ voor extra SEO-signalen (optioneel) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: [
                            {
                                '@type': 'Question',
                                name: 'Wat kost een website in Bolsward?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text:
                                        'Dat hangt af van ontwerp, aantal pagina’s en gewenste functies (bijv. webshop). Je ontvangt altijd een duidelijke prijsindicatie vooraf en een pakket dat past bij jouw situatie.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Kun je mijn bestaande site verbeteren in plaats van een nieuwe te bouwen?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text:
                                        'Ja. We starten met een snelle scan (techniek, snelheid, content en SEO). Op basis daarvan optimaliseren we stap voor stap of plannen we een gerichte redesign.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Lever je ook tweetalige (NL/Frysk) websites?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text:
                                        'Zeker. Meertalig opzetten kan, inclusief nette URL-structuur en metadata per taal.',
                                },
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}
