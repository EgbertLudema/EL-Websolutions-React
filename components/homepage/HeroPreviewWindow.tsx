"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiLock, FiRefreshCw } from "react-icons/fi";

const DOMAINS = ["maatwerk-website.nl", "shopify-webshop.nl", "snelle-doorontwikkeling.nl"];

export default function HeroPreviewWindow() {
    const stageRef = useRef<HTMLDivElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const reloadIconRef = useRef<HTMLSpanElement>(null);
    const reducedMotionRef = useRef(false);
    const [domainIndex, setDomainIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState(DOMAINS[0]);

    // Cursor-follow tilt: the window leans toward the pointer, like a physical panel on a desk.
    useEffect(() => {
        reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotionRef.current) return;

        const stage = stageRef.current;
        const win = windowRef.current;
        if (!stage || !win) return;

        const setRotateX = gsap.quickTo(win, "rotationX", { duration: 0.6, ease: "power3.out" });
        const setRotateY = gsap.quickTo(win, "rotationY", { duration: 0.6, ease: "power3.out" });
        const setY = gsap.quickTo(win, "y", { duration: 0.6, ease: "power3.out" });

        const handleMove = (event: PointerEvent) => {
            const rect = stage.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;
            setRotateY(px * 14);
            setRotateX(py * -10);
            setY(py * -6);
        };
        const handleLeave = () => {
            setRotateX(0);
            setRotateY(0);
            setY(0);
        };

        stage.addEventListener("pointermove", handleMove);
        stage.addEventListener("pointerleave", handleLeave);
        return () => {
            stage.removeEventListener("pointermove", handleMove);
            stage.removeEventListener("pointerleave", handleLeave);
        };
    }, []);

    // The address bar cycles through the kind of sites this hero is selling.
    useEffect(() => {
        if (reducedMotionRef.current) return;

        let cancelled = false;
        let timeoutId: ReturnType<typeof setTimeout>;
        let charIndex = 0;
        let deleting = false;
        const word = DOMAINS[domainIndex];

        const tick = () => {
            if (cancelled) return;
            if (!deleting) {
                charIndex += 1;
                setDisplayedText(word.slice(0, charIndex));
                if (charIndex === word.length) {
                    deleting = true;
                    timeoutId = setTimeout(tick, 1500);
                    return;
                }
            } else {
                charIndex -= 1;
                setDisplayedText(word.slice(0, charIndex));
                if (charIndex === 0) {
                    setDomainIndex((current) => (current + 1) % DOMAINS.length);
                    return;
                }
            }
            timeoutId = setTimeout(tick, deleting ? 30 : 70);
        };

        timeoutId = setTimeout(tick, 250);
        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [domainIndex]);

    const runBuildAnimation = () => {
        const blocks = contentRef.current?.querySelectorAll(".preview-block");
        if (blocks && blocks.length) {
            gsap.fromTo(
                blocks,
                { autoAlpha: 0, y: 12, scale: 0.96 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 }
            );
        }
        if (reloadIconRef.current) {
            gsap.fromTo(reloadIconRef.current, { rotate: 0 }, { rotate: 360, duration: 0.6, ease: "power2.out" });
        }
    };

    useEffect(() => {
        const delay = reducedMotionRef.current ? 0 : 1100;
        const timeoutId = setTimeout(runBuildAnimation, delay);
        return () => clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={stageRef} className="relative mx-auto w-full max-w-[420px] [perspective:1200px] sm:max-w-[460px] lg:max-w-[500px]">
            <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-[var(--blue)]/20 to-[var(--cyan)]/20 opacity-70 blur-3xl dark:opacity-40"
            />

            <div
                ref={windowRef}
                className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/70 shadow-2xl backdrop-blur-xl will-change-transform dark:border-white/10 dark:bg-slate-900/70"
            >
                <div className="flex items-center gap-2 border-b border-slate-200/70 px-4 py-3 dark:border-slate-700/60">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--blue)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyan)]" />

                    <div className="ml-2 flex flex-1 items-center gap-2 overflow-hidden rounded-full bg-slate-100/80 px-3 py-1.5 text-xs text-slate-500 dark:bg-slate-800/80 dark:text-slate-400">
                        <FiLock className="h-3 w-3 shrink-0" aria-hidden />
                        <span className="truncate font-mono">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={runBuildAnimation}
                        aria-label="Bekijk opnieuw hoe een website wordt opgebouwd"
                        className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200/70 hover:text-primary dark:hover:bg-slate-700/60"
                    >
                        <span ref={reloadIconRef} className="inline-flex">
                            <FiRefreshCw className="h-3.5 w-3.5" aria-hidden />
                        </span>
                    </button>
                </div>

                <div ref={contentRef} className="space-y-3 p-5">
                    <div className="preview-block flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <span className="h-1.5 w-6 rounded-full bg-slate-300 dark:bg-slate-600" />
                            <span className="h-1.5 w-6 rounded-full bg-slate-300 dark:bg-slate-600" />
                            <span className="h-1.5 w-6 rounded-full bg-slate-300 dark:bg-slate-600" />
                        </div>
                        <span className="h-4 w-14 rounded-full primary-gradient" />
                    </div>

                    <div className="preview-block flex flex-col gap-2 rounded-xl bg-gradient-to-br from-primary/15 via-[var(--blue)]/10 to-transparent p-4">
                        <span className="h-2.5 w-2/3 rounded-full bg-slate-400/70 dark:bg-slate-500/70" />
                        <span className="h-2.5 w-1/2 rounded-full bg-slate-300/70 dark:bg-slate-600/60" />
                        <span className="mt-2 h-6 w-24 rounded-lg primary-gradient" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <span className="preview-block h-14 rounded-lg bg-slate-100 dark:bg-slate-800" />
                        <span className="preview-block h-14 rounded-lg bg-slate-100 dark:bg-slate-800" />
                        <span className="preview-block h-14 rounded-lg bg-slate-100 dark:bg-slate-800" />
                    </div>
                </div>
            </div>
        </div>
    );
}
