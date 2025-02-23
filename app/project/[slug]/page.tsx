import { getAllProjects, getProjectBySlug } from "@/lib/server/getProjects";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

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
        return <div className="text-center py-12 text-xl">Project Not Found</div>;
    }

    // Compile MDX content
    const { content } = await compileMDX<{ title: string }>({
        source: project.content ?? "",
        components: {},
    });

    return (
        <main className="article">
            <div className="container pt-[140px] pb-12">
                {/* Project Title */}
                <h1 className="text-4xl font-bold mb-2">{project.data?.title ?? "Untitled Project"}</h1>

                {/* Metadata */}
                <div className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <span>{project.data?.date ?? "Unknown Date"} - {project.data?.status ?? "No Status"}</span>
                </div>

                {/* Tags */}
                {project.data?.tags && project.data.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.data.tags.map((tag) => (
                            <Link key={tag} href={`/projects?tag=${encodeURIComponent(tag)}`}>
                                <span className="px-3 py-1 text-sm bg-primary text-white rounded-md hover:scale-105 transition">
                                    {tag}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}

                {/* MDX Content (Main Body) */}
                <article className="prose dark:prose-invert mt-6">
                    {content}
                </article>

                {/* External Links */}
                {project.data?.links && project.data.links.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-2">Project Links</h2>
                        <ul className="list-disc pl-6">
                            {project.data.links.map((link) => (
                                <li key={link.url}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        {link.caption ?? "Visit Link"}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Project Gallery */}
                {project.data?.gallery && project.data.gallery.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.data.gallery.map((image, index) => (
                                <div key={index} className="relative aspect-video overflow-hidden rounded-md shadow-md">
                                    <Image
                                        src={image.src ?? ""}
                                        alt={image.alt ?? "Project image"}
                                        width={800}
                                        height={450}
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                    />
                                    {image.caption && (
                                        <p className="text-center text-sm text-neutral-500 mt-2">{image.caption}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}