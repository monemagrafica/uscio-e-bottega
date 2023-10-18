import React, { createContext, useState, useEffect } from "react"
import { auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router'


const ShareContext = createContext()


function ContextData({ children }) {


    const route = useRouter()
    const [addPaninoToaster, setaddPaninoToaster] = useState(false)
    const [removePaninoToaster, setRemovePaninoToaster] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [errorDb, setErrorDb] = useState(false)
    const [user, setUser] = useState(null)

    const logout = async () => {
        console.log("logout");
        route.push('/')
        setOpenDrawer(false)
        setUser(null)
        await auth.signOut();
    };

    const DataShare = {
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
        addPaninoToaster: addPaninoToaster,
        setaddPaninoToaster: setaddPaninoToaster,
        removePaninoToaster: removePaninoToaster,
        setRemovePaninoToaster: setRemovePaninoToaster,
    }

    const authFirebase = {
        user: user,
        logout: logout,
        errorDb: errorDb,
        setErrorDb: setErrorDb
    }

    return (
        <ShareContext.Provider value={{ DataShare, authFirebase }}>
            {children}
        </ShareContext.Provider>
    )
}

export { ContextData, ShareContext }