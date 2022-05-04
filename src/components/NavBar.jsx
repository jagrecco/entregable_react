
import CartWidjet from "./CartWidjet"

import {Link} from 'react-router-dom'


function NavBar(props) {

  const carrito=props.carrito;

  if (carrito) {

    return (
      <nav className="nav__menu">
          <CartWidjet/>
          <Link to="/" className="nav__links">Inicio</Link>
          <Link to="/productos/:nombreCat" className="nav__links">Catálogo</Link>
          <Link to="/aceites" className="nav__links">Aceites</Link>
          <Link to="/varios" className="nav__links">Varios</Link>
        
      </nav>
    )
  } else {
    return (
      <nav className="nav__menu">
        
          <Link to="/" className="nav__links">Inicio</Link>
          <Link to="/productos/:nombreCat" className="nav__links">Catálogo</Link>
          <Link to="/aceites" className="nav__links">Aceites</Link>
          <Link to="/varios" className="nav__links">Varios</Link>
      </nav>
    )
  }
}

export default NavBar;