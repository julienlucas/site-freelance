'use client'
import Image from 'next/image'
import Script from 'next/script'
import Header from './components/Header'
import CasClients from './components/CasClients'
import Accompagnement from './components/Accompagnement'
import Temoignages from './components/Temoignages'
import Offres from './components/Offres'
import Button from './components/Button'

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between w-full">
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `,
        }}
        strategy="afterInteractive"
      />

      <Header />

      <section className="relative">
        <div id="section-1" className="px-6 flex flex-col pt-20 pb-40 w-full items-center justify-between">
          <div className="max-w-screen-2xl">
            {/* <h2 className="big">Développer votre app <strong><span>sans exploser vos budgets.</span></strong><br/>J’ai les méthodes et la qualité de code <strong>pour plus que ça :<br/> les réduire.</strong></h2> */}
            <h2 className="big">Je créer votre app <strong><span>sans exploser vos budgets projet.</span></strong><br/>Mieux,<strong> en le réduisant.</strong></h2>
          </div>

          <div className="max-w-5xl w-full">
            <p>
              De mes expériences, je constate que c'est la même chose qui revient : <br/><br/>
              <strong>La haute qualité de code est <span>la seule vraie condition pour ne pas exploser le budget de vos projets</span>. Mais au contraire les réduire</strong>.<br/><br/>
              Sur une app chargée en fonctionnalités, <strong>ça doit passer par la mise en place de Clean Architecture</strong> : pour un front-end ou back fortement scalable, découplé où il est aisé de modifier/remplacer des features/libs/frameworks, d’appliquer des tests unitaires et end-to-end. Et donc avoir une app flexible, robuste et maintenable.<br/><br/>
              Vous êtes CEO, fondateur de startup, PO ou CTO?<br/>
              J’interviens en équipe technique comme dev front-end, ou lead front.<br/>Ou en solo come dev front ou full-stack. Prêt à monter une équipe de devs si nécessaire.
            </p>
            <div className="flex flex-row w-full items-center justify-between pt-24 pb-10">
              <div className="basis-1/3">
                <Image
                  src="/headshot-b.jpg"
                  width={170}
                  height={10}
                  alt=""
                />
              </div>
              <div className="basis-2/3 -mt-6 pl-4 sm:pl-1">
                <h3 className="name">Julien Lucas</h3>
                <p className="title relative text-gray-400 -mt-4 mb-4 name mono">Développeur front-end React depuis 2018<br/>Ex: Iziwork (French Next 40), Sewan, Reezocar, Corum, et Smartch</p>
              </div>
            </div>
            <p>
              Je suis Julien Lucas, développeur freelance front-end, mais aussi full-stack, basé à Avignon. Depuis 5 ans j’ai pu gagner en expérience avec des startups early, middle stage et en scale-up.<br/>
              {/* J'ai été précédemment développeur front/Wordpress en agence durant 4 ans, en freelance aussi. */}<br/>
              Je souhaite <strong>faire profiter de mon expérience de dev d'app aussi directement que possible à mes clients, sans intermédiaires</strong>. M'assurer qu'ils réussissent leur projet, et les amener à la croissance.
            </p>
            <h3>Mes technos</h3>
            <p className="mb-10">React (5ans), Redux Toolkit (3ans), Redux Saga, TypeScript (3ans), React Native / Expo (1an), Stencils.js (pour les Design Systems), Appolo GraphQL (2ans), Node (1an)</p>
            <p className="pt-4 mb-10"><a href="https://www.linkedin.com/in/julien-lucas-jl/" target="_blank">Mon CV et parcours pro sur Linkedin</a></p>
          </div>
          <Button texte={'texte1'} />
        </div>
      </section>

      <Temoignages />

      <Offres />

      <section id="expertises" className="relative z-30 pt-24 w-full bg-neutral-950">
        <div className="w-full flex flex-col -mt-20 pb-6 px-4 h-fit items-center justify-between text-white">
          <div className="max-w-screen-lg w-full grid md:grid-cols-3 flex md:gap-16 gap-0">
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> Dev Front-end</h4>
              <p className="mono">Créeons une app React fortement scalable, robuste, maintenable, modulaire, en Clean Architecture</p>
            </div>
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> Dev Back/d’API</h4>
              <p className="mono">Votre back-end/votre API REST/GraphQL (Nest) scalable pour votre app</p>
            </div>
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> App MVP</h4>
              <p className="mono">Je crée votre app avec les fonctionnalités minimum développée en temps express</p>
            </div>
          </div>

          <div className="max-w-screen-lg w-full grid md:grid-cols-3 flex md:gap-16 gap-0">
            <div className="pb-8 h-fit flex flex-col ">
              <h4><span>#</span> Rénovation front-end</h4>
              <p className="mono">Je réduis votre dette technique et rénove votre code legacy, pour des front-end plus robustes, performants et des process de dev plus efficaces</p>
            </div>
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> Design System</h4>
              <p className="mono">Avec Stencil.js votre UI Kit est utilisable partout: Angular, Vue, React, votre site. Et hautement performant (2-3x plus rapide que React ou Svelte)</p>
            </div>
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> Pratiques de dev</h4>
              <p className="mono">Clean Architecture, DDD, Design Patterns, méthodes de refacto, rédaction des tests unitaires, d'intégration et end-to-end, DevOps CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      <CasClients />

      <div id="footer" className="relative z-30 flex flex-col items-center justify-between w-full bg-slate-100 pt-20 pb-52">
        <Accompagnement />
        <h2 className="mt-60"><strong>Vous êtes une startup et avez un projet</strong></h2>
        <h2 className="-mt-16 mb-8"><strong>d'app, de MVP, ou de refonte ?</strong></h2>
        <h3 className="small -mt-1 text-center mb-8">Discutons de votre projet et voyons ensemble comment atteindre vos objectifs ! 🤝</h3>
        {/* <h2 className="big mt-60 -mb-3">Vous êtes prêt,<br/> on prends un <strong>café virtuel?</strong></h2> */}
        {/* <p className="text-center">66% of technology projects (based on the analysis of 50,000 projects globally) end in partial or total failure (source:) <br/>Les projets agiles ont aussi 3 fois plus de chances de réussir</p> */}
        <Button texte={'texte4'} />
      </div>
    </main>
  )
}
