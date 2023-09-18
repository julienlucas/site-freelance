import Link from '../components/Link'
import Button from './Button'

export default function Accompagnement() {
  return (
    <section className="relative w-full flex flex-col pt-20 pb-8 items-center justify-between">
      <div id="accompagnement" className="max-w-screen-lg sm:py-12 pb-4 pt-12 w-full bg-white">
        <h2>Un accompagnement <strong><span>à votre mesure</span></strong></h2>
        <div className="relative flex flex-col py-8 pt-0 px-4 items-center justify-start">
          <ul className="list-none">
            {/* <li><p className="mono"><strong>✔ Testez votre éligibilité</strong> en remplissant le formulaire (3 minutes)</p></li> */}
            <li><p className="mono"><strong>✔ Prenez directement un RDV</strong> avec moi</p></li>
            <li><p className="mono"><strong>✔ Nous échangeons</strong> et je vous présente des recommandations pendant 30min</p></li>
            <li><p className="mono"><strong>✔ Vous recevez un devis</strong> pour un accompagnement adapté à votre situation</p></li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Button texte={'texte3'} />
        </div>
      </div>
    </section>
  )
}
