"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function ServicesPage() {
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
            <main className="container mt-[100px] relative flex flex-col justify-center items-center py-8">
                <h1 className="text-center">Professional Services</h1>
                <p className="text-center text-slate-600 dark:text-slate-400 pb-12">
                    Comprehensive digital solutions designed to help your business thrive.
                </p>
                <div className="py-12 flex flex-col gap-20">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                        <motion.div 
                            key={service.title} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5}}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="relative w-full md:w-1/2">
                                <div className="absolute top-0 l-0 z-20 bg-slate-50 dark:bg-slate-800 rounded-lg p-4 flex items-center justify-center w-16 h-16 shadow-md">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
                                <div className="relative z-10 mt-4 ml-4">
                                {service.image && (
                                    <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-lg shadow-md max-w-full h-auto"
                                    />
                                )}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-start gap-6 md:gap-8">
                                <h2 className="text-3xl">{service.title}</h2>
                                <p className="text-slate-600 dark:text-slate-400">{service.text}</p>
                                <ul className="flex flex-row flex-wrap gap-3">
                                    {service.tags.map((tag) => (
                                        <li key={tag} className="tag-big lowercase">
                                            <span>{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-primary text-xl font-medium">{service.price}</p>
                                <Link className="gradient-btn py-2 px-3" href={service.link}>
                                    view details
                                </Link>
                            </div>
                        </motion.div>
                    )})}
                </div>
            </main>
            <GoogleReviews />
            <USPS />
            <FAQ questions={faqData} />
            <Contact />
        </>
    );
}
