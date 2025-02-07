"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure theme loads correctly in hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent mismatch between server and client

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border dark:border-gray-600 border-gray-300 bg-gray-100 dark:bg-gray-800 dark:text-white"
        >
            {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}
