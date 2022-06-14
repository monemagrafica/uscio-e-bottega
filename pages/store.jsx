import Head from 'next/head'
import Image from 'next/image'
import ListaProdotti from '../components/prodotti/listaProdotti'
import Layout from '../components/layout/layout'
export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Uscio e Bottega</title>
          <meta name="description" content="uscio e bottega app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main >
          <ListaProdotti />
        </main>
      </div>
    </Layout>
  )
}
