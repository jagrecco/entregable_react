
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
      <button className="detalles" onClick={()=>{verDetalles(producto.id)}}>Detalles</button>
    </article>
    
    </>
    
  )
}

export default Item