import CTA from '@/components/CTA';
import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from "next";
import MyValues from '@/components/MyValues';
import CardsSneek from '@/components/Landingspages/CardsSneek';

export const metadata: Metadata = {
    title: "Website laten maken in Sneek | EL-Websolutions",
    description: "Professionele op maat gemaakte website laten maken in Sneek? EL-Websolutions bouwt WordPress websites, WooCommerce & Shopify webshops en maatwerk Next.js sites. Vraag een gratis kennismaking aan!",
};

export default function AboutPage() {
    return (
        <div>
            <main className="container mt-[100px] relative flex flex-col justify-center py-8 ">
                <section className='flex flex-col mb-12'>
                    <h1 className='text-center mb-4'>Website laten maken in Sneek</h1>
                    <p className="text-center text-slate-600 dark:text-slate-400 mt-2 pb-6">
                        Wil je als ondernemer in Sneek meer klanten bereiken met een professionele website? 
                        Bij <strong>EL-Websolutions</strong> help ik bedrijven en zzp’ers uit de regio Sneek aan een moderne, 
                        snelle en gebruiksvriendelijke website die écht resultaat oplevert.
                    </p>
                    <CardsSneek />
                </section>

                <section className='flex flex-col gap-8 my-8'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-center text-slate-700 dark:text-slate-300'>Webdesign & Websites in Sneek</h2>
                        <p className='text-center text-slate-600 dark:text-slate-400'>
                            Een website is vaak het eerste contactpunt met jouw klant. Daarom maak ik websites 
                            die niet alleen mooi ogen, maar ook gebruiksvriendelijk en functioneel zijn en goed scoren in Google.
                        </p>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className="w-full lg:w-3/5 flex flex-col gap-4 ">
                            <h3 className=' text-slate-700 dark:text-slate-300'>Diensten die ik aanbied</h3>
                            <ul className='text-slate-600 dark:text-slate-400'>
                                <li><strong>WordPress websites</strong> – betrouwbaar en eenvoudig zelf te beheren.</li>
                                <li><strong>WooCommerce & Shopify webshops</strong> – start jouw online winkel met gemak.</li>
                                <li><strong>Maatwerk websites met Next.js + Payload CMS</strong> – razendsnel, flexibel en volledig afgestemd op jouw wensen.</li>
                                <li><strong>Webdesign</strong> – uniek, modern ontwerp passend bij jouw bedrijf.</li>
                            </ul>
                        </div>
                        <div className='w-full lg:w-2/5'>
                            <Image 
                                className="bg-slate-200 dark:bg-slate-900 transition-all duration-100 rounded-lg shadow-lg" 
                                src="/images/services/wordpress_thumbnail.jpg" 
                                width={1200} 
                                height={600} 
                                alt="Website laten maken in Sneek" 
                            />
                        </div>
                    </div>

                    {/* <MyValues /> */}

                    <h2 className='text-slate-700 dark:text-slate-300'>Voor wie bouw ik websites in Sneek?</h2>
                    <p className='text-slate-600 dark:text-slate-400'>
                        Ik werk met verschillende soorten ondernemers in de regio Sneek:
                    </p>
                    <ul className='text-slate-600 dark:text-slate-400 mt-2 mb-4'>
                        <li><strong>Lokale ondernemers</strong>: winkels, kappers, horeca en dienstverleners in het centrum.</li>
                        <li><strong>ZZP’ers en freelancers</strong> die hun diensten online willen presenteren.</li>
                        <li><strong>Bedrijven op industrieterreinen</strong> die een professionele uitstraling zoeken.</li>
                        <li><strong>Webshops</strong> die hun producten regionaal of landelijk willen verkopen.</li>
                    </ul>
                </section>
            </main>
            
            <section className="xl:container mt-12 rounded-lg overflow-clip mb-12">
                <CTA
                    title="Klaar om jouw website in Friesland te laten maken?"
                    text="Neem vandaag nog contact op en ontdek hoe ik jouw bedrijf online sterker kan maken."
                />
            </section>
        </div>
    );
}
