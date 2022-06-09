import { firestore } from '../firebase/initFirebase';
import { collection, QueryDocumentSnapshot, DocumentData, query, where, limit, getDocs } from "@firebase/firestore";
import Image from 'next/image'

const todosCollection = collection(firestore, 'panini');

import React, { useState, useEffect } from 'react';

function Read() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTodos = async () => {

        const todosQuery = query(todosCollection);
        // get the todos
        const querySnapshot = await getDocs(todosQuery);

        // map through todos adding them to an array
        const result = [];
        querySnapshot.forEach((snapshot) => {
            result.push(snapshot);
        });
        // set it to state
        setTodos(result);
    };

    useEffect(() => {
        // get the todos
        getTodos();
        // reset loading
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

    console.log(todos);
    return (
        <div className="App">
            {todos.map((item) => {
                return (<><Image src={item._document.data.value.mapValue.fields.image.stringValue}alt="test" width={200} height={120}/>
                
                <div>{item._document.data.value.mapValue.fields.price.integerValue}</div>
                </>)
            })
            }
        </div>
    );
}

export default Read;