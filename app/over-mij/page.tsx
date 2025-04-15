import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import Draggable from '@/components/Draggable';
import Image from "next/image";
import Link from 'next/link';

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
                            Mijn expertise omvat verschillende technologieën, waaronder Next.js, Svelte, Kotlin, Laravel en MySQL. 
                            Altijd op zoek naar nieuwe uitdagingen, blijf ik leren en groeien als developer.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Op dit moment richt ik mij op het bouwen van headless Wordpress-websites met Next.js.
                        </p>
                        <div className="flex flex-row flex-wrap gap-3 pt-8">
                            <span className="px-3 py-1 tag-selected">Next.js</span>
                            <span className="px-3 py-1 tag-selected">Wordpress</span>
                            <span className="px-3 py-1 tag-selected">Jetpack Compose</span>
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
                    <div className="flex justify-end order-1 md:order-2">
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
                            Mijn reis in webontwikkeling begon toen ik de opleiding Applicatie- en Mediaontwikkeling MBO4 volgde aan ROC Friese Poort. 
                            Hier leerde ik de basis van webdevelopment, maar miste ik de designvaardigheden om echt mooie websites te maken.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Na het afronden van mijn opleiding besloot ik mij meer te richten op het designen van websites. En mij dus ook meer richten op het front-end gedeelte.
                            Hiervoor ben ik de opleiding Communicatie en Multimedia Design gaan volgen aan de NHL Stenden Hogeschool.
                            Tijdens deze opleiding heb ik veel geleerd over designprincipes en wat een website niet alleen mooi maakt, maar vooral goed maakt.
                        </p>
                    </div>

                    {/* rechter kolom */}
                    <div>
                        <h3 className='text-slate-700 dark:text-slate-300'>Mijn visie</h3>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Ik geloof dat een website er niet alleen goed uit moet zien, maar ook functioneel en gebruiksvriendelijk moet zijn. 
                            Daarom richt ik mij op het maken van websites die niet alleen visueel aantrekkelijk zijn, maar ook eenvoudig te gebruiken.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Ik geloof sterk in de kracht van technologie om de wereld een stukje beter te maken. 
                            Daarom ben ik gepassioneerd over het creëren van digitale ervaringen die mensen helpen om te verbinden en samen plezier te hebben.
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
                            Ik geloof in samenwerking en communicatie. Ik werk nauw samen met mijn klanten om hun wensen en doelen te begrijpen en streef ernaar om oplossingen te creëren die hierop aansluiten.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900'>
                        <h3 className='text-slate-800 dark:text-slate-200'>Altijd blijven leren</h3>
                        <p className='text-slate-600 dark:text-slate-400'>
                            Ik ben altijd op zoek naar manieren om mijn vaardigheden en kennis te verbeteren. Ik geloof dat de enige manier om voorop te blijven in deze snel veranderende industrie is om te blijven leren en groeien.
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
