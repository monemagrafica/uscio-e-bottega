import Head from 'next/head'
import ListaProdotti from '../../components/prodotti/listaProdotti'
import Layout from '../../components/layout/layout'
import { motion } from 'framer-motion'

export default function Home() {

 
  return (

    <>
      <Head>
        <title>Uscio e Bottega</title>
        <meta name="description" content="uscio e bottega app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <ListaProdotti />
      </main>
    </>

  )
}
