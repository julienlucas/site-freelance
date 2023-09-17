import Image from 'next/image'

export default function Temoignages() {
  return (
    <section className="relative w-full flex flex-col pt-56 pb-64 items-center justify-between">
      <h2 className="text-center"><strong>Ils m'ont fait confiance</strong></h2>
      <div className="max-w-screen-2xl px-4 w-full pt-12 h-full sm:grid sm:grid-cols-3">

        <div className="sm:pt-12 pt-0 h-full sm:grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="basis-2/5 sm:block flex flex-col justify-center w-full">
            <p className="mono">« Super collaboration avec Julien et travail de grande qualité concernant la réalisation / intégration du Front End Web de notre site. Julien est très professionnel, compétent et également réactif dans ses communications avec notre équipe UX / UI. »</p>
            <p className="mt-4">Sébastien Aumaître<br/><p className="text-gray-400">CEO @ Pushtalents</p></p>
          </div>
          <div className="basis-3/5 items-center sm:block flex flex-col justify-center">
            <Image
              className="headshot-quote "
              style={{objectFit: "cover"}}
              src="/sebastien-aumaitre.jpeg"
              width={580}
              height={10}
              loading="lazy"
              alt=""
            />
          </div>
        </div>

        <div className="sm:pt-12 pt-0 h-full sm:grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="basis-2/5 sm:block flex flex-col justify-center w-full">
            <p className="mono">« Nous avons sollicité Julien, sur la refonte de notre site web corporate. Notre exigence a été assez haut pour le recrutement: entre skills technique et de qualité de travail. Julien a pu répondre à notre besoin, rigoureux, bonne communication, qualité d'intégration & dev. On recommande !»</p>
            <p className="mt-4">Michaël Roulland<br/><p className="text-gray-400">Ex Head of Design @ Iziwork</p></p>
          </div>
          <div className="basis-3/5 items-center sm:block flex flex-col justify-center">
            <Image
              className="headshot-quote"
              style={{objectFit: "cover", objectPosition: '-70px center'}}
              src="/michael-roulland.jpeg"
              width={580}
              height={10}
              loading="lazy"
              alt=""
            />
          </div>
        </div>

        <div className="sm:pt-12 pt-0 h-full sm:grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="basis-2/5 sm:block flex flex-col justify-center">
            <p className="mono">« Très bonne expérience avec Julien. »</p>
            <p className="mt-4">Anne-Laure de Candido<br/><p className="text-gray-400">COO - Co-fondatrice @ Smartch</p></p>
          </div>
          <div className="basis-3/5 items-center sm:block flex flex-col justify-center">
            <Image
              className="headshot-quote"
              style={{objectFit: "cover", objectPosition: '-20px center'}}
              src="/anne-laure-de-candido-b.jpeg"
              width={580}
              height={10}
              loading="lazy"
              alt=""
            />
          </div>
        </div>

      </div>
    </section>
  )
}
