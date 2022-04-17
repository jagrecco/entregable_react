import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="header">
        
        <h1 className="header__titulo">Oleo</h1>
          
          <NavBar carrito={true}/>

      </header>
    </>
  )
}

export default Header;