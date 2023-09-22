import Link from './Link'
import Button from './Button'
import Accompagnement from './Accompagnement'

export default function Offres() {
  return (
    <div className="relative w-full bg-slate-100 md:py-44 pt-10 mt-20">
      <Accompagnement />

      <section id="offres" className="px-6 flex flex-col pt-52 pb-8 w-full items-center justify-between">
        <div className="max-w-screen-lg w-full">
          <h2 className="text-center">Vous avez <strong>des objectifs</strong> de croissance.<br/> J'ai <strong>les méthodes</strong> pour dev une app de qualité, scalable, et rapidement.</h2>
        </div>
        <div className="max-w-screen-md w-full items-center justify-between">
          <p className="text-center mono"><strong>Vous êtes CEO, fondateur de startup, PO ou CTO</strong>, tout au long de notre collaboration ou via votre équipe technique, vous obtiendrez des estimations de fonctionnalités et d'apps suffisament fines pour que vous puissisez prévoir et anticiper.</p>
        </div>

        <div className="relative max-w-screen-xl w-full mt-32">
          <div className="offres w-full pt-12 h-fit grid grid-cols-3 gap-10">

            <div className="offre px-14 py-4 pb-16 h-fit w-full flex flex-col bg-slate-200">
              <p className="mt-10 -mb-14 text-left mono text-gray-400">Mission</p>
              <div className="hidden inline-block mt-14 -mb-12">
                <p className="relative w-auto inline-block text-white px-4 rounded-xl pb-1" style={{backgroundColor: '#442bf2', fontSize: '1.6rem'}}>Front-end</p>
              </div>
              <h3>Développement d'app front</h3>
              <h5>Création de votre MVP React.js, refonte, reprise de devs front, ou rénovation de votre existant applicatif</h5>
              <ul className="list-none">
                <li><p className="mono">Vous avez besoin de renfort pour atteindre vos objectifs de croissance</p></li>
                <li><p className="mono">Vous cherchez un dev en charge de votre front-end pour votre app web</p></li>
                <li><p className="mono">Vous souhaitez auditer votre existant applicatif et le rénover</p></li>
                <li><p className="mono">Vous voulez créer le front de votre MVP</p></li>
                {/* <li><p className="mono">Rapport d’activités en 3-4 bullets points 2x/semaine (en plus des réunions)</p></li> */}
                {/* <li><p className="mono">Estimation précise de chaque fonctionnalité à réaliser en durée.</p></li> */}
              </ul>
              <p><strong>Demander vos 30min de conseils gratuit :</strong></p>
              <div className="mt-4 relative sm:flex block flex-inline items-center flex-nowrap w-full">
                <div className="mr-4">
                  <Button texte={'texte2'} />
                </div>
                <Link href="#cas-clients" scroll ><button className="third">Voir un cas client</button></Link>
              </div>
            </div>

            <div className="offre px-14 py-4 pb-16 w-full h-fit flex flex-col bg-slate-200">
              <p className="mt-10 -mb-14 text-left mono text-gray-400">Mission</p>
              <div className="hidden inline-block mt-14 -mb-12">
                <p className="relative w-auto inline-block text-white px-4 rounded-xl pb-1" style={{backgroundColor: '#442bf2', fontSize: '1.6rem'}}>Full-stack</p>
              </div>
              <h3>Création d'app full-stack</h3>
              <h5>Création de votre application web front et back en React.js et Node.js</h5>
              <ul className="list-none">
                <li><p className="mono">Création de votre app full-stack, avec un front et back fortement scalable et robuste en Clean Architecture</p></li>
                {/* <li><p className="mono">Mise en place de DevOps CI/CD, écriture de tests automatisés</p></li> */}
                {/* <li><p className="mono">Rapport d’activités en 3-4 bullets points 2x/semaine (en plus des réunions)</p></li> */}
              </ul>
              <p className="mb-4"><strong>Demander vos 30min de conseils gratuit :</strong></p>
              <Button texte={'texte2'} />
            </div>

            <div className="offre px-14 py-4 pb-16 w-full h-fit flex flex-col bg-slate-200">
              <p className="mt-10 -mb-14 text-left mono text-gray-400">Mission</p>
              <div className="hidden inline-block mt-14 -mb-12">
                <p className="relative w-auto inline-block text-white px-4 rounded-xl pb-1" style={{backgroundColor: '#442bf2', fontSize: '1.6rem'}}>Design System</p>
              </div>
              <h3>Dev de Design System</h3>
              <h5>Votre UI Kit de composants en Stencil.js ou React.js</h5>
              <ul className="list-none">
                <li><p className="mono">Avec Stencil.js et les Web Components, votre UI Kit est flexible, utilisable sur toutes vos apps: Angular, Vue, React, les apps mobiles hybrides. Et même iOS/Android natif grâce à l'ajout de Capacitor.js</p></li>
                {/* <li><p className="mono">Mise en place de DevOps CI/CD, écriture de tests automatisés</p></li> */}
                <li><p className="mono">Rapport d’activités en 3-4 bullets points 2x/semaine (en plus des réunions)</p></li>
              </ul>
              <p className="mb-4"><strong>Demander vos 30min de conseils gratuit :</strong></p>
              <Button texte={'texte2'} />
            </div>

          </div>
        </div>
        {/* <p className="text-center mt-20 -mb-8">Vous avez un code existant ? Obtenez un audit gratuit et recevez ma proposition.</p> */}
      </section>
    </div>
  )
}

