import Link from './Link'
import Image from 'next/image'
import BlurImage from './BlurImage'

export default function Hero() {
  return (
    <header className="relative py-64 pb-32 h-full w-full flex flex-col items-center bg-slate-100">
      <div className="max-w-screen-xl px-4 pt-10 w-full">
        {/* <div className="inline-block mt-3 -mb-12">
          <p className="relative uppercase w-auto block text-white px-4 pb-1 rounded-xl" style={{backgroundColor: '#442bf2', fontSize: '1.6rem'}}>Pour les startups</p>
        </div> */}
        <h1 className="max-w-screen-2xl">Je développe votre app web <span>en temps express.</span><br/><strong>Passez à la croissance de votre startup.</strong></h1>
        <p className="pt-14 mono max-w-screen-sm">Création d’application front/full-stack, MVP, refonte, reprise, rénovation d’app existante, dev d'API, sans exploser votre budget.🔥</p>

        <div className="relative pt-14 pb-24 sm:flex block flex-inline items-center flex-nowrap w-full">
          <a href="https://calendly.com/julien-lucas/talk-dev" target="_blank" className="mr-4"><button className="btn-header">Échanger avec moi ➜</button></a>
          <Link href="#offres" scroll ><button className="secondary">Voir les offres</button></Link>
        </div>

        <div className="slider-container max-w-screen-lg">
          <ul className="slider opacity-70 list-none flex grow items-center justify-center justify-items-center pb-20">
            <li>
              <BlurImage
                src="/logo-iziwork.png"
                width={120}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                src="/logo-sewan.png"
                width={85}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                src="/logo-smartch.png"
                width={150}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                className="mt-1 ml-6"
                src="/logo-reezocar.png"
                width={170}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                className="mt-1"
                src="/logo-corum.svg"
                width={110}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                src="/logo-iziwork.png"
                width={180}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                src="/logo-sewan.png"
                width={85}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                src="/logo-smartch.png"
                width={150}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                className="mt-1 ml-6"
                src="/logo-reezocar.png"
                width={170}
                height={10}
              />
            </li>
            <li>
              <BlurImage
                className="mt-1"
                src="/logo-corum.svg"
                width={110}
                height={10}
              />
            </li>
          </ul>
        </div>
        <Image
          className="absolute -mt-16 -ml-16 rotate-90 opacity-20"
          src="/arrow.svg"
          width={60}
          height={10}
          alt=""
        />
        <p className="sub-headline-logos mono text-zinc-400 pt-2 pb-6">Je suis passé en régie dans de supers startups, scale-ups, et entreprises</p>
      </div>
    </header>
  )
}
