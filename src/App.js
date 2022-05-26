import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import axios from "axios";


function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <h1>Esta es mi app de react</h1>
    
      <h2><ItemListContainer greeting={"saludos"}/></h2>
      <ItemDetailContainer/>
      
    </div>
    </>
  );
}

export default App;
