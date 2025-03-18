"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BiChevronDown, BiHelpCircle } from "react-icons/bi";

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

const FAQHomepage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-slate-100 dark:bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium">Questions</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Find answers to common questions about my services, process, and what to expect when working with me.
                    </p>
                </div>
        
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
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
                            >
                                <div className="flex items-center">
                                    <BiHelpCircle className="w-5 h-5 text-primary mr-3" />
                                    <span className="font-medium">{item.question}</span>
                                </div>

                                {/* Rotating arrow */}
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <BiChevronDown className="w-5 h-5 text-primary" />
                                </motion.div>
                            </button>

                            {/* Animating answer with framer-motion */}
                            <motion.div
                                initial="collapsed"
                                animate={activeIndex === index ? "open" : "collapsed"}
                                variants={{
                                    open: { opacity: 1, height: "auto", y: 0 },
                                    collapsed: { opacity: 0, height: 0, y: -10 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-5 bg-background/50 rounded-b-lg mt-1">
                                    <p className="text-muted-foreground">{item.answer}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQHomepage;
