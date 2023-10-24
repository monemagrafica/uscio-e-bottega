import "../styles/globals.scss";
import { ContextData } from "../context/context";
import CartState from "../context/cart/cartState";
import { ContextAuth } from "../context/authContext";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Error from "next/error";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }
  return (
    <ContextData>
      <ContextAuth>
        <CartState>
          <Layout>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
              ></meta>
              <title>My awesome PWA app</title>
              <meta name="description" content="Best PWA app in the world!" />
              <link rel="shortcut icon" href="/favicon.ico" />
              <link
                rel="mask-icon"
                href="/icons/mask-icon.svg"
                color="#FFFFFF"
              />
              <meta name="theme-color" content="#ffffff" />
              <link
                rel="apple-touch-icon"
                href="/icons/touch-icon-iphone.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/icons/touch-icon-ipad.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/icons/touch-icon-iphone-retina.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="167x167"
                href="/icons/touch-icon-ipad-retina.png"
              />
              <link rel="manifest" href="/manifest.json" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Uscio e Bottega" />
              <meta property="og:description" content="Uscio e Bottega app" />
              <meta property="og:site_name" content="Uscio e Bottega" />
              <meta property="og:url" content="https://yourdomain.com" />
              <meta
                property="og:image"
                content="/public/images/icona-pwa.png"
              />
              {/* add the following only if you want to add a startup image for Apple devices. 
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        />
*/}
            </Head>
            <AnimatePresence
              exitBeforeEnter
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <motion.div
                key={router.asPath}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`wrapper-main ${
                  router.asPath === "/store" ? "store" : ""
                }`}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </CartState>
      </ContextAuth>
    </ContextData>
  );
}

export default MyApp;
