"use client";

import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaCopy, FaCheck } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import EmailLink from "./ui/emailLink";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium">Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Get in Touch</h2>
                </div>
                <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="p-8 bg-gradient-primary text-white"
                        >
                            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <EmailLink color="white" />

                                {/* Location */}
                                <div className="flex items-center space-x-4">
                                    <FaLocationDot className="w-6 h-6" />
                                    <span>Friesland, NL</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form 
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="p-8 dark:bg-neutral-900"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-border dark:border-neutral-700 bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-visible:outline-0 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-border dark:border-neutral-700 bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-visible:outline-0 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full px-4 py-2 border border-border dark:border-neutral-700 bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-visible:outline-0 transition-all duration-300"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-3 gradient-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}