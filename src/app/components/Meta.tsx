export default function Meta() {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/icons/icon-128x128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icons/icon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href="/icons/icon-72x72.png"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="16x16"
        href="/icons/icon-16x16.png"
      />
      <meta name="keywords" content="Développeur front-end React, Développeur React freelance, React.js, Node.js" />
      <meta name="author" content="Juelien Lucas" />
      <link rel="manifest" href="manifest.json" />
      <link rel="shortcut icon" href="icons/icon-72x72.png" />
      <meta name="msapplication-TileColor" content="#3c30e5" />
      <meta name="theme-color" content="#3c30e5" />

      {/* OpenGraph tags */}
      {/* <meta property="og:type" content="siteweb" />
      <meta property="og:url" content="https://julienlucas.com/" />
      <meta property="og:title" content="Développeur d'Apps Web Front React & Full-stack - Julien Lucas freelance" />
      <meta
        name="description"
        content="Développez votre app web React, sans exploser votre budget.🔥"
      />
      <meta property="og:image" content="https://julienlucas.ovh/wp-content/uploads/2023/09/og-image.jpeg" /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@julienlucasjl" />
      <meta name="twitter:title" content="Développeur d'Apps Web Front React & Full-stack - Julien Lucas freelance" />
      <meta name="twitter:description" content="Développez votre app web React, sans exploser votre budget.🔥" />
      <meta name="twitter:image" content="https://julienlucas.ovh/wp-content/uploads/2023/09/og-image.jpeg" />
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "url": "https://julienlucas.com/",
          "name": "Développeur d'Apps Web Front React & Full-stack - Julien Lucas freelance"
        }
        `}
      </script>
    </>
  )
}