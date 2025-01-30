import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the type for the blog frontmatter
export interface BlogFrontmatter {
    title: string;
    description: string;
    date: string;
    status: string;
    [key: string]: any;  // Allow extra metadata
}

// Define the type for a blog post
export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    status: string;
}

// Directory where MDX blog posts are stored
const BLOGS_DIR = path.join(process.cwd(), "app/blogs");

export function getAllBlogs(): BlogPost[] {
    const files = fs.readdirSync(BLOGS_DIR);

    return files.map((filename) => {
        const filePath = path.join(BLOGS_DIR, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(".mdx", ""),
            ...(data as BlogFrontmatter), // Type assertion to enforce structure
        };
    });
}

export function getBlogBySlug(slug: string) {
    const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
        console.error(`Blog file not found: ${filePath}`);
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    
    return { data: data as BlogFrontmatter, content };
}
