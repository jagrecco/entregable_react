import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {


const [cuantosAgregar, setCuantosAgregar]=useState(initial)

const maximo=stock

const SumaUno = ()=>{
    cuantosAgregar < maximo && setCuantosAgregar(cuantosAgregar+1)
}

const RestaUno = ()=>{
    cuantosAgregar > initial && setCuantosAgregar(cuantosAgregar-1)
}

function AgregaAlCarrito (){

    if (cuantosAgregar>0)
    {
        onAdd(cuantosAgregar)
    }

}

  return (

    <>
    <div className="contador">
        <div className="contador_agregar">
            <button className="contador_boton" onClick={RestaUno}><span className="material-icons iconos">remove</span></button>
            <p className="contador_cantidad contador_iconos">{cuantosAgregar}/{maximo}</p>
            <button className="contador_boton" onClick={SumaUno}><span className="material-icons iconos">add</span></button>
        </div>
            <div className="contador_agregarBoton">
                {<button className="contador_agregarAlCarrito" onClick={AgregaAlCarrito}><span className="material-icons iconos">add_shopping_cart</span></button>}
            </div>

    </div>

    </>
  )
}

export default ItemCount
