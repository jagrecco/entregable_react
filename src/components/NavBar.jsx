
import CartWidjet from "./CartWidjet";


function NavBar(props) {

  const carrito=props.carrito;

  if (carrito) {

    return (
      <nav className="nav__menu">
          <a href="#" className="nav__links">Inicio</a>
          <a href="#" className="nav__links">Catálogo</a>
          <a href="#" className="nav__links">Contacto</a>
        <CartWidjet/>
      </nav>
    )
  } else {
    return (
      <nav className="nav__menu">
        
          <a href="#" className="nav__links">Inicio</a>
          <a href="#" className="nav__links">Catálogo</a>
          <a href="#" className="nav__links">Contacto</a>
      </nav>
    )
  }
}

export default NavBar;