import Button from './Button'
import Image from 'next/image'

export default function CasClients() {
  return (
    <section id="cas-clients" className="relative z-10 w-full h-fit sm:flex block flex-col pt-56 pb-24 items-center justify-between" style={{background: 'linear-gradient(180deg, #fcfbf3 50%, #edf9f7 50%)'}}>
      <div id="cas-client-1" className="relative w-full pb-24 px-6  sm:flex block flex-col items-center justify-between" style={{backgroundColor: '#fcfbf3'}}>
        <h2 className="text-center"><strong>Études de cas clients</strong></h2>
        <div className="max-w-screen-lg w-full h-fit sm:grid block grid-cols-2 gap-20">
          <div className="pb-8 sm:max-w-xl w-full h-full sm:flex block flex-col">
            <div className="sm:flex block items-center justify-center h-full w-full">
              <div className="block">
                <div className="pt-10 -mb-12 flex flex-row w-full">
                  <div className="basis-1/4">
                    <div className="flex items-center justify-center h-32 w-32 py-3 px-3 bg-black">
                      <Image
                        className="invert"
                        src="/logo-smartch-b.png"
                        width={50}
                        height={70}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="basis-3/4 h-full">
                    <div className="inline-block -mt-7">
                      <h4 className="w-auto inline-block">Rénovation MVP</h4>
                    </div>
                    <p><strong>Lead dev front-end</strong></p>
                  </div>
                </div>
                <p className="title mono"><span>Problèmes</span></p>
                <p className="mono">Smartch m’avait solicité via Malt en 2022 pour rénover leur app MVP, le CTO souhaitait reprendre le MVP, ainsi que changer des technos (ajout de Redux, RTK Query, GraphQL). J’ai proposé de le faire en méttant en place une architecture manquante. Pour découpler les responsabilités du code, le rendre modulaire, <u>un code fortement scalable et maintenable</u>.</p>
                <p className="title mono"><span>Objectifs</span></p>
                <p className="mono">Développer un MVP démo rénové + quelque features supplémentaires de la roadmap sous 4 mois.</p>
                <p className="title mono"><span>Technos</span></p>
                <p className="mono">React, Redux Toolkit, RTKQuery, GraphQL, TypeScript, Clean Architecture</p>
              </div>
            </div>
          </div>
          <div className="h-full flex sm:justify-end justify-center">
            <div>
              <Image
                style={{objectFit: "cover"}}
                className="rounded-xl"
                src="/andragogue.png"
                width={500}
                height={10}
                alt=""
              />
              <p className="text-center pt-2">NDA signé</p>
            </div>
          </div>
        </div>
      </div>

      <div id="cas-client-2" className="relative w-full pt-8 sm:flex block flex-col items-center justify-between" style={{backgroundColor: '#edf9f7'}}>
        <div className="max-w-screen-lg pt-44 pb-32 w-full h-full sm:grid block grid-cols-2 gap-20">
          <div className="h-full flex sm:justify-start justify-center">
            <Image
              style={{objectFit: "cover"}}
              className="rounded-xl"
              src="/sophia.jpg"
              width={500}
              height={10}
              alt=""
            />
          </div>
          <div className="pb-8 sm:max-w-xl w-full h-full flex flex-col">
            <div className="flex items-center justify-center h-full w-full">
              <div className="block">
                <div className="pt-10 -mb-12 flex flex-row w-full">
                  <div className="basis-1/4">
                    <Image
                      src="/logo-sewan.webp"
                      width={80}
                      height={80}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="basis-3/4">
                    <div className="inline-block -mt-7">
                      <h4 className="w-auto inline-block blue">Refonte SaaS</h4>
                    </div>
                    <p><strong>Dev front-end</strong></p>
                  </div>
                </div>
                <p className="title mono"><span>Contexte</span></p>
                <p className="mono">En 2021, Sewan, scale-up telecom, est en pleine refonte de Sophia son ancien SaaS en PHP/JavaScript. J’ai pu rejoindre le projet via Crème de la crème (la plateforme freelance). Je suis intervenu en tant que développeur front-end React en sein de l'équipe de 40 devs. Avec 30 membres au design et produit. Dev géré par des PO en Agile Scrum.</p>
                <p className="title mono"><span>Objectif</span></p>
                <p className="mono">Développer from scratch la partie telephonie fixe du SaaS avec 2 autres devs front-end et 3 back-end.</p>
                <p className="title mono"><span>Technos</span></p>
                <p className="mono">React, Redux, Apollo GraphQL, Clean Architecture</p>
              </div>
            </div>
          </div>
        </div>

        <Button texte={'texte1'} />
      </div>
    </section>
  )
}
