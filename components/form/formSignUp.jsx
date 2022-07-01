import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../animations'

function FormSignUp({ auth, formAuth, setFormAuth }) {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function signUp(e) {
    e.preventDefault()
    try {
      await auth.handleSignUp(email, password)
      router.push('/store')
    } catch (err) { console.log(err); }
  }

  return (
    <><AnimatePresence> {(formAuth === 1) &&
      <motion.div
        className='wrapperLogin'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animateLogin}
      >
        <form className='form-login'>
          <label htmlFor="user">
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Nome Utente' name="user" id="user" />
          </label>
          <label htmlFor="password">
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder='Password' id="password" />
          </label>
          <button onClick={(e) => signUp(e)}>Registrati</button>
          <button className='back-login' onClick={()=>setFormAuth(false)}>Back</button>
        </form>
      </motion.div>}
    </AnimatePresence></>
  )
}

export default FormSignUp