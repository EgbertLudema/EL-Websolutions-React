"use client";

import ProjectCard from "@/components/Projecten/ProjectCard";
import { ProjectPost } from "@/lib/server/getProjects";

interface FeaturedProjectsProps {
    currentSlug: string;
    currentTags?: string[];
    allProjects: ProjectPost[];
}

export default function FeaturedProjects({
    currentSlug,
    currentTags = [],
    allProjects,
}: FeaturedProjectsProps) {
    // Score by tag match
    const scoredProjects = allProjects
        .filter((p) => p.slug !== currentSlug)
        .map((p) => {
            const score = p.tags?.filter((tag) => currentTags.includes(tag)).length || 0;
            return { ...p, score };
        })
        .sort((a, b) => b.score - a.score);

    const featured =
        scoredProjects.length > 0
            ? scoredProjects.slice(0, 3)
            : allProjects.filter((p) => p.slug !== currentSlug).slice(0, 3);

    return (
        <section className="bg-slate-200 dark:bg-slate-700 border-t border-slate-300 dark:border-slate-700 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold mb-10 text-center">Uitgelichte projecten</h2>

                {/* 2 projecten op kleine schermen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8">
                    {featured.slice(0, 2).map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            selectedTags={currentTags}
                        />
                    ))}
                </div>

                {/* 3 projecten vanaf medium schermen */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            selectedTags={currentTags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
