import Head from 'next/head'
import ListaProdotti from '../../components/prodotti/listaProdotti'


export default function Store() {

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
