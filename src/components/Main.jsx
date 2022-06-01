import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import { contexto } from './Contexto';
import { useContext } from "react"

import {Routes, Route} from "react-router-dom"
import Usuario from "./Usuario";

const Main = () => {

  const mensaje= "  Un segundo por favor..."

  return (

    <main className="main container">

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/categorias/:categoriaId" element={<ItemListContainer greeting="Un segundo por favor..."/>}/>
        <Route path="/productos/:productoId" element={<ItemDetailContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/usuario" element={<Usuario/>}/>
      </Routes>
        
    </main>
  )
}

export default Main;