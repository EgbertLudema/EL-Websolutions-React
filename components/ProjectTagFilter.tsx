"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import Link from "next/link";
import { ProjectPost } from "@/lib/server/getProjects";

export default function TagFilter({ allProjects, allTags }: { allProjects: ProjectPost[]; allTags: string[] }) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Toggle tag selection
    const toggleTag = (tag: string) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag) // Remove tag if already selected
                : [...prevTags, tag] // Add tag if not selected
        );
    };

    // Filter projects based on selected tags
    const filteredProjects = selectedTags.length
        ? allProjects.filter((project) =>
              selectedTags.every((tag) => project.tags?.includes(tag)) // Must contain all selected tags
          )
        : allProjects; // Show all if no tags are selected

    // Sort: Unfinished projects (no date) first, then by date (newest first)
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (!a.date) return -1; // If 'a' has no date, it goes first
        if (!b.date) return 1; // If 'b' has no date, 'a' stays lower
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Otherwise, sort by date (newest first)
    });

    return (
        <div>
            {/* Animated tag filter */}
            <motion.div layout className="mt-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                    <motion.button
                        key={tag}
                        layout
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded transition-colors ${
                            selectedTags.includes(tag)
                                ? "bg-indigo-400 text-white dark:bg-indigo-300 dark:text-neutral-900"
                                : "bg-neutral-200 dark:bg-neutral-700 dark:text-white"
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

            {/* Grid for projects */}
            <motion.div
                layout
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center"
            >
                <AnimatePresence>
                    {sortedProjects.length > 0 ? (
                        sortedProjects.map((project) => (
                            <motion.div
                                key={project.slug}
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
                                    <Link href={`/project/${project.slug}`} className="hover:underline">
                                        {project.title}
                                    </Link>
                                </h2>
                                <p className="flex-grow">{project.description}</p>
                                <small>{project.status}</small>

                                {/* Animated tags inside each project */}
                                <motion.div layout className="mt-2 flex gap-2">
                                    {project.tags?.map((tag) => (
                                        <motion.button
                                            key={tag}
                                            layout
                                            onClick={() => toggleTag(tag)}
                                            className={`px-2 py-1 text-xs rounded transition-colors ${
                                                selectedTags.includes(tag)
                                                    ? "bg-indigo-400 text-white dark:bg-indigo-300 dark:text-neutral-900"
                                                    : "bg-neutral-200 dark:bg-neutral-700 dark:text-white"
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
                            key="no-projects"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-neutral-600 dark:text-neutral-300"
                        >
                            No projects found matching the selected tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}