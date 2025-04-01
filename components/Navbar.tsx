"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const submenuItems = [
        { label: "Wireframing", href: "/services/wireframing" },
        { label: "Custom websites", href: "/services/custom-web-development" },
        { label: "Wordpress websites", href: "/services/wordpress" },
        { label: "Webshops", href: "/services/webshop" },
        { label: "Basic SEO", href: "/services/seo" },
        { label: "App development", href: "/services/app-development" },
        { label: "Maintenance & support", href: "/services/maintenance-support" },
      ];

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
                    <div
                        className="relative py-2"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => {
                            setIsServicesHovered(false);
                            setHoveredIndex(null);
                        }}
                    >
                        <Link
                            href="/services"
                            className="flex flex-row gap-2 items-center text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary"
                        >
                            Services
                            <IoIosArrowDown className={`transition ${isServicesHovered ? "rotate-180 text-primary" : ""}`} />
                        </Link>

                        {/* Submenu */}
                        <AnimatePresence>
                            {isServicesHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 mt-2 w-max z-50"
                                >
                                <div className="relative flex flex-col p-2 bg-white dark:bg-slate-900 shadow-md rounded-lg overflow-hidden">
                                    {/* Highlight */}
                                    <AnimatePresence>
                                    {hoveredIndex !== null && (
                                        <motion.div
                                        layout
                                        layoutId="highlight"
                                        className="absolute left-2 right-2 h-[40px] bg-gray-100 dark:bg-slate-800 rounded-md z-0"
                                        style={{ top: `calc(0.5rem + ${hoveredIndex * 40}px)` }}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                        />
                                    )}
                                    </AnimatePresence>

                                    {/* Items */}
                                    {submenuItems.map((item, index) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        className="relative z-10 p-2 whitespace-nowrap text-neutral-700 dark:text-neutral-300 transition"
                                    >
                                        {item.label}
                                    </Link>
                                    ))}
                                </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
                <div className="md:hidden mt-2 text-center bg-white dark:bg-slate-900 shadow-md py-4 space-y-2">
                    <Link href="/" className="block text-neutral-700 dark:text-neutral-300 hover:underline" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Services Dropdown for Mobile */}
                    <div className="relative">
                        <button
                            className="flex justify-center items-center gap-1 w-full text-neutral-700 dark:text-neutral-300 hover:underline"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                            <IoIosArrowDown className={`transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary" : ""}`} />
                        </button>
                        {servicesOpen && (
                            <div className="mt-2 flex flex-col bg-white dark:bg-slate-900 shadow-md rounded-lg overflow-hidden w-full">
                                {submenuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setServicesOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/projects" className="block text-neutral-700 dark:text-neutral-300 hover:underline" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/blogs" className="block text-neutral-700 dark:text-neutral-300 hover:underline" onClick={() => setIsOpen(false)}>
                        Blogs
                    </Link>
                    <Link href="/about" className="block text-neutral-700 dark:text-neutral-300 hover:underline" onClick={() => setIsOpen(false)}>
                        About
                    </Link>

                    <div className="flex justify-center">
                        <ThemeToggle />
                    </div>

                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <div className="py-2 px-3 gradient-btn inline-block">Get in touch</div>
                    </Link>
                </div>
            )}
        </nav>
    );
}
