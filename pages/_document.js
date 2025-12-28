import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Initialize Vercel Speed Insights queue before script loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && !window.si) {
                window.si = function(...params) {
                  (window.siq = window.siq || []).push(params);
                };
              }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Load Vercel Speed Insights script */}
        <Script
          src="https://va.vercel-analytics.com/v1/script.js"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  )
}
