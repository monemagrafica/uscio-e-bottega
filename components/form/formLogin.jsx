import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../utils/animations'

import style from './form.module.scss'
import { FcGoogle } from 'react-icons/fc'


function FormLogin({ formAuth, setFormAuth, useAuth }) {
  const { loginGoogle, login } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [controlForm, setControlForm] = useState('')







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
            <button onClick={(e) => login(e, email, password, controlForm, setControlForm)}>Entra</button>
            <button className='button-register' onClick={(e) => { e.preventDefault(); setFormAuth(1) }}>Registrati!</button>
          </form>
          <div className="google-registrazione-ui"><span>Accedi con:</span><button className='google-login-button' onClick={loginGoogle}><FcGoogle /></button></div>
        </motion.div>}</AnimatePresence></>
  )
}

export default FormLogin