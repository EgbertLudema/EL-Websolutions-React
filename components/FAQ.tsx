// components/FAQ.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BiChevronDown, BiHelpCircle } from "react-icons/bi";

type FAQItem = {
    question: string;
    answer: string;
};

type FAQProps = {
    questions: FAQItem[];
    title?: string;
    subtitle?: string;
};

const FAQ = ({
    questions,
    title = "Veelgestelde Vragen",
    subtitle = "Vind antwoorden op de meest voorkomende vragen.",
}: FAQProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-slate-100 dark:bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                <span className="text-primary font-medium">Vragen</span>
                <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-slate-100 font-bold mt-2">{title}</h2>
                <p className="text-slate-700 dark:text-slate-200 mt-4 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                <div className="max-w-3xl mx-auto">
                {questions.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-4"
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="flex justify-between items-center w-full text-left p-5 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-all"
                            aria-expanded={activeIndex === index}
                            aria-controls={`faq-panel-${index}`}
                            id={`faq-button-${index}`}
                        >
                            <div className="flex items-center">
                                <BiHelpCircle className="w-5 h-5 text-primary mr-3" />
                                <span className="font-medium text-slate-900 dark:text-slate-100">{item.question}</span>
                            </div>

                            <motion.div
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <BiChevronDown className="w-5 h-5 text-primary" />
                            </motion.div>
                        </button>

                        <motion.div
                            id={`faq-panel-${index}`}
                            role="region"
                            aria-labelledby={`faq-button-${index}`}
                            initial="collapsed"
                            animate={activeIndex === index ? "open" : "collapsed"}
                            variants={{ open: { opacity: 1, height: "auto", y: 0 }, collapsed: { opacity: 0, height: 0, y: -10 } }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="p-5 bg-background/50 rounded-b-lg mt-1">
                                <p className="text-slate-700 dark:text-slate-300">{item.answer}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
