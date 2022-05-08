
import CartWidjet from "./CartWidjet"

import {Link} from 'react-router-dom'

const aceites=0
const varios=1
const todos=undefined


function NavBar(props) {

  const carrito=props.carrito;

  if (carrito) {

    return (
      <nav className="nav__menu">
          <CartWidjet/>
          <Link to={`/`} className="nav__links">Inicio</Link>
          <Link to={`/categorias/${aceites}`} className="nav__links">Aceites</Link>
          <Link to={`/categorias/${varios}`} className="nav__links">Varios</Link>
        
      </nav>
    )
  } else {
    return (
      <nav className="nav__menu">
        <Link to={`/`} className="nav__links">Inicio</Link>
        <Link to={`/categorias/${aceites}`} className="nav__links">Aceites</Link>
        <Link to={`/categorias/${varios}`} className="nav__links">Varios</Link>
      </nav>
    )
  }
}

export default NavBar;