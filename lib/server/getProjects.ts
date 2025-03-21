"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface ProjectFrontmatter {
    title: string;
    description: string;
    thumbnail: string;
    date: string;
    status: string;
    tags?: string[];
    links?: { caption: string; url: string }[];
    gallery?: {src: string, alt: string, caption: string}[];
}

export interface ProjectPost {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    date: string;
    status: string;
    tags?: string[];
    links?: { caption: string; url: string }[];
    gallery?: {src: string, alt: string, caption: string}[];
}

const PROJECTS_DIR = path.join(process.cwd(), "app/project-list");

export async function getAllProjects(): Promise<ProjectPost[]> {
    const files = await fs.readdir(PROJECTS_DIR);

    const projects = await Promise.all(
        files.map(async (filename) => {
            const filePath = path.join(PROJECTS_DIR, filename);
            const fileContents = await fs.readFile(filePath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug: filename.replace(".mdx", ""),
                ...(data as ProjectFrontmatter),
            };
        })
    );

    return projects;
}

export async function getProjectBySlug(slug: string): Promise<{ data: ProjectFrontmatter; content: string } | null> {
    const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

    try {
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContents);
        return { data: data as ProjectFrontmatter, content };
    } catch (error) {
        console.error(`Project file not found: ${filePath}`);
        return null;
    }
}