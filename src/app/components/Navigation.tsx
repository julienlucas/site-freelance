import Link from './Link'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="absolute t-0 z-50 w-full shadow-sm bg-white">
      <nav className="h-30 flex flex-col items-center justify-center w-full">
        <div className="max-w-screen-2xl flex w-full items-center justify-between px-4 md:pl-0">
          <Link href="/">
            <div className="h-30 w-28 py-3 px-3 bg-purple">
              <Image
                className="invert"
                src="/logo.svg"
                width={90}
                height={5}
                alt=""
              />
            </div>
            <p className="slogan mono">Freelance <span className="text-gray-400 hidden md:inline-block">- Lead développeur front-end web / Full-stack web / Architecte</span></p>
          </Link>
          <ul className="list-none font-medium text-lg h-full md-none mono">
            <li><Link href="/#expertises" scroll>Nos expertises</Link></li>
            <li><Link href="/#cas-clients" scroll>Cas clients</Link></li>
            <li><Link href="/#newsletter" scroll>Échanger avec moi</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  )
}