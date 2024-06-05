"use client";
// Ce composant permet d'afficher les icônes des réseaux sociaux. Il prend en paramètres les styles du conteneur et des icônes.

import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

import Link from "next/link";

type SocialsProps = {
  containerStyles: string;
  iconsStyles: string;
};

const icons = [
  { path: "/", name: <RiLinkedinFill /> },
  { path: "/", name: <RiGithubFill /> },
];

const Socials = ({ containerStyles, iconsStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
