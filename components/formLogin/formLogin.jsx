import React from 'react'
import style from './formLogin.module.scss'

function FormLogin() {
  return (
    <div className='wrapperLogin'>
      <form className='form-login' onSubmit={() => console.log('test')}>
        <label htmlFor="user">
          <input type="text" placeholder='Nome Utente' name="user" id="user" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" placeholder='Password' id="password" />
        </label>
        <button>Entra</button>
      </form>
    </div>
  )
}

export default FormLogin