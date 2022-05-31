import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";


export default function Navbar() {

    const headerStyle = {
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap",
        listStyle:"none",
        alignItems: "center",
        overflow: "hidden",
        
    }
    return (
        <header className="header">
            <div className="nombreTienda">Ferreyra</div>
            <ul className="links" style={headerStyle}>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/category/:id">Productos</NavLink>
                <NavLink to="/item">item</NavLink>
                <NavLink to="/login">Mi cuenta</NavLink>
                <NavLink to="/cart">Mi carrito</NavLink>
                
                
            </ul>
            <CartWidget count={4}/>
        </header>
    );

}