import { products } from "../../Data/Products";
import Item from "../Item/Item";

export default function ItemList(items){

    return(
        <div>
            {products.map((item,index)=>(
               <Item item={item} key={item.id}/> 
            )
            )}
         
        </div>
    )
}