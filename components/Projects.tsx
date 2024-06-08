"use client";
// Ce composant prend les données des projets et appelle ProjectCard pour chaque projet.
// Il utilise également Swiper pour afficher les projets dans un slider.

import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../app/data/projects.json";
import { Button } from "./ui/button";

const projectData = projects;

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Mes derniers projets</h2>
          <p className="subtitle mb-8">
            Découvrez mes projets personnels et professionnels, reflétant mon
            engagement continu à me former et à évoluer dans le développement
            informatique.
          </p>
          <Link href="/projects">
            <Button>Tous les projets</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
