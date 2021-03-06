import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import BeatLoader from "react-spinners/BeatLoader"

import { useParams } from "react-router-dom"

import { db } from "./firebase"

import {collection, doc, getDoc} from "firebase/firestore"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function alerta(mensaje){
  
  MySwal.fire({
    title: "Resúmen de la compra",
    text: mensaje

    })
}


const ItemDetailContainer = () => {

    const [cargo, setCargo] = useState([])
    const [prod, setProd] = useState({})

    const {productoId}=useParams()

    useEffect( ()=>{

      const catalogo=collection(db,"productos")

      const resultadoItem=doc(catalogo, productoId)

      const consulta=getDoc(resultadoItem)

      consulta
      
        .then((resultadoConsulta)=>{

          let itemResultado=resultadoConsulta.data()

          itemResultado.id=resultadoConsulta.id

          setProd(itemResultado)
          
          setCargo(false)

      })
      
      .catch((error)=>{

        alerta("Error " + error)

      })

      .finally(()=>{

      })

    },[productoId])
    
    if (cargo)
  {
    return(
      <>
      <BeatLoader/>
      </>
    )
  } else{

    return (
      <>
      <ItemDetail item={prod}/>
      </>
    )
  }

}

export default ItemDetailContainer