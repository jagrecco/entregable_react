import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
/* import ItemDetailContainer from "./ItemDetailContainer" */

import oleo1 from "./assets/producto-aceite-finca-san-quinti.png"
import oleo2 from "./assets/producto-aceite-finca-san-quinti-2.png"
import oleo3 from "./assets/producto-aceite-finca-san-quinti-3.png"
import oleo4 from "./assets/producto-aceite-finca-san-quinti-4.png"
import oleo5 from "./assets/producto-aceite-finca-san-quinti-5.png"
import BeatLoader from "react-spinners/BeatLoader"
/* import arrayProductos from "./assets/inventario.json" */

export const arrayProductos = [
  {
  id:1,
  title: "Aceite 1/2l Vidrio",
  price:"600",
  detalle: "Aceite por 1/2l, botella de vidrio premium",
  imgUrl: oleo1
  },
  {
  id:2,
  title: "Aceite 1/2l Pet",
  price:"550",
  detalle: "Aceite por 500ccm, botella plástica",
  imgUrl: oleo2
  },
  {
  id:3,
  title: "Aceite 1l Pet",
  price:"900",
  detalle: "Aceite por un litro, botella plástica",
  imgUrl: oleo3
  },
  {
  id:4,
  title: "Aceite 2l Pet",
  price:"1700",
  detalle: "Aceite por 2000ccm, botella de plástica",
  imgUrl: oleo4
  },
  {
  id:5,
  title: "Aceite 5l",
  price:"4500",
  detalle: "Aceite por 5000ccm, bidón de plástico",
  imgUrl: oleo5
  }
  ]

const ItemListContainer = (props) => {

  const mensaje=props.greeting

  const [carga, setCarga] = useState([])
  const [prod, setProd] = useState([])

  useEffect(()=>{

    const pedido= new Promise((res)=>{

    setTimeout(() => {
    res([arrayProductos])
    }, 2000);

    })

    pedido
      .then(()=>{
        setCarga(false)
        setProd(arrayProductos)
      })
  
  })

  if (carga)
  {
    return(
      <>
        <BeatLoader/>
        <p>Cargando...</p>
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
