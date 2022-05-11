import { useState } from "react"

export default function ItemCount(){

    const [count,setCount]= useState(0);
    return(
        
        <div className="Counter">
        <button onClick={()=>{setCount(count-1)}}>-</button>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button>Agregar al carrito</button>
        </div>
        
    )
}