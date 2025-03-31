import Link from "next/link";
import { ProjectPost } from "@/lib/server/getProjects";
import * as motion from "motion/react-client";
import Breadcrumbs from "../Breadcrumbs";

export default function Portfolio({ allProjects }: { allProjects: ProjectPost[] }) {
    if (!allProjects || allProjects.length === 0) {
        return <p className="text-center text-neutral-600 dark:text-neutral-300">No projects found.</p>;
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
                <h2 className="text-center mb-12">Featured Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center items-stretch">
                    {recentProjects.map((project, index) => (   
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-md overflow-hidden shadow-md w-full bg-slate-100 dark:bg-slate-800 text-black dark:text-white hover:shadow-lg transition"
                        >
                            <Link href={`/projects/${project.slug}`} className="h-full flex flex-col"> 
                                {/* Thumbnail */}
                                {project.thumbnail && (
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                {/* Project Details */}
                                <div className="p-6 flex gap-4 justify-start flex-col">
                                    <div>
                                        <h3 className="text-xl text-slate-800 dark:text-slate-200 group-hover:text-primary font-semibold mb-2 transition-colors">{project.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
                                    </div>

                                    {/* Tags (Always aligned at the bottom) */}
                                    {project.tags?.length ? (
                                        <div className="flex flex-wrap gap-2 justify-self-end">
                                            {project.tags.map((tag) => (
                                                <div
                                                    key={tag}
                                                    className="px-3 py-1 tag hover:scale-105 transition"
                                                >
                                                    <Link href={`/projects?tag=${encodeURIComponent(tag)}`}>
                                                        {tag}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <Link href="/project">
                    <div className="mt-8 py-3 px-6 primary-btn">   
                        View all projects
                    </div>
                </Link>
            </div>
        </section>
    );
}
