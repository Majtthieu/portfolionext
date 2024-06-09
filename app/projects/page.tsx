"use client";

// Page qui reprend ProjectCard pour afficher tous les projets.

import ProjectCard from "@/components/ProjectCard";
import projects from "../data/projects.json";

const projectData = projects;

const Projects = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto mb-24 xl:mb-48">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mes projets
        </h2>
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projectData.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
