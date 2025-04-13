import { getAllBlogs } from "@/lib/server/getBlogs";
import { getAllProjects } from "@/lib/server/getProjects";
import { NextResponse } from "next/server";

// This is the route handler for generating the sitemap.xml file
// Use this link for bots in google search console: https://el-websoltutions.com/sitemap.xml
export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const blogs = await getAllBlogs();
    const projects = await getAllProjects();

    const staticPaths = [
        "", // homepage
        "blogs",
        "projects",
        "services",
        "about",
        "contact",
    ];

    const blogUrls = blogs.map((blog) => `blogs/${blog.slug}`);
    const projectUrls = projects.map((project) => `projects/${project.slug}`);

    const allPaths = [...staticPaths, ...blogUrls, ...projectUrls];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
            .map(
                (path) => `
                <url>
                <loc>${baseUrl}/${path}</loc>
                </url>`
            )
        .join("")}
    </urlset>`;

    return new NextResponse(body, {
        headers: {
        "Content-Type": "application/xml",
        },
    });
}
