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



const ShareContext = createContext()
const todosCollection = collection(firestore, 'panini')


function ContextData({ children }) {

    const [prodotti, setProdotti] = useState([])
    const route = useRouter()
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const [openToaster, setOpenToaster] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [errorDb, setErrorDb] = useState(false)



    const getProdotti = async () => {

        const prodottiQuery = query(todosCollection)
        // get the prodotti
        const querySnapshot = await getDocs(prodottiQuery)

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

    useEffect(() => { if (user) getProdotti() }, [user])


    function addToCart(e, newDatiPanino, id) {
        e.stopPropagation();
        setCart([...cart, { idPanino: id, ...newDatiPanino, quantita: 1 }])
        setOpenToaster(true)

    }

    function removeFromCart(id) {

      setCart(cart.filter((item) => item.idPanino !== id))

    }

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
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
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