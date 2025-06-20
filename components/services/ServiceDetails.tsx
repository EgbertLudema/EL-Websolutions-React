"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Lightbox from "../Lightbox";

type Service = {
    icon: IconType;
    title: string;
    description: string;
    text: string;
    image?: string;
    price?: string;
    tags?: string[];
    benefits?: string[];
    process?: { title: string; description: string }[];
    gallery?: { src: string; alt: string }[];
};

type ServiceDetailsProps = {
    service: Service;
};

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl text-slate-800 dark:text-slate-300 font-bold mb-6">{service.title} Details</h2>
                            <p className="mb-6 text-slate-700 dark:text-slate-400">{service.text}</p>

                            {service.process && service.process.length > 0 && (
                                <>
                                    <h3 className="text-xl text-slate-800 dark:text-slate-300 font-semibold mb-4 mt-10">Mijn {service.title} proces</h3>
                                    <ul className="space-y-4">
                                    {service.process.map((step, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-primary mr-3 mt-1">{i + 1}.</span>
                                            <div>
                                                <strong className="block text-slate-800 dark:text-slate-300 text-foreground">{step.title}</strong>
                                                <span className="text-slate-700 dark:text-slate-400">{step.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                                </>
                            )}

                            {service.gallery && service.gallery.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                    {service.gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setCurrentIndex(i);
                                                setLightboxOpen(true);
                                            }}
                                            className="relative w-full aspect-video overflow-hidden rounded-xl group"
                                        >
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="sticky top-20 rounded-xl p-6 shadow-lg dark:bg-slate-800"
                        >
                            <h3 className="text-xl text-slate-800 dark:text-slate-300 font-semibold mb-6">Voordelen</h3>
                            {service.benefits && service.benefits.length > 0 && (
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <FaCheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 dark:text-slate-400">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}


                            {service.tags && (
                                <>
                                <h3 className="text-xl text-slate-800 dark:text-slate-300 font-semibold mt-8 mb-6">Tags & Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-slate-700 dark:text-slate-400 text-sm bg-background border border-border rounded-full"
                                    >
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                                </>
                            )}

                            <div className="mt-8 pt-6 border-t border-border">
                                {service.price && (
                                    <p className="text-2xl font-bold text-primary mb-6">{service.price}</p>
                                )}
                                <Link href="/contact" className="group gradient-btn py-3 w-full text-lg flex flex-row items-center justify-center gap-2 max-w-[300px] lg:max-w-full">
                                    Neem contact op
                                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && service.gallery && (
                <Lightbox
                    images={service.gallery}
                    currentIndex={currentIndex}
                    onClose={() => setLightboxOpen(false)}
                    onNext={() => setCurrentIndex((prev) => (prev + 1) % service.gallery!.length)}
                    onPrev={() => setCurrentIndex((prev) => (prev - 1 + service.gallery!.length) % service.gallery!.length)}
                />
            )}

        </section>
    );
};

export default ServiceDetails;
