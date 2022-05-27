import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <h1>Esta es mi app de react</h1>
      <Routes>
        <Route exact path="/" Element={<h2><ItemListContainer greeting={"saludos"}/></h2>} />
        <Route exact path="/category/:id" Element={<ItemListContainer/>} />
        <Route exact path="/item" Element={<ItemDetailContainer/>} />
        <Route exact path="/login" Element={<h1>Mi cuenta</h1>} />
        <Route exact path="/cart" Element={<h1>Mi carrito</h1>} />
      </Routes>
    </BrowserRouter>
    <div className="App">
      
      
    
      <h2><ItemListContainer greeting={"saludos"}/></h2>
      
      <ItemDetailContainer/>
      
    </div>
    </>
  );
}

export default App;
