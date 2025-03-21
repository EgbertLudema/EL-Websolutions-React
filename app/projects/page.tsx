import { getAllProjects, ProjectPost } from "@/lib/server/getProjects";
import ProjectFilter from "@/components/ProjectTagFilter"; 
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function ProjectsPage() {
    const allProjects: ProjectPost[] = await getAllProjects();
    const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags || [])));

    return (
        <main className="container mt-[140px] mb-12 flex flex-col items-center justify-center">
            <Breadcrumbs />
            <h1 className="mb-8">Projects</h1>
            <ProjectFilter allProjects={allProjects} allTags={allTags} />
        </main>
    );
}
  