import Link from '../components/Link'

export default function Accompagnement() {
  return (
    <section className="relative w-full flex flex-col pt-20 pb-8 items-center justify-between">
      <div id="accompagnement" className="max-w-screen-lg py-12 w-full bg-white">
        <h2>Accompagnement à <strong><span>votre mesure</span></strong></h2>
        <div className="relative flex flex-col py-8 pt-0 px-4 items-center justify-start">
          <ul className="list-none">
            <li><p className="mono"><strong>✔ Testez votre éligibilité</strong> en remplissant le formulaire (3 minutes)</p></li>
            <li><p className="mono"><strong>✔ Prenez directement un RDV</strong> avec l’équipe si vous l’êtes</p></li>
            <li><p className="mono"><strong>✔ Nous échangeons</strong> et présentons des recommandations pendant 45’</p></li>
            <li><p className="mono"><strong>✔ Vous recevez un devis</strong> pour un accompagnement adapté à votre situation</p></li>
          </ul>
        </div>
        <Link href="" scroll className="flex flex-col items-center justify-center w-full"><button>Recevoir ma proposition</button></Link>
      </div>
    </section>
  )
}
