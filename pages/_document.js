import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#D4C9A7" />
          <link rel="apple-touch-icon" href="/images/icon-512x512.png"></link>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Uscio e Bottega" />
          <meta property="og:description" content="Uscio e Bottega app" />
          <meta property="og:site_name" content="Uscio e Bottega" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta property="og:image" content="/public/images/icona-pwa.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
