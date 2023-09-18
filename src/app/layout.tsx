import './globals.css'
import type { Metadata, } from 'next'
export const openGraphImage = { images: ['https://julienlucas.ovh/wp-content/uploads/2023/09/og-image2.png'] }
import Link from './components/Link'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: "Développeur d'Apps Web Front React & Full-stack - Julien Lucas freelance",
  description: "Développez votre application web React, sans exploser votre budget.🔥",
  openGraph: {
    ...openGraphImage,
    title: "Développeur d'Apps Web Front React & Full-stack - Julien Lucas freelance",
    description: "Développez votre application web React, sans exploser votre budget.🔥",
    type: "website",
    url: "https://julienlucas.com/"
  },
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
