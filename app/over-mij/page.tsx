import CTA from '@/components/CTA';
import Draggable from '@/components/Draggable';
import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Over mij - EL-Websolutions",
    description: "Wie is de man achter EL-Websolutions? Ontdek mijn achtergrond, visie en waarden als webdeveloper.",
};

export default function AboutPage() {
    return (
        <div>
            <main className="container mt-[100px] relative flex flex-col justify-center items-center py-8">
                <h1 className="text-center">Over mij</h1>
                <p className="text-center text-slate-600 dark:text-slate-400 pb-12">
                    Leer de ontwikkelaar achter de code kennen. Gepassioneerd over het creëren van mooie en functionele digitale ervaringen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* linker kolom */}
                    <div className="order-2 md:order-1">
                        <div className='flex items-center gap-4 py-4'> 
                            <Draggable /> <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-300">Hoi, ik ben Egbert Ludema</h2>
                        </div>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Ik ben een full-stack developer met ervaring in webontwikkeling sinds 2017. 
                            Ik specialiseer mij in het maken van mooie, functionele en gebruiksvriendelijke websites.
                        </p> 
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Mijn expertise omvat verschillende programmeer talen en frameworks, waaronder Next.js, PHP, JavaScript en SCSS. 
                            Hier iets over dat ik van de details ben en je dat terug zien in mijn werk.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Op dit moment richt ik mij op het bouwen van headless Wordpress-websites met Next.js en het bouwen van Wordpress websites d.m.v. de Oxygen builder.
                        </p>
                        <div className="flex flex-row flex-wrap gap-3 pt-8">
                            <span className="px-3 py-1 tag-selected">Next.js</span>
                            <span className="px-3 py-1 tag-selected">Wordpress</span>
                            <span className="px-3 py-1 tag-selected">Oxygen builder</span>
                            <span className="px-3 py-1 tag-selected">Woocommerce</span>
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
                            Ik vond het leuk om websites te maken, maar ik miste de designvaardigheden en programmeer kennis om echt mooie websites te maken.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Na het afronden van mijn MBO 4 opleiding besloot ik mij meer te richten op het designen van websites en het gebruiken van frameworks. En mij dus ook meer richten op het front-end gedeelte.
                            Hiervoor ben ik de opleiding Communicatie en Multimedia Design gaan volgen aan de NHL Stenden Hogeschool.
                            Tijdens deze opleiding heb ik veel geleerd over designprincipes en wat een website niet alleen mooi maakt, maar vooral functioneel goed maakt.
                        </p>
                    </div>

                    {/* rechter kolom */}
                    <div>
                        <h3 className='text-slate-700 dark:text-slate-300'>Mijn visie</h3>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Ik geloof dat een website er niet alleen goed uit moet zien, maar ook functioneel en gebruiksvriendelijk moet zijn. 
                            Daarom richt ik mij op het maken van websites die niet alleen visueel aantrekkelijk zijn, maar ook eenvoudig te gebruiken zijn.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Ik geloof sterk in de kracht van technologie om de wereld een stukje beter te maken. 
                            Daarom ben ik gepassioneerd over het creëren van digitale ervaringen die mensen helpen om te verbinden en samen plezier te hebben.
                            Dit kun je terug zien in mijn eigen projecten, neem eens een kijkje op mijn persoonlijke portfolio website: <Link className='text-primary hover:opacity-80 transition-opacity' href="https://egbertludema.com" target="_blank">egbertludema.com</Link>.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="container mt-12">
                <h2 className="text-center text-slate-700 dark:text-slate-300">Mijn waarden</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div className='flex flex-col gap-4 justify-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900'>
                        <h3 className='text-slate-800 dark:text-slate-200'>Kwaliteit eerst</h3>
                        <p className='text-slate-600 dark:text-slate-400'>
                            Ik geloof in dingen in één keer goed doen. Elke regel code die ik schrijf en elke designbeslissing die ik neem, doe ik met zorg en oog voor detail.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900'>
                        <h3 className='text-slate-800 dark:text-slate-200'>Meedenkend</h3>
                        <p className='text-slate-600 dark:text-slate-400'>
                            Bij elke vraag van een klant, denk ik mee over de beste oplossing, of het wel nodig is en of er een betere manier is.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900'>
                        <h3 className='text-slate-800 dark:text-slate-200'>Altijd blijven leren</h3>
                        <p className='text-slate-600 dark:text-slate-400'>
                            Ik ben altijd op zoek naar manieren om websites te verbeteren en mijn vaardigheden uit te breiden d.m.v. nieuwe technologieën.
                        </p>
                    </div>
                </div>
            </section>
            <section className="xl:container mt-12 rounded-lg overflow-clip mb-12">
                <CTA />
            </section>
        </div>
    );
}
