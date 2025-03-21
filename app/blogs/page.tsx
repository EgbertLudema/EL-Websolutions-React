import { getAllBlogs, BlogPost } from "@/lib/server/getBlogs";
import BlogTagFilter from "@/components/BlogTagFilter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function BlogsPage() {
    const allBlogs: BlogPost[] = await getAllBlogs();
    const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags || [])));

    return (
        <main className="container py-8 min-h-screen mt-[140px]">
            <Breadcrumbs />
            <h1 className="text-3xl font-bold text-black dark:text-white">Blogs</h1>
            <BlogTagFilter allBlogs={allBlogs} allTags={allTags} />
        </main>
    );
}
  