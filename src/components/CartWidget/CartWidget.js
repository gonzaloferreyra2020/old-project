
export default function CartWidget({count}){
    const cartStyle ={
        width:"45px",
        height:"45px",
    }


    return(
        <div className="links" style={cartStyle}>
            <img src="images/cart.png" alt="CartIcon" />
            {count}
        </div>
    )
}