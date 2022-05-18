import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Item from "./components/Item/Item";
import ItemList from "./components/ItemList/ItemList";


function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <h1>Esta es mi app de react</h1>
      <ItemCount stock={5} initial={1} onAdd={6}/>
      <h2><ItemListContainer greeting={"saludos"}/></h2>
      <Item/>
      <ItemList/>
      
    </div>
    </>
  );
}

export default App;
