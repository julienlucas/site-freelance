import Link from '../components/Link'

export default function Footer() {
  return (
   <footer className="flex items-center justify-center w-full -mt-12 pb-36 pt-44 h-96 bg-neutral-950">
      <Link href="/mentions-legales" scroll><p className="mentions-legales text-white mono">Mentions légales</p></Link>
      {/* <p className="text-center text-gray-400 text-xl mono">{currentYear} Julien Lucas</p> */}
    </footer>
  )
}
