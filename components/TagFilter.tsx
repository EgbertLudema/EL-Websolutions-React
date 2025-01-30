"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/server/getBlogs";

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

    // Filter blogs
    const filteredBlogs = selectedTags.length
        ? allBlogs.filter((blog) =>
              selectedTags.every((tag) => blog.tags?.includes(tag)) // Must contain all selected tags
          )
        : allBlogs; // Show all if no tags are selected

    return (
        <div>
            <h2 className="text-2xl font-bold">Blog Posts</h2>

            {/* Animated tag filter */}
            <motion.div layout className="mt-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                    <motion.button
                        key={tag}
                        layout
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded ${
                            selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200"
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
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center"
            >
                <AnimatePresence>
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
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
                                className="p-4 rounded-md shadow w-full aspect-square flex flex-col justify-between"
                            >
                                <h2 className="text-xl font-semibold">
                                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                </h2>
                                <p className="flex-grow">{blog.description}</p>
                                <small>{blog.date} - {blog.status}</small>

                                {/* Animated tags inside each blog */}
                                <motion.div layout className="mt-2 flex gap-2">
                                    {blog.tags?.map((tag) => (
                                        <motion.button
                                            key={tag}
                                            layout
                                            onClick={() => toggleTag(tag)}
                                            className={`px-2 py-1 text-xs rounded ${
                                                selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200"
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
                        >
                            No blogs found matching the selected tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}