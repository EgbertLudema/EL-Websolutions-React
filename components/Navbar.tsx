"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false); // State for services submenu

    // Ensure theme is loaded before rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle scroll event to toggle sticky class
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 border-b ${isSticky ? "bg-white/70 dark:bg-slate-950/80 border-slate-300 dark:border-slate-700 shadow-lg py-2 backdrop-blur-md" : "bg-transparent border-transparent py-4"}`}>
            <div className="container mx-auto flex justify-between items-center h-[54px]">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-black dark:text-white">
                    <Image src="/images/EL-color-no-bg-name-no-padding.png" width={180} height={70} alt="Logo EL Websolutions" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 justify-center items-center">
                    <Link href="/" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                        Home
                    </Link>

                    {/* Services Menu with Submenu */}
                    <div className="relative group">
                        <Link href="/services" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                            Services ▾
                        </Link>
                        <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white dark:bg-slate-900 shadow-md rounded-lg overflow-hidden w-48">
                            <Link href="/services/web-development" className="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-slate-800">
                                Web Development
                            </Link>
                            {/* TODO: */}
                            {/* Add more submenu items */}
                            {/* FIX hover */}
                        </div>
                    </div>

                    <Link href="/projects" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                        Projects
                    </Link>
                    <Link href="/blogs" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                        Blogs
                    </Link>
                    <Link href="/about" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                        About
                    </Link>
                    <ThemeToggle />
                    <Link href="/contact">
                        <div className="py-2 px-3 gradient-btn">Get in touch</div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-black dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 text-center bg-white dark:bg-slate-900 shadow-md py-4">
                    <Link href="/" className="block text-neutral-700 dark:text-neutral-300 hover:underline">
                        Home
                    </Link>

                    {/* Services Dropdown for Mobile */}
                    <div className="relative">
                        <button className="block w-full text-neutral-700 dark:text-neutral-300 hover:underline" onClick={() => setServicesOpen(!servicesOpen)}>
                            Services ▾
                        </button>
                        {servicesOpen && (
                            <div className="mt-2 flex flex-col bg-white dark:bg-slate-900 shadow-md rounded-lg overflow-hidden w-full">
                                <Link href="/services/web-development" className="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-slate-800">
                                    Web Development
                                </Link>
                                {/* TODO: */}
                                {/* Add more submenu items */}
                                {/* FIX hover */}
                            </div>
                        )}
                    </div>

                    <Link href="/projects" className="block text-neutral-700 dark:text-neutral-300 hover:underline">
                        Projects
                    </Link>
                    <Link href="/blogs" className="block text-neutral-700 dark:text-neutral-300 hover:underline">
                        Blogs
                    </Link>
                    <Link href="/about" className="block text-neutral-700 dark:text-neutral-300 hover:underline">
                        About
                    </Link>
                    <ThemeToggle />
                    <Link href="/contact">
                        <div className="py-2 px-3 gradient-btn">Get in touch</div>
                    </Link>
                </div>
            )}
        </nav>
    );
}
