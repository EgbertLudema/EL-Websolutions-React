import Link from "next/link";
import { getAllBlogs } from "@/lib/server/getBlogs";
import { getAllProjects } from "@/lib/server/getProjects";

// This page is for displaying the sitemap of the website
// It is not meant to be crawled by search engines
// Use this link for bots in google search console: https://el-websoltutions.com/sitemap.xml
export default async function SitemapPage() {
  const blogs = await getAllBlogs();
  const projects = await getAllProjects();

  const staticPaths = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Blogs", href: "/blogs" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <main className="container mx-auto mt-[100px] px-6 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Static Pages</h2>
        <ul className="list-disc pl-6">
          {staticPaths.map(({ title, href }) => (
            <li key={href}>
              <Link href={href} className="text-primary hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Blog Posts</h2>
        <ul className="list-disc pl-6">
          {blogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blogs/${blog.slug}`} className="text-primary hover:underline">
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc pl-6">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="text-primary hover:underline">
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}