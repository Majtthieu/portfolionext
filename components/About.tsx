// Ce composant représente la section About de la page d'accueil.
// Il utilise notamment react-fast-marquee pour faire défiler les logos des technologies que j'utilise.
// Il utilise également les cards de Shadcn.

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const skillData = [
  { text: "React", icon: "/about/react.svg" },
  { text: "Next", icon: "/about/next.svg" },
  { text: "Vue", icon: "/about/vue.svg" },
  { text: "Tailwind", icon: "/about/tailwind.svg" },
  { text: "Node", icon: "/about/node.svg" },
  { text: "Express", icon: "/about/express.svg" },
  { text: "MongoDB", icon: "/about/mongodb.svg" },
];

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 no-bg">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          À propos
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <Image
              src="/about/Hand coding-bro.svg"
              alt="mains codant"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-1 justify-center">
            <div className="text-center xl:text-left text-lg w-full max-w-xl flex flex-col justify-center gap-4 xl:gap-6">
              <p className="mx-auto xl:mx-0">
                Après 13 ans de vie professionnelle dans le domaine de
                l&apos;environnement, je m&apos;investis aujourd&apos;hui
                pleinement dans le métier que j&apos;ai toujours voulu faire.
                Depuis l&apos;obtention de mon diplôme de développeur web 👨🏻‍🎓,
                j&apos;ai décidé de poursuivre l&apos;aventure avec un Bachelor
                développeur d&apos;applications. Ce qui me caractérise : mon
                adaptabilité, ma capacité d&apos;écoute et une belle autonomie.
                Vous souhaitez en savoir plus ?
              </p>
              <Link href="/contact">
                <Button>Contactez-moi</Button>
              </Link>
              <div className="border-b border-border"></div>
              <h4 className="text-xl font-semibold mb-2 xl:text-left">
                J&apos;utlise ces technologies :
              </h4>
              <Marquee pauseOnHover>
                <div className="flex">
                  {skillData.map((item, index) => {
                    return (
                      <Card
                        className="p-1 h-20 w-28 ml-4 flex flex-col justify-center items-center"
                        key={index}
                      >
                        <div className="relative h-[32px] w-[32px]">
                          <Image
                            src={item.icon}
                            alt={item.text}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <div>{item.text}</div>
                      </Card>
                    );
                  })}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
