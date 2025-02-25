import { getAllBlogs, BlogPost } from "@/lib/server/getBlogs";
import BlogTagFilter from "@/components/BlogTagFilter";

export default async function BlogsPage() {
    const allBlogs: BlogPost[] = await getAllBlogs();
    const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags || [])));

    return (
        <div className="container pt-[140px] py-8 min-h-screen">
            <h1 className="text-3xl font-bold text-black dark:text-white">Blogs</h1>
            <BlogTagFilter allBlogs={allBlogs} allTags={allTags} />
        </div>
    );
}
  