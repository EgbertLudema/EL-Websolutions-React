"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/server/getBlogs";

export default function TagFilter({ allBlogs, allTags }: { allBlogs: BlogPost[]; allTags: string[] }) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Filter blogs on the client side
    const filteredBlogs = selectedTag
        ? allBlogs.filter((blog) => blog.tags?.includes(selectedTag))
        : allBlogs;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Blog Posts</h1>

            {/* Tag Filter Buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-3 py-1 rounded ${!selectedTag ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    All
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded ${
                            selectedTag === tag ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Blog List */}
            <ul className="mt-6 space-y-4">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <li key={blog.slug} className="border p-4 rounded-md shadow">
                            <h2 className="text-xl font-semibold">
                                <Link href={`/blog/${blog.slug}`}>
                                    {blog.title}
                                </Link>
                            </h2>
                            <p>{blog.description}</p>
                            <small>{blog.date} - {blog.status}</small>

                            {/* Show Tags for Each Blog */}
                            <div className="mt-2 flex gap-2">
                                {blog.tags?.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs bg-gray-200 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No blogs found for the selected tag.</p>
                )}
            </ul>
        </div>
    );
}