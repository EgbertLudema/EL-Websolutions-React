import { getAllBlogs, getBlogBySlug } from "@/lib/server/getBlogs";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaCalendar, FaUser } from "react-icons/fa";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareButton from "@/components/ui/shareButton";
import CopyLinkButton from "@/components/ui/CopyLinkButton";
import FeaturedBlogs from "@/components/Blogs/FeaturedBlogs";

export async function generateStaticParams() {
    const blogs = await getAllBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
        return notFound();
    }

    const { content } = await compileMDX({
        source: blog.content,
        components: {},
    });

    const allBlogs = await getAllBlogs();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow pt-24 pb-16">
                <article>
                    {/* Header */}
                    <div className="bg-slate-200 dark:bg-slate-800 py-12">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto flex flex-col gap-2 pb-2">

                            <Breadcrumbs />

                            <div className="flex flex-wrap gap-2">
                                {blog.data.tags?.map((tag) => (
                                    <div key={tag} className="tag-selected">
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <h1 className="text-3xl leading-[1.2] md:text-4xl md:leading-[1.2] lg:text-5xl lg:leading-[1.2] font-bold">
                                {blog.data.title}
                            </h1>


                            <div className="flex items-center text-sm text-muted-foreground mt-6 text-slate-600 dark:text-slate-400">
                                <span className="flex items-center mr-4">
                                <FaCalendar className="w-4 h-4 mr-1" />
                                {blog.data.date
                                    ? new Date(blog.data.date).toLocaleDateString("nl-NL", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })
                                    : "In progress"}
                                </span>
                                <span className="flex items-center">
                                <FaUser className="w-4 h-4 mr-1" />
                                {blog.data.author || "Unknown"}
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* Featured Image */}
                    <div className="container mx-auto px-6 -mt-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={blog.data.thumbnail ?? "/placeholder.jpg"}
                                alt={blog.data.title ?? "Blog"}
                                width={1280}
                                height={720}
                                className="w-full h-auto object-cover aspect-video"
                            />
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="container mx-auto px-6 py-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="prose prose-lg dark:prose-invert max-w-none flex flex-col gap-6 text-slate-700 dark:text-slate-300">
                            {content}
                            </div>

                            {/* Share / Save / Comments */}
                            <div className="flex flex-wrap items-center justify-between mt-12 pt-6 border-t border-slate-600 dark:border-slate-400">
                                <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                                    {/* Share button */}
                                    <ShareButton title={blog.data.title} />
                                    <CopyLinkButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            {/* Featured blogs */}
            <FeaturedBlogs currentSlug={params.slug} currentTags={blog.data.tags} allBlogs={allBlogs} />
        </div>
    );
}
