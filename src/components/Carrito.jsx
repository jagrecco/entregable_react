import React from 'react'
import { useContext, useState } from 'react'
import { contexto } from './Contexto'
import {Link} from 'react-router-dom'

import { db } from "./firebase"
import {collection, addDoc} from "firebase/firestore"

const fecha = new Date().toDateString()
let itemsVenta=[]

const Carrito = () => {

  const [idCompra, setidCompra] = useState("")
  
  const {carrito, precioTotal, cantidadItems, vaciarCarro, eliminarProducto}=useContext(contexto)
  
  function vaciarCarrito(){
    vaciarCarro()
  }

  function eliminarItem(idItem){
    eliminarProducto(idItem)
  }

  function terminarCompra(){

    const itemsVenta=carrito.map(elemento =>{
      return {id:elemento.id, title:elemento.title, price:elemento.price}
    })

    const ventas = collection(db, "ventas")

    const ventaDetalle={

      buyer:{
        name: "Pepe",
        phone: "00 0000 0000",
        email: "nada@nada.com"
      },
  
      items: itemsVenta,
      date: fecha,
      total: precioTotal
    }
    
    const grabaVenta = addDoc(ventas, ventaDetalle)
    
    grabaVenta

      .then((resultadoVenta)=>{

        setidCompra(resultadoVenta.id)
        vaciarCarro()
        alert("El id de su compra es " + resultadoVenta.id)
        
		  })
		  .catch((error)=>{
        
        console.log(error)
        
		  })
      
  }

  if (carrito.length>0)
  {
    return (
        <div className="carro">
          <h3 className='carro_titulo'><span className="material-icons">shopping_cart</span> Carrito</h3>
  
          <ul className="carro_lista">
  
              {carrito.map(elemento => {
                return (
                  <div key={elemento.id} className="carro_detalle">
                    <li className="carro_item_detalle">
                      <img className="carro_detalle_itemImg" src={elemento.imgUrl} alt="imagen"/>
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
              <Link className="carro_detalle_link" to={`/`} onClick={()=>terminarCompra()}>Terminar Compra</Link>
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