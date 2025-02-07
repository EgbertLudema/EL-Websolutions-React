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

    // Ensure theme is loaded before rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevents hydration mismatch

    return (
        <nav className="bg-white dark:bg-neutral-900 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Brand */}
                <Link href="/" className="text-xl font-bold text-black dark:text-white">
                    <Image src={theme === "dark" ? "/images/EL-white-no-bg-name-no-padding.png" : "/images/EL-color-no-bg-name-no-padding.png"} width={160} height={50} alt="Logo EL Websolutions" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 justify-center items-center">
                    <Link href="/" className="text-neutral-700 dark:text-neutral-300 hover:underline">
                        Home
                    </Link>
                    <Link href="/project" className="text-neutral-700 dark:text-neutral-300 hover:underline">
                        Projects
                    </Link>
                    <Link href="/blog" className="text-neutral-700 dark:text-neutral-300 hover:underline">
                        Blogs
                    </Link>
                    <Link href="/about" className="text-neutral-700 dark:text-neutral-300 hover:underline">
                        About
                    </Link>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 text-center">
                    <Link href="/" className="block text-neutral-700 dark:text-neutral-300 hover:underline">
                        Home
                    </Link>
                    <Link href="/blogs" className="block text-neutral-700 dark:text-neutral-300 hover:underline">
                        Blogs
                    </Link>
                    <ThemeToggle />
                </div>
            )}
        </nav>
    );
}