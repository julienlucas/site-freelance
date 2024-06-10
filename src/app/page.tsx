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

  // useEffect(() => {
  //   getYoutubeData().then(res => setVideos(res.items));
  // }, [])

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="pt-4">
        <p className="logo float-left flex">
          <a href="/">
          <Image
            className="rounded-full float-left -mt-1 mr-2"
            src="/julienlucas-c.jpg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            width={35}
            height={35}
            priority
            draggable="false"
          />
          Julien Lucas
          </a>
        </p>
        <nav className="mt-1.5 float-right">
          <ul>
            <li><a href="#cas-clients-freelance">Cas clients</a></li>
            <li><a href="#tarifs-freelance">Tarifs</a></li>
            <li><a href="#formation">Ma formation</a></li>
            {/* <li><a href="https://youtube.com/c/julienlucas" target="_blank">Ma chaîne YouTube</a></li> */}
            <SocialMediaIcons />
          </ul>
        </nav>
      </section>

      <section className="mt-8">
        <div className="pt-6">
          <Image
            className="rounded-full float-left -mt-2 mr-8"
            src="/julienlucas-d.jpg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            width={150}
            height={150}
            priority
            draggable="false"
          />
          <span className="title font-unbounded">Hello, moi c'est Julien 👋</span>
          <h1>Développeur front-end React - Fullstack freelance, je crée <span>à vitesse express</span> des solutions saas fiables pour les startups / Formateur de devs</h1>
        </div>
        <div className="mt-12">
          <p>
            En tant que développeur front-end freelance depuis 6 ans j’aide les startups à développer rapidement des saas fiables qui rencontrent la demande et besoins de leurs utilisateurs.<br/>
            Précédemment j'avais été dev Wordpress freelance durant 4 ans.<br/>
            Je travaille en direct avec les startups, mais aussi aevc des recruteurs.<br/>
            Je suis également créateur de contenu, sur Youtube et Linkedin principalement.<br/>
            Là où j’aide les codeurs à devenir de meilleurs développeurs en salarié, freelance, ou peu importe.<br/><br/>
            Mes technos: React / Next.js / Redux / React Query / GraphQL / TypeScript / Nest / Node<br/>
            Expert en architecture logicielle
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

      <section className="mt-20" id="cas-clients-freelance">
        <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">Création de saas, refonte, restructuration, mvp, v1, ou très long terme</span>
        <h2>Développons votre produit comme</h2>
        <div className="relative image-case-study float-left w-4/12">
          <Image
            className="-mt-5"
            src="/andragogue.jpg"
            alt="Développeur front-end React / Node freelance / Formateur clean architecture"
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </div>
        <div className="float-right w-7/12">
          <h2 className="h2-b no-margin">Smartch</h2>
          <p><strong>Création / restructuration d'un saas v1 en start-up early stage</strong></p>
          <h3>Challenge & Objectifs</h3>
          <p>Smartch m’avait solicité via Malt en 2022 pour rénover leur app MVP, le CTO souhaitait reprendre le MVP, ainsi que changer des technos (ajout de Redux, RTK Query, GraphQL). J’ai proposé de le faire en méttant en place une architecture manquante. Pour découpler les responsabilités du code, le rendre modulaire, un code fortement scalable et maintenable.</p>
          <h3>Technos</h3>
          <p>React, Redux Toolkit, RTKQuery, GraphQL, TypeScript, Clean Architecture</p>
        </div>
      </section>

      <section className="mt-2">
        <div className="float-left w-7/12">
          <h2 className="h2-b no-margin">Sewan</h2>
          <p><strong>Développeur front dans une team de 40 devs pour refonte complète d'un saas</strong></p>
          <h3>Challenge & Objectifs</h3>
          <p>En 2021, Sewan, scale-up telecom, est en pleine refonte de son ancien SaaS en PHP/JavaScript. J’ai pu rejoindre le projet via Crème de la crème (la plateforme freelance). Je suis intervenu en tant que développeur front-end React en sein de l'équipe de 40 devs. Avec 30 membres au design et produit. Dev géré par des PO en Agile Scrum.</p>
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

      <section className="mt-2" id="tarifs-freelance">
        <h2 className="-mb-0.5">Tarifs</h2>
        <p>Les fonctionnalités déterminent les coûts de développement de votre application.</p>
        <div className="relative mb-8 bg-black box-shadow-image text-white p-6 mt-10">
          <h2 className="h2-b no-margin text-white">Lancement webapp rapide (MVP)</h2>
          <ul className="offers">
            <li>Jusqu'à 10 écrans</li>
            <li>Entre 1 & 3 fonctionnalités</li>
            <li>Livré en 1 mois</li>
            <li>Design inclus</li>
          </ul>
          <p className="mb-5 text-white">MVP (Minimum Viable Product) composé d'au maximum 10 écrans avec des fonctionnalités essentielles et une interface utilisateur personnalisée. Le meilleur choix pour un lancement rapide.</p>
          <p className="text-white"><strong className="text-violet-400">Tarif:</strong> 9000 €</p>
          <p className="text-white"><strong className="text-violet-400">Livraison:</strong> 1 mois</p>
        </div>
        <a href="#demande"><button className="primary" data-title="Démarrons votre projet">Démarrons votre projet</button></a>

        <div className="relative mb-8 bg-black box-shadow-image text-white p-6 mt-10">
          <h2 className="h2-b no-margin text-white">Lancement webapp pro</h2>
          <ul className="offers">
            <li>Jusqu'à 20 écrans</li>
            <li>Jusqu'à 7 fonctionnalités</li>
            <li>Livré en 3 mois</li>
            <li>Design inclus</li>
          </ul>
          <p className="mb-5 text-white">Les applications de niveau intermédiaire sont plus sophistiquées, c'est-à-dire qu'elles intègrent des API, de 10 à 20 écrans et quelques fonctionnalités complexes avec une logique métier intermédiaire.</p>
          <p className="text-white"><strong className="text-violet-400">Tarif:</strong> 28000 €</p>
          <p className="text-white"><strong className="text-violet-400">Livraison:</strong> 3 mois</p>
        </div>
        <a href="#demande"><button className="primary" data-title="Démarrons votre projet">Démarrons votre projet</button></a>

        <div className="relative mb-8 bg-black box-shadow-image text-white p-6 mt-10">
          <h2 className="h2-b no-margin text-white">Lancement webapp expert</h2>
          <ul className="offers">
            <li>Écrans illimités</li>
            <li>Fonctionnalités illimitées</li>
            <li>Livraison flexible</li>
            <li>Design inclus</li>
          </ul>
          <p className="mb-5 text-white">Les applications complexes sont les meilleures. Ces applications sont multi-fonctionnelles et offrent des fonctionnalités avancées qui nécessitent la mise en place d'une architecture complexe, de multiples intégrations, des exigences de haute sécurité, etc...</p>
          <p className="text-white"><strong className="text-violet-400">Tarif:</strong> À estimer</p>
          <p className="text-white"><strong className="text-violet-400">Livraison:</strong> Plus de 3 mois</p>
        </div>
        <a href="#demande"><button className="primary" data-title="Démarrons votre projet">Démarrons votre projet</button></a>
      </section>

      <section className="relative mt-20" id="formation">
        <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">Formes-toi comme développeur</span>
        <h2 className="text-left">Mon programme de formation</h2>
        <a href="https://formation-cleanarchitecture.com" target="_blank">
          <div className="relative -mt-1 box-shadow-image bg-gray-100 h-80 bg-[url('/formation-cleanarchi.jpg')] bg-cover" />
        </a>
        <h2 className="mt-8 h2-b">Formation Clean Architecture — devenir senior en conception d'applications</h2>
        <p>
          La formation qui te permettra de passer véritablement senior.
          La seule formation du marché pour pratiquer la Clean Architecture sur 3 des frameworks pilliers du front-end : Redux Toolkit, RTKQ et React Query.
          15 heures de vidéos. 4 modules. Apprentissage aussi du testing end-to-end et unitaire. Accès Slack pour que tu me poses toute question.
        </p>
        <a href="https://formation-cleanarchitecture.com" target="_blank"><button className="primary" data-title="Accèder à la formation">Accèder à la formation</button></a>
      </section>

      {/* {videos?.length && (
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
      )} */}

      <footer className="footer mt-20 bg-black w-full py-6" id="demande">
        <div className="container">
          <span className="sub-title bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-500 inline-block text-transparent bg-clip-text">Un besoin en dev ?</span>
          <h2 className="text-left text-white">Discutons 30min de votre projet</h2>
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
          <p className="text-gray-500 text-sm">Tous droits réservés @ 2024 Julien LUCAS - Numéro de Siret: 79439712500012</p>
        </div>
      </footer>
    </main>
  );
}