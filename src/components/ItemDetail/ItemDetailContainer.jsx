import React, { useState, useEffect } from 'react'
import {ItemDetail} from'./ItemDetail'
import axios from 'axios';
import { products } from '../../productsMock';

const itemDetailContainer =() => {

    const[product, setProduct] = useState({})
    let id = 4;

    useEffect(() => {
        let encontrado = products.find((prod) => prod.id === id)
      
        setProduct (encontrado);
    }, [id]);

    return (
        <div>
            <ItemDetail product={product} />

        </div>
    );
};
