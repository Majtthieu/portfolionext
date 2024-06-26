"use client";
// Ce composant est un bouton qui permet de basculer entre les thèmes clair et sombre.
// Il utilise le hook useTheme de next-themes pour gérer le thème actuel et le changer en fonction.

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Basculer vers le thème ${
          theme === "dark" ? "clair" : "sombre"
        }`}
      >
        <SunIcon
          className="h-[1.2rem] w-[1.2 rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          aria-label="icône de soleil pour thème"
        />
        <MoonIcon
          className="absolute h-[1.2rem] w-[1.2 rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          aria-label="icône de lune pour thème"
        />
      </Button>
    </div>
  );
};

export default ThemeToggler;
