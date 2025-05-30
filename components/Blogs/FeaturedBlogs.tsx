"use client";

import { BlogPost } from "@/lib/server/getBlogs";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";

interface FeaturedBlogsProps {
    currentSlug: string;
    currentTags?: string[];
    allBlogs: BlogPost[];
}

function useMaxCols() {
    const [maxCols, setMaxCols] = useState(1);

    useEffect(() => {
        const updateCols = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setMaxCols(3);
            } else if (width >= 640) {
                setMaxCols(2);
            } else {
                setMaxCols(2);
            }
        };
        updateCols(); // Initialize on mount
        window.addEventListener("resize", updateCols);
        return () => window.removeEventListener("resize", updateCols);
    }, []);

    return maxCols;
}

export default function FeaturedBlogs({ currentSlug, currentTags = [], allBlogs }: FeaturedBlogsProps) {
    const maxCols = useMaxCols();

    const scoredBlogs = allBlogs
        .filter((b) => b.slug !== currentSlug)
        .map((b) => {
            const score = b.tags?.filter((tag) => currentTags.includes(tag)).length || 0;
            return { ...b, score };
        })
        .sort((a, b) => b.score - a.score);

    const relatedBlogs = scoredBlogs.length ? scoredBlogs.slice(0, 3) : allBlogs.filter(b => b.slug !== currentSlug).slice(0, 3);

    return (
        <section className="bg-slate-200 dark:bg-slate-700 border-t border-slate-300 dark:border-slate-700 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-center text-slate-600 dark:text-slate-200">Uitgelichte blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {relatedBlogs.slice(0, maxCols).map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
