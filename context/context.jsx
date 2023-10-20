import React, { createContext, useState, useEffect } from "react"
import { auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router'


const ShareContext = createContext()


function ContextData({ children }) {

    const [addPaninoToaster, setaddPaninoToaster] = useState(false)
    const [removePaninoToaster, setRemovePaninoToaster] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)

    const DataShare = {
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
        addPaninoToaster: addPaninoToaster,
        setaddPaninoToaster: setaddPaninoToaster,
        removePaninoToaster: removePaninoToaster,
        setRemovePaninoToaster: setRemovePaninoToaster,
    }



    return (
        <ShareContext.Provider value={{ DataShare }}>
            {children}
        </ShareContext.Provider>
    )
}

export { ContextData, ShareContext }