"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
import { BlogPost } from "@/lib/server/getBlogs";

function formatDate(dateString?: string) {
    if (!dateString) return "In progress";
    const date = new Date(dateString);
    return date.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog({ allBlogs }: { allBlogs: BlogPost[] }) {
    if (!allBlogs || allBlogs.length === 0) {
        return <p className="text-center text-muted-foreground">No blogs found.</p>;
    }

    const sortedBlogs = [...allBlogs].sort((a, b) => {
        if (!a.date) return -1;
        if (!b.date) return 1;
        return new Date(b.date).getTime() - new Date(b.date).getTime();
    });

    const recentBlogs = sortedBlogs.slice(0, 3);

    return (
        <section className="py-20 bg-background">
            <div className="container flex flex-col items-center">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium">Blog</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Latest Articles</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Insights, tutorials, and thoughts on web development, design, and digital trends.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center items-stretch">
                    {recentBlogs.map((blog, index) => (
                        <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:bg-slate-800 transition-shadow flex flex-col h-full"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={blog.thumbnail?.[0] || "/placeholder.jpg"}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
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
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                                        {blog.description}
                                    </p>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
                <Link href="/blogs">
                    <div className="mt-8 py-3 px-6 primary-btn">   
                        View all blogs
                    </div>
                </Link>
            </div>
        </section>
    );
}
