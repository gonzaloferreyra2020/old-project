export default function CartWidget({count}){
    return(
        <div>
            <img src="images/cart.png" alt="CartIcon" />
            {count}
        </div>
    )
}