import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import BeatLoader from "react-spinners/BeatLoader"

import { useParams } from "react-router-dom"


import oleo1 from "./assets/producto-aceite-finca-san-quinti.png"
import oleo2 from "./assets/producto-aceite-finca-san-quinti-2.png"
import oleo3 from "./assets/producto-aceite-finca-san-quinti-3.png"
import oleo4 from "./assets/producto-aceite-finca-san-quinti-4.png"
import oleo5 from "./assets/producto-aceite-finca-san-quinti-5.png"
import oleo6 from "./assets/producto-aceto-finca-san-quinti.png"
import oleo7 from "./assets/fruto-almendra.png"
import oleo8 from "./assets/fruto-tomate.png"

const arrayProductos = [
  {
  id:0,
  title: "Aceite 1/2l Vidrio",
  price:"600",
  detalle: "Aceite por 1/2 l, botella de vidrio premium. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
  imgUrl: oleo1,
  categoria:0,
  stock:9
  },
  {
  id:1,
  title: "Aceite 1/2l Pet",
  price:"550",
  detalle: "Aceite por 500ccm, botella plástica. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
  imgUrl: oleo2,
  categoria:0,
  stock:8
  },
  {
  id:2,
  title: "Aceite 1l Pet",
  price:"900",
  detalle: "Aceite por un litro, botella plástica. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
  imgUrl: oleo3,
  categoria:0,
  stock:19
  },
  {
  id:3,
  title: "Aceite 2l Pet",
  price:"1700",
  detalle: "Aceite por 2000ccm, botella de plástica. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
  imgUrl: oleo4,
  categoria:0,
  stock:6
  },
  {
  id:4,
  title: "Aceite 5l",
  price:"4500",
  detalle: "Aceite por 5000ccm, bidón de plástico. Nuestro blend exquisito logra el equilibrio perfecto de aceitunas maduras y verdes, lo que le confiere a Finca San Quintí un sutil aroma y gusto frutado, resaltando las características distintivas y únicas del método tradicional de prensa en frío.",
  imgUrl: oleo5,
  categoria:0,
  stock:5
  },
  {
    id:5,
    title: "Aceto Balsámico 1/2l",
    price: "500",
    detalle: "Aceto Balsámico elaborado con materia prima de calidad, con uvas seleccionadas de la zona. Su evolución se acompaña con cuidados personalizados producto equilibrado de sabor y aroma sutil.",
    imgUrl: oleo6,
    categoria:1,
    stock:3
  },
  {
    id:6,
    title: "Almendras",
    price: "1500",
    detalle: "Almendras Nonpareil de 1° calidad cosechadas en San Juan. Ofrecemos también almendras marcadas y almendras partidas.",
    imgUrl: oleo7,
    categoria:1,
    stock:9
  },
  {
    id:7,
    title: "Tomates secos",
    price: "1200",
    detalle: "Tomate seco de primera calidad de San Juan. Cosechado y secado al sol en forma natural. Seleccionado y envasado para exportación.",
    imgUrl: oleo8,
    categoria:1,
    stock:2
  }
  ]


const ItemDetailContainer = () => {

    const [cargo, setCargo] = useState([])
    const [prod, setProd] = useState({})

    const {productoId}=useParams()

    useEffect( ()=>{

        const pedido = new Promise((res)=>{

            setTimeout(() => {
              res([arrayProductos])
              }, 2000);
            })
        
            pedido
              .then(()=>{
                setCargo(false)
                setProd(arrayProductos[productoId])
                
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