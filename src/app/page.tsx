'use client'
import Image from 'next/image'
import Script from 'next/script'
import Header from './components/Header'
import CasClients from './components/CasClients'
import Accompagnement from './components/Accompagnement'
import Link from './components/Link'

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
          <div className="max-w-screen-xl">
            <h2 className="big">Développer votre app <strong><span>sans exploser votre budget.</span></strong><br/>J’ai les méthodes et produit la qualité de code <strong>pour y arriver.</strong></h2>
          </div>

          <div className="max-w-5xl w-full">
            <div className="flex flex-row w-full items-center justify-between pt-4 pb-10">
              <div className="basis-1/3">
                <Image
                  src="/headshot-b.jpg"
                  width={170}
                  height={10}
                  alt=""
                />
              </div>
              <div className="basis-2/3 pl-4">
                <h3 className="name">Julien Lucas</h3>
                <p className="title relative text-gray-400 -mt-6 mb-4 name mono">Développeur axé time to market dans la tech depuis 2018</p>
              </div>
            </div>
            <p>
              Je suis Julien Lucas, développeur freelance front-end/full-stack basé à Avignon.
              Avec <span>5 ans d’expérience</span> j’ai travaillé avec des startups early stage, middle, en scale-up et en PME. J’ai quis une solide culture dev et tech. J’ai vu ce qu’est une app mal construite,et j’ai vu des apps bien constuite. En 2023, désormais je veux proposer une gamme élergie de services pour faire profiter pleinement de mon expérience.
            </p>
            <p className="pt-4"><a href="https://www.linkedin.com/in/julien-lucas-jl/" target="_blank">Mon parcours professionnel Linkedin</a></p>
            <h3>Mes technos</h3>
            <p>React (5ans), Redux Toolkit (3ans), Redux Saga, TypeScript (3ans), React Native / Expo (1an), Stencils.js, Appolo GraphQL (2ans)</p>
            <h3>Méthodes de dev</h3>
            <p className="mb-10">Clean Architecture/Hexagonale, DDD, Craftmanship, CI (Intégration Continue), CD (Déploiement Continue), tests unitaires et e2e<br/><br/></p>
            <Link href="" scroll><button>Échanger avec moi</button></Link>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-slate-100 md:py-44 pt-10 mt-20">
        <Accompagnement />

        <section id="offres" className="px-6 flex flex-col pt-72 pb-8 w-full items-center justify-between">
          <div className="max-w-screen-xl w-full">
            <h2 className="text-center">Vous avez des <strong>objectifs de croissance</strong><br/> J’ai les méthodes et la qualité de code <strong>pour les atteindre</strong></h2>
          </div>
          <div className="max-w-7xl w-full items-center justify-between">
            <p className="text-center mono"><strong>J’ai les méthodes de qualité de code</strong>, de Clean Architecture, et de DDD pour produire une code de qualité et que vous n’explosiez pas votre budget. Zéro bug. Pas de TJM explosé avec (pour le moment du moins).</p>
          </div>

          <div className="relative max-w-screen-lg w-full mt-32">
            <div className="offres w-full pt-12 h-fit grid grid-cols-2 gap-10">
              <div className="offre px-14 py-4 pb-16 h-full w-full flex flex-col bg-slate-200">
                <p className="mt-10 -mb-14 text-left mono text-gray-400">Opération</p>
                <h3>Développement d’app web - front-end uniquement</h3>
                <p className="pt-3"><strong>En charge du front-end de votre app</strong>, création, refonte, ou reprise d’existant applicatif</p>
                <ul className="list-none">
                  <li><p className="mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p></li>
                  <li><p className="mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p></li>
                </ul>
                <Link href="" scroll><button>En savoir plus</button></Link>
              </div>
              <div className="offre px-14 py-4 pb-16 w-full h-full flex flex-col bg-slate-200">
                <p className="mt-10 -mb-14 text-left mono text-gray-400">Opération</p>
                <h3>Développement d’app complète - full-stack, front et l’API</h3>
                <p className="pt-3"><strong>En charge du développement</strong> complet front et back de votre app ou MVP en React.js et Node.js</p>
                <ul className="list-none">
                  <li><p className="mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p></li>
                  <li><p className="mono">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p></li>
                </ul>
                <Link href="" scroll><button>En savoir plus</button></Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="expertises" className="relative pt-40 w-full bg-neutral-950">
        <div className="w-full flex flex-col -mt-20 pb-8 px-4 h-fit items-center justify-between text-white">
          <div className="max-w-screen-lg w-full grid md:grid-cols-3 flex md:gap-20 gap-0">
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> Dev front-end</h4>
              <p className="mono">Des apps react scalée vite, flexible, maintenables, modulaires en archi clean/hexagonale</p>
            </div>
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> MVP</h4>
              <p className="mono">Votre est un gros foutoir? Je refonds code </p>
            </div>
            <div className="pb-8 h-fit flex flex-col ">
              <h4><span>#</span> Reprise de code</h4>
              <p className="mono">Des campagnes qui génèrent des clics mais surtout du revenu.</p>
            </div>
          </div>

          <div className="max-w-screen-lg w-full grid md:grid-cols-3 flex md:gap-20 gap-0">
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> Développement d’API</h4>
              <p className="mono">Votre API GraphQL pour votre app</p>
            </div>
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> Design System</h4>
              <p className="mono">Avec Stencil.js vous pourrez utiliser votre UI Kit partout : sur Angular, React, Vue, et même iOS/Android natifs grâce à capacitor.js.</p>
            </div>
            <div className="pb-8 h-fit flex flex-col">
              <h4><span>#</span> DDD, Agile</h4>
              <p className="mono">Domain Driven Developpement, Agile Scrum</p>
            </div>
          </div>
        </div>
      </section>

      <CasClients />
      <div id="footer" className="relative flex flex-col items-center justify-between w-full bg-slate-100 py-24 pb-36">
        <Accompagnement />
        <h2 className="mt-60 -mb-3">On prends un <strong>café virtuel ensemble?</strong></h2>
        <Link href="" scroll className="mt-10"><button>Oui, échanger avec moi</button></Link>
      </div>
    </main>
  )
}
