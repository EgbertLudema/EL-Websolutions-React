import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import Draggable from '@/components/Draggable';
import Image from "next/image";
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <main className="container mt-[100px] relative flex flex-col justify-center items-center py-8">
                <Breadcrumbs />
                <h1 className="text-center">About me</h1>
                <p className="text-center text-slate-600 dark:text-slate-400 pb-12">Get to know the developer behind the code. Passionate about creating beautiful, functional digital experiences.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* left column */}
                    <div>
                        <div className='flex items-center gap-4 py-4'> 
                            <Draggable /> <h2 className="text-3xl font-bold text-black dark:text-white">Hi, I am Egbert Ludema</h2>
                        </div>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            I'm a full-stack developer with experience in web development since 2017. 
                            I specialize in creating beautiful, functional, and user-centered websites.
                        </p> 
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            My expertise spans a variety of technologies, including React, Next.js, Svelte, Kotlin, Laravel and mySQL. 
                            Always eager for new challenges, I continuously seek opportunities to learn and grow as a developer.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Currently I'm focussed on creating headless Wordpress website with Next.js.
                        </p>
                        <div className="flex flex-row gap-3 pt-8">
                            <span className="px-3 py-1 tag-selected">React</span>
                            <span className="px-3 py-1 tag-selected">Wordpress</span>
                            <span className="px-3 py-1 tag-selected">Jetpack Compose</span>
                            <span className="px-3 py-1 tag-selected">Svelte</span>
                            <span className="px-3 py-1 tag-selected">UI/UX Design</span>
                        </div>
                        <div className="flex flex-row gap-4 pt-8">
                            <Link className='py-2 px-4 primary-btn' href="/contact">
                                Get in touch
                            </Link>
                            <Link className='py-2 px-4 secondair-btn' href="services">
                                My services
                            </Link>
                        </div>
                    </div>

                    {/* right column */}
                    <div className="flex justify-end">
                        <Image 
                            className="bg-slate-200 dark:bg-slate-800 transition-all duration-100 rounded-lg shadow-lg" 
                            src="/images/Portret_Egbert_NoBG.png" 
                            width={500} 
                            height={500} 
                            alt="Image of Egbert Ludema" 
                        />
                    </div>
                </div>
            </main>
            <section className="container mt-12">
                <h2 className="text-center">My story</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* left column */}
                    <div>
                        <h3>How I Started</h3>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            My journey into web development began when I started the Application and Media Development MBO4 program at ROC Friesepoort. 
                            Here I learned the basics of web development, but lacked the designing skills to create beautiful websites.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            Na het afronden van mijn opleiding besloot ik mij meer te richten op het designen van websites. En mij dus ook meer richten op het front-end gedeelte.
                            Hiervoor ben ik de opleiding Communicatie en multimedia design gaan volgen aan de NHL Stenden Hogeschool.
                            Tijdens deze opleiding heb ik veel geleerd over design principes en wat een website niet alleen mooi maakt, maar vooral goed maakt.
                        </p>
                    </div>

                    {/* right column */}
                    <div>
                        <h3>My perspective</h3>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            I believe that a website should not only look good, but also be functional and user-friendly. 
                            That's why I focus on creating websites that are not only visually appealing, but also easy to use.
                        </p>
                        <p className='text-slate-600 dark:text-slate-400 my-4'>
                            I am a firm believer in the power of technology to make the world a better place. 
                            That's why I'm passionate about creating digital experiences that help people connect, and have fun together.
                        </p>
                    </div>
                </div>
            </section>
            <section className="container mt-12">
                <h2 className="text-center">Personal projects</h2>
            </section>
            <section className="container mt-12">
                <h2 className="text-center">My values</h2>
            </section>
            <section className="container mt-12 rounded-lg overflow-clip">
                <CTA />
            </section>
        </div>
    );
}
  