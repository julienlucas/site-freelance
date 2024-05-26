import type { Metadata } from "next";
import Script from "next/script";
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
      <body className={`${unbounded.variable} ${manrope.variable}`}>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LZL71FQRRE`}
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LZL71FQRRE', {
            page_path: window.location.pathname,
          });
        `,
          }}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
