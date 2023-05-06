import React, {useEffect, useState} from "react";

const FetchingData =()=>{
    const [data, setData] = useState([]);
    const [dataById, setDataById] = useState({})
    useEffect(()=>{
        const obtenerPost = fetch("http://jsonplaceholder.typicode.com/post");
        obtenerPost.then((res)=> res.json()).then((res)=> setData(res));

        const obtenerPorId = fetch ("http://jsonplaceholder.typicode.com/post");
        obtenerPost.then((res)=> res.json()).then((res)=> setDatByIda(res));
    

    },[]);


    
    return(
        <div>
            <h1>peticiones</h1>
        </div>
    )
}
export default FetchingData;