import { useState } from "react";

export default function ItemCount({stock,initial,onAdd}){

    const [count,setCount] = useState(initial);
   
    return(
        <div className="Counter">
        <button disabled = {count <= 1} onClick = {()=> {setCount(count-1)}}>-</button>
        <button disabled = {count >= stock} onClick = {()=> {setCount(count+1)}}>+</button>
        <submit type = "text" >{count}</submit>
        <button disabled = {stock <= 0} onClick = {() => onAdd(count)}>Agregar al carrito</button>
        </div>
        
    )
}