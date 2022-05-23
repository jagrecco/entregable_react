import NavBar from "./NavBar";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_contenedor container">
        <p className="footer__copy">Copyrigth 3G &copy; 2022</p>
        <NavBar carrito={false}/>
        <p className="footer__derechos">Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer;
