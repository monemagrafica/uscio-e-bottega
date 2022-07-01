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
    QueryDocumentSnapshot,
    DocumentData,
    query,
    where,
    limit,
    getDocs
} from "@firebase/firestore";

const ShareContext = createContext();
const todosCollection = collection(firestore, 'panini');


function ContextData({ children }) {
    const [prodotti, setProdotti] = useState([]);
    const route = useRouter()
    const [selezionePanini, setselezionePanini] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const [openToaster, setOpenToaster] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const getProdotti = async () => {

        const prodottiQuery = query(todosCollection);
        // get the prodotti
        const querySnapshot = await getDocs(prodottiQuery);

        // map through prodotti adding them to an array
        const result = [];
        querySnapshot.forEach((snapshot) => {
            result.push(snapshot);
        });
        // set it to state
        setProdotti(result);
    };

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {

        //evita che si disconnetta al refresh dell'applicazione (?)
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

        // get the prodotti
        return () => unsubscribe()

    }, []);

    useEffect(() => { if (user) getProdotti() }, [user])

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
        prodotti: prodotti ? prodotti : false,
        selezionePanini: selezionePanini,
        setselezionePanini: setselezionePanini,
        openCart: openCart,
        setOpenCart: setOpenCart,
        openToaster: openToaster,
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
        setOpenToaster: setOpenToaster,
    }
    const authFirebase = {
        user: user,
        handleLogin: handleLogin,
        handleSignUp: handleSignUp,
        logout: logout
    }

    return (
        <ShareContext.Provider value={{ DataShare, authFirebase }}>
            {loading ? null : children}
        </ShareContext.Provider>
    )
}

export { ContextData, ShareContext }