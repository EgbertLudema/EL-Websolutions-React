import Link from "next/link";
import Portfolio from "../components/homepage/portfolio";
import { getAllProjects } from "@/lib/server/getProjects";
import Blog from "@/components/homepage/blog";
import { getAllBlogs } from "@/lib/server/getBlogs";
import Services from "@/components/homepage/services";
import USPS from "@/components/homepage/usps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import GoogleReviews from "@/components/googleReviews";

export default async function HomePage() {
    const allProjects = await getAllProjects();
    const allBlogs = await getAllBlogs();
    const faqData = [
        {
          question: "What is your development process like?",
          answer: "My development process begins with a thorough understanding of your needs and goals. I create wireframes and prototypes for approval before moving to development. Throughout the process, I provide regular updates and opportunities for feedback to ensure the final product meets your expectations."
        },
        {
          question: "How long does it take to complete a typical project?",
          answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 2-3 months. During our initial consultation, I'll provide a more accurate timeline based on your specific requirements."
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer: "Yes, I offer various maintenance packages to keep your site secure, updated, and running smoothly. This includes regular backups, security updates, performance optimization, and content updates as needed."
        },
        {
          question: "How do you handle revisions and feedback?",
          answer: "Feedback is an essential part of the development process. I include two rounds of revisions in my standard packages. We'll have dedicated review periods where you can provide consolidated feedback, which I'll implement promptly."
        },
        {
          question: "What technologies do you specialize in?",
          answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various CSS frameworks like Tailwind CSS. For e-commerce, I work with platforms such as Shopify and WooCommerce."
        }
    ];

    return (
        <>
            <main className="shadow-md light-gradient-bg">
                <div className="container relative flex flex-col justify-center items-center py-12 min-h-screen hero">
                    <p className=" text-center sub-title px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 backdrop-blur-md rounded-full text-primary animate-fade-in">Available for Freelance projects</p>
                    <h1 className="text-center mb-6 leading-tight md:leading-snug">Crafting digital experiences</h1>
                    <p className="text-center md:text-lg mb-8 text-gray-700 dark:text-gray-400">Full-stack developer specializing in creating beautiful, functional, and user-centered digital experiences</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <div className="px-8 py-3 gradient-btn shadow-sm transition">Get in touch</div>
                        </Link>
                        <Link href="/projects">
                            <div className="py-3 px-8 rounded-lg bg-violet-100 bg-opacity-10 hover:bg-white hover:bg-opacity-20 shadow-sm transition">View projects</div>
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
            <CTA />
            <Blog allBlogs={allBlogs} />
            <FAQ questions={faqData} />
            <Contact />
        </>
    );
}