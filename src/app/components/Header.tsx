import Link from '../components/Link'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative py-64 pb-32 h-full w-full flex flex-col items-center bg-slate-100">
      <div className="max-w-screen-xl px-4 w-full">
        <h1>Développer votre app web<br/>en temps express<br/><strong><span>et accélérer votre croissance</span></strong></h1>
        <p className="pt-14 mono">Création d’application web, refonte, reprise d’app existante,<br/> sans exploser votre budget.🔥</p>

        <div className="relative pt-14 pb-24 sm:flex block flex-inline items-center flex-nowrap w-full">
          <Link href="" scroll className="mr-4"><button>Échanger avec moi ➜</button></Link>
          <Link href="#expertises" scroll ><button className="secondary">Voir nos expertises</button></Link>
        </div>

        <div className="slider-container max-w-screen-lg">
          <ul className="grayscale slider opacity-60 list-none flex grow items-center justify-center justify-items-center pb-20">
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

        <p className="sub-headline-logos mono text-zinc-400 pt-8">Je suis passé dans certaines des meilleures startups et entreprises</p>
      </div>
    </header>
  )
}
