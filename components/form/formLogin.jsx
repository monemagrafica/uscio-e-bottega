import React, { useState } from 'react'
import { useRouter } from 'next/router'


function FormLogin({ auth }) {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login(e) {
    e.preventDefault()
    try {
      await auth.handleLogin(email, password)
      console.log('logged')
      router.push('/store')
    } catch (err) { console.log(err); }
  }

  return (
    <div className='wrapperLogin'>
      <form className='form-login' onSubmit={() => console.log('test')}>
        <label htmlFor="user">
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Nome Utente' name="user" id="user" />
        </label>
        <label htmlFor="password">
          <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder='Password' id="password" />
        </label>
        <button onClick={(e) => login(e)}>Entra</button>
      </form>
    </div>
  )
}

export default FormLogin