"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ProjectPost } from "@/lib/server/getProjects";

export default function TagFilter({ allProjects, allTags }: { allProjects: ProjectPost[]; allTags: string[] }) {
    const searchParams = useSearchParams();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Set initial selected tag from URL query (if present)
    useEffect(() => {
        const tagFromURL = searchParams.get("tag");
        if (tagFromURL) {
            setSelectedTags([tagFromURL]);
        }
    }, [searchParams]);

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
            <motion.div layout className="mt-4 flex flex-wrap gap-4">
                {allTags.map((tag) => (
                    <motion.button
                        key={tag}
                        layout
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded transition-colors ${
                            selectedTags.includes(tag)
                                ? "bg-primary text-white "
                                : "border border-primary text-primary"
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
                className="relative mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center"
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
                                className="group rounded-md overflow-hidden shadow hover:shadow-md w-full aspect-square flex flex-col 
                                justify-between h-[420pxbg-white dark:bg-neutral-800 text-black dark:text-white transition-shadow"
                            >
                                {/* Thumbnail */}
                                {project.thumbnail && (
                                    <div className="aspect-video overflow-hidden flex-3 shadow-md">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="object-cover w-full h-full group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                {/* Content */}
                                <div className="p-6 flex flex-col flex-2 gap-2">
                                    <div className="flex flex-row justify-between items-center gap-4">
                                        <div className="project-head-content-text">
                                            <small>{project.status}</small>
                                            <h2 className="text-xl font-semibold">
                                                {project.title}
                                            </h2>
                                        </div>
                                        <div className="project-head-content-discover">
                                            <Link href={`/project/${project.slug}`}>
                                                <p className="p-2 flex flex-row rounded-md bg-primary text-white hover:scale-105 transition">
                                                    discover
                                                    <svg className="transform -rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" >
                                                        <path d="m19 12-7 7-7-7"></path>
                                                    </svg>
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <p className="flex-grow line-clamp-2">{project.description}</p>

                                    {/* Animated tags inside each project */}
                                    <motion.div layout className="mt-2 flex gap-2">
                                        {project.tags?.map((tag) => (
                                            <motion.button
                                                key={tag}
                                                layout
                                                onClick={() => toggleTag(tag)}
                                                className={`px-2 py-1 text-xs rounded hover:scale-105 transition ${
                                                    selectedTags.includes(tag)
                                                        ? "bg-primary text-white "
                                                        : "border border-primary text-primary"
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
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            key="no-projects"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute text-neutral-600 dark:text-neutral-300 w-full text-center"
                        >
                            No projects found matching the selected tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}