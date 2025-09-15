"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const submenuItems = [
        { label: "Wireframing", href: "/diensten/wireframing" },
        { label: "Custom websites", href: "/diensten/custom-web-development" },
        { label: "Wordpress websites", href: "/diensten/wordpress" },
        { label: "Webshops", href: "/diensten/webshop" },
        { label: "Basic SEO", href: "/diensten/seo" },
        // { label: "App development", href: "/diensten/app-development" },
        { label: "Onderhoud & support", href: "/diensten/maintenance-support" },
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

    // Handle click outside of mobile menu to close it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
          
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        }
    
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        if (!isOpen) {
            setServicesOpen(false);
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);      

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
                            href="/diensten"
                            className="flex flex-row gap-2 items-center text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary"
                        >
                            Diensten
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

                    <Link href="/projecten" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                        Projecten
                    </Link>
                    <Link href="/blogs" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                        Blogs
                    </Link>
                    <Link href="/over-mij" className="text-neutral-600 dark:text-neutral-300 transition hover:text-primary dark:hover:text-primary">
                        Over mij
                    </Link>
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    <Link href="/contact">
                        <div className="py-2 px-3 gradient-btn">Contact</div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        ref={toggleButtonRef}
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        className="relative w-6 h-5 flex flex-col justify-between items-center z-[100]"
                    >
                        {/* Top Bar */}
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8.5 } : { rotate: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="block h-[3px] w-full bg-slate-700 dark:bg-slate-200 rounded origin-center"
                        />
                        {/* Middle Bar */}
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="block h-[3px] w-full bg-slate-700 dark:bg-slate-200 rounded origin-center"
                        />
                        {/* Bottom Bar */}
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8.5 } : { rotate: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="block h-[3px] w-full bg-slate-700 dark:bg-slate-200 rounded origin-center"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="fixed top-0 right-0 w-3/4 sm:w-1/2 min-h-[100dvh] z-50 bg-white dark:bg-slate-900 shadow-lg px-6 py-6 flex flex-col after:absolute after:top-0 after:-right-[20px] after:w-[22px] after:h-full after:bg-white dark:after:bg-slate-900"
                    >

                    {/* Menu Items */}
                    <nav className="flex flex-col gap-1 flex-grow">
                        <Link
                            href="/"
                            className="py-3 px-2 rounded text-neutral-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                            onClick={() => setIsOpen(false)}
                        >
                        Home
                        </Link>

                        {/* Services with submenu */}
                        <div className="w-full">
                        <button
                            className="w-full flex justify-between items-center py-3 px-2 rounded text-neutral-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                            onClick={(e) => {
                            e.stopPropagation();
                            setServicesOpen(!servicesOpen);
                            }}
                        >
                            <Link
                                href="/diensten"
                                onClick={() => setIsOpen(false)}
                            >
                            Diensten
                            </Link>
                            <IoIosArrowDown
                            className={`transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary" : "text-neutral-500"}`}
                            />
                        </button>

                        <AnimatePresence>
                            {servicesOpen && (
                            <motion.div
                                key="submenu"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden flex flex-col gap-1 pl-4 border-l border-gray-200 dark:border-slate-700 mt-1"
                            >
                                {submenuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="py-2 px-2 rounded text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                                    onClick={() => {
                                    setIsOpen(false);
                                    setServicesOpen(false);
                                    }}
                                >
                                    {item.label}
                                </Link>
                                ))}
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>

                        <Link
                        href="/projecten"
                        className="py-3 px-2 rounded text-neutral-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                        onClick={() => setIsOpen(false)}
                        >
                        Projecten
                        </Link>

                        <Link
                        href="/blogs"
                        className="py-3 px-2 rounded text-neutral-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                        onClick={() => setIsOpen(false)}
                        >
                        Blogs
                        </Link>

                        <Link
                        href="/over-mij"
                        className="py-3 px-2 rounded text-neutral-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                        onClick={() => setIsOpen(false)}
                        >
                        Over mij
                        </Link>
                    </nav>

                    {/* Contact Button */}
                    <div className="mt-6">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <div className="w-full py-3 text-center gradient-btn text-white rounded shadow">
                            Contact
                        </div>
                        </Link>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
