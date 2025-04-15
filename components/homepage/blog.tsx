"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
import { BlogPost } from "@/lib/server/getBlogs";
import BlogCard from "../Blogs/BlogCard";

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
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Laatste blogs</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Inzichten, tutorials en gedachten over webontwikkeling, ontwerp en digitale trends.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center items-stretch">
                    {recentBlogs.map((blog) => (
                        <BlogCard
                            key={blog.slug}
                            blog={blog}
                        />
                    ))}
                </div>
                <Link href="/blogs">
                    <div className="mt-8 py-3 px-6 primary-btn">   
                        Bekijk alle blogs
                    </div>
                </Link>
            </div>
        </section>
    );
}
