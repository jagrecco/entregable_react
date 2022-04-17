import NavBar from "./NavBar";

const Footer = () => {
  return (
    <footer className="footer">
        <p className="footer__copy">Copyrigth 3G &copy; 2022</p>
        <NavBar carrito={false}/>
        <p className="footer__derechos">Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer;
