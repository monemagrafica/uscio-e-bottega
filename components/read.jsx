import { firestore } from '../firebase/initFirebase';
import { collection, QueryDocumentSnapshot, DocumentData, query, where, limit, getDocs } from "@firebase/firestore";
import Image from 'next/image'

const todosCollection = collection(firestore, 'panini');

import React, { useState, useEffect } from 'react';

function Read() {
    const [prodotti, setProdotti] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTodos = async () => {

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
        getTodos();
        // reset loading
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

    console.log(prodotti);
    return (
        <div className="App">
            {prodotti.map((item) => {
                return (<div key={item._document.data.value.mapValue.fields.id.integerValue} style={{ width: 200 }}>{item._document.data.value.mapValue.fields.svg&&<Image src={item._document.data.value.mapValue.fields.svg.stringValue} alt="test" width={200} height={120} layout="responsive" />}
                    <div>{item._document.data.value.mapValue.fields.price.integerValue}</div>
                </div>)
            })
            }
        </div>
    );
}

export default Read;