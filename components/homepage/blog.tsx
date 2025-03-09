import Link from "next/link";
import { BlogPost } from "@/lib/server/getBlogs";

export default function Blog({ allBlogs }: { allBlogs: BlogPost[] }) {
    if (!allBlogs || allBlogs.length === 0) {
        return <p className="text-center text-neutral-600 dark:text-neutral-300">No blogs found.</p>;
    }

    // Sort: Unfinished blogs (no date) first, then by date (newest first)
    const sortedBlogs = [...allBlogs].sort((a, b) => {
        if (!a.date) return -1; // If 'a' has no date, it goes first
        if (!b.date) return 1; // If 'b' has no date, 'a' stays lower
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Otherwise, sort by date (newest first)
    });

    // Take the first 3 blogs
    const recentBlogs = sortedBlogs.slice(0, 3);

    return (
        <section className="py-12 shadow-md bg-gradient-to-b from-transparent to-neutral-100 dark:to-neutral-800">
            <div className="container">
                <p className="text-center sub-title mb-6">Blog</p>
                <h2 className="text-center mb-6">Latest Articles</h2>
                <p className="text-center text-lg mb-8 text-gray-700 dark:text-gray-400">
                    Insights, tutorials, and thoughts on web development, design, and digital trends.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {recentBlogs.map((blog) => (
                        <div
                            key={blog.slug}
                            className="p-4 rounded-md shadow-md w-full bg-neutral-100 dark:bg-neutral-800 
                            text-black dark:text-white border border-neutral-300 dark:border-neutral-600"
                        >
                            <h3 className="text-xl font-semibold">
                                <Link href={`/blog/${blog.slug}`} className="hover:underline">
                                    <div>
                                        {blog.title}
                                    </div>
                                </Link>
                            </h3>
                            <p className="mt-2">{blog.description}</p>
                            <small className="block mt-2">{blog.status}</small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
