import {Link} from 'react-router-dom'
import NavBar from "./NavBar";

const Header = () => {
  return (
      <header className="header">
        
        <div className="header_contenedor ">
          <Link className="header__link" to={`/`}><h1 className="header__titulo"><img className="header_logo" src="/assets/oleo-sf.png" alt="" />Oleo</h1></Link>
          <NavBar carrito={true}/>
        </div>

      </header>
  )
}

export default Header;