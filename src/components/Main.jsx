import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";

import {Routes, Route} from "react-router-dom"

const Main = () => {
  return (
    <main className="main">

      <Routes>
      ||<Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Oleo!"/>}/>
        <Route path="/categorias/:categoriaId" element={<ItemListContainer greeting="¡Bienvenidos a Oleo!"/>}/>
        <Route path="/productos/:productoId" element={<ItemDetailContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>

      </Routes>
        
    </main>
  )
}

export default Main;