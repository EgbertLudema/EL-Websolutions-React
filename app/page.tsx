import Link from "next/link";
import { getAllBlogs, BlogPost } from "@/lib/getBlogs";

export default function HomePage() {
    const blogs: BlogPost[] = getAllBlogs(); // Ensure TypeScript knows the return type

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Blog Posts</h1>
            <ul className="mt-4 space-y-4">
                {blogs.map((blog) => (
                    <li key={blog.slug} className="border p-4 rounded-md shadow">
                        <h2 className="text-xl font-semibold">
                            <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                            </Link>
                        </h2>
                        <p>{blog.description}</p>
                        <small>{blog.date} - {blog.status}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
