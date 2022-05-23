
import CartWidjet from "./CartWidjet"

import {Link} from 'react-router-dom'

const aceites=0
const acetos=1
const frutos=2

function NavBar(props) {

  const carrito=props.carrito

  if (carrito) {

    return (
      <nav className="nav__menu">
          <CartWidjet/>
          <Link to={`/`} className="nav__links">Inicio</Link>
          <Link to={`/categorias/${aceites}`} className="nav__links">Aceites</Link>
          <Link to={`/categorias/${acetos}`} className="nav__links">Acetos</Link>
          <Link to={`/categorias/${frutos}`} className="nav__links">Frutos</Link>
        
      </nav>
    )
  } else {
    return (
      <nav className="nav__menu">
        <Link to={`/`} className="nav__links">Inicio</Link>
        <Link to={`/categorias/${aceites}`} className="nav__links">Aceites</Link>
        <Link to={`/categorias/${acetos}`} className="nav__links">Acetos</Link>
        <Link to={`/categorias/${frutos}`} className="nav__links">Frutos</Link>
      </nav>
    )
  }
}

export default NavBar;