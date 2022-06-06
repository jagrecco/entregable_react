import { useState, useContext } from "react"
import { contexto } from './Contexto'

import {Link} from 'react-router-dom'

import { auth } from "./firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function alerta(mensaje){
  
  MySwal.fire({
    title: "Oleo",
    text: mensaje

    })
}

const Usuario = () => {

    const {usrLogIn, usr}=useContext(contexto)

    
    const [email, setEmail]=useState("")
    const [pass, setPass]=useState("")
    
    function login(){
        
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            
            usrLogIn(email)
            alerta("¡Bienvenido! " + email)
            
            })
            .catch((error) => {
                
                alerta("¡Atención! " + error.message)
            })
    }

    function creaCuenta(){

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                usrLogIn(email)
                alerta("¡Bienvenido! " + email)
            })
            .catch((error) => {
                alerta("¡Atención! " + error.message)
            })
    }

    function cerrarSesion(){
        signOut(auth).then(() => {
            usrLogIn("")
            
          }).catch((error) => {
            alerta("¡Atención! " + error.message)
          })
    }

    if (usr == "") {

      return (

        <div className="formulario">
            <h3 className="formulario_titulo">Ingresá con tu email</h3>
            <div className="formulario_mail">
                <label htmlFor="email" className="formulario_label" ></label>
                <input type="email" id="email" className="formulario_input" placeholder="Ingrese su email" onChange={(even)=>{setEmail(even.target.value)}}/>
            </div>

            <div className="formulario_pass">
                <label htmlFor="pass" className="formulario_label"></label>
                <input type="password" id="pass" className="formulario_input" placeholder="Ingrese su contraseña" onChange={(even)=>{setPass(even.target.value)}}/>
            </div>
            <div className="formulario_botones">
                <Link className="formulario_boton" to={`/`} onClick={login}>Ingresar</Link>
                <Link className="formulario_boton" to={`/`} onClick={creaCuenta}>Crear cuenta</Link>
            </div>
            
        </div>
        )

    } else
    {
        return(
            <div className="formulario">
                <h3 className="formulario_titulo">Usuario</h3>
                <span className="formulario_usuario">{usr}</span>
                <div className="formulario_botones">
                    <Link className="formulario_boton formulario_cerrar" to={`/`} onClick={cerrarSesion}>Cerrar sesión</Link>
                </div>
            </div>
        )
        
    }

}

export default Usuario