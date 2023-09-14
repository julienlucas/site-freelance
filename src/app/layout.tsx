import './globals.css'
import type { Metadata } from 'next'
import Link from './components/Link'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: "Développeur d'applications React - Julien Lucas",
  description: "Développer une application web React sans exploser votre budget.🔥",
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
      <footer className="flex items-center justify-center w-full -mt-12 h-full px-4 py-56 bg-neutral-950">
        <Link href="/mentions-legales" scroll><p className="mentions-legales mono text-center">Mentions légales</p></Link>
        {/* <p className="text-center text-gray-400 text-xl mono">{currentYear} Julien Lucas</p> */}
      </footer>
    </html>
  )
}
