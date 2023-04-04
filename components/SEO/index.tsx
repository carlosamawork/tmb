import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

export default function SEO ({
    title,
    description,
    canonicalUrl,
    ogTwitterImage,
    ogType,
    //   children,
    ogImageUrl
}) {
  return (
    <>
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogTwitterImage} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="apple-touch-icon" sizes="57x57" href="/media/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/media/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/media/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/media/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/media/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/media/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/media/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/media/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/media/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/media/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/media/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/media/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/media/favicon-16x16.png"/>
      <link rel="manifest" href="/media/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/media/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name="robots" content="no index, no follow" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />



      {/* {children} */}
    </Head>
    
    </>

  )
}