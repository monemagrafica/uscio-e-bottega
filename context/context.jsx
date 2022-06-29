import React, { createContext, useState, useEffect } from "react"
import { firestore, auth } from '../firebase/initFirebase';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { collection, QueryDocumentSnapshot, DocumentData, query, where, limit, getDocs } from "@firebase/firestore";

const ShareContext = createContext();
const todosCollection = collection(firestore, 'panini');


function ContextData({ children }) {
    const [prodotti, setProdotti] = useState([]);
 
    const [selezionePanini, setselezionePanini] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const [openToaster, setOpenToaster] = useState(false)

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

    const [user, setUser] = useState()
    const [loading, setLoading]= useState(true)

    useEffect(() => {
        // get the prodotti
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
        getProdotti();
 
        return () => unsubscribe()
    }, []);


    function handleLogin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    function handleSignUp (email, password) {
        return createUserWithEmailAndPassword( auth, email, password)
      }
      
const logout = async ()=> {
    console.log("logout");
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
        setOpenToaster: setOpenToaster,
    }
    const authFirebase = {
        user: user,
        handleLogin:handleLogin,
        handleSignUp:handleSignUp,
        logout:logout
    }

    return (
        <ShareContext.Provider value={{ DataShare, authFirebase }}>
            {loading ? null : children}
        </ShareContext.Provider>
    )
}

export { ContextData, ShareContext }