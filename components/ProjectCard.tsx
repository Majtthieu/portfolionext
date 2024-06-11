// Ce composant sert à la mise en forme des cartes des projets avec notamment Card et Badge de Shadcn.
// Il prend en prop un objet project qui contient les informations du projet.

import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
          />
          <div className="flex gap-x-4">
            {project.link && (
              <Link
                href={project.link}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                aria-label={`Lien vers le projet ${project.name}`}
              >
                <Link2Icon
                  className="text-white"
                  aria-label="icône lien démo"
                />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                aria-label={`Lien vers le dépôt GitHub du projet ${project.name}`}
              >
                <RiGithubLine
                  className="text-white text-[22px]"
                  aria-label="icône Github"
                />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h3 className="h4 mb-1">{project.name}</h3>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
