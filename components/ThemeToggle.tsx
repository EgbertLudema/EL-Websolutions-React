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
            className="toggle-container shadow-md border border-gray-200 bg-white dark:bg-slate-500 dark:border-slate-400"
            style={{
                ...container,
                justifyContent: isDarkMode ? "flex-start" : "flex-end",
            }}
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            aria-label={`Activate ${isDarkMode ? "light" : "dark"} mode`}
        >
            <motion.div
                className="toggle-handle bg-white dark:bg-slate-300"
                style={{
                    ...handle
                }}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.4,
                }}
            >
                {isDarkMode ? (
                    <svg className="size-4/6 fill-neutral-700" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 23.99 24.01">
                        <path d="M12.01,24.01c-3.4,0-6.64-1.44-8.91-3.97C.8,17.51-.3,14.12.07,10.73.69,5.37,4.77,1.06,10.09.16c1.67-.26,3.38-.19,5.03.2,1.34.34,2.14,1.71,1.8,3.04-.12.45-.36.86-.69,1.18-4.56,4.17-4.16,10.64.81,14.41,1.09.85,1.28,2.42.42,3.51-.29.37-.68.65-1.12.81-1.4.46-2.86.69-4.33.69Z"/>
                    </svg>
                ) : (
                    <svg className="size-4/6 fill-neutral-700" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 23.99 24.01">
                        <path d="M12.01,7.01c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5ZM12.01,14.01c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2ZM16.96,7.06c-.59-.59-.59-1.54,0-2.12l1.41-1.41c.59-.59,1.54-.59,2.12,0,.59.59.59,1.54,0,2.12l-1.41,1.41c-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44ZM7.06,16.96c.59.59.59,1.54,0,2.12l-1.41,1.41c-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44c-.59-.59-.59-1.54,0-2.12l1.41-1.41c.59-.59,1.54-.59,2.12,0ZM3.52,5.65c-.59-.59-.59-1.54,0-2.12.59-.59,1.54-.59,2.12,0l1.41,1.41c.59.59.59,1.54,0,2.12-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44c0,0-1.41-1.41-1.41-1.41ZM20.48,18.38c.59.59.59,1.54,0,2.12-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44l-1.41-1.41c-.59-.59-.59-1.54,0-2.12.59-.59,1.54-.59,2.12,0l1.41,1.41ZM23.99,12.02c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c.83,0,1.5.67,1.5,1.5ZM3.51,13.51H1.51C.68,13.51,0,12.84,0,12.01s.67-1.5,1.5-1.5h2c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5ZM10.51,3.51V1.51C10.51.68,11.18,0,12.01,0s1.5.67,1.5,1.5v2c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5ZM13.51,20.51v2c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-2c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5Z"/>
                    </svg>
                )}

            </motion.div>
        </button>
    );
}

/**
 * ==============   Styles   ================
 */
const container = {
    width: 52,
    height: 34,
    borderRadius: 30,
    cursor: "pointer",
    display: "flex",
    padding: 5,
    alignItems: "center",
};

const handle = {
    width: 24,
    height: 24,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
};
