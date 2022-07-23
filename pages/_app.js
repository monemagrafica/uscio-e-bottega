import "../styles/globals.scss";
import { ContextData } from "../context/context";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import { motion } from "framer-motion";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ContextData>
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
    </ContextData>
  );
}

export default MyApp;
