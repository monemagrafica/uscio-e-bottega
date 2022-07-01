import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import FormLogin from '../components/form/formLogin'
import FormSignUp from '../components/form/formSignUp'

import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../components/animations'
import { ShareContext } from '../context/context'
import { FcGoogle } from 'react-icons/fc'



function LoginUi({ tipoForm, setFormAuth }) {
  if (tipoForm === false) {
    return (
      <> <button className='google-login-button' onClick={() => setFormAuth(2)}><FcGoogle /></button>
        <button className='back-login' onClick={() => setFormAuth(0)}>login</button>
        <button className='back-login' onClick={() => setFormAuth(1)}>register</button>
      </>)
  }
}


export default function Home() {

  const context = useContext(ShareContext)
  const userData = context.authFirebase
  console.log(userData);
  const [formAuth, setFormAuth] = useState(false)

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

        {userData.user?.uid ?
          <button className='logout' onClick={() => userData.logout()}>logout</button>
          :
          <motion.div
            className="wrapper-login"
            variants={animazioneForm}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          >


            <AnimatePresence>
              {formAuth !== false ?
                <motion.div
                  className="wrapper-form-login"
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={animateLogin}
                >
                  <FormSignUp setFormAuth={setFormAuth} formAuth={formAuth} auth={userData} />

                  <FormLogin setFormAuth={setFormAuth} formAuth={formAuth} auth={userData} />
                </motion.div>
                :
                <motion.div
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={animateLogin}
                >
                  <LoginUi tipoForm={formAuth} setFormAuth={setFormAuth} />

                </motion.div>
              }
            </AnimatePresence>

          </motion.div>}
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
