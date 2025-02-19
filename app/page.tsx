import { div } from "motion/react-client";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <main>
                <div className="container relative flex flex-col justify-center items-center py-8 min-h-screen">
                    <p className=" text-center sub-title mb-6 backdrop-blur-md">Available for Freelance projects</p>
                    <h1 className="text-center mb-6">Crafting digital experiences</h1>
                    <p className="text-center text-lg mb-8 text-gray-700 dark:text-gray-400">Full-stack developer specializing in creating beautiful, functional, and user-centered digital experiences</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <button className="py-3 px-8 rounded-lg noisy_button">Get in touch</button>
                        </Link>
                        <Link href="/project">
                            <button className="py-3 px-8 rounded-lg backdrop-blur-md bg-violet-100 bg-opacity-10">View projects</button>
                        </Link>
                    </div>
                    <div>

                    </div>
                    <svg className="animate-bounce mt-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" >
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                    </svg>
                </div>
            </main>
            <section className="container py-8">
                <p className=" text-center sub-title mb-6 backdrop-blur-md">Portfolio</p>
                <h2 className="text-center mb-6">Featured projects</h2>
            </section>
            <section className="container py-8">
                <p className=" text-center sub-title mb-6 backdrop-blur-md">Skills</p>
                <h2 className="text-center mb-6">My expertises</h2>

            </section>
            <section className="container py-8">
                <p className=" text-center sub-title mb-6 backdrop-blur-md">Blog</p>
                <h2 className="text-center mb-6">Recent articles</h2>
            </section>
            <section className="py-8 contact">
                <div className="container">
                    <p className=" text-center sub-title mb-6 backdrop-blur-md">contact</p>
                    <h2 className="text-center mb-6">Get in touch</h2>
                </div>
            </section>
        </div>
    );
}