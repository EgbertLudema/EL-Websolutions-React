"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/Contact";
import FAQServices from "@/components/services/FAQ";

export default function ServicesPage() {
    return (
        <div>
            <main className="container mt-[100px] relative flex flex-col justify-center items-center py-8">
                <h1 className="text-center">Professional Services</h1>
                <p className="text-center text-slate-600 dark:text-slate-400 pb-12">
                    Comprehensive digital solutions designed to help your business thrive.
                </p>
                <div className="py-12 flex flex-col gap-12">
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.title} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5}}
                            className={`flex flex-row gap-8 items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                        >
                            <div className="w-1/2">
                                <img src={service.image} alt={`thumbnail of ${service.title}`} />
                            </div>
                            <div className="w-1/2 flex flex-col items-start gap-4">
                                <h2 className="text-3xl">{service.title}</h2>
                                <p className="text-slate-600 dark:text-slate-400">{service.text}</p>
                                <ul className="flex flex-row flex-wrap gap-3">
                                    {service.tags.map((tag) => (
                                        <li key={tag} className="tag-big">
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
                    ))}
                </div>
            </main>
            <GoogleReviews />
            <USPS />
            <FAQServices />
            <Contact />
        </div>
    );
}
