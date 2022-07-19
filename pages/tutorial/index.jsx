import React from 'react'
import Link from 'next/link'
function Tutorial() {
    return (
        <div className='wrapper-interne'>   
        <h1>Tutorial</h1>
        <ol type="0">
            <li>Fai tap su un panino della lista</li>
            <li>Accedi alle info oppure aggiungi subito al carrello</li>
            <li>Tap icona del carrello</li>
            <li>Aggiungi quantità e accedi alla configurazione <br/> (modifica le salse, scrivici le modifiche)</li>
        </ol>
       <button><Link href="/store">Vai al negozio</Link></button> 
        </div>
    )
}

export default Tutorial