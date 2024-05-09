import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
  const [sendedSuccess, setSendedSuccess] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(`${process.env.NEXT_PUBLIC_MAILJS_SERVICE_KEY}`, 'template_i1de0jq', e.target, {
        publicKey: `${process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSendedSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSendedSuccess(false);
        },
      );
      e.target.reset()
  };

  return (
    <>
      {sendedSuccess && (
        <div className="pt-28 pb-26 flex justify-center">
          <p className="text-white text-center pb-2">Votre message a bien été envoyé.<br/> je reviens vers vous rapidement, généralement max 48heures</p>
        </div>
      )}
      {!sendedSuccess && (
        <form onSubmit={sendEmail}>
          <div className="mt-5 grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="first_name">Prénom *</label>
              <input type="text" name="first_name" className="block py-2.5 w-full" placeholder="Jean" required />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="last_name">NOM *</label>
              <input type="text" name="last_name" className="block py-2.5 w-full" placeholder="DUJARDIN" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="phone">Téléphone *</label>
              <input type="tel" pattern="[0-9]{10}" className="block py-2.5 w-full" name="phone" placeholder="0676750719" required />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="email">Email *</label>
              <input type="email" name="email" className="block py-2.5 w-full" placeholder="prenom@entreprise.com" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="compagny">Entreprise *</label>
              <input type="text" name="compagny" className="block py-2.5 w-full" placeholder="Startup saas" required />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="fonction">Fonction *</label>
              <input type="text" name="fonction" className="block py-2.5 w-full" placeholder="CEO/PO/CTO/Recruteur" required />
            </div>
          </div>
          <label htmlFor="message">Message *</label>
          <textarea name="message" className="block py-2.5 w-full min-h-32" placeholder="Laissez votre message" required />
          <button className="primary borders" type="submit" data-title="Envoyer">Envoyer</button>
        </form>
      )}
    </>
  );
};