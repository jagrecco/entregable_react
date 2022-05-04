
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import {Routes, Route} from "react-router-dom"

const Main = () => {
  return (
    <main className="main">

      <Routes>

        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Oleo!"/>}/>
        <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
        {/* <Route path="/carrito" element={}/> */}

      </Routes>
        
    </main>
  )
}

export default Main;