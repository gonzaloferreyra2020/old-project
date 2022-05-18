import { useState } from "react"

export default function ItemCount({stock,initial,onAdd}){

    const [count,setCount]= useState(initial);
   
    return(
        <div className="Counter">
        <button onClick={()=>{setCount(count-1)}}>-</button>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <submit type="text" >{count}</submit>
        <button>Agregar al carrito</button>
        </div>
        
    )
}