import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&family=Rubik&display=optional"
          rel="stylesheet"
        /> */}

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand&family=Nunito&display=optional"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}