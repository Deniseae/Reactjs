import './App.css';
import ItemList from "./components/ItemList/ItemList";
import{Navbar} from "./components/NavBar/Navbar";

function App() {
  let saludo = "Hola!! Bienvenido a la tienda de Jade"
  return (
    <div className="App">
      <Navbar/>
      <h1>Jade centro de estetica</h1>
      <ItemList saludo={saludo}/>
     
    </div>
  );
}

export default App;
