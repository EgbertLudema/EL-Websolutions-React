"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRight } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import HeroPreviewWindow from "./HeroPreviewWindow";

gsap.registerPlugin(useGSAP);

export default function Hero({ availableMonth }: { availableMonth: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showSpoedTip, setShowSpoedTip] = useState(false);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, (context) => {
                const { reduceMotion } = context.conditions as { reduceMotion: boolean };
                const duration = reduceMotion ? 0 : 0.6;

                const tl = gsap.timeline({ defaults: { ease: "power3.out", duration } });

                tl.from(".hero-badge", { autoAlpha: 0, y: -12 })
                    .from(".hero-title", { autoAlpha: 0, y: 20 }, "-=0.35")
                    .from(".hero-subtitle", { autoAlpha: 0, y: 16 }, "-=0.4")
                    .from(".hero-ctas", { autoAlpha: 0, y: 16 }, "-=0.4")
                    .from(
                        ".hero-visual",
                        { autoAlpha: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.95 },
                        "-=0.9"
                    )
                    .from(".hero-scrollcue", { autoAlpha: 0 }, "-=0.2");

                return () => tl.kill();
            });

            return () => mm.revert();
        },
        { scope: containerRef }
    );

    return (
        <main className="relative overflow-hidden shadow-md light-gradient-bg">
            <div
                ref={containerRef}
                className="container relative grid min-h-screen grid-cols-1 items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-24"
            >
                <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
                    <div className="hero-badge relative inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-primary bg-white/10 dark:bg-slate-100/10 backdrop-blur-md rounded-full">
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/15">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.45)] animate-pulse"></span>
                        </span>
                        <span>Beschikbaar voor {availableMonth}</span>
                        <button
                            type="button"
                            aria-label="Spoedinfo"
                            aria-describedby="hero-spoed-tip"
                            onMouseEnter={() => setShowSpoedTip(true)}
                            onMouseLeave={() => setShowSpoedTip(false)}
                            onFocus={() => setShowSpoedTip(true)}
                            onBlur={() => setShowSpoedTip(false)}
                            onClick={() => setShowSpoedTip((value) => !value)}
                            className="-mr-1 flex h-4 w-4 items-center justify-center rounded-full text-primary/70 transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                            <FiInfo className="h-3.5 w-3.5" aria-hidden />
                        </button>

                        <span
                            id="hero-spoed-tip"
                            role="tooltip"
                            className={`absolute left-1/2 top-full z-20 mt-3 w-60 -translate-x-1/2 rounded-xl border border-primary/15 bg-white/95 p-3 text-left text-xs font-normal leading-snug text-slate-700 shadow-xl backdrop-blur-md transition duration-200 dark:border-white/10 dark:bg-slate-900/95 dark:text-slate-200 ${
                                showSpoedTip ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                            }`}
                        >
                            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-primary/15 bg-white/95 dark:border-white/10 dark:bg-slate-900/95" />
                            Spoed? Neem gerust contact op, meestal is er ondanks een volle planning nog iets te regelen.
                        </span>
                    </div>
                    <h1 className="hero-title max-w-2xl !leading-tight tracking-tight md:leading-snug md:text-4xl lg:text-5xl xl:text-6xl">
                        Freelance developer voor websites, Shopify en doorontwikkeling
                    </h1>
                    <p className="hero-subtitle max-w-xl text-gray-700 dark:text-gray-400 md:text-lg">
                        Ik help bedrijven en agencies met maatwerk websites, Shopify development en betrouwbare technische ondersteuning.
                    </p>
                    <p className="hero-subtitle hidden max-w-xl text-lg text-gray-700 dark:text-gray-400 md:block">
                        Van nieuwe builds tot onderhoud en tijdelijke developmentcapaciteit.
                    </p>
                    <div className="hero-ctas mt-4 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <Link href="/contact">
                            <div className="group flex items-center gap-2 px-8 py-3 gradient-btn shadow-sm transition">
                                Neem contact op
                                <FaArrowRight className="text-sm transition group-hover:translate-x-1" />
                            </div>
                        </Link>
                        <Link href="/projecten">
                            <div className="py-3 px-8 rounded-lg border border-primary/25 bg-white/40 text-slate-900 hover:bg-white hover:border-primary/40 shadow-sm backdrop-blur-sm transition dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900">
                                Bekijk projecten
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="hero-visual">
                    <HeroPreviewWindow />
                </div>
            </div>
            <Link
                href="#services"
                aria-label="Scroll naar de volgende sectie"
                className="hero-scrollcue absolute inset-x-0 bottom-8 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-slate-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 dark:bg-slate-900/65 dark:text-slate-100 dark:hover:bg-slate-900 animate-[bounce_2.4s_ease-in-out_infinite]"
            >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </Link>
        </main>
    );
}
