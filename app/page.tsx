import { getAllBlogs, BlogPost } from "@/lib/server/getBlogs";
import TagFilter from "@/components/TagFilter";
import ThemeToggle from "@/components/ThemeToggle";

export default async function HomePage() {
    const allBlogs: BlogPost[] = await getAllBlogs();
    const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags || [])));

    return (
        <div className="container">
            <h1 className="text-3xl font-bold text-black dark:text-white">Welkom, dit wordt mijn nieuwe portfolio website</h1>
            <TagFilter allBlogs={allBlogs} allTags={allTags} />
        </div>
    );
}