import React from 'react'
import { useContext } from 'react'
import { contexto } from './Contexto'


const Carrito = () => {

  const {carrito, precioTotal,vaciarCarro}=useContext(contexto)

  return (
    <>
      <h3 className='carrito'>Estoy en el carrito</h3><br/>
      <p className="carrito_precio">{precioTotal}</p>
    </>
  )
}

export default Carrito