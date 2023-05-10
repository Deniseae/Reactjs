import React, { useState, useEffect } from 'react'
import {ItemDetail} from'./ItemDetail';
import { products } from '../../productsMock';
import { useParams } from 'react-router-dom'

const itemDetailContainer =() => {

    const[product, setProduct] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        let encontrado = products.find((prod) => prod.id === +id)
      
        setProduct (encontrado);
    }, [id]);

    return (
        <div>
            <ItemDetail product={product} />

        </div>
    );
};
