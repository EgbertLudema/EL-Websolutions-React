import Breadcrumbs from "@/components/Breadcrumbs";
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
        <main>
            <div className="container mt-[140px] py-12 flex flex-col items-start gap-4">

                <Breadcrumbs />

                <div className="flex flex-col gap-2">
                    {content}
                </div>
            </div>
        </main>
    );
}