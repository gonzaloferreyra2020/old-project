
export default function Navbar() {

    const headerStyle = {
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap",
        listStyle:"none",
        marginLeft:"5px"
    }
    return (
        <header className="header">
            <div className="nombreTienda">Tienda Ferreyra</div>
            <ul className="links" style={headerStyle}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Mi perfil</li>
            </ul>
        </header>
    );

}