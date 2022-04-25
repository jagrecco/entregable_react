import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {

  const FuncionAgregar = (cuantosAgregar)=>{
    console.log(cuantosAgregar)
  }

  const mensaje=props.greeting;

  return (
    <>
    <p className="mensaje">
      {mensaje}
    </p>
    <ItemCount stock={5} initial={0} onAdd={FuncionAgregar}/>
    </>
  )
}

export default ItemListContainer