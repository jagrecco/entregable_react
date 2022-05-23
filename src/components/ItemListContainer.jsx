import { useState, useEffect } from "react"
import ItemList from "./ItemList"

import { db } from "./firebase"
import {collection, doc, getDoc, getDocs, addDoc, query, where} from "firebase/firestore"

import BeatLoader from "react-spinners/BeatLoader"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {

  const mensaje=props.greeting
  const [carga, setCarga] = useState([])
  const [prod, setProd] = useState([])

  const {categoriaId}=useParams()

  useEffect(()=>{

    setCarga(true)

    const catalogo=collection(db,"productos")

    const queryItem = query(catalogo, where("categoria","==", Number(categoriaId)))

    let consulta=""
    
    categoriaId==undefined ?  consulta=getDocs(catalogo) : consulta=getDocs(queryItem)

    consulta
      .then((resultadoConsulta)=>{
        
        const productos=resultadoConsulta.docs.map(doc =>{

          const productoId = doc.data()
          productoId.id = doc.id
          return productoId
          
        })

        setProd(productos)

        setCarga(false)
      })
      
      .catch((error)=>{
        setCarga(false)
        console.log(error)
      })

      .finally(()=>{
        setCarga(false)
      })
  
  },[categoriaId])

  if (carga)
  {
    return(
      <>
        <BeatLoader/>
        <p className="mensaje">
          {mensaje}
        </p>
      </>
    )
  } else{
    
    return (
      
      <ItemList productos={prod}/> 
      
    )
  }

}

export default ItemListContainer
