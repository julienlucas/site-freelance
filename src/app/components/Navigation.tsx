import Link from './Link'
// import Image from 'next/image'

export default function Home() {
  return (
    <section className="absolute t-0 z-50 w-full shadow-sm bg-white">
      <nav className="h-32 flex flex-col items-center justify-center w-full">
        <div className="max-w-screen-2xl flex w-full items-center justify-between px-4 md:pl-0">
          <Link href="/">
            <div className="logo flex items-center justify-center h-32 w-auto py-3 px-3 bg-purple text-white">
              JULIEN LUCAS
              {/* <Image
                src="/jl.png"
                width={36}
                height={5}
                alt=""
              /> */}
            </div>
            <p className="slogan mono pl-8 pt-1.5">Freelance <span className="text-gray-400 hidden md:inline-block">- Lead développeur front-end / Full-stack / Architecte</span></p>
          </Link>
          <ul className="list-none font-medium text-lg h-full md-none mono">
            <li><Link href="#expertises" scroll>Mes expertises</Link></li>
            <li><Link href="#cas-clients" scroll>Cas clients</Link></li>
            <li><Link href="https://calendly.com/julien-lucas/talk-dev" scroll>Échanger avec moi</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  )
}