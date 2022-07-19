import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ChiSiamo() {
    return (
        <div className="wrapper-interne chi-siamo">
            <h1>Chi siamo</h1>
            <p>La Bottega alimentare e Punto pranzo...con 5 palle su </p>
            <a href="https://www.tripadvisor.it/Restaurant_Review-g194868-d10340946-Reviews-Uscio_E_Bottega-Prato_Province_of_Prato_Tuscany.html" rel="noreferrer" target="_blank">
                <Image src="/images/tripadvisor.svg" alt="tripadvisor" width="150" height="50" layout="fixed" />
            </a>
            <h2>Ci trovi in</h2>
            <ul className='dati'>
                <li>Via Santa Trinita 107, Prato</li>
                <li>dal lunedì al venerdì </li>
                <li>dalle 7.30 alle 13:00</li>
                <li>tel: <a href="tel:+39 333 225 4017">333 225 4017</a></li>
            </ul>
            <br />
            <button><Link href="/store"> Torna al negozio</Link></button>
        </div>)
}

export default ChiSiamo