import {Link} from 'react-router-dom'

const Item = ({producto}) => {
  
    return (
    
        <article className="item">
          <img className="item_Img" src={producto.url} alt="imagen"/>
          <p className="item_Titulo">{producto.title}</p>
          <p className="item_Precio">${producto.price}.-</p>
          <Link className="item_detalles" to={`/productos/${producto.id}`}>Detalles</Link>
        </article>
    
  )
}

export default Item