import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react";
import { products } from "../../Data/products";

export default function ItemDetailContainer (){

    const [item,setItem] = useState({});

    useEffect(() =>{
        const getItem = new Promise(resolve =>{
            setTimeout(() =>{
                resolve(products)
            },2000);
            
        })

        getItem.then(res => setItem(res));
    })

    

    return(
        <ItemDetail item={item}/>
    )
}