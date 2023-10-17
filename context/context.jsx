import React, { createContext, useState, useEffect } from "react"
import { firestore, auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router'
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,

} from "firebase/auth";

import {
    collection,
    query,
    getDocs
} from "@firebase/firestore";


const ShareContext = createContext()
const todosCollection = collection(firestore, 'panini')



function ContextData({ children }) {


    const route = useRouter()
    const [addPaninoToaster, setaddPaninoToaster] = useState(false)
    const [removePaninoToaster, setRemovePaninoToaster] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [errorDb, setErrorDb] = useState(false)
    const [update, setUpdate] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        //LOGIN - evita che si disconnetta al refresh dell'applicazione (?)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else { setUser(null) }
            setLoading(false)
        })

        return () => unsubscribe()

    }, []);












    function handleLogin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function handleSignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

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
        update: update,
        setUpdate: setUpdate

    }

    const authFirebase = {
        user: user,
        handleLogin: handleLogin,
        handleSignUp: handleSignUp,
        logout: logout,
        errorDb: errorDb,
        setErrorDb: setErrorDb
    }

    return (
        <ShareContext.Provider value={{ DataShare, authFirebase }}>
            {loading ? null : children}
        </ShareContext.Provider>
    )
}

export { ContextData, ShareContext }