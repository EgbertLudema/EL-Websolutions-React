"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Brand */}
                <Link href="/" className="text-xl font-bold text-black dark:text-white">
                    MyPortfolio
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 justify-center items-center">
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
                        Home
                    </Link>
                    <Link href="/project" className="text-gray-700 dark:text-gray-300 hover:underline">
                        Projects
                    </Link>
                    <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:underline">
                        Blogs
                    </Link>
                    <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">
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
                    <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:underline">
                        Home
                    </Link>
                    <Link href="/blogs" className="block text-gray-700 dark:text-gray-300 hover:underline">
                        Blogs
                    </Link>
                    <ThemeToggle />
                </div>
            )}
        </nav>
    );
}