import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"], variable: '--font-unbounded', });
const manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope', });

export const metadata: Metadata = {
  title: "Julien Lucas | Développeur / Formateur / Créateur de contenu",
  description: "Développeur front-end React et Node freelance créateur de solutions saas pour startups / Formateur devs / Créateur de contenu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
