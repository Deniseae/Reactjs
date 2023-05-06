import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import axios from "axios";


const ItemListContainer = () => {

    const [ items , setItems ] = useState ([])
    const[isDelete, setIsDelete] =useState(false)
    const[isUpdated, setIsUpdated] =useState(false)
        useEffect(()=> {

            setIsDelete(false)
            let data = axios.get("http://localhost:5000/products")
            data.then( res => setItems(res.data))

        }, [isDelete] )

const deleteProduct= (id)=>{
    axios.delete(`http://localhost:5000/products/${id}` )
    setIsDelete(true)

};

const updateProduct = (id,data)=>{
    axios.patch(`http://localhost:5000/products/${id}`, data)


}

const createProduct =(data)=>{

}


return(
    <div>
        <
        ItemList items={items} 
    
        deleteProduct={deleteProduct}

        updateProduct= {updateProduct}
        />
    </div>
);

};
export default ItemListContainer;