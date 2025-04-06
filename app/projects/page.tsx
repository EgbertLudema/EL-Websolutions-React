import { getAllProjects, ProjectPost } from "@/lib/server/getProjects";
import ProjectFilter from "@/components/ProjectTagFilter";

export default async function ProjectsPage() {
    const allProjects: ProjectPost[] = await getAllProjects();
    const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags || [])));

    return (
        <main className="container mt-[100px] py-8 mb-12 flex flex-col items-center justify-center">
            <h1 className="mb-8">Projects</h1>
            <ProjectFilter allProjects={allProjects} allTags={allTags} />
        </main>
    );
}
  