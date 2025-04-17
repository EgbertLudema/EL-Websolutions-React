"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import services from "@/data/services";
import GoogleReviews from "@/components/googleReviews";
import USPS from "@/components/homepage/usps";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function ClientServicesPage() {
  const faqData = [
    {
      question: "Hoe ziet jouw ontwikkelproces eruit?",
      answer: "Mijn ontwikkelproces begint met een grondig begrip van jouw wensen en doelen. ..."
    },
    {
      question: "Hoe lang duurt het om een project af te ronden?",
      answer: "De doorlooptijd hangt af van de complexiteit en omvang. ..."
    },
    {
      question: "Bied je ook onderhoud en ondersteuning aan?",
      answer: "Ja, ik bied diverse onderhoudspakketten aan om je website veilig en up-to-date te houden."
    },
    {
      question: "Hoe ga je om met revisies en feedback?",
      answer: "Feedback is een essentieel onderdeel van het ontwikkelproces. ..."
    },
    {
      question: "In welke technologieën ben je gespecialiseerd?",
      answer: "Ik werk met moderne technologieën zoals React, Next.js, Tailwind CSS, etc."
    }
  ];

  return (
    <>
      <main className="container mt-[100px] relative flex flex-col justify-center items-center py-8">
        <h1 className="text-center">Professionele diensten</h1>
        <p className="text-center text-slate-600 dark:text-slate-400 pb-12">
          Complete digitale oplossingen om jouw bedrijf te laten groeien.
        </p>
        <div className="py-12 flex flex-col gap-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
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
                    dienst bekijken
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
      <GoogleReviews />
      <USPS />
      <FAQ questions={faqData} />
      <Contact />
    </>
  );
}
