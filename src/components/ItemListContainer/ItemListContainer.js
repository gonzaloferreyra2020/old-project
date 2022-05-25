import {products} from "../../Data/products";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import React, {useEffect,useState} from "react";

export default function ItemListContainer ({greeting}){

  const [items, setItems] = useState([]);

  useEffect ( () =>{
    const task = new Promise( resolve=>{
      setTimeout(() =>{
        resolve(products)
      },3000);
    })
    task.then(res=> setItems(res));
    
  })


    //contador
    const onAdd = (total) =>{
      console.log({total} );
      }

        
    return(
        <div>
        {greeting}
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        <ItemList items={items}/>
        </div>
    )

    
}