"use client";

import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import EmailLink from "./ui/emailLink";

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const GOOGLE_RECAPTCHA_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${GOOGLE_RECAPTCHA_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = () => console.log("reCAPTCHA script geladen");
        document.head.appendChild(script);
    }, []);

    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailPattern.test(email));
    };

    const triggerPopup = (message: string) => {
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!emailValid) {
            triggerPopup("Ongeldig e-mailadres. Controleer je invoer.");
            return;
        }

        if (typeof window !== "undefined" && window.grecaptcha) {
            window.grecaptcha.ready(async () => {
                try {
                    const token = await window.grecaptcha.execute(GOOGLE_RECAPTCHA_KEY, { action: "submit" });

                    const formData = new FormData();
                    formData.append("name", name);
                    formData.append("email", email);
                    formData.append("message", message);
                    formData.append("token", token);

                    console.log("Versturen naar API:", { name, email, message, token });

                    const response = await fetch("/api/send-mail", {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        triggerPopup("Bericht succesvol verzonden!");
                        setName("");
                        setEmail("");
                        setMessage("");
                    } else {
                        triggerPopup("Er is iets misgegaan. Probeer het opnieuw.");
                    }
                } catch (error) {
                    console.error(error);
                    triggerPopup("Fout bij het verzenden. Controleer je internetverbinding.");
                }
            });
        } else {
            console.error("reCAPTCHA is niet geladen.");
            triggerPopup("Fout bij het laden van reCAPTCHA. Probeer het opnieuw.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium">Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Neem contact op</h2>
                </div>
                <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Contactgegevens */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            className="p-8 bg-gradient-primary text-white"
                        >
                            <h3 className="text-3xl font-semibold mb-6">Contactgegevens</h3>
                            <div className="space-y-6">
                                <EmailLink color="white" />
                                <div className="flex items-center space-x-2">
                                    <FaLocationDot className="w-4 h-4" />
                                    <span className="text-sm">Friesland, NL</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contactformulier */}
                        <motion.form
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            className="p-8 dark:bg-slate-800"
                            onSubmit={handleSubmit}
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Naam *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-visible:outline-0 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            validateEmail(e.target.value);
                                        }}
                                        className={`w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-visible:outline-0 transition-all duration-300 ${
                                            !emailValid ? "border-red-500" : ""
                                        }`}
                                    />
                                    {!emailValid && (
                                        <p className="text-red-500 text-sm mt-1">Ongeldig e-mailadres.</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Bericht
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus-visible:outline-0 transition-all duration-300"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-3 gradient-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Verzenden
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>

            {/* Popup-melding */}
            {showPopup && (
                <div className="fixed bottom-5 right-5 bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                    {popupMessage}
                </div>
            )}
        </section>
    );
}
