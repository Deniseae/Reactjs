import React, { useEffect, useState } from 'react'
import {ItemDetail} from'./ItemDetail'
import { products } from '../../productsMock'

export const itemDetailContainer =() => {

    const[product, setProduct] = useState({})
    letid = 6
    useEffect(()=>{
        let encontrado = products.find(prod => prod.id === id)
        setProduct (encontrado)
    }, [id])

    console.log (product)

    return (
        <div>
            <ItemDetail product={product} />

        </div>
    )
}