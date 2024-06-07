import { Download, Send } from "lucide-react";
import Link from "next/link";
import { RiArrowDownCircleLine } from "react-icons/ri";
import MyImg from "./MyImg";
import Socials from "./Socials";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Développeur web et applications
            </div>
            <h1 className="h1 mb-4">Bonjour, je suis Matthieu Jankowiak</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Découvrez mes projets et n&apos;hésitez pas à me contacter pour
              évoquer notre future collaboration
            </p>
            <div className="flex flex-col gap-y-3 gap-x-3 md:flex-row mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contactez-moi <Send size={18} />
                </Button>
              </Link>
              <a
                download="CV_JANKOWIAK_Matthieu.pdf"
                href="/CV_JANKOWIAK_Matthieu_.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Mon CV <Download size={18} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <MyImg imgSrc="/hero/me.webp" />
          </div>
        </div>
        <div className="hidden md:flex absolute left-[49%] bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownCircleLine className="text-4xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
