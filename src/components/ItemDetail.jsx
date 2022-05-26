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

            <img className="detalle_itemImg" src={item.url} alt="imagen"/>

            <div className="detalle_contenedor">

              <h3 className="detalle_itemTitulo">{item.title}</h3>
              <p className="detalle_txt">{item.detalle}</p>
              <p className="detalle_itemPrecio">${item.price}.-</p>
      
              <ItemCount stock={item.stock} initial={0} onAdd={FuncionAgregar}/>
              <div className="detalle_contenedor_botones">
                <Link className="detalle_link" to={`/`}>Catálogo</Link>
              </div>

            </div>

          </article>
          
        )
      } else
      {
        return (

          <article className="detalle">

            <img className="detalle_itemImg" src={item.url} alt="imagen"/>

            <div className="detalle_contenedor">

              <h3 className="detalle_itemTitulo">{item.title}</h3>
              <p className="detalle_txt">{item.detalle}</p>
              <p className="detalle_itemPrecio">${item.price}</p>
      
              <p className="detalle_Compra">Se agregó {mandarAlCarrito} items a la compra</p>
              <p className="detalle_itemPrecio">Precio total $ {precioTotal}.-</p>

              <div className="detalle_contenedor_botones">
                <Link className="detalle_link_50" to={`/`}>Catálogo</Link>
                <Link className="detalle_link_50" to={`/`} onClick={()=>confimaCompra(item, mandarAlCarrito, precioTotal)}>Agregar al Carrito</Link>
              </div>

            </div>
            

          </article>
          
        )
      }

}

export default ItemDetail