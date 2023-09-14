import { Html, Head, Main, NextScript } from 'next/document'
import Meta from './app/components/Meta'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <Meta />
      </Head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=G-CQNM4BQBH9" height="0" width="0" style={{ display: 'none', visibility:'hidden' }} />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}