import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {


const [cuantosAgregar, setCuantosAgregar]=useState(initial)

const maximo=stock

let AgregaAlCarrito=onAdd

const SumaUno = ()=>{

    cuantosAgregar < maximo && setCuantosAgregar(cuantosAgregar+1)

}

const RestaUno = ()=>{

    cuantosAgregar > initial && setCuantosAgregar(cuantosAgregar-1)

}

AgregaAlCarrito = ()=>{

    if (cuantosAgregar>0)
    {
        onAdd(cuantosAgregar)
    }

}

  return (

    <>

    <div className="contador">
        <div className="agregar">
            <button className="boton" onClick={RestaUno}><span className="material-icons iconos">remove</span></button>
            <p className="cantidad iconos">{cuantosAgregar}</p>
            <button className="boton" onClick={SumaUno}><span className="material-icons iconos">add</span></button>
        </div>
    <div className="agregarBoton">
        {<button className="agregarAlCarrito" onClick={AgregaAlCarrito}><span className="material-icons iconos">add_shopping_cart</span></button>}
    </div>

    </div>

    </>
  )
}

export default ItemCount
