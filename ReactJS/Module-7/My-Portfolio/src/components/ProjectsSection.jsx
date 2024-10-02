import React from "react";
import ProjectItems from "../assets/ProjectItems";
import ProjectCard from "./ProjectCard";
function ProjectsSection()
{
    return(
        <>
            <div className="py-5" id="projects">
                <div className="container">
                    <h2 className="mb-5">My Projects</h2>
                    <div className="row g-4">
                        {
                            ProjectItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} projectDesc={project.projectDescription} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectsSection