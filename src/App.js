import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {products} from "./Data/Products"
import Item from "./components/Item/Item";


function App() {

  const task = new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve(products);
    },3000)
    })

    task.then((result) =>{
      console.log(result)
    },err =>{
      console.log(err)
    }).catch((err) =>{
      console.log(err)
    })

    console.log(products.map((product) => product.title))

  return (
    <>
    <div className="App">
      <Navbar/>
      <h1>Esta es mi app de react</h1>
      <ItemCount />
      <h2><ItemListContainer greeting={"saludos"}/></h2>
      
        
        <Item />
        
     
    </div>
    
    </>
  );
}

export default App;
