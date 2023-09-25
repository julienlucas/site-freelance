import Link from './Link'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="absolute t-0 z-50 w-full">
      <nav className="h-32 flex flex-col items-center justify-center w-full">
        {/* <div className="max-w-screen-2xl flex w-full items-center justify-center px-4 md:pl-0"> */}
          <Link href="/">
            <div className="logo flex items-center justify-center h-30 w-auto py-2 px-3 bg-purple text-white">
              <Image
                src="/logo-julienlucas.jpeg"
                width={55}
                height={55}
                alt=""
              />
              <p className="absolute text-white uppercase mt-16">Julien Lucas</p>
            </div>
            <button className="logo-subtitle">Freelance</button>
          </Link>
          <p className="absolute items-center justify-center text-gray-400 mt-52 mono slogan">Développeur front-end React / Full-stack / Architecte</p>
          {/* <ul className="list-none font-medium text-lg h-full md-none mono
            <li><Link href="#expertises" scroll>Mes expertises</Link></li>
            <li><Link href="#cas-clients" scroll>Cas clients</Link></li>
            <li><a href="https://calendly.com/julien-lucas/talk-dev" target="_blank">Échanger avec moi</a></li>
          </ul> */}
        {/* </div> */}
      </nav>
    </section>
  )
}