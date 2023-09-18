import './globals.css'
import type { Metadata } from 'next'
import Link from './components/Link'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: "Développement d'Applications Web Front-end & Full-stack - Julien Lucas, freelance",
  description: "Développez votre application web React, sans exploser votre budget.🔥",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const date = new Date()
  date.setDate(date.getDate())
  const currentYear = date.getFullYear()

  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
      </body>
      <footer className="flex flex-col items-center justify-center w-full -mt-12 h-full px-4 py-56 bg-neutral-950">
        <Link href="/mentions-legales" scroll><p className="mentions-legales mono text-center text-inherit p-10">Mentions légales</p></Link>
        {/* <p className="relative text-center text-gray-400 text-xl mono">{currentYear} Julien Lucas</p> */}
      </footer>
    </html>
  )
}
