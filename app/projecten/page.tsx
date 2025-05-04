import { getAllProjects, ProjectPost } from "@/lib/server/getProjects";
import ProjectFilter from "@/components/ProjectTagFilter";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Projecten - EL-Websolutions",
    description: "Benieuwd naar wat ik allemaal al heb opgeleverd? Bekijk hier mijn projecten.",
};

export default async function ProjectsPage() {
    const allProjects: ProjectPost[] = await getAllProjects();
    const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags || [])));

    return (
        <main className="container mt-[100px] py-8 mb-12">
            <h1 className="mb-8 leading-snug">Projecten</h1>
            <Suspense fallback={<div>Filters laden...</div>}>
                <ProjectFilter allProjects={allProjects} allTags={allTags} />
            </Suspense>
        </main>
    );
}
