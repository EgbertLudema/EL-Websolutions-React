"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ProjectPost } from "@/lib/server/getProjects";
import { FaRegCalendarAlt, FaWrench } from "react-icons/fa";

export default function TagFilter({ allProjects, allTags }: { allProjects: ProjectPost[]; allTags: string[] }) {
    const searchParams = useSearchParams();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    
    useEffect(() => {
        const tagFromURL = searchParams.get("tag");
        if (tagFromURL) {
            setSelectedTags([tagFromURL]);
        }
    }, [searchParams]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag)
                : [...prevTags, tag]
        );
    };

    const filteredProjects = selectedTags.length
        ? allProjects.filter((project) =>
              selectedTags.every((tag) => project.tags?.includes(tag))
          )
        : allProjects;

    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (!a.date) return -1;
        if (!b.date) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Animated tag filter */}
            <motion.div className="w-full flex flex-col gap-3 p-4 border border-slate-300 dark:border-slate-700 rounded-lg">
                <h3 className="font-medium text-slate-800 dark:text-slate-200">Filter</h3>
                <div className="flex flex-row flex-wrap items-start content-start gap-3">
                    {allTags.map((tag) => (
                        <motion.button
                            key={tag}
                            layout
                            onClick={() => toggleTag(tag)}
                            className={`transition ${
                                selectedTags.includes(tag) ? "tag-big-selected" : "tag-big"
                            }`}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
            
            {/* Grid for projects */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {sortedProjects.length > 0 ? (
                        sortedProjects.map((project, index) => (
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
                                className="group relative dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <Link href={`/projects/${project.slug}`}>
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="mb-4 line-clamp-2 text-slate-600 dark:text-slate-400">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.tags?.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`transition ${
                                                        selectedTags.includes(tag)
                                                            ? "tag-selected"
                                                            : "tag"
                                                    }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <small className="text-xs text-slate-600 dark:text-slate-400 flex flex-row gap-1 items-center">
                                            {project.status !== "In Progress" ? <FaRegCalendarAlt className="w-3 h-3" /> : <FaWrench className="w-3 h-3" />}
                                            {project.status}
                                        </small>
                                    </div>
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            key="no-projects"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-3 text-center text-slate-500 dark:text-slate-400"
                        >
                            No projects found matching the selected tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}