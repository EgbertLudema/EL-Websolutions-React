"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectPost } from "@/lib/server/getProjects";
import ProjectCard from "./Projecten/ProjectCard";

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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Animated tag filter */}
            <motion.div className="w-full flex flex-col col-span-full lg:col-span-1 gap-3 p-4 border border-slate-300 dark:border-slate-700 rounded-lg">
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

            {/* Grid for projects with height animation */}
            <motion.div
                layout
                className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {sortedProjects.length > 0 ? (
                        sortedProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} selectedTags={selectedTags} />
                        ))
                    ) : (
                        <motion.p
                            key="no-projects"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full"
                        >
                            Geen projecten gevonden met deze tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
