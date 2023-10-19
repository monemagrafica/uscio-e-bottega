import React, { memo, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ToasterAggiuntoCart({ addPaninoToaster, setaddPaninoToaster }) {

    if (addPaninoToaster) {
        toast('Panino aggiunto al carrello!', {
            position: "bottom-right",
            toastId: 'addedPanino',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setaddPaninoToaster(false)
    }


    return <ToastContainer />

}


function ToasterRimossoCart({ removePaninoToaster, setRemovePaninoToaster }) {
    if (removePaninoToaster) {
        toast('Panino rimosso!', {
            position: "bottom-right",
            toastId: 'addedPanino',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setRemovePaninoToaster(false)
    }


    return <ToastContainer />

}



function ToasterLoggedIn({ authData }) {

    const [userStato, setUserStato] = useState(null)

    useEffect(() => {
        if (true) { setUserStato(false) }
    }, [])

    if (true) {
        toast('Benvenuto!', {
            position: "bottom-right",
            toastId: 'addedPanino',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return <ToastContainer />
}

const ToasterLoggedInMemo = memo(ToasterLoggedIn)

export { ToasterLoggedInMemo, ToasterAggiuntoCart, ToasterRimossoCart }
