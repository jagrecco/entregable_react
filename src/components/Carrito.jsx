import React from 'react'
import { useContext } from 'react'
import { contexto } from './Contexto'


const Carrito = () => {

  const {carrito, precioTotal, cantidadItems, vaciarCarro}=useContext(contexto)

  return (
      <div className="carro">
        <h3 className='carro_titulo'>Carrito</h3>
        
        <ul className="carro_lista">

            {carrito.map(elemento => {
              return (
                <div className="carro_detalle">
                  <li key={elemento.id}>
                    {elemento.id} {elemento.title} -- ${elemento.price}
                  </li>
            
                </div>
          )

        })}
        
        </ul>

        <p className="carro_total">{cantidadItems} items, precio total ${precioTotal}.-</p>

      </div>

    
  )
}

export default Carrito