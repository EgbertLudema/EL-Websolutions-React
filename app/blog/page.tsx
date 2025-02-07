import { getAllBlogs, BlogPost } from "@/lib/server/getBlogs";
import TagFilter from "@/components/BlogTagFilter";

export default async function ProjectsPage() {
    const allBlogs: BlogPost[] = await getAllBlogs();
    const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags || [])));

    return (
        <div className="container">
            <h1 className="text-3xl font-bold text-black dark:text-white">Blogs</h1>
            <TagFilter allBlogs={allBlogs} allTags={allTags} />
        </div>
    );
  }
  