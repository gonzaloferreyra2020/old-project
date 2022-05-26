export default function ItemDetail ({item}){

    return(
        <div>
            <img src="{item.image}" alt=""/>
            <div>
                <p>{item.title}</p>
            </div>
        </div>
    )
}