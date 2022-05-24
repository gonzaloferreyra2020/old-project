import {products} from "../../Data/Products";
import ItemList from "../ItemList/ItemList";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer ({greeting}){

    const task = new Promise((resolve,reject) => {
        setTimeout(()=>{
          resolve(products);
        },3000)
        })
    
        task.then((result) =>{
          console.log(result)
        },err =>{
          console.log(err)
        }).catch((err) =>{
          console.log(err)
        })
        console.log(products.map((item) => item.title))

    
    const onAdd = (total) =>{
      console.log({total} );
      }

        
    return(
        <div>
        {greeting}
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )

    
}