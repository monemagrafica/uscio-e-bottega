import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../animations'
function FormLogin({ auth, formAuth, setFormAuth }) {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login(e) {
    e.preventDefault()
    try {
      await auth.handleLogin(email, password)
  
      router.push('/store')
    } catch (err) { (err); }
  }

  return (
    <> <AnimatePresence exitBeforeEnter > {(formAuth === 0) &&
      <motion.div
        className='wrapperLogin'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animateLogin}
      >
        <form className='form-login' onSubmit={() => ('test')}>
          <label htmlFor="user">
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Nome Utente' name="user" id="user" />
          </label>
          <label htmlFor="password">
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder='Password' id="password" />
          </label>
          <button onClick={(e) => login(e)}>Entra</button>
          <button className='button-register' onClick={(e) => {e.preventDefault();setFormAuth(1)}}>Registrati!</button>
        </form>
      </motion.div>}</AnimatePresence></>
  )
}

export default FormLogin