import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import FormLogin from '../components/form/formLogin'
import FormSignUp from '../components/form/formSignUp'
import { motion, AnimatePresence } from 'framer-motion'
import { ShareContext } from '../context/context'
import { FcGoogle } from 'react-icons/fc'
import { animazioneLogo, animazioneForm, animazioneBackground } from '../components/animations'


function LoginUi({ tipoForm, setFormAuth }) {
  if (tipoForm === false) {
    return (
      <> 
        <button className='back-login' onClick={() => setFormAuth(0)}>Login</button>
        <button className='back-login' onClick={() => setFormAuth(1)}>Registrati</button>
      </>)
  }
}


export default function Home() {

  const context = useContext(ShareContext)
  const userData = context.authFirebase

  const [formAuth, setFormAuth] = useState(0)



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


            <AnimatePresence>
                <div className="wrapper-form-login">
                  <FormSignUp
                    setFormAuth={setFormAuth}
                    formAuth={formAuth}
                    auth={userData} />
                  <FormLogin
                    setFormAuth={setFormAuth}
                    formAuth={formAuth}
                    auth={userData} />
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
