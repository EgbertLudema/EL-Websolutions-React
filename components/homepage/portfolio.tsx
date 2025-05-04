import Link from "next/link";
import { ProjectPost } from "@/lib/server/getProjects";
import ProjectCard from "../Projecten/ProjectCard";

export default function Portfolio({ allProjects }: { allProjects: ProjectPost[] }) {
    if (!allProjects || allProjects.length === 0) {
        return <p className="text-center text-neutral-600 dark:text-neutral-300">Geen projecten gevonden.</p>;
    }

    // Sort: Unfinished projects first, then by date (newest first)
    const sortedProjects = [...allProjects].sort((a, b) => {
        if (!a.date) return -1;
        if (!b.date) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Take the first 3 projects
    const recentProjects = sortedProjects.slice(0, 3);

    return (
        <section className="py-20">
            <div className="container flex flex-col items-center">
                <p className="text-center sub-title mb-6">Portfolio</p>
                <h2 className="text-center text-slate-900 dark:text-slate-100 mb-12">Uitgelichte projecten</h2>

                {/* Show only 2 projects on small screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 place-items-center items-stretch">
                    {recentProjects.slice(0, 2).map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                {/* Show all 3 projects on medium and larger screens */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center items-stretch">
                    {recentProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
                <Link href="/projecten">
                    <div className="mt-8 py-3 px-6 primary-btn">   
                        Bekijk alle projecten
                    </div>
                </Link>
            </div>
        </section>
    );
}
