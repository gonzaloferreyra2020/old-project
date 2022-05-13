import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {products} from "./Data/Products"


function App() {

  const task = new Promise((resolve, rejected) => {
    setTimeout(()=>{
      resolve(products);
    },3000)
    })

  return (
    <>
    <div className="App">
      <Navbar/>
      <h1>Esta es mi app de react</h1>
      <h2><ItemListContainer greeting={"saludos"}/></h2>
    </div>
    <ItemCount />
    </>
  );
}

export default App;
