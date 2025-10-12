import CTA from '@/components/CTA';
import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from "next";
import CardsSneek from '@/components/Landingspages/CardsSneek';
import { FaArrowRight, FaCartShopping, FaWordpress, FaWrench } from 'react-icons/fa6';
import { LuPenTool, LuLaptop} from "react-icons/lu";
import { TbWorldSearch } from "react-icons/tb";

export const metadata: Metadata = {
    title: "Website laten maken in Sneek | EL-Websolutions",
    description: "Professionele op maat gemaakte website laten maken in Sneek? EL-Websolutions bouwt WordPress websites, WooCommerce & Shopify webshops en maatwerk Next.js sites. Vraag een gratis kennismaking aan!",
};

export default function AboutPage() {
    return (
        <div>
            <main className="mt-[87px] relative flex flex-col justify-center">
                <section className='bg-sky-100'>
                    <div className='container min-h-[80vh] flex flex-col items-center justify-center gap-8 py-32'>
                        <h1 className='text-center text-6xl'>Website laten maken in Sneek</h1>
                        <p className="text-center text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Wil je als ondernemer in Sneek meer klanten bereiken met een professionele website? 
                            Bij <strong>EL-Websolutions</strong> help ik bedrijven en zzp&rsquo;ers uit de regio Sneek aan een moderne, 
                            snelle en gebruiksvriendelijke website die écht resultaat oplevert.
                        </p>
                        <div className="flex justify-center flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <div className="flex flex-row gap-2 items-center px-8 py-3 gradient-btn shadow-sm transition">
                                    Neem contact op
                                    <FaArrowRight />
                                </div>
                            </Link>
                            <Link href="/projecten">
                                <div className="py-3 px-8 rounded-lg bg-violet-100 bg-opacity-10 hover:bg-white hover:bg-opacity-20 shadow-sm transition">Bekijk projecten</div>
                            </Link>
                        </div>
                        <p className='text-center text-slate-500 mt-4 text-sm'>
                            Gratis kennismaking • Geen verplichtingen • Snelle reacties (binnen 24 uur)
                        </p>
                    </div>
                </section>

                <section className='bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
                    <div className='container flex flex-col gap-4 my-20'>
                        <h2 className='text-center text-slate-700 dark:text-slate-300'>Waarom EL Websolutions?</h2>
                        <CardsSneek />
                    </div>
                </section>

                <section className='container flex flex-col gap-8 my-20'>                    
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className="w-full lg:w-3/5 flex flex-col gap-4">
                            <h2 className='text-slate-700 dark:text-slate-300'>Webdesign & Websites in Sneek</h2>
                            <p className='text-slate-600 dark:text-slate-400'>
                                Een website is vaak het eerste contactpunt met jouw klant. Daarom maak ik websites 
                                die niet alleen mooi zijn, maar ook gebruiksvriendelijk en functioneel zijn. 
                                Dit doe ik door verder te kijken dan alleen naar jouw wensen, maar juist de behoeften van jouw doelgroep mee te nemen in het ontwerp.
                            </p>
                            <div className='mb-4'>
                                <h3 className='text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4'>Diensten die ik aanbied:</h3>
                                <ul className='text-slate-600 dark:text-slate-400 flex flex-col gap-2'>
                                    <li className='flex flex-row flex-wrap items-center'><LuPenTool className='text-primary mr-2'/><strong className='mr-1'>Wireframing</strong> - snel en gemakkelijk een blauwdruk van je website.</li>
                                    <li className='flex flex-row flex-wrap items-center'><FaWordpress className='text-primary mr-2'/><strong className='mr-1'>WordPress websites</strong> - betrouwbaar en eenvoudig zelf te beheren.</li>
                                    <li className='flex flex-row flex-wrap items-center'><FaCartShopping className='text-primary mr-2'/><strong className='mr-1'>WooCommerce & Shopify webshops</strong> - start jouw online winkel met gemak.</li>
                                    <li className='flex flex-row flex-wrap items-center'><LuLaptop className='text-primary mr-2'/><strong className='mr-1'>Maatwerk websites met Next.js + Payload CMS</strong> - razendsnel, flexibel en volledig afgestemd op jouw wensen.</li>
                                    <li className='flex flex-row flex-wrap items-center'><TbWorldSearch className='text-primary mr-2'/><strong className='mr-1'>SEO</strong> - bestaande websites beter vindbaar maken op zoekmachines zoals Google.</li>
                                    <li className='flex flex-row flex-wrap items-center'><FaWrench className='text-primary mr-2'/><strong className='mr-1'>Support & onderhoud</strong> - Doorlopend onderhoud, aanpassingen, nieuwe functies, etc.</li>
                                </ul>
                            </div>
                            <Link href="/diensten" className="w-auto">
                                <div className="inline-flex flex-row gap-2 items-center px-8 py-3 primary-btn transition rounded-lg">
                                    Bekijk diensten
                                    <FaArrowRight />
                                </div>
                            </Link>
                        </div>
                        <div className='w-full lg:w-2/5 flex justify-center items-center'>
                            <Image 
                                className="bg-slate-200 dark:bg-slate-900 transition-all duration-100 rounded-lg shadow-lg" 
                                src="/images/services/wordpress_thumbnail.jpg" 
                                width={1200} 
                                height={600} 
                                alt="Website laten maken in Sneek" 
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-900 dark:to-slate-950">
                    <div className="container flex flex-col gap-8 my-20">
                        <h2 className="text-center text-slate-700 dark:text-slate-300">
                            Voor wie bouw ik websites in Sneek?
                        </h2>
                        <p className="text-center text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            Of je nu een <strong>lokale ondernemer</strong> bent in het centrum van Sneek, 
                            zoals een winkel, kapper of horecaonderneming, of een <strong>zzp&rsquo;er</strong> die zijn diensten professioneel online wil presenteren – ik denk graag met je mee. 
                            Ook <strong>bedrijven op de industrieterreinen</strong> die hun uitstraling willen versterken, 
                            en <strong>webshops</strong> die regionaal of landelijk willen verkopen, vinden bij mij 
                            een website die past bij hun ambities. Samen zorgen we voor een oplossing die niet 
                            alleen mooi oogt, maar ook écht werkt voor jouw doelgroep.
                        </p>
                    </div>
                </section>

            </main>
            
            <section className="xl:container rounded-lg overflow-clip mb-12">
                <CTA
                    title="Klaar om jouw website in Sneek te laten maken?"
                    text="Neem vandaag nog contact op en ontdek hoe ik jouw bedrijf online sterker kan maken."
                />
            </section>
        </div>
    );
}
