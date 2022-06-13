
import Image from 'next/image'
import { ShareContext } from '../context/context';
import { useContext } from 'react'  
import React from 'react';

function ListaPanini() {
const share = useContext(ShareContext)

    console.log(share);
    return (
        <div className="App">
            
            {share.prodotti.map((item) => {
                return (
                <div key={item._document.data.value.mapValue.fields.id.integerValue} style={{ width: 200 }}>
                    {item._document.data.value.mapValue.fields.svg&&
                    <Image src={item._document.data.value.mapValue.fields.svg.stringValue} alt="test"  width={200} height={120} layout="responsive" />}
                    <div>{item._document.data.value.mapValue.fields.price.integerValue}</div>
                </div>)
            })
            }
        </div>
    );
}

export default ListaPanini;