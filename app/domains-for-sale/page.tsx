"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import EmailLink from "@/components/ui/emailLink";
import { useHideRecaptchaOnFooter } from "@/hooks/useHideRecaptchaOnFooter";

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const GOOGLE_RECAPTCHA_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;

type ForSaleDomain = {
    name: string;
    price?: string;
    note?: string;
    tags?: string[];
    url?: string;
};

const DOMAINS: ForSaleDomain[] = [
    {
        name: "postblog.ai",
        price: "Make offer",
        note: "Brandable AI content/blogging domain.",
        tags: ["AI", "SAAS"],
    },
];

export default function DomainForSalePage() {
    useHideRecaptchaOnFooter("#site-footer");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [domain, setDomain] = useState("");
    const [message, setMessage] = useState("");
    const [offer, setOffer] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        // Load reCAPTCHA v3 once
        if (!document.getElementById("grecaptcha-js")) {
            const script = document.createElement("script");
            script.id = "grecaptcha-js";
            script.src = `https://www.google.com/recaptcha/api.js?render=${GOOGLE_RECAPTCHA_KEY}`;
            script.async = true;
            script.defer = true;
            script.onload = () => console.log("reCAPTCHA script loaded");
            document.head.appendChild(script);
        }

        // Check for "from" param to prefill domain and focus form
        const fromParam = searchParams.get("from");
        if (fromParam) {
            setDomain(fromParam);

            // Smooth scroll with offset to form
            setTimeout(() => {
                const form = document.getElementById("domain-form");
                const nameInput = document.getElementById("name") as HTMLInputElement | null;

                if (form) {
                    const y = form.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }

                // Focus name input after scroll
                setTimeout(() => nameInput?.focus(), 600);
            }, 400);

        } else if (typeof window !== "undefined" && window.location?.hostname) {
            setDomain(window.location.hostname);
        }
    }, [searchParams]);



    const validateEmail = (email: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(pattern.test(email));
    };

    const triggerPopup = (message: string) => {
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!emailValid) {
            triggerPopup("Invalid email address.");
            return;
        }

        if (typeof window !== "undefined" && window.grecaptcha) {
            window.grecaptcha.ready(async () => {
                try {
                    const token = await window.grecaptcha.execute(GOOGLE_RECAPTCHA_KEY, { action: "domain_sale" });

                    const formData = new FormData();
                    formData.append("context", "domain-for-sale");
                    formData.append("name", name);
                    formData.append("email", email);
                    formData.append("domain", domain);
                    formData.append("message", message);
                    if (offer) formData.append("offer", offer);
                    formData.append("token", token);

                    const response = await fetch("/api/send-mail", {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        triggerPopup("Message sent successfully!");
                        setName("");
                        setEmail("");
                        setMessage("");
                        setOffer("");
                        // Keep the detected domain after submit
                    } else {
                        triggerPopup("Something went wrong. Please try again.");
                    }
                } catch (error) {
                    console.error(error);
                    triggerPopup("Error sending message. Check your connection.");
                }
            });
        } else {
            console.error("reCAPTCHA not loaded.");
            triggerPopup("Error loading reCAPTCHA. Please try again.");
        }
    };

    // helpers
    const focusFormWithDomain = (d: string) => {
        setDomain(d);
        const input = document.getElementById("domain-input") as HTMLInputElement | null;
        input?.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => input?.focus(), 300);
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            triggerPopup("Copied domain to clipboard");
        } catch {
            triggerPopup("Copy failed. Please copy manually.");
        }
    };

    return (
        <div>
            <main className="container mt-[100px] relative flex flex-col justify-center items-center py-12">
                <h1 className="text-center leading-snug">These domains are owned by EL Websolutions</h1>
                <p className="text-center text-slate-600 dark:text-slate-400 pb-8">
                    Interested in purchasing a domain? Click a card to inquire, then send your message below.
                </p>

                {/* Domain Cards */}
                <section className="w-full max-w-[1100px] mt-12 mb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {DOMAINS.map((d, i) => (
                            <motion.div
                                key={d.name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25, delay: i * 0.05 }}
                                className="rounded-2xl border border-border dark:border-slate-700 bg-background dark:bg-slate-900/60 shadow-sm hover:shadow-lg transition-shadow p-5"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-lg font-semibold break-words">{d.name}</h3>
                                    {d.price && (
                                        <span className="text-xs px-2 py-1 rounded-full border border-border dark:border-slate-700">
                                            {d.price}
                                        </span>
                                    )}
                                </div>

                                {d.tags && d.tags.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {d.tags.map((t) => (
                                            <span key={t} className="px-2 py-0.5 text-xs rounded-full border border-border dark:border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {d.note && (
                                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                                        {d.note}
                                    </p>
                                )}

                                <div className="mt-5 flex flex-wrap gap-2">
                                    <button
                                        onClick={() => focusFormWithDomain(d.name)}
                                        className="primary-btn py-2 px-3"
                                        aria-label={`Inquire about ${d.name}`}
                                    >
                                        Inquire
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(d.name)}
                                        className="px-3 py-2 rounded-lg border border-border dark:border-slate-700"
                                        aria-label={`Copy ${d.name}`}
                                    >
                                        Copy
                                    </button>
                                    {d.url && (
                                        <a
                                            href={d.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-2 rounded-lg border border-border dark:border-slate-700"
                                        >
                                            Visit
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div id="domain-form" className="max-w-[900px] w-full bg-background rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Info section */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            className="p-8 bg-gradient-primary text-white"
                        >
                            <h3 className="text-3xl font-semibold mb-6">Get in contact</h3>
                            <div className="space-y-6">
                                <p className="text-sm opacity-90">
                                    Please get in touch if you’re interested in acquiring a domain.
                                </p>
                                <EmailLink color="white" />
                                <div className="text-xs opacity-80">
                                    Tip: Including your offer or intended use may speed up our response.
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact form */}
                        <motion.form
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            className="p-8 dark:bg-slate-800"
                            onSubmit={handleSubmit}
                        >
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                validateEmail(e.target.value);
                                            }}
                                            aria-invalid={!emailValid}
                                            className={`w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                                                !emailValid ? "border-red-500" : ""
                                            }`}
                                        />
                                        {!emailValid && (
                                            <p className="text-red-500 text-sm mt-1">Invalid email address.</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="domain-input" className="block text-sm font-medium text-foreground mb-2">
                                        Domain
                                    </label>
                                    <input
                                        id="domain-input"
                                        name="domain"
                                        type="text"
                                        required
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        placeholder="example.com"
                                        className="w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="offer" className="block text-sm font-medium text-foreground mb-2">
                                        Offer (optional)
                                    </label>
                                    <input
                                        id="offer"
                                        name="offer"
                                        type="text"
                                        value={offer}
                                        onChange={(e) => setOffer(e.target.value)}
                                        placeholder="e.g. €1,500"
                                        className="w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us your offer or ask a question..."
                                        className="w-full px-4 py-2 border border-border dark:border-slate-700 bg-background dark:bg-slate-950 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-3 gradient-btn"
                                    aria-label="Send domain inquiry"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>

                {/* Popup message */}
                {showPopup && (
                    <div
                        className="fixed bottom-5 z-50 right-5 bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
                        role="alert"
                        aria-live="assertive"
                    >
                        {popupMessage}
                    </div>
                )}
            </main>
        </div>
    );
}
