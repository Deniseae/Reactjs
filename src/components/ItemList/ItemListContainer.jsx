import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import { products } from "../../productsMock";

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [isDelete, setIsDelete] = useState(false)
  const [isUpdated, setIsUpdated] = useState(false)

  useEffect(() => {
    setIsDelete(false);
    let data = new Promise((resolve) => {
      resolve(products);
    });

    data.then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <div>
        <ItemList items={items} />
    </div>
  );

};
export default ItemListContainer;