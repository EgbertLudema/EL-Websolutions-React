import Link from "next/link";
import Portfolio from "../components/homepage/portfolio";
import { getAllProjects } from "@/lib/server/getProjects";
import Blog from "@/components/homepage/blog";
import { getAllBlogs } from "@/lib/server/getBlogs";
import Services from "@/components/homepage/services";
import USPS from "@/components/homepage/usps";
import Reviews from "@/components/homepage/reviews";
import FAQHomepage from "@/components/homepage/FAQ";
import CTA from "@/components/homepage/CTA";
import Contact from "@/components/Contact";
import GoogleReviews from "@/components/googleReviews";

export default async function HomePage() {
    const allProjects = await getAllProjects();
    const allBlogs = await getAllBlogs();

    return (
        <div>
            <main className="shadow-md">
                <div className="container relative flex flex-col justify-center items-center py-12 min-h-screen hero">
                    <p className=" text-center sub-title px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 backdrop-blur-md rounded-full text-primary animate-fade-in">Available for Freelance projects</p>
                    <h1 className="text-center mb-6">Crafting digital experiences</h1>
                    <p className="text-center text-lg mb-8 text-gray-700 dark:text-gray-400">Full-stack developer specializing in creating beautiful, functional, and user-centered digital experiences</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <button className="py-3 px-8 gradient-btn">Get in touch</button>
                        </Link>
                        <Link href="/project">
                            <button className="py-3 px-8 rounded-lg bg-violet-100 bg-opacity-10 hover:scale-105 hover:bg-white hover:bg-opacity-20 transition">View projects</button>
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
            <Services />
            <Portfolio allProjects={allProjects} />  
            <USPS />
            <GoogleReviews />
            {/* <Reviews /> */}
            <CTA />
            <Blog allBlogs={allBlogs} />
            <FAQHomepage />
            <Contact />
        </div>
    );
}