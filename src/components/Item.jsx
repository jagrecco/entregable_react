import {Link} from 'react-router-dom'

const verDetalles = (cual) =>{
console.log("paso por aca " + cual)
}

const Item = ({producto}) => {

  return (
    <>
    <article className="item">
      <h3 className="itemTitulo">{producto.title}</h3>
      <img className="itemImg" src={producto.imgUrl} alt="imagen"/>
      <p className="itemPrecio">${producto.price}</p>
      {/* <Link to={`/producto/${producto.id}`}>Detalles</Link> */}
      <Link to={`/productos/:id`}>Detalles</Link>
      
      
    </article>
    
    </>
    
  )
}

export default Item