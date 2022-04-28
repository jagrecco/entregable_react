import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const arrayProductos = [
  {
  id:1,
  title: "Aceite 1l",
  price:"900",
  detalle: "Aceite por 900ccm, botella plástica",
  imgUrl:"https://picsum.photos/id/277/300/300"
  },
  {
  id:2,
  title: "Aceite 1/2l",
  price:"450",
  detalle: "Aceite por 500ccm, botella plástica",
  imgUrl:"https://picsum.photos/id/337/300/300"
  },
  {
  id:3,
  title: "Aceite 5l",
  price:"4500",
  detalle: "Aceite por 5000ccm, bidón de plástico",
  imgUrl:"https://picsum.photos/id/437/300/300"
  }  
  ]

const ItemListContainer = (props) => {

  

  const mensaje=props.greeting

  const [carga, setCarga] = useState()

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
      <p>Cargando...</p>
    )
  } else{
    
    return (
      <>
      <p className="mensaje">
      {mensaje}
      </p>
      
      <ItemList productos={prod}/> 
      </>
    )
  }

}

export default ItemListContainer