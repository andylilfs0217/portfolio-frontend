import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*  Google tag (gtag.js) */}
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-${process.env.GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname
            });
          `,
        }}
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
