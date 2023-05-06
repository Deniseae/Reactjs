import{ BrowserRouter, Routes, Route } from"react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/NavBar/Navbar";


function App() {
  
  return (
    <BrowserRouter>
    <Routes>

    <Route element={<Navbar/> }>
      <Route path="/" element={ <ItemListContainer /> } />
      <Route path="/sing-up"element={<h1>aca deberias registrarte</h1>}/>
      <Route path="*"element={<h1>Not Found, esta ruta no existe</h1>}/>
   </Route>
    
    </Routes>

    </BrowserRouter>

  );
}

export default App;
