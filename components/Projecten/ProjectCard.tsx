"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectPost } from "@/lib/server/getProjects";
import { FaRegCalendarAlt, FaWrench } from "react-icons/fa";

export default function ProjectCard({ project, selectedTags = [] }: { project: ProjectPost; selectedTags?: string[] }) {
    return (
        <Link href={`/projecten/${project.slug}`} className="group w-full h-full">
            <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-slate-800 transition-shadow flex flex-col h-full"
            >
                <div className="aspect-video overflow-hidden">
                    <Image
                        src={project.thumbnail || "/placeholder.jpg"}
                        alt={project.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                        {project.description}
                    </p>

                    {project.tags && project.tags.length > 0 && (
                        <motion.div layout className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`transition ${selectedTags.includes(tag) ? "tag-selected" : "tag"}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    )}

                    <div className="mt-4 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                        {project.status !== "In Progress" ? (
                            <FaRegCalendarAlt className="w-3 h-3" />
                        ) : (
                            <FaWrench className="w-3 h-3" />
                        )}
                        {project.status}
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}
