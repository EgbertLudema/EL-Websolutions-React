import CTA from '@/components/CTA';
import Draggable from '@/components/Draggable';
import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from "next";
import MyValues from '@/components/MyValues';

export const metadata: Metadata = {
    title: "Over mij - EL-Websolutions",
    description: "Wie is de man achter EL-Websolutions? Ontdek mijn achtergrond, visie en waarden als webdeveloper.",
};

export default function AboutPage() {
    return (
        <div>
            <main className="container mt-[100px] relative flex flex-col justify-center items-center py-8">
                <h1 className="text-center">Over mij</h1>
                <p className="text-center text-slate-600 dark:text-slate-400 mt-2 pb-12">
                    Leer de ontwikkelaar achter de code kennen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* linker kolom */}
                    <div className="order-2 md:order-1">
                        <div className='flex items-center gap-4 py-4'> 
                            <Draggable /> <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-300">Hoi, ik ben Egbert Ludema</h2>
                        </div>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Ik ben een full-stack developer met de voorkeur naar front-end en design. 
                            Ik specialiseer mij in het maken van mooie, functionele, unieke en gebruiksvriendelijke websites.
                        </p> 
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Mijn expertise omvat verschillende programmeer talen en frameworks, waaronder Next.js, Payload CMS, TypeScript en SCSS.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Op dit moment richt ik mij op het bouwen van op maat gemaakte Wordpress-websites d.m.v. de Oxygen builder, maar het liefst op volledig gecustomized websites d.m.v. Next.js + Payload CMS.
                        </p>
                        <div className="flex flex-row flex-wrap gap-3 pt-8">
                            <span className="px-3 py-1 tag-selected">Next.js</span>
                            <span className="px-3 py-1 tag-selected">Wordpress</span>
                            <span className="px-3 py-1 tag-selected">Oxygen builder</span>
                            <span className="px-3 py-1 tag-selected">Woocommerce</span>
                            <span className="px-3 py-1 tag-selected">Shopify</span>
                            <span className="px-3 py-1 tag-selected">UI/UX Design</span>
                        </div>
                        <div className="flex flex-row gap-4 pt-8">
                            <Link className='py-2 px-4 primary-btn' href="/contact">
                                Neem contact op
                            </Link>
                            <Link className='py-2 px-4 secondair-btn' href="/diensten">
                                Mijn diensten
                            </Link>
                        </div>
                    </div>

                    {/* rechter kolom */}
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <Image 
                            className="bg-slate-200 dark:bg-slate-900 transition-all duration-100 rounded-lg shadow-lg" 
                            src="/images/Portret_Egbert_NoBG.png" 
                            width={500} 
                            height={500} 
                            alt="Afbeelding van Egbert Ludema" 
                        />
                    </div>
                </div>
            </main>
            
            <section className="container mt-12">
                <h2 className="text-center text-slate-700 dark:text-slate-300">Mijn verhaal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {/* linker kolom */}
                    <div>
                        <h3 className='text-slate-700 dark:text-slate-300'>Hoe het begon</h3>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Vanaf jongs af aan ben ik altijda al geïnteresseerd geweest in de werking van computers, technologie en het internet. 
                            Ik wist dus al snel dat ik de opleiding Applicatie- en Mediaontwikkeling MBO4 wilde volgen. 
                            Maar, hier leerde ik alleen de basis van webdevelopment en een deel back-end. 
                            Dit terwijl ik juist meer interesse had in het design van een website. 
                            Zo wist ik hoe ik een website werkend moest krijgen, maar miste het stukje werken maken kwa user experience en interface!
                            Dit leide mij naar de opleiding Communicatie en Multimedia Design aan de NHL Stenden Hogeschool.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Tijdens deze opleiding heb ik veel geleerd over designprincipes en wat een website niet alleen mooi maakt, maar vooral functioneel goed maakt.
                            Hier kreeg ik de passie om unieke, mooie en functionele website te maken.
                            Zo ben ik vanaf nu van plan om al mijn websites zelf te ontwerpen op een zo&apos;n uniek mogelijke, maar vooral functionele manier.
                            Dit doe ik door gebruik te maken van de nieuwste technologieën en frameworks, zoals Next.js, Payload CMS en TypeScript.
                        </p>
                    </div>

                    {/* rechter kolom */}
                    <div>
                        <h3 className='text-slate-700 dark:text-slate-300'>Mijn visie</h3>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Ik geloof dat een website er niet alleen goed uit moet zien, maar ook functioneel, uniek en gebruiksvriendelijk moet zijn. 
                            Daarom richt ik mij op het maken van websites die niet alleen visueel aantrekkelijk zijn, maar ook eenvoudig te gebruiken zijn.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Mijn doel is om bedrijven te helpen hun online aanwezigheid te verbeteren door het creëren van op maat gemaakte websites die aansluiten bij hun merk en doelgroep.
                            Zo moet ik soms de wensen van het bedrijf aan de kant leggen om te kijken wat de klant nu echt nodig heeft. 
                            Dit doe ik door kort onderzoek te doen naar de doelgroep waarna ik een passend design voorstel waarin ik zoveel mogelijk rekening houd met de wensen van het bedrijf.
                            Op deze manier probeer ik het web een stukje beter te maken, niet alleen voor het bedrijf, maar vooral voor de gebruikers.
                        </p>
                    </div>
                </div>
            </section>
            
            <MyValues />
            
            <section className="xl:container mt-12 rounded-lg overflow-clip mb-12">
                <CTA />
            </section>
        </div>
    );
}
