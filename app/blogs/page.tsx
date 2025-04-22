import { getAllBlogs, BlogPost } from "@/lib/server/getBlogs";
import BlogTagFilter from "@/components/BlogTagFilter";
import Link from "next/link";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
import type { Metadata } from "next";

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
            <h1 className="text-3xl font-bold text-black dark:text-white">Blogs</h1>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Uitgelichte blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {recentBlogs.map((blog) => (
                        <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
                            <article className="bg-slate-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-slate-800 transition-shadow flex flex-col h-full">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={blog.thumbnail || "/placeholder.jpg"}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex flex-row gap-3 mb-4">
                                        {blog.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="tag-secondair"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                                        {blog.description}
                                    </p>
                                    <div className="flex items-center justify-between mb-3 text-sm text-slate-600 dark:text-slate-400">
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

            <h2 className="text-2xl font-semibold mt-20 mb-4">Alle blogs:</h2>
            {/* Searchbar */}
            <h3 className="mb-4 text-xl font-semibold">Filter per categorie:</h3>
            <BlogTagFilter allBlogs={allBlogs} allTags={allTags} />
        </main>
    );
}
