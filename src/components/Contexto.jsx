import { createContext, useState } from "react"

export const contexto=createContext()

const {Provider}=contexto

const MiContexto=({children})=>{

    const [carro, setCarro]=useState([])
    const [cantidadItems, setCantidadItems]=useState(0)
    const [precioTotal, setprecioTotal]=useState(0)

    const agregarProducto=(producto, cantidad, precioT)=>{

        const carroTemporal=carro.slice(0)
        carroTemporal.push(producto)
        setCarro(carroTemporal)

        setCantidadItems(cantidadItems+cantidad)

        setprecioTotal(precioTotal+precioT)

    }

    const eliminarProducto=(idProducto)=>{

    }
    
    const enCarrito=(producto)=>{

    }
    
    const vaciarCarro=()=>{
        setCarro([])
     }

    const valorContexto = {
        cantidadItems: cantidadItems,
        precioTotal: precioTotal,
        carrito: carro,

        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        enCarrito: enCarrito,
        vaciarCarro: vaciarCarro
    }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default MiContexto