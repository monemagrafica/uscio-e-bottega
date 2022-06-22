import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { memo } from "react";
function ToasterAggiuntoCart({openToaster}) {

   
   

    if (openToaster) {
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
    }

    return ReactDOM.createPortal(

            <ToastContainer />
       
    , document.body)
}

export  {ToasterAggiuntoCart}