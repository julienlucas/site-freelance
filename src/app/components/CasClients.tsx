import Link from '../components/Link'
import Image from 'next/image'

export default function CasClients() {
  return (
    <section id="cas-clients" className="relative w-full h-fit px-6 sm:flex block flex-col pt-56 pb-56 items-center justify-between">
      <h2 className="text-center"><strong>Cas clients</strong></h2>
      <div className="max-w-screen-lg w-full h-fit sm:grid block grid-cols-2 gap-20">
        <div className="pb-8 sm:max-w-xl w-full h-full sm:flex block flex-col">
          <div className="sm:flex block items-center justify-center h-full w-full">
            <div className="block">
              <div className="pt-10 -mb-12 flex flex-row w-full">
                <div className="basis-1/4">
                  <Image
                    src="/logo-iziwork-b.jpg"
                    width={80}
                    height={80}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="basis-3/4 h-full">
                  <div className="inline-block -mt-7">
                    <h4 className="w-auto inline-block">MVP</h4>
                  </div>
                  <p><strong>Lead dev front-end</strong></p>
                </div>
              </div>
              <p className="title mono"><span>Problèmes</span></p>
              <p className="mono">Smartch m’avait solicité via Malt en 2022 pour reprendre leur app MVP, le CTO souhaitait modifier des technos, j’ai proposé de le faire, en créant un code flexible, maintenable, en posant une architecture manquante. Ceci en ajoutant aussi quelque autres fonctionnalités.</p>
              <p className="title mono"><span>Objectifs</span></p>
              <p className="mono">Développer une MVP démo restructurée + quelque fonctionnalités de la roadmap sous 4 mois. Mission accomplie.</p>
              <p className="title mono"><span>Technos</span></p>
              <p className="mono">React, Redux Toolkit, RTKQuery, GraphQL, TypeScript, Chakra UI</p>
            </div>
          </div>
        </div>
        <div className="h-full flex sm:justify-end justify-center">
          <div>
            <Image
              style={{objectFit: "cover"}}
              className="rounded-lg"
              src="/andragogue.png"
              width={500}
              height={10}
              alt=""
            />
            <p className="text-center pt-2">NDA signé</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg pt-44 w-full h-full sm:grid block grid-cols-2 gap-20">
        <div className="h-full flex sm:justify-start justify-center">
          <Image
            style={{objectFit: "cover"}}
            className="rounded-lg"
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
                    <h4 className="w-auto inline-block blue">Refonte SAAS</h4>
                  </div>
                  <p><strong>Lead dev front-end</strong></p>
                </div>
              </div>
              <p className="title mono"><span>Problèmes</span></p>
              <p className="mono">Smartch m’avait solicité via Malt en 2022 pour reprendre leur app MVP, le CTO souhaitait modifier des technos, j’ai proposé de le faire, en créant un code flexible, maintenable, en posant une architecture manquante. Ceci en ajoutant aussi quelque autres fonctionnalités.</p>
              <p className="title mono"><span>Objectifs</span></p>
              <p className="mono">Développer une MVP démo restructurée + quelque fonctionnalités de la roadmap sous 4 mois. Mission accomplie.</p>
              <p className="title mono"><span>Technos</span></p>
              <p className="mono">React, Redux, Apollo GraphQL</p>
            </div>
          </div>
        </div>
      </div>

      <Link href="" scroll className="mt-32"><button>Échanger avec moi ➜</button></Link>
    </section>
  )
}
