import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../animations'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form';

function FormSignUp({ auth, formAuth, setFormAuth }) {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function signUp(data) {

    try {
      await auth.handleSignUp(data.user, data.password)
      router.push('/store')
    } catch (err) { }
  }
  return (
    <><AnimatePresence exitBeforeEnter> {(formAuth === 1) &&
      <motion.div
        className='wrappersignup'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animateLogin}
      >

        <form className='form-login' onSubmit={handleSubmit(signUp)}>
          <label htmlFor="user">
            <input {...register("user", { required: true, pattern: /^\S+@\S+$/i })} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' name="user" id="user" />
            {errors.user && <span>Errore inserimento mail</span>}
          </label>
          <label htmlFor="password">
            <input {...register("password", { required: true, minLength: 6 })} onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder='Password' id="password" />
            {errors.password && <span>Errore inserimento password (min 6 caratteri)</span>}
          </label>
          {/* <button onClick={(e) => signUp(e)}>Registrati</button> */}
          <button type="submit">Registrati</button>
        </form>
        <div className="google-registrazione-ui"><span>Registrati con:</span><button className='google-login-button' onClick={() => setFormAuth(2)}><FcGoogle /></button></div>
        <button className='back-login' onClick={(e) => { e.preventDefault(); setFormAuth(0) }}>Back</button>
      </motion.div>}
    </AnimatePresence></>
  )
}

export default FormSignUp