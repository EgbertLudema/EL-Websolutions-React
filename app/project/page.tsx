import { getAllProjects, ProjectPost } from "@/lib/server/getProjects";
import ProjectFilter from "@/components/ProjectTagFilter"; 

export default async function ProjectsPage() {
    const allProjects: ProjectPost[] = await getAllProjects();

    // extract all unique tags
    const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags || [])));

    return <ProjectFilter allProjects={allProjects} allTags={allTags} />;
}
