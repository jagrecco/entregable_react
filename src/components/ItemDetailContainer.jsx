import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"

import oleo1 from "./assets/producto-aceite-finca-san-quinti.png"
import oleo2 from "./assets/producto-aceite-finca-san-quinti-2.png"
import oleo3 from "./assets/producto-aceite-finca-san-quinti-3.png"
import oleo4 from "./assets/producto-aceite-finca-san-quinti-4.png"
import oleo5 from "./assets/producto-aceite-finca-san-quinti-5.png"

const arrayProductos = [
    {
    id:1,
    title: "Aceite 1/2l Vidrio",
    price:"600",
    detalle: "Aceite por 1/2 l, botella de vidrio premium. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
    imgUrl: oleo1
    },
    {
    id:2,
    title: "Aceite 1/2l Pet",
    price:"550",
    detalle: "Aceite por 500ccm, botella plástica. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
    imgUrl: oleo2
    },
    {
    id:3,
    title: "Aceite 1l Pet",
    price:"900",
    detalle: "Aceite por un litro, botella plástica. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
    imgUrl: oleo3
    },
    {
    id:4,
    title: "Aceite 2l Pet",
    price:"1700",
    detalle: "Aceite por 2000ccm, botella de plástica. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
    imgUrl: oleo4
    },
    {
    id:5,
    title: "Aceite 5l",
    price:"4500",
    detalle: "Aceite por 5000ccm, bidón de plástico. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
    imgUrl: oleo5
    }
    ]

const ItemDetailContainer = () => {

    const [cargo, setCargo] = useState([])
    const [prod, setProd] = useState({})

    useEffect( ()=>{

        const pedido = new Promise((res)=>{

            setTimeout(() => {
              res([arrayProductos])
              }, 3000);
            })
        
            pedido
              .then(()=>{
                setCargo(false)
                setProd(arrayProductos[0])
              })
    })
    
    if (cargo)
  {
    return(
      <>
      {/* <p>Cargando...</p> */}
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