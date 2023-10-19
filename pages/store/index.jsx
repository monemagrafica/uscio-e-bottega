import Head from 'next/head'
import ListaProdotti from '../../components/prodotti/listaProdotti'
import { fetchDataFromFirebase } from '../../firebase/utils'
import { useAuth } from '../../context/authContext'

export default function Store({ data }) {



  return (
    <>
      <Head>
        <title>Uscio e Bottega</title>
        <meta name="description" content="uscio e bottega app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ListaProdotti prodotti={data} />
      </main>
    </>
  )
}

export const getServerSideProps = (async (authData) => {
  const { authData } = useAuth()
  const data = await fetchDataFromFirebase('panini')
  if (!authData) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: { data } }
}) 