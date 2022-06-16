import Head from 'next/head'
import Image from 'next/image'
import FormLogin from '../components/formLogin/formLogin'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {


  const animazioneLogo = {
    initial: {
      opacity: 0,
      top: -50
    },
    animate: {
      opacity: 1,
      top: 0
    }
  }
  const animazioneForm = {
    initial: {
      opacity: 0,
      top: 50
    },
    animate: {
      opacity: 1,
      top: 0
    }
  }
  const animazioneBackgroung = {
    initial: {
      opacity: 0,

    },
    animate: {
      opacity: 1,

    }
  }


  return (
    <div>
      <Head>
        <title>Uscio e Bottega</title>
        <meta name="description" content="uscio e bottega app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='login-page' >
        <motion.div
          className="wrapper-logo"
          variants={animazioneLogo}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Image src="/images/logo.svg" width={240} height={240} layout="responsive" alt="logo" />
        </motion.div>

        <motion.div
          className="wrapper-login"
          variants={animazioneForm}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <FormLogin />
        </motion.div>
        <motion.div
          className="wrapper-back"
          variants={animazioneBackgroung}
          initial="initial"
          animate="animate"
        >
          <Image src="/images/backlogin.jpg" layout='fill' alt="backlogin" />
        </motion.div>
      </main>


    </div>
  )
}
