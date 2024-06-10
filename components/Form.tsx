"use client";

// Composant formulaire qui utilise plusieurs éléments ui de Shadcn.
// Il utilise emailjs pour envoyer les emails.
// Les paramètres de l'API emailjs sont stockés dans les variables d'environnement.

import emailjs from "@emailjs/browser";
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Form = () => {
  const form = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const clearForm = () => {
    if (form.current) {
      (form.current as HTMLFormElement).reset();
    }
  };

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      process.env.EMAILJS_SERVICE_ID &&
      process.env.EMAILJS_TEMPLATE_ID &&
      process.env.EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
            clearForm();
          },
          (error) => {
            console.error(error.text);
            alert("Une erreur est survenue lors de l'envoi du message.");
          }
        );
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={sendEmail} ref={form}>
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Nom"
          required
          name="from_name"
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          required
          name="reply_to"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Votre message ici" required name="message" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      {isSubmitted && <p>Votre message a bien été envoyé. À bientôt !</p>}
      <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit">
        Envoyer
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
