import { getAllBlogs, BlogPost } from "@/lib/server/getBlogs";
import TagFilter from "@/components/TagFilter";

export default async function HomePage() {
    const allBlogs: BlogPost[] = await getAllBlogs();

    // ✅ Extract all unique tags on the server side
    const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags || [])));

    return <TagFilter allBlogs={allBlogs} allTags={allTags} />;
}
