import { useContext, useEffect } from "react";
import "../styles/globals.scss";
import { ContextData } from "../context/context";
import CartState from "../context/cart/cartState";
import { AuthProvider } from "../context/authContext";
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
      <CartState>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            ></meta>
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
    </ContextData>
  );
}

export default MyApp;
