import Link from "next/link";
import { getAllBlogs } from "@/lib/server/getBlogs";
import { getAllProjects } from "@/lib/server/getProjects";
import { getAllServices } from "@/lib/server/getServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap - EL-Websolutions",
    description: "De sitemap van de website van EL-Websolutions",
};

// This page is for displaying the sitemap of the website
// It is not meant to be crawled by search engines
// Use this link for bots in google search console: https://el-websoltutions.com/sitemap.xml
export default async function SitemapPage() {
    const blogs = await getAllBlogs();
    const projects = await getAllProjects();
    const services = await getAllServices();

    const staticPaths = [
        { title: "Home", href: "/" },
        { title: "Diensten", href: "/diensten" },
        { title: "Projecten", href: "/projecten" },
        { title: "Blogs", href: "/blogs" },
        { title: "Over mij", href: "/over-mij" },
        { title: "Contact", href: "/contact" },
    ];

    return (
        <main className="container mx-auto mt-[100px] px-6 py-16 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Statische pagina&#39;s</h2>
                <ul className="list-disc pl-6">
                    {staticPaths.map(({ title, href }) => (
                        <li key={href} className="mb-1">
                            <Link href={href} className="text-primary hover:underline">
                                {title}
                            </Link>

                            {/* Toon subdiensten als het om de Diensten-pagina gaat */}
                            {href === "/diensten" && services.length > 0 && (
                                <ul className="list-disc pl-6 mt-2">
                                    {services.map((service) => (
                                        <li key={service.slug}>
                                            <Link href={`/diensten/${service.slug}`} className="text-primary hover:underline">
                                                {formatSlug(service.slug)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">Blogs</h2>
                <ul className="list-disc pl-6">
                    {blogs.map((blog) => (
                        <li key={blog.slug} className="mb-1">
                            <Link href={`/blogs/${blog.slug}`} className="text-primary hover:underline">
                                {blog.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Projecten</h2>
                <ul className="list-disc pl-6">
                    {projects.map((project) => (
                        <li key={project.slug} className="mb-1">
                            <Link href={`/projecten/${project.slug}`} className="text-primary hover:underline">
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

// Kleine utility functie om je slug netjes te formatteren (optioneel)
function formatSlug(slug: string) {
    return slug
        .replace(/-/g, " ") // vervangt '-' met spatie
        .replace(/\b\w/g, (char) => char.toUpperCase()); // hoofdletter maken
}