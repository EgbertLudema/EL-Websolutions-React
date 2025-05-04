"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { ProjectPost } from "@/lib/server/getProjects";
import ProjectCard from "./Projecten/ProjectCard";

export default function TagFilter({ allProjects, allTags }: { allProjects: ProjectPost[]; allTags: string[] }) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
        <>
            <motion.div layout className="mt-4 flex flex-wrap justify-start gap-4">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`transition ${selectedTags.includes(tag) ? "tag-big-selected" : "tag-big"}`}
                    >
                        {tag}
                    </button>
                ))}
            </motion.div>

            <motion.div
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
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
                            className="text-neutral-700 dark:text-neutral-400 col-span-full text-center mt-10"
                        >
                            Geen projecten gevonden met deze tags.
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
