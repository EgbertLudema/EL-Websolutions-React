"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectPost } from "@/lib/server/getProjects";
import { FaRegCalendarAlt, FaWrench } from "react-icons/fa";

export default function ProjectCard({ project, selectedTags = [] }: { project: ProjectPost; selectedTags?: string[] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.jpg"}
            alt={project.title}
            width={400}
            height={225}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className={`transition ${selectedTags.includes(tag) ? "tag-selected" : "tag"}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <small className="text-xs text-slate-600 dark:text-slate-400 flex flex-row gap-1 items-center">
            {project.status !== "In Progress" ? (
              <FaRegCalendarAlt className="w-3 h-3" />
            ) : (
              <FaWrench className="w-3 h-3" />
            )}
            {project.status}
          </small>
        </div>
      </Link>
    </motion.div>
  );
}