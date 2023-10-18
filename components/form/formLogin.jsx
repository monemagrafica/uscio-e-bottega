import React, { useState, useContext, use } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../utils/animations'
import { signInWithEmailAndPassword, } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { auth } from '../../firebase/initFirebase';
import style from './form.module.scss'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../../context/authContext';

function FormLogin({ auth, formAuth, setFormAuth }) {
  const { loginGoogle } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [controlForm, setControlForm] = useState('')

  const errori = {
    nofield: 'Campi obbligarori',
    errore: 'Dati non corretti',
    firebase: 'Errore connessione, controllare email e password'
  }






  async function login(e) {
    e.preventDefault()
    signInWithEmailAndPassword(getAuth(), email, password).then((user) => {
      console.log(user);
      router.push('/store')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        setControlForm(errori.errore)
      } else if (errorCode === 'auth/user-not-found') {
        setControlForm(errori.firebase)
      } else {
        setControlForm(errori.nofield)
      }
      console.log({ errorCode, errorMessage });
    }
    )

  }

  return (
    <>
      <AnimatePresence exitBeforeEnter > {(formAuth === 0) &&
        <motion.div
          className='wrapperLogin'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animateLogin}
        >
          {controlForm && <div className={style.errore} >{controlForm}</div>}
          <form className='form-login' onSubmit={() => ('test')}>
            <label htmlFor="user">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder='Email'
                name="user" id="user"

              />
            </label>
            <label htmlFor="password">
              <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder='Password' id="password" />
            </label>
            <button onClick={(e) => login(e)}>Entra</button>
            <button className='button-register' onClick={(e) => { e.preventDefault(); setFormAuth(1) }}>Registrati!</button>
          </form>
          <div className="google-registrazione-ui"><span>Accedi con:</span><button className='google-login-button' onClick={loginGoogle}><FcGoogle /></button></div>
        </motion.div>}</AnimatePresence></>
  )
}

export default FormLogin