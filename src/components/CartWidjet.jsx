import {Link} from 'react-router-dom'
import { contexto } from './Contexto'
import { useContext } from 'react'

const CartWidjet = () => {

  const valorMiContexto=useContext(contexto)
  
  if (valorMiContexto.cantidadItems>0)
  {
    return (
      <Link to="/carrito" className="carrito_link"><span className="material-icons carrito">shopping_cart</span>{valorMiContexto.cantidadItems}</Link>
    )
  }
}

export default CartWidjet