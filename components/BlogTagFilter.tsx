"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/server/getBlogs";
import { FaC } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

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
            <motion.div layout className="mt-4 flex flex-wrap justify-center gap-4">
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
                            <motion.div
                                key={blog.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                }}
                                className="p-4 rounded-md shadow w-full aspect-square flex flex-col justify-between 
                                bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-600"
                            >
                                <h2 className="text-xl font-semibold">
                                    <Link href={`/blogs/${blog.slug}`} className="hover:underline">
                                        {blog.title}
                                    </Link>
                                </h2>
                                <p className="flex-grow">{blog.description}</p>
                                <small className="flex flex-row gap-1 items-center">
                                    <FaCalendarAlt />
                                    {new Date(blog.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </small>


                                {/* Animated tags inside each blog */}
                                <motion.div layout className="mt-2 flex gap-2">
                                    {blog.tags?.map((tag) => (
                                        <motion.button
                                            key={tag}
                                            layout
                                            onClick={() => toggleTag(tag)}
                                            className={`transition ${
                                                selectedTags.includes(tag)
                                                    ? "tag-selected"
                                                    : "tag"
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
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            key="no-blogs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-neutral-700 dark:text-neutral-400"
                        >
                            No blogs found matching the selected tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}