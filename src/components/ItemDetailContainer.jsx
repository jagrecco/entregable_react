import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import BeatLoader from "react-spinners/BeatLoader"

import { useParams } from "react-router-dom"

import { db } from "./firebase"
import {collection, doc, getDoc, getDocs, addDoc, where, query, documentId} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [cargo, setCargo] = useState([])
    const [prod, setProd] = useState({})

    const {productoId}=useParams()

    useEffect( ()=>{

      const catalogo=collection(db,"productos")

      const queryItem = query(catalogo, where(documentId(catalogo),"==", productoId))

      const consulta=getDocs(queryItem)

      consulta
        .then((resultadoConsulta)=>{

          /* const producto=resultadoConsulta.docs.data()
          producto.id=resultadoConsulta.docs.id */
          /* const productoId = doc.data()
          productoId.id = doc.id
          return productoId */
          
          const productos=resultadoConsulta.docs.map(doc =>{

            const productoId = doc.data()
            productoId.id = doc.id
            return productoId
          
          })

          /* const itemArray=productos.filter((articulos) =>{return articulos.id==productoId}) */

        
          setCargo(false)

          setProd(productos[0])

      })
      
      .catch((error)=>{
        console.log("Error " + error)
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