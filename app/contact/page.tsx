// La page de contact qui importe le composant Form pour afficher le formulaire de contact.

import Form from "@/components/Form";
import Image from "next/image";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Bien le bonjour 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Puis-je vous aider ?</h1>
            <p className="subtitle max-w-[400px]">
              Contactez-moi en remplissant le formulaire ci-dessous. Je vous
              répondrai dans les plus brefs délais.
            </p>
          </div>
          <div className="hidden xl:flex w-full">
            <Image
              src="/contact/Sent Message-bro.svg"
              alt="personne envoyant message"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mb-24 xl:mb-32 self-center w-full lg:w-2/3 xl:w-1/2">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg"></div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
