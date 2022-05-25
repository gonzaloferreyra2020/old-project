import { products } from "../../Data/Products";
import Item from "../Item/Item";

export default function ItemList(){

    return(
        <div>
            {products.map((item,index)=>(
               <Item item={item} key={item.id}/> 
            )
            )}
         
        </div>
    )
}