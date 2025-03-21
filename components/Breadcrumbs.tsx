"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function Breadcrumbs() {
    const pathSegments = usePathname().split("/").filter(Boolean);

    return (
        <nav className="w-full text-sm mb-4 text-slate-600 dark:text-slate-400">
            <ul className="flex gap-2 items-center">
                <li>
                    <Link href="/">
                        <FaHome className="hover:opacity-80 transition" />
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;
                    return (
                        <li key={href} className="flex items-center gap-2">
                            <span>/</span>
                            <Link 
                                href={href} 
                                className={`transition ${isLast ? "text-primary font-semibold" : "hover:opacity-80"}`}
                            >
                                {segment}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}