// Ce composant gère la navigation entre les pages et prend en paramètres plusieurs styles
// notamment pour les effets de hover ou de page active

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "accueil" },
  { path: "/projects", name: "mes projets" },
  { path: "/contact", name: "contact" },
];

const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: any;
}) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && underlineStyles}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
