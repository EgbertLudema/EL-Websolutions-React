import { getAllBlogs, getBlogBySlug } from "@/lib/server/getBlogs";
import { compileMDX } from "next-mdx-remote/rsc";

// Generate Static Paths for Each Blog
export async function generateStaticParams() {
    const blogs = await getAllBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

// Dynamic Blog Page Component
export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
        return <div>Blog Not Found</div>;
    }

    const { content } = await compileMDX<{ title: string }>({
        source: blog.content,
        components: {},
    });

    return (
        <div className="prose mx-auto p-6">
            <h1 className="text-3xl font-bold">{blog.data.title}</h1>
            <p className="text-gray-600">{blog.data.description}</p>
            <small>{blog.data.date} - {blog.data.status}</small>

            {content}
        </div>
    );
}