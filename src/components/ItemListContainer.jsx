const ItemListContainer = (props) => {

  const mensaje=props.greeting;

  return (
    <p className="mensaje">
      {mensaje}
    </p>
  )
}

export default ItemListContainer