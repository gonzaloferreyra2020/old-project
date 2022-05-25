
import Item from "../Item/Item";


export default function ItemList({items}){

    return(
        <div>
            {items.map(product => <Item item={product} key={product.id}/> 
            
            )}
        </div>
    )
}