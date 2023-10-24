import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../utils/animations'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form';


/**
 * Componente per il form di login generico e con google popup
 * @date 23/10/2023 - 16:01:33
 *
 * @param {{ formAuth: any; setFormAuth: any; useAuth: any; }} param0
 * 
 * 
 * @param {*} param0.useAuth 
 * Context AuthContext con le funzioni di login e errore Firebase
 * @function loginGoogle
 * @function login
 * @function erroriFirebase
 * 
 * @param {*} param0.formAuth 
 * gestisce la visualizzazione dei form login e registrazione nella pagina di login
 * @param {*} param0.setFormAuth
 * setta il valore di formAuth
 * @function useForm
 * React hook form per la gestione dei form
 * @url https://react-hook-form.com/
 */

function FormLogin({ formAuth, setFormAuth, useAuth }) {
  const { loginGoogle, login, erroriFirebase } = useAuth()
  const form = useForm()
  const { register, handleSubmit, formState } = form
  const { errors } = formState

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
          {erroriFirebase && <p>{erroriFirebase}</p>}
          <form className='form-login' onSubmit={handleSubmit((data) => {
            login(data.userName, data.password)
          })}>
            <label htmlFor="userName">
              <input
                type="text"
                placeholder='Email'
                name="userName"
                id="userName"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "Campo obbligatorio"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Formato password errato"
                  }
                })
                }
              />
              {errors.userName && <p>{errors.userName?.message}</p>}


            </label>
            <label htmlFor="password">
              <input {...register("password", {
                required: { value: true, message: 'Campo Obbligatorio' },
                minLength: { value: 6, message: 'Inserire almeno 6 caratteri' },
              })} type="password" name="password" placeholder='Password' id="password" />
              {errors.password && <p>{errors.password?.message}</p>}
            </label>
            <button type="submit">Entra</button>
            <button className='button-register' onClick={(e) => { e.preventDefault(); setFormAuth(1) }}>Registrati!</button>
          </form>
          <div className="google-registrazione-ui"><span>Accedi con:</span><button className='google-login-button' onClick={loginGoogle}><FcGoogle /></button></div>
        </motion.div>}</AnimatePresence></>
  )
}

export default FormLogin