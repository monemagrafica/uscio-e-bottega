import React, { memo } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ToasterAggiuntoCart({ openToaster }) {




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


      return  <ToastContainer />
      
}

export default memo(ToasterAggiuntoCart)