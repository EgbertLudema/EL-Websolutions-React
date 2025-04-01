"use client";

import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import ServiceHero from "@/components/services/ServiceHero";

export default function SEOPage() {
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

    const seo = services.find(s => s.title === "Basic SEO");

    if (!seo) return null;


    return (
        <>
            <ServiceHero service={seo} />
            <GoogleReviews />
            <USPS />
            <FAQ questions={faqData} />
            <Contact />
        </>
    );
}
