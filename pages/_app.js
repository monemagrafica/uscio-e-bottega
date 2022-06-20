import "../styles/globals.scss";
import { ContextData } from "../context/context";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'
import Layout from "../components/layout/layout";
import { motion } from 'framer-motion'
function MyApp({ Component, pageProps }) {

  const router = useRouter()
console.log(router)
  return (

    <Layout>
      <ContextData>
        <AnimatePresence exitBeforeEnter  onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`wrapper-main ${router.asPath === '/store' ? 'store':''}`}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ContextData>
    </Layout>


  )
}

export default MyApp;
