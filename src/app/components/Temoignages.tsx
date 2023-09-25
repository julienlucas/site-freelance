import Image from 'next/image'
import BlurImage from './BlurImage'

export default function Temoignages() {
  return (
    <section id="temoignages" className="relative w-full flex flex-col pt-28 pb-52 items-center justify-between">
      <h2 className="text-center"><strong>Ils m'ont fait confiance</strong></h2>
      <div className="max-w-screen-2xl px-4 w-full h-full md:grid md:grid-cols-3">

        <div className="sm:pt-12 pt-0 h-full lg:grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="basis-2/5 pb-8 pt-8 sm:block flex flex-col justify-center w-full">
            <p className="mono">« Super collaboration avec Julien et travail de grande qualité concernant la réalisation / intégration du Front End Web de notre site. Julien est très professionnel, compétent et également réactif dans ses communications avec notre équipe UX / UI. »</p>
            <p className="mt-4">Sébastien Aumaître<br/><p className="text-gray-400">CEO @ Pushtalents</p></p>
          </div>
          <div className="basis-3/5 items-center flex flex-col lg:justify-start">
            <BlurImage
              className="headshot-quote"
              src="/sebastien-aumaitre.jpeg"
              width={350}
              height={10}
            />
          </div>
        </div>

        <div className="sm:pt-12 pt-0 h-full lg:grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="basis-2/5 pb-8 pt-8 sm:block flex flex-col justify-center w-full">
            <p className="mono">« Nous avons sollicité Julien, sur la refonte de notre site web corporate. Notre exigence a été assez haut pour le recrutement: entre skills technique et de qualité de travail. Julien a pu répondre à notre besoin, rigoureux, bonne communication, qualité d'intégration & dev. On recommande !»</p>
            <p className="mt-4">Michaël Roulland<br/><p className="text-gray-400">Ex Head of Design @ Iziwork</p></p>
          </div>
          <div className="basis-3/5 items-center flex flex-col lg:justify-start">
            <BlurImage
              className="headshot-quote"
              style={{objectPosition: '-80px center'}}
              src="/michael-roulland.jpeg"
              width={380}
              height={580}
            />
          </div>
        </div>

        <div className="sm:pt-12 pt-0 h-full lg:grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="basis-2/5 pb-8 pt-8 sm:block flex flex-col justify-center">
            <p className="mono">« Très bonne expérience avec Julien. »</p>
            <p className="mt-4">Anne-Laure de Candido<br/><p className="text-gray-400">COO - Co-fondatrice @ Smartch</p></p>
          </div>
          <div className="basis-5/5 w-full items-center flex flex-col lg:justify-start">
            <BlurImage
              className="headshot-quote"
              src="/anne-laure-de-candido-b.jpeg"
              width={580}
              height={10}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
