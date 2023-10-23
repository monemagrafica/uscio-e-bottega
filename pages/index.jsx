import React, { use, useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import FormLogin from '../components/form/formLogin'
import FormSignUp from '../components/form/formSignUp'
import GoogleLogin from '../components/form/googleLogin'
import { motion, AnimatePresence } from 'framer-motion'
import { ShareContext } from '../context/context'
import { animazioneLogo, animazioneForm, animazioneBackground } from '../components/utils/animations'
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/router'
export default function Home() {

  const context = useContext(ShareContext)
  const userData = context.authFirebase
  const [formAuth, setFormAuth, loginGoogle] = useState(0)
  const router = useRouter()
  const { authData } = useAuth()

  useEffect(() => {
    if (authData) {
      router.push('/store')
    }
  }, [authData])

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
          <Image src="/images/logo.svg" width={140} height={140} layout="responsive" alt="logo" />
        </motion.div>

        <motion.div
          className="wrapper-login"
          variants={animazioneForm}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >


          <AnimatePresence>

            <div className="wrapper-form-login">

              <FormSignUp
                setFormAuth={setFormAuth}
                formAuth={formAuth}
                auth={userData} />
              <FormLogin
                setFormAuth={setFormAuth}
                formAuth={formAuth}
                auth={userData}
                useAuth={useAuth} />
              <GoogleLogin
                setFormAuth={setFormAuth}
                formAuth={formAuth}
                auth={userData}
                loginGoogle={loginGoogle} />
            </div>
          </AnimatePresence>

        </motion.div>
        <motion.div
          className="wrapper-back"
          variants={animazioneBackground}
          initial="initial"
          animate="animate"
        >
          <Image src="/images/backlogin.jpg" layout='fill' alt="backlogin" />
        </motion.div>

      </main>


    </div>
  )
}
