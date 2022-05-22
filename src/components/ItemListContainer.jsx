import { useState, useEffect } from "react"
import ItemList from "./ItemList"

import { db } from "./firebase"
import {collection, doc, getDoc, getDocs, addDoc} from "firebase/firestore"

import BeatLoader from "react-spinners/BeatLoader"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {

  const mensaje=props.greeting
  const [carga, setCarga] = useState([])
  const [prod, setProd] = useState([])

  const {categoriaId}=useParams()
  
  useEffect(()=>{

    const catalogo=collection(db,"productos")
    const consulta=getDocs(catalogo)

    /* const idCat=parseInt(categoriaId) */
        
    consulta
      .then((resultadoConsulta)=>{
        
        const productos=resultadoConsulta.docs.map(doc =>{

          const productoId = doc.data()
          productoId.id = doc.id
          /* console.log("fue " + categoriaId + " categoria= " + productoId.categoria) */
          return productoId
          
        })
        
        if (categoriaId == undefined)
        {
          setProd(productos)
        } else
        {
          setProd(productos.filter((articulos) =>{return articulos.categoria==parseInt(categoriaId)}))
          
        }

        setCarga(false)
      })
      
      .catch((error)=>{
        console.log(error)
      })

      .finally(()=>{

      })

    /* const pedido= new Promise((res)=>{

        setTimeout(() => {
          res([arrayProductos])
        }, 2000);
    
        })

        pedido
          .then(()=>{

            setCarga(false)
            if (categoriaId==undefined){
              setProd(arrayProductos)
            } else
            {
              setProd(filtrado)
            }
            
          }) */
  
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
      <>
      <ItemList productos={prod}/> 
      
      </>
    )
  }

}

export default ItemListContainer
