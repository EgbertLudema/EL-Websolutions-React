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
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="sub-title mb-3">Overzicht</p>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Alle projecten</h2>
                    </div>
                    <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
                        Bekijk eerder werk en filter op type project, platform of aanpak om sneller relevante cases te vinden.
                    </p>
                </div>

                <Suspense fallback={<div>Filters laden...</div>}>
                    <ProjectFilter allProjects={allProjects} allTags={allTags} />
                </Suspense>
            </section>
        </main>
    );
}
