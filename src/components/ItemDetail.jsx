import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { useState, useContext } from "react"
import { contexto } from './Contexto'


let mandarAlCarrito=0
let precioTotal=0

const ItemDetail = ({item}) => {

  const {agregarProducto}=useContext(contexto)

  const FuncionAgregar = (agregadoAlCarrito)=>{

    mandarAlCarrito=agregadoAlCarrito
    precioTotal=item.price * mandarAlCarrito

    setMuestraContador(false)
  }

  const confimaCompra=(producto, cantidad, precioT)=>{

    const p={
      id: producto.id,
      title: producto.title,
      price: parseInt(producto.price),
      imgUrl: producto.url,
      cantidad: parseInt(cantidad)}

    agregarProducto(p, parseInt(cantidad), parseInt(precioT))
  }

  const  [muestraContador, setMuestraContador] = useState(true)
    
  if (muestraContador)
      {
        return (

          <article className="detalle">
            
            <h3 className="itemTitulo">{item.title}</h3>
            <img className="detalle_itemImg" src={item.url} alt="imagen"/>
            <p className="itemPrecio">${item.price}.-</p>
            <p className="detalle_detalle">{item.detalle}</p>
      
            <ItemCount stock={item.stock} initial={0} onAdd={FuncionAgregar}/>
            <Link className="detalle_link" to={`/`}>Volver al catálogo</Link>
          </article>
          
        )
      } else
      {
        return (
          <article className="detalle">
            <h3 className="itemTitulo">{item.title}</h3>
            <img className="detalle_itemImg" src={item.url} alt="imagen"/>
            <p className="itemPrecio">${item.price}</p>
            <p className="detalle_detalle">{item.detalle}</p>
      
            <p className="detalle_Compra">Se agregó {mandarAlCarrito} items a la compra</p>
            <p className="detalle_Precio">Precio total $ {precioTotal}.-</p>

            <Link className="detalle_link" to={`/`}>Volver al catálogo y cancelar</Link>
            <Link className="detalle_link" to={`/`} onClick={()=>confimaCompra(item, mandarAlCarrito, precioTotal)}>Agregar al carrito</Link>
          </article>
          
        )
      }

}

export default ItemDetail