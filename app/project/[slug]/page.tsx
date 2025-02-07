import { getAllProjects, getProjectBySlug } from "@/lib/server/getProjects";
import { compileMDX } from "next-mdx-remote/rsc";

// Generate Static Paths for Each Project
export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Dynamic project Page Component
export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        return <div>project Not Found</div>;
    }

    const { content } = await compileMDX<{ title: string }>({
        source: project.content,
        components: {},
    });

    return (
        <div className="prose mx-auto p-6">
            <h1 className="text-3xl font-bold">{project.data.title}</h1>
            <p className="text-gray-600">{project.data.description}</p>
            <small>{project.data.date} - {project.data.status}</small>

            {content}
        </div>
    );
}