import { getAllBlogs, BlogPost } from "@/lib/server/getBlogs";
import BlogTagFilter from "@/components/BlogTagFilter";
import Link from "next/link";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Blogs - EL-Websolutions",
    description: "Bekijk al mijn blogs over webdevelopment, design en meer.",
};

function formatDate(dateString?: string) {
    if (!dateString) return "In progress";
    const date = new Date(dateString);
    return date.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogsPage() {
    const allBlogs: BlogPost[] = await getAllBlogs();
    const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags || [])));

    const sortedBlogs = [...allBlogs].sort((a, b) => {
        if (!a.date) return -1;
        if (!b.date) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const recentBlogs = sortedBlogs.slice(0, 2);

    return (
        <main className="container py-8 min-h-screen mt-[100px]">
            <h1 className="leading-snug">Blogs</h1>

            <section className="mt-8 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/10 via-white to-sky-50 p-6 shadow-sm dark:from-primary/10 dark:via-slate-900 dark:to-slate-950">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p className="sub-title mb-3">Uitgelicht</p>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Recent gepubliceerd</h2>
                    </div>
                    <p className="hidden max-w-md text-right text-sm text-slate-600 dark:text-slate-400 md:block">
                        Een selectie van de nieuwste artikelen over webdevelopment, design en digitale keuzes.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {recentBlogs.map((blog) => (
                        <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
                            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/90">
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src={blog.thumbnail || "/placeholder.jpg"}
                                        alt={blog.title}
                                        width={800}
                                        height={450}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4 flex flex-wrap items-center gap-3">
                                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                            Uitgelicht
                                        </span>
                                        {blog.tags?.map((tag) => (
                                            <span key={tag} className="tag-secondair">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="mb-3 text-2xl font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100">
                                        {blog.title}
                                    </h3>
                                    <p className="mb-5 flex-grow text-slate-600 dark:text-slate-400">
                                        {blog.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
                                        <span className="flex items-center">
                                            <FaRegCalendarAlt className="w-4 h-4 mr-1" />
                                            {formatDate(blog.date)}
                                        </span>
                                        <span className="flex items-center">
                                            <FaRegUser className="w-4 h-4 mr-1" />
                                            {blog.author || "Unknown"}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="sub-title mb-3">Overzicht</p>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Alle blogs</h2>
                    </div>
                    <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
                        Blader door alle artikelen en filter op onderwerpen die voor jouw project of vraag relevant zijn.
                    </p>
                </div>

                <Suspense fallback={<div>Filter laden...</div>}>
                    <BlogTagFilter allBlogs={allBlogs} allTags={allTags} />
                </Suspense>
            </section>
        </main>
    );
}
