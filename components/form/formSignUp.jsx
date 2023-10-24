import { motion, AnimatePresence } from 'framer-motion'
import { animateLogin } from '../utils/animations'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext'



/**
 * Componente per il form di registrazione
 * @date 23/10/2023 - 16:17:50
 *
 * 
 * @param {*} formAuth
 * gestisce la visualizzazione dei form login e registrazione nella pagina di login
 * @param {*} setFormAuth
 * setta il valore di formAuth
 * @function useForm
 * React hook form per la gestione dei form
 * @url https://react-hook-form.com/
 */

function FormSignUp({ formAuth, setFormAuth }) {
  const { handleSignUp, erroriFirebase } = useAuth()
  const form = useForm()
  const { register, handleSubmit, formState, watch } = form
  const { errors } = formState


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

          <form className='form-login' onSubmit={handleSubmit((data) => {
            handleSignUp(data.userName, data.password)
          })}>
            {erroriFirebase && <p>{erroriFirebase}</p>}
            <label htmlFor="user">
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
            <label htmlFor="passwordConfirm">
              <input
                {...register("passwordConfirm", {
                  required: {
                    value: true,
                    message: 'Campo Obbligatorio'
                  },
                  validate: (value) => (watch('password') != value) ? 'Le password non coincidono' : true,


                })} type="password" name="passwordConfirm" placeholder='Conferma Password' id="passwordConfirm" />
              {errors.passwordConfirm && <p>{errors.passwordConfirm?.message}</p>}
            </label>

            <button type="submit">Registrati</button>
          </form>

          <button className='back-login' onClick={(e) => { e.preventDefault(); setFormAuth(0) }}>Back</button>
        </motion.div>}
      </AnimatePresence></>
  )
}

export default FormSignUp