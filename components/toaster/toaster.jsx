import React, { memo, useState, useEffect } from 'react'
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


function ToasterLoggedIn({ authData }) {

    const [userStato, setUserStato] = useState(null)


    useEffect(()=>{
        if(authData?.uid){setUserStato((prev)=>{return prev !== authData.uid ? authData.uid : null})}
    },[])

console.log('userstato',userStato);
    if (userStato !== null) {
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


      return  <ToastContainer />
      
}
const ToasterLoggedInMemo = memo(ToasterLoggedIn)

export {ToasterLoggedInMemo}

export default memo(ToasterAggiuntoCart)