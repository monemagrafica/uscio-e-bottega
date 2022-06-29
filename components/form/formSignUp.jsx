import React, { useState } from 'react'

function FormSignUp({ auth }) {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function signUp(e) {
    e.preventDefault()
    try {
      await auth.handleSignUp(email, password)
      console.log('logged');
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
        <button onClick={(e) => signUp(e)}>Registrati</button>
      </form>
    </div>
  )
}

export default FormSignUp