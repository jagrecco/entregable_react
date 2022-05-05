import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

const categoriaId=100

{/* <p className="detalle">{props.item.detalle}</p> */}

const ItemDetail = (props) => {
    
  return (
    <article className="detalle">
      <h3 className="itemTitulo">{props.item.title}</h3>
      <img className="detalle_itemImg" src={props.item.imgUrl} alt="imagen"/>
      <p className="itemPrecio">${props.item.price}</p>
      <p className="detalle_detalle">{props.item.detalle}</p>
      <ItemCount />
      <Link className="detalle_link" to={`/categorias/${categoriaId}`}>Volver al catálogo</Link>
    </article>
    
  )
}

export default ItemDetail