import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          <div className="text-muted-foreground flex flex-col items-center">
            <p>M. Jankowiak - 2024 - Hébergé sur Vercel</p>
            <a href="https://storyset.com/people">
              People illustrations by Storyset
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
