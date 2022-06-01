import {Link} from 'react-router-dom'
import { contexto } from './Contexto'
import { useContext } from 'react'

const UsrWidjet = () => {

    const {usr}=useContext(contexto)

    if (usr=="")
    {
        return (
            
            <Link to="/usuario" className="carrito_link"><span className="material-icons carrito">login</span></Link>

        )
    } else
    {
        return (

            <Link to="/usuario" className="carrito_link"><abbr title={usr}><span className="material-icons carrito">person</span></abbr></Link>
        )
    }
}

export default UsrWidjet