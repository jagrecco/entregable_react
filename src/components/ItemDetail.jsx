import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { useState, useContext } from "react"
import { contexto } from './Contexto'


let mandarAlCarrito=0
let precioTotal=0


const ItemDetail = (props) => {

  const {agregarProducto}=useContext(contexto)
  
  const FuncionAgregar = (agregadoAlCarrito)=>{

    console.log("Se agrearon " + agregadoAlCarrito + " al carrito")
    mandarAlCarrito=agregadoAlCarrito
    precioTotal=props.item.price * mandarAlCarrito

    setMuestraContador(false)
  }

  const confimaCompra=()=>{
    /* aca va el callback agregarProducto con los parametros del producto, cantidad y precio */
  }
  const  [muestraContador, setMuestraContador] = useState(true)
    
  if (muestraContador)
      {
        return (

          <article className="detalle">
            <h3 className="itemTitulo">{props.item.title}</h3>
            <img className="detalle_itemImg" src={props.item.imgUrl} alt="imagen"/>
            <p className="itemPrecio">${props.item.price}.-</p>
            <p className="detalle_detalle">{props.item.detalle}</p>
      
            <ItemCount stock={props.item.stock} initial={0} onAdd={FuncionAgregar}/>
            <Link className="detalle_link" to={`/`}>Volver al catálogo</Link>
          </article>
          
        )
      } else
      {
        return (
          <article className="detalle">
            <h3 className="itemTitulo">{props.item.title}</h3>
            <img className="detalle_itemImg" src={props.item.imgUrl} alt="imagen"/>
            <p className="itemPrecio">${props.item.price}</p>
            <p className="detalle_detalle">{props.item.detalle}</p>
      
            <p className="detalle_Compra">Se agregaron {mandarAlCarrito} items a la compra</p>
            <p className="detalle_Precio">Precio total $ {precioTotal}.-</p>

            <Link className="detalle_link" to={`/`}>Volver al catálogo y cancelar</Link>
            <Link className="detalle_link" to={`/carrito`} onClick={confimaCompra}>Confirmar Compra</Link>
          </article>
          
        )
      }

}

export default ItemDetail