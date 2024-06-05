"use client";
// Ce composant fait appel au composant Nav en attribuant des styles spécifiques.
// Il utilise également un listener pour le scroll de la page et change le style du header dès 50px.

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [header, setHeader] = useState(false);

  const handleScroll = () => {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={`${
        header ? "py-4 shadow-lg bg-input/95" : "py-6 bg-transparent"
      } sticky top-0 z-30 transition-all`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles={
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className="absolute left-0 top-full h-[2px] bg-primary w-full"
                />
              }
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
