import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToasterAggiuntoCart({ statoCarrello }) {
    const [carrelloUpdate, setCarrelloUpdate] = useState(false)

    useEffect(() => {

        setCarrelloUpdate((prevState)=> (prevState === true & statoCarrello) ? false : true )
        
    }, [statoCarrello])

    if (carrelloUpdate) {
        toast('🦄 Wow so easy!', {
            position: "top-right",
            toastId: 'addedPanino',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div>
            <ToastContainer />
        </div>
    )
}

export  {ToasterAggiuntoCart}