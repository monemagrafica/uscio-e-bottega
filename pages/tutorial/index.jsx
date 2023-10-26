import React from 'react'
import Link from 'next/link'
function Tutorial() {
    return (
        <div className='wrapper-interne'>
            <h1>Tutorial</h1>
            <ol type="0">
                <li>Scegli un panino dalla lista</li>
                <li>Leggi le informazioni oppure aggiungilo subito al carrello</li>
                <li>Un Tap sull&apos; icona del carrello</li>
                <li>Aggiungi quantità e accedi alla configurazione <br /> (modifica le salse, scrivici le modifiche)</li>
                <li>Procedi con l&apos;ordine!</li>
            </ol>
            <button className='btn-generico'><Link href="/store">Vai al negozio</Link></button>
        </div>
    )
}

export default Tutorial