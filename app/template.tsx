"use client";
// Ce Composant utilisent les hooks useScroll et useSpring de framer-motion pour animer une barre de progression sur la page.

import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";

const Template = ({
  children,
}: {
  children: ReactNode;
  [key: string]: any;
}) => {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <main>{children}</main>
      <motion.span
        style={{ scaleY, transformOrigin: "top" }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0"
      ></motion.span>
    </>
  );
};

export default Template;
