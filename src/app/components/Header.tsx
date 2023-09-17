import Link from './Link'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative py-64 pb-32 h-full w-full flex flex-col items-center bg-slate-100">
      <div className="max-w-screen-xl px-4 w-full">
        <div className="inline-block mt-3 -mb-12">
          <p className="relative uppercase w-auto block text-white px-4 pb-1 rounded-xl" style={{backgroundColor: '#442bf2', fontSize: '1.6rem'}}>Pour les startups</p>
        </div>
        <h1>Développez votre app web<br/><span>en temps express</span><br/><strong>et accélérez votre croissance</strong></h1>
        <p className="pt-14 mono">Création d’application web, MVP, refonte, reprise, rénovation d’app existante,<br/> sans exploser votre budget.🔥</p>

        <div className="relative pt-14 pb-24 sm:flex block flex-inline items-center flex-nowrap w-full">
          <a href="mailto:contact@julienlucas.com" target="_blank" className="mr-4"><button>Échanger avec moi ➜</button></a>
          <Link href="#offres" scroll ><button className="secondary">Voir les offres</button></Link>
        </div>

        <div className="slider-container max-w-screen-lg">
          <ul className="grayscale slider opacity-70 list-none flex grow items-center justify-center justify-items-center pb-20">
            <li>
              <Image
                src="/logo-iziwork.png"
                width={120}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                src="/logo-sewan.png"
                width={85}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                src="/logo-smartch.png"
                width={150}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                className="mt-1 ml-6"
                src="/logo-reezocar.png"
                width={170}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                className="mt-1"
                src="/logo-corum.svg"
                width={110}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                src="/logo-iziwork.png"
                width={180}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                src="/logo-sewan.png"
                width={85}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                src="/logo-smartch.png"
                width={150}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                className="mt-1 ml-6"
                src="/logo-reezocar.png"
                width={170}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
            <li>
              <Image
                className="mt-1"
                src="/logo-corum.svg"
                width={110}
                height={10}
                loading="lazy"
                alt=""
              />
            </li>
          </ul>
        </div>

        <p className="sub-headline-logos mono text-zinc-400 pt-2 pb-6">Je suis passé dans certaines des meilleures startups et entreprises</p>
      </div>
    </header>
  )
}
