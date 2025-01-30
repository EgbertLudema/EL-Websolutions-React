"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface BlogFrontmatter {
    title: string;
    description: string;
    date: string;
    status: string;
    tags?: string[];
    links?: { text: string; url: string }[];
    gallery?: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    status: string;
    tags?: string[];
    links?: { text: string; url: string }[];
    gallery?: string[];
}

const BLOGS_DIR = path.join(process.cwd(), "app/blogs");

export async function getAllBlogs(): Promise<BlogPost[]> {
    const files = await fs.readdir(BLOGS_DIR);

    const blogs = await Promise.all(
        files.map(async (filename) => {
            const filePath = path.join(BLOGS_DIR, filename);
            const fileContents = await fs.readFile(filePath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug: filename.replace(".mdx", ""),
                ...(data as BlogFrontmatter),
            };
        })
    );

    return blogs;
}

export async function getBlogBySlug(slug: string): Promise<{ data: BlogFrontmatter; content: string } | null> {
    const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);

    try {
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContents);
        return { data: data as BlogFrontmatter, content };
    } catch (error) {
        console.error(`Blog file not found: ${filePath}`);
        return null;
    }
}