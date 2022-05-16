import React from 'react'
import { useContext } from 'react'
import { contexto } from './Contexto'
import {Link} from 'react-router-dom'

const Carrito = () => {
  
  const {carrito, precioTotal, cantidadItems, vaciarCarro, eliminarProducto}=useContext(contexto)
  
  function vaciarCarrito(){
    vaciarCarro()
  }

  function eliminarItem(idItem){
    eliminarProducto(idItem)
  }

  if (carrito.length>0)
  {
    return (
        <div className="carro">
          <h3 className='carro_titulo'><span className="material-icons">shopping_cart</span> Carrito</h3>
  
          <ul className="carro_lista">
  
              {carrito.map(elemento => {
                return (

                  <div className="carro_detalle">
                    <li className="carro_item_detalle">
                      {/* key={elemento.id} */} {/* {elemento.id} */}<img className="carro_detalle_itemImg" src={elemento.imgUrl} alt="imagen"/>
                      <p className="carro_item_cantidad">{elemento.cantidad}</p>
                      <p className="carro_item_title">{elemento.title}</p>
                      <p className="carro_item_price">${elemento.price}</p>
                      <button onClick={()=>eliminarItem(elemento.id)} className="carro_detalle_boton"><span className="material-icons carro_eliminar">delete_forever</span></button>
                    </li>
              
                  </div>
                )
  
              })}
          
          </ul>
  
          <p className="carro_total">Total ${precioTotal}.-</p>
          
          <div className="carro_link_container">
              <Link className="carro_detalle_link" to={`/`}>Seguir comprando</Link>
              <Link className="carro_detalle_link" to={`/`} onClick={()=>vaciarCarrito()}>Vaciar Carrito</Link>
              <Link className="carro_detalle_link" to={`/`} onClick={()=>vaciarCarrito()}>Terminar Compra</Link>
          </div>
          
        </div>
    )
  } else
  {
    return (
      <div className="carro">
          <h3 className='carro_titulo'>Carrito</h3>
          <p>En este momento el carrito se encuentra vacío</p>
          <Link className="detalle_link" to={`/`}>Seguir comprando</Link>
      </div>
    )

  }

}

export default Carrito