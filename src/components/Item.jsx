import {Link} from 'react-router-dom'

const verDetalles = (cual) =>{
console.log("paso por aca " + cual)
}

const Item = ({producto}) => {

  return (
    <>
    <article className="item">
      <h3 className="itemTitulo">{producto.title}</h3>
      <img className="itemImg" src={producto.url} alt="imagen"/>
      <p className="itemPrecio">${producto.price}.-</p>
      
      <Link className="item_detalles" to={`/productos/${producto.id}`}>Detalles</Link>
    </article>
    
    </>
    
  )
}

export default Item