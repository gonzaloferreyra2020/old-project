import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartWidget from "./components/CartWidget/CartWidget";



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <h1>Esta es mi app de react</h1>
      <Routes>
        <Route exact path="/" element={<h2><ItemListContainer greeting={"saludos"}/></h2>} />
        <Route exact path="/category/:id" element={<><h1>Cargando los productos</h1><ItemListContainer/></>} />
        <Route exact path="/item" element={<ItemDetailContainer/>} />
        <Route exact path="/login" element={<h1>Mi cuenta</h1>} />
        <Route exact path="/cart" element={<h1>Mi carrito</h1>} />
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
