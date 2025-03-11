"use client";

import { useState } from "react";
import { FaEnvelope, FaCopy, FaCheck } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

interface EmailLinkProps {
    color: string;
}

export default function EmailLink({ color }: EmailLinkProps) {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        const email = "info@el-websolutions.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2600);
            })
            .catch(err => console.error("Failed to copy email: ", err));
    };

    return (
        <div className={`flex items-center space-x-2 text-${color}`}>
            <FaEnvelope className={`w-4 h-4 mb-1 text-${color}`} />
            <button 
                onClick={copyEmail} 
                className="relative group flex items-center space-x-1 focus:outline-none"
            >
                <span className={`hover-underline before:bg-${color} text-sm`}>
                    info@el-websolutions.com
                </span>
                <div className="w-3 h-3">
                    <AnimatePresence>
                        {copied ? (
                            <motion.span 
                                key="check"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="absolute right-0 w-3 h-3"
                            >
                                <FaCheck className={`w-full h-full text-${color}`} />
                            </motion.span>
                        ) : (
                            <motion.span 
                                key="copy"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: copied ? 0 : 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="absolute right-0 w-3 h-3"
                            >
                                <FaCopy className={`w-full h-full text-${color}`} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        </div>
    );
}