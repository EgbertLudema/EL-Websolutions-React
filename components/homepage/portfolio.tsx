import Link from "next/link";
import { ProjectPost } from "@/lib/server/getProjects";

export default function Portfolio({ allProjects }: { allProjects: ProjectPost[] }) {
    if (!allProjects || allProjects.length === 0) {
        return <p className="text-center text-neutral-600 dark:text-neutral-300">No projects found.</p>;
    }

    // Sort: Unfinished projects first, then by date (newest first)
    const sortedProjects = [...allProjects].sort((a, b) => {
        if (!a.date) return -1; // If 'a' has no date, it goes first
        if (!b.date) return 1; // If 'b' has no date, 'a' stays lower
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Otherwise, sort by date (newest first)
    });

    // Take the first 3 projects
    const recentProjects = sortedProjects.slice(0, 3);

    return (
        <section className="py-12 shadow-md bg-gradient-to-b from-transparent to-neutral-100 dark:to-neutral-800">
            <div className="container">
                <p className="text-center sub-title mb-6">Portfolio</p>
                <h2 className="text-center mb-6">Featured Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {recentProjects.map((project) => (
                        <div
                            key={project.slug}
                            className="p-4 rounded-md shadow-md w-full bg-neutral-100 dark:bg-neutral-800 
                            text-black dark:text-white border border-neutral-300 dark:border-neutral-600"
                        >
                            <h3 className="text-xl font-semibold">
                                <Link href={`/project/${project.slug}`} className="hover:underline">
                                    {project.title}
                                </Link>
                            </h3>
                            <p className="mt-2">{project.description}</p>
                            <small className="block mt-2">{project.status}</small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}