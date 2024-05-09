"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SocialMediaIcons from "./components/SocialIcons";
import Form from "./components/Form";
import YouTubeVideo from "./components/YoutTubeVideo";

export default function Home() {
  const [videos, setVideos] = useState<any>();

  const getYoutubeData = async () => {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeMpUl1Y-1pPHbHLR9A-FBg&maxResults=10&order=date&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);

    return data.json();
  };

  useEffect(() => {
    getYoutubeData().then(res => setVideos(res.items));
  }, [])

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="pt-4">
        <p className="logo float-left"><a href="/">Julien Lucas</a></p>
        <nav className="mt-1 float-right">
          <ul>
            <li><a href="#cas-clients-freelance">Cas clients freelance</a></li>
            <li><a href="#formation">Ma formation</a></li>
            <li><a href="https://youtube.com/c/julienlucas" target="_blank">Ma chaîne YouTube</a></li>
            <SocialMediaIcons />
          </ul>
        </nav>
      </section>

      <section className="mt-8">
        <div className="pt-6">
          <Image
            className="rounded-full float-left -mt-2 mr-8"
            src="/julienlucas.jpg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            width={150}
            height={150}
            priority
            draggable="false"
          />
          <span className="title font-unbounded">Hello, moi c'est Julien 👋</span>
          <h1>Développeur front-end React et Node freelance créateur de solutions saas pour startups / Formateur / Créateur de contenu</h1>
        </div>
        <div className="mt-12">
          <p>
            En tant que développeur front-end freelance depuis 6 ans (mais aussi full stack) j’aide les startups à développer des saas qui rencontrent la demande et besoins de leurs utilisateurs.<br/>
            Précédemment j'avais été dev Wordpress freelance durant 4 ans.<br/>
            Je travaille avec des recruteurs, mais aussi en direct avec les startups.<br/>
            Mais je suis également créateur de contenu, sur Youtube ou Linkedin principalement.<br/>
            Où j’aide les codeurs à devenir de meilleurs développeurs en salarié, freelance, ou peu importe.
          </p>
        </div>
        <a href="#formation"><button className="primary" data-title="Ma formation devs">Ma formation devs</button></a>
        <a href="#demande"><button className="secondary">Un besoin en dev? Contactez-moi</button></a>
      </section>

      <section className="mt-20">
        <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">J'ai travaillé dans des start-ups et scale-ups à succès</span>
        <h2 className="text-left">Ex clients</h2>
        <div className="flex grid-rows-5 gap-4 -mt-8">
          <div className="relative max-w-32 w-full h-20">
            <Image
              src="/logo-iziwork.png"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
          </div>
          <div className="relative max-w-32 w-full h-20">
            <Image
              className="mt-0.5 ml-3"
              src="/logo-reezocar.png"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
          </div>
          <div className="relative max-w-32 w-full h-10">
            <Image
              className="mt-5 ml-1"
              src="/logo-sewan.png"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
          </div>
          <div className="relative max-w-32 w-full h-8">
            <Image
              className="mt-6 -ml-3"
              src="/logo-corum-b.png"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
          </div>
          <div className="relative max-w-28 w-full h-20">
            <Image
              className="-mt-0.5"
              src="/logo-smartch.png"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
          </div>
        </div>
        {/* <button className="primary" data-title="Un besoin ? Contactez-moi">Un besoin ? Contactez-moi</button> */}
      </section>

      {/* <section className="mt-20">
        <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">80% Front / 20% Back</span>
        <h2 className="text-left">Mes compétences et stack de prédilection</h2>
        <div className="flex grid-rows-5 gap-4 -mt-4">
          <div className="relative max-w-12 w-full h-12">
            <Image
              src="/react.svg"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
            <h3>React</h3>
          </div>
          <div className="relative max-w-12 w-full h-10">
            <Image
              className="mt-1"
              src="/redux.svg"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
            <h3>Redux</h3>
          </div>
          <div className="relative max-w-12 w-full h-10">
            <Image
              className="mt-1"
              src="/react-query.svg"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
            <h3>React Query</h3>
          </div>
          <div className="relative max-w-12 w-full h-10">
            <Image
              className="mt-1"
              src="/typescript.svg"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="contain"
              draggable="false"
            />
            <h3>Typescript</h3>
          </div>
        </div>
      </section> */}

      <section className="mt-20" id="formation">
        <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">Formes-toi comme développeur</span>
        <h2 className="text-left">Mon programme de formation</h2>
        <div className="box-shadow-image relative bg-gray-100 h-80 w-full">
          <a href="https://formation-cleanarchitecture.com" target="_blank">
            <Image
              src="/formation-cleanarchi.jpg"
              alt="Développeur front-end React / Node freelance / Formateur clean architecture"
              layout="fill"
              objectFit="cover"
              draggable="false"
            />
          </a>
        </div>
        <h2 className="mt-8 h2-b">Formation Clean Architecture — Deviens un véritable développeur senior</h2>
        <p>
          La formation qui te permettra de passer véritablement senior.
          La seule formation du marché pour pratiquer la Clean Architecture sur 3 des frameworks pilliers du front-end : Redux Toolkit, RTKQ et React Query.
          15 heures de vidéos. 4 modules. Apprentissage aussi du testing end-to-end et unitaire. Accès Slack pour que tu me poses toute question.
        </p>
        <a href="https://formation-cleanarchitecture.com" target="_blank"><button className="primary" data-title="Accèder à la formation">Accèder à la formation</button></a>
      </section>

      <section className="mt-20" id="cas-clients-freelance">
        <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">Création, refonte, restructuration de saas</span>
        <h2>Sélection de projets</h2>
        <div className="relative image-case-study float-left w-4/12">
          <Image
            src="/andragogue.webp"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            layout="fill"
            objectFit="cover"
            draggable="false"
          />
        </div>
        <div className="float-right w-7/12">
          <h2 className="h2-b no-margin">Smartch</h2>
          <p>Création / restructuration saas en start-up early stage</p>
          <h3>Le besoin</h3>
          <p>Smartch m’avait solicité via Malt en 2022 pour rénover leur app MVP, le CTO souhaitait reprendre le MVP, ainsi que changer des technos (ajout de Redux, RTK Query, GraphQL). J’ai proposé de le faire en méttant en place une architecture manquante. Pour découpler les responsabilités du code, le rendre modulaire, un code fortement scalable et maintenable.</p>
          <h3>Technos</h3>
          <p>React, Redux Toolkit, RTKQuery, GraphQL, TypeScript, Clean Architecture</p>
        </div>
      </section>

      <section className="mt-20">
        <div className="float-left w-7/12">
          <h2 className="h2-b no-margin">Sewan</h2>
          <p>Développeur front dans équipe de 40 devs en scale-up</p>
          <h3>Le besoin</h3>
          <p>En 2021, Sewan, scale-up telecom, est en pleine refonte de Sophia son ancien SaaS en PHP/JavaScript. J’ai pu rejoindre le projet via Crème de la crème (la plateforme freelance). Je suis intervenu en tant que développeur front-end React en sein de l'équipe de 40 devs. Avec 30 membres au design et produit. Dev géré par des PO en Agile Scrum.</p>
          <h3>Technos</h3>
          <p>React, Redux, Apollo GraphQL, Clean Architecture</p>
        </div>
        <div className="relative image-case-study float-right w-4/12 h-92">
          <Image
            className="-mt-8"
            src="/sophia.webp"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </div>
      </section>

      <section>
        <a href="https://formation-cleanarchitecture.com" target="_blank"><button className="primary" data-title="Un besoin dev? Contactez-moi">Un besoin en dev? Contactez-moi</button></a>
      </section>

      {videos?.length && (
        <section className="mt-20 -mb-32" id="youtube">
          <div className="container">
            <a href="https://youtube.com/c/julienlucas" target="_blank"><button className="primary float-right" data-title="Voir la chaîne">Voir la chaîne</button></a>
            <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">Formes-toi comme développeur</span>
            <h2 className="text-left">Dernières vidéos YoutTube</h2>
          </div>

          <div className="carousel">
            <div className="flex grid-rows-5 gap-4">
              {videos?.map((video: any) => <YouTubeVideo video={video} />)}
            </div>
          </div>
        </section>
      )}

      <footer className="footer mt-20 bg-black w-full py-6" id="demande">
        <div className="container">
          <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">Un besoin en dev ?</span>
          <h2 className="text-left text-white">Prendre rendez-vous avec moi</h2>
        </div>

        <Form />

        <div className="container">
          <div className="float-left">
            <p className="logo white float-left text-white mt-16"><a href="/">Julien Lucas</a></p>
            <a className="relative mt-24 pt-3 flex text-white" href="mailto:hello@julienlucas.com">
              <Image
                className="mr-2"
                src="/mail.svg"
                alt="Développeur front-end React / Node freelance / Formateur clean architecture"
                height={30}
                width={20}
                draggable="false"
              />
              <span className="font-medium">hello@julienlucas.com</span>
            </a>
            <p className="float-left text-left mt-1">10 Impasse Pierre Piquet, 84140 Avignon</p>
          </div>

          <ul className="float-right pt-20 pb-5">
            <SocialMediaIcons />
          </ul>
        </div>
        <div className="container">
          <p className="text-gray-500 text-sm">Tous droits réservés @ 2024 Julien LUCAS</p>
        </div>
      </footer>
    </main>
  );
}