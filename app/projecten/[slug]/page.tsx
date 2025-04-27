import Breadcrumbs from "@/components/Breadcrumbs";
import FeaturedProjects from "@/components/Projecten/FeaturedProjects";
import { getAllProjects, getProjectBySlug } from "@/lib/server/getProjects";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import type { Metadata } from "next";
import ProjectGallery from "../ProjectGallery";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = await getProjectBySlug(params.slug);
  
    if (!project) return {};
  
    return {
        title: "Project - " + project.data.title + " - EL Websolutions",
        description: project.data.description,
        openGraph: {
            title: project.data.title,
            description: project.data.description,
            images: [
                {
                    url: project.data.thumbnail || "",
                },
            ],
        },
    };
}

// Generate Static Paths for Each Project
export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Dynamic Project Page Component
export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        return <div className="text-center py-12 text-xl">Project niet gevonden!</div>;
    }

    // Compile MDX content
    const { content } = await compileMDX<{ title: string }>({
        source: project.content ?? "",
        components: {},
    });

    const allProjects = await getAllProjects();

    return (
        <>
            <main>
                <div className="container mt-[140px] py-12 flex flex-col items-start gap-4">

                    <Breadcrumbs />

                    <div className="flex flex-col gap-2">
                        {/* Project Title */}
                        <h1 className="text-4xl font-bold mb-2">{project.data?.title ?? "Untitled Project"}</h1>

                        {/* Metadata */}
                        <div className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 flex flex-row gap-2 items-center">
                            {project.data?.status !== "In Progress" ? (
                                <FaRegCalendarAlt className="w-3 h-3" />
                            ) : (
                                <FaWrench className="w-3 h-3" />
                            )}
                            <span>{project.data.status}</span>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm">
                            {project.data?.description ?? ""}
                        </p>

                        {/* Tags */}
                        {project.data?.tags && project.data.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.data.tags.map((tag) => (
                                    <Link key={tag} href={`/projecten?tag=${encodeURIComponent(tag)}`}>
                                        <span className="px-3 py-1 tag-selected hover:scale-105 transition">
                                            {tag}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <hr className="mt-6 w-full border-neutral-500 dark:border-neutral-300" />

                    {/* MDX Content (Main Body) */}
                    <article className="project-page prose dark:prose-invert mt-6 flex flex-col gap-4">
                        {content}
                    </article>

                    {/* Project Gallery */}
                    {project.data?.gallery && project.data.gallery.length > 0 && (
                        <div className="mt-10">
                            <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-300">Gallery</h2>
                            <ProjectGallery images={project.data.gallery} />
                        </div>
                    )}

                    {/* External Links */}
                    {project.data?.links && project.data.links.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-slate-300">Project Links</h2>
                            <ul>
                                {project.data.links.map((link) => (
                                    <li key={link.url}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="primary-btn py-2 px-4 shadow-md hover:shadow-lg"
                                        >
                                            {link.caption ?? "Visit Link"}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
            <FeaturedProjects
                currentSlug={params.slug}
                currentTags={project.data.tags}
                allProjects={allProjects}
            />
        </>
    );
}