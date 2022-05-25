import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import axios from "axios";


function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <h1>Esta es mi app de react</h1>
    
      <h2><ItemListContainer greeting={"saludos"}/></h2>
      
      
    </div>
    </>
  );
}

export default App;
