import { getAllProjects, ProjectPost } from "@/lib/server/getProjects";
import ProjectFilter from "@/components/ProjectTagFilter"; 

export default async function ProjectsPage() {
    const allProjects: ProjectPost[] = await getAllProjects();
    const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags || [])));

    return (
        <div className="container">
            <h1 className="text-3xl font-bold text-black dark:text-white">Projects</h1>
            <ProjectFilter allProjects={allProjects} allTags={allTags} />
        </div>
    );
}
  