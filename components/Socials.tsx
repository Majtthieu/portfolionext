"use client";
// Ce composant permet d'afficher les icônes des réseaux sociaux. Il prend en paramètres les styles du conteneur et des icônes.

import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

import Link from "next/link";

type SocialsProps = {
  containerStyles: string;
  iconsStyles: string;
};

const icons = [
  {
    path: "https://www.linkedin.com/in/matthieu-jankowiak/",
    name: <RiLinkedinFill />,
    aria: "LinkedIn",
  },
  {
    path: "https://github.com/Majtthieu",
    name: <RiGithubFill />,
    aria: "GitHub",
  },
];

const Socials = ({ containerStyles, iconsStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link
          href={icon.path}
          key={index}
          aria-label={`Lien vers ${icon.aria}`}
        >
          <div className={`${iconsStyles}`} aria-hidden="true">
            {icon.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
