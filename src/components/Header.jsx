import {Link} from 'react-router-dom'
import NavBar from "./NavBar";

const categoriaId=100

const Header = () => {
  return (
    <>
      <header className="header">
        
        <Link className="header__link" to={`/categorias/${categoriaId}`}><h1 className="header__titulo">Oleo</h1></Link>
          
          <NavBar carrito={true}/>

      </header>
    </>
  )
}

export default Header;