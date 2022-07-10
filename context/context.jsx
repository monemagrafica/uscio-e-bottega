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

const ISSERVER = typeof window === "undefined";

const ShareContext = createContext()
const todosCollection = collection(firestore, 'panini')

// controllo per NEXTJS, per accedere al localstorage
const cartFromLocalStorage = !ISSERVER && JSON.parse(localStorage.getItem("cart"))

function ContextData({ children }) {

    const [prodotti, setProdotti] = useState([])
    const route = useRouter()
    const [cart, setCart] = useState(cartFromLocalStorage || [])
    const [openCart, setOpenCart] = useState(false)
    const [addPaninoToaster, setaddPaninoToaster] = useState(false)
    const [removePaninoToaster, setRemovePaninoToaster] = useState(false)
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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))

    }, [cart])

    function addToCart(e, newDatiPanino, id) {
        e.stopPropagation();
        setCart([...cart, { idPanino: id, ...newDatiPanino, quantita: 1 }])
        setaddPaninoToaster(true)
    }

    function updateItem(dettagli) {

        const newArray = cart.map((item) => {
            if (item.idPanino === dettagli.idPanino) {
                item.quantita = dettagli.quantita || 1
                item.note = dettagli.note
            }
            return item
        })

        setCart(newArray)
       
    }
 
    function removeFromCart(id) {
        setCart(cart.filter((item) => item.idPanino !== id))
        setRemovePaninoToaster(true)
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
        updateItem: updateItem,
        openCart: openCart,
        setOpenCart: setOpenCart,
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
        addPaninoToaster: addPaninoToaster,
        setaddPaninoToaster: setaddPaninoToaster,
        removePaninoToaster: removePaninoToaster,
        setRemovePaninoToaster: setRemovePaninoToaster,

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