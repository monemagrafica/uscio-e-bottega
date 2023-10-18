import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../utils/animations'
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
function FormSignUp({ auth, formAuth, setFormAuth }) {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function handleSignUp(email, password) {

    createUserWithEmailAndPassword(getAuth(), email, password).then((user) => {
      console.log(user);
      setFormAuth(0)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
    }
    )
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter> {(formAuth === 1) &&
        <motion.div
          className='wrappersignup'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animateLogin}
        >

          <form className='form-login' onSubmit={() => handleSignUp(email, password)}>
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

          <button className='back-login' onClick={(e) => { e.preventDefault(); setFormAuth(0) }}>Back</button>
        </motion.div>}
      </AnimatePresence></>
  )
}

export default FormSignUp