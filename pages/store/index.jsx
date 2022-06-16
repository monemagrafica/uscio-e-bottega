import Head from 'next/head'
import ListaProdotti from '../../components/prodotti/listaProdotti'
import Layout from '../../components/layout/layout'
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Uscio e Bottega</title>
          <meta name="description" content="uscio e bottega app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.main 
 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        >
          <ListaProdotti />
        </motion.main>
      </div>
    </Layout>
  )
}
