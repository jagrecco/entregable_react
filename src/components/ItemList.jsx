import { useEffect, useState } from "react"
import Item from "./Item"


const ItemList = ({productos}) => {
  
  {
    return(

      <section className="productos">

        {productos.map(elemento => {
          
          return (
            <Item key= {elemento.id} producto={elemento}/>
          )
        })}
        
      </section>
    )
  } 
  
}
  
export default ItemList