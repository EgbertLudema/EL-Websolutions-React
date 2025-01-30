"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/server/getBlogs";

export default function TagFilter({ allBlogs, allTags }: { allBlogs: BlogPost[]; allTags: string[] }) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Toggle tag selection
    const toggleTag = (tag: string) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag) // Remove tag if already selected
                : [...prevTags, tag] // Add tag if not selected
        );
    };

    // Filter blogs
    const filteredBlogs = selectedTags.length
        ? allBlogs.filter((blog) =>
              selectedTags.every((tag) => blog.tags?.includes(tag)) // Must contain ALL selected tags
          )
        : allBlogs; // Show all if no tags are selected

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Blog Posts</h1>

            {/* Tag filter */}
            <div className="mt-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded ${
                            selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200"
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
                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                            </h2>
                            <p>{blog.description}</p>
                            <small>{blog.date} - {blog.status}</small>

                            {/* Shows blog tags */}
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
                    <p>No blogs found matching the selected tags.</p>
                )}
            </ul>
        </div>
    );
}