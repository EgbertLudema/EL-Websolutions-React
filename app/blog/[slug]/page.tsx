import { getAllBlogs, getBlogBySlug } from "@/lib/getBlogs";
import { MDXRemote } from "next-mdx-remote/rsc"; // MDX Renderer for RSC
import { compileMDX } from "next-mdx-remote/rsc";

// ✅ Generate Static Paths for Each Blog
export async function generateStaticParams() {
    const blogs = getAllBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

// ✅ Dynamic Blog Page Component
export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog = getBlogBySlug(params.slug);

    if (!blog) {
        return <div>Blog Not Found</div>;
    }

    // ✅ Compile MDX content
    const { content: mdxContent } = await compileMDX({
        source: blog.content,
    });

    return (
        <div className="prose mx-auto p-6">
            <h1 className="text-3xl font-bold">{blog.data.title}</h1>
            <p className="text-gray-600">{blog.data.description}</p>
            <small>{blog.data.date} - {blog.data.status}</small>

            {/* ✅ Correct MDX Rendering */}
            {mdxContent}
        </div>
    );
}