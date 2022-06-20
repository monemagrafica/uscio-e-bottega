import React, { createContext, useState, useEffect } from "react"
import { firestore } from '../firebase/initFirebase';
import { collection, QueryDocumentSnapshot, DocumentData, query, where, limit, getDocs } from "@firebase/firestore";

const ShareContext = createContext();
const todosCollection = collection(firestore, 'panini');


function ContextData({children}) {
    const [prodotti, setProdotti] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selezionePanino, setSelezionePanino] = useState(false)
    const [openCart, setOpenCart] = useState(false)

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

    useEffect(() => {
        // get the prodotti
        getProdotti();
        // reset loading
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);


const DataShare = {
    prodotti: prodotti ? prodotti : false,
    selezionePanino: selezionePanino,
    setSelezionePanino: setSelezionePanino,
    openCart: openCart,
    setOpenCart: setOpenCart
}
    return (
    <ShareContext.Provider value={DataShare}>
      {children}
    </ShareContext.Provider>
  )
}

export  {ContextData, ShareContext}