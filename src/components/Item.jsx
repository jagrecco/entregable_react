import ItemCount from "./ItemCount"

const FuncionAgregar = (cuantosAgregar)=>{
  console.log(cuantosAgregar)
}

const Item = ({producto}) => {

  return (
    <article className="item">
      <h3 className="itemTitulo">{producto.title}</h3>
      <img className="itemImg" src={producto.imgUrl} alt="imagen"/>
      <p className="itemPrecio">${producto.price}</p>
      <ItemCount stock={5} initial={0} onAdd={FuncionAgregar}/>
    </article>
    
  )
}

export default Item