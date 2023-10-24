import "../styles/globals.scss";
import { useEffect, useState } from "react";
import { ContextData } from "../context/context";
import CartState from "../context/cart/cartState";
import { ContextAuth } from "../context/authContext";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Error from "next/error";
import LoaderImage from "../components/loader/loaderImage";

/**
 * App component
 * @date 24/10/2023 - 11:37:30
 * @var loading
 * variabile per il caricamento della pagina con il getserver side props
 * @function setLoading
 * setter per la variabile loading
 */
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);
  console.log(loading, "loading");
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
              <title>Uscio e Bottega web app</title>
            </Head>

            {loading ? (
              <LoaderImage />
            ) : (
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
            )}
          </Layout>
        </CartState>
      </ContextAuth>
    </ContextData>
  );
}

export default MyApp;
