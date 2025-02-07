"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // ensure theme loads correctly in hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // prevent mismatch between server and client

    const isDarkMode = theme === "dark";

    return (
        <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: isDarkMode ? "flex-start" : "flex-end",
                backgroundColor: isDarkMode ? "#333" : "#ddd",
            }}
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        >
            <motion.div
                className="toggle-handle"
                style={{
                    ...handle,
                    backgroundColor: isDarkMode ? "#555" : "#888",
                }}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            >
                {isDarkMode ? "🌙" : "☀️"}
            </motion.div>
        </button>
    );
}

/**
 * ==============   Styles   ================
 */
const container = {
    width: 60,
    height: 40,
    borderRadius: 40,
    cursor: "pointer",
    display: "flex",
    padding: 5,
    alignItems: "center",
};

const handle = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
};
