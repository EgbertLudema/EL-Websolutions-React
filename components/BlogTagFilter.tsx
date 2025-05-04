"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { BlogPost } from "@/lib/server/getBlogs";
import BlogCard from "./Blogs/BlogCard";

export default function TagFilter({ allBlogs, allTags }: { allBlogs: BlogPost[]; allTags: string[] }) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Toggle tag selection
    const toggleTag = (tag: string) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag) // Remove tag if already selected
                : [...prevTags, tag] // Add tag if not selected
        );
    };

    // Filter blogs based on selected tags
    const filteredBlogs = selectedTags.length
        ? allBlogs.filter((blog) =>
              selectedTags.every((tag) => blog.tags?.includes(tag)) // Must contain all selected tags
          )
        : allBlogs; // Show all if no tags are selected

    // Sort: Unfinished blogs (no date) first, then by date (newest first)
    const sortedBlogs = [...filteredBlogs].sort((a, b) => {
        if (!a.date) return -1; // If 'a' has no date, it goes first
        if (!b.date) return 1; // If 'b' has no date, 'a' stays lower
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by date (newest first)
    });

    return (
        <>
            {/* Animated tag filter */}
            <motion.div layout className="mt-4 flex flex-wrap justify-start gap-4">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`transition ${
                            selectedTags.includes(tag)
                                ? "tag-big-selected"
                                : "tag-big"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </motion.div>

            {/* Grid for blogs */}
            <motion.div
                layout
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
            >
                <AnimatePresence mode="popLayout">
                    {sortedBlogs.length > 0 ? (
                        sortedBlogs.map((blog) => (
                            <BlogCard
                                key={blog.slug}
                                blog={blog}
                            />
                        ))
                    ) : (
                        <motion.p
                            key="no-blogs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-neutral-700 dark:text-neutral-400 col-span-full text-center mt-10"
                        >
                            Geen blogs gevonden met deze tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}