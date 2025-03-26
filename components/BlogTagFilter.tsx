"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/server/getBlogs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

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
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Otherwise, sort by date (newest first)
    });

    return (
        <div>
            {/* Animated tag filter */}
            <motion.div layout className="mt-4 flex flex-wrap justify-start gap-4">
                {allTags.map((tag) => (
                    <motion.button
                        key={tag}
                        layout
                        onClick={() => toggleTag(tag)}
                        className={`transition ${
                            selectedTags.includes(tag)
                                ? "tag-big-selected"
                                : "tag-big"
                        }`}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        {tag}
                    </motion.button>
                ))}
            </motion.div>

            {/* Grid for blogs */}
            <motion.div
                layout
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center"
            >
                <AnimatePresence>
                    {sortedBlogs.length > 0 ? (
                        sortedBlogs.map((blog) => (
                            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group w-full h-full">
                                <motion.article
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="bg-slate-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-slate-800 transition-shadow flex flex-col h-full"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={blog.thumbnail?.[0] || "/placeholder.jpg"}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-3 text-sm text-slate-600 dark:text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <FaCalendarAlt className="w-4 h-4" />
                                                {blog.date
                                                    ? new Date(blog.date).toLocaleDateString("nl-NL", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    })
                                                    : "In progress"}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FaRegUser className="w-4 h-4" />
                                                {blog.author || "Unknown"}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                                            {blog.description}
                                        </p>

                                        {/* Tags inside blog card */}
                                        <motion.div layout className="flex flex-wrap gap-2 mt-auto">
                                            {blog.tags?.map((tag) => (
                                                <motion.button
                                                    key={tag}
                                                    layout
                                                    onClick={(e) => {
                                                        e.preventDefault(); // Prevent link navigation
                                                        toggleTag(tag);
                                                    }}
                                                    className={`transition ${
                                                        selectedTags.includes(tag)
                                                            ? "tag-selected"
                                                            : "tag-blog"
                                                    }`}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 20,
                                                    }}
                                                >
                                                    {tag}
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))
                    ) : (
                        <motion.p
                            key="no-blogs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-neutral-700 dark:text-neutral-400 col-span-full text-center mt-10"
                        >
                            No blogs found matching the selected tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}