import { createContext, useState } from "react"

export const contexto=createContext()

const {Provider}=contexto

const MiContexto=({children})=>{

    const [carro, setCarro]=useState([])
    const [cantidadItems, setCantidadItems]=useState(0)
    const [precioTotal, setprecioTotal]=useState(0)

    const agregarProducto=(producto, cantidad, precioT)=>{

        const estaEnCarrito=enCarrito(producto)

        if (estaEnCarrito){

            let index = carro.findIndex( elemento => elemento.id == producto.id);
            
            const carroTemporal=carro.slice(0)

            carroTemporal[index].cantidad=carroTemporal[index].cantidad + parseInt(cantidad)

            setCarro(carroTemporal)
    
            setCantidadItems(parseInt(cantidadItems) + parseInt(cantidad))
    
            setprecioTotal(parseInt(precioTotal) + parseInt(precioT))

        } else
        {
            const carroTemporal=carro.slice(0)

            carroTemporal.push(producto)

            setCarro(carroTemporal)
    
            setCantidadItems(parseInt(cantidadItems) + parseInt(cantidad))
    
            setprecioTotal(parseInt(precioTotal) + (parseInt(precioT)))
        }

    }

    const eliminarProducto=(idProducto)=>{

        let index = carro.findIndex( elemento => elemento.id == idProducto)
        
        let cant=carro[index].cantidad
        let precio=carro[index].price
        
        let carroTemporal=carro.slice(0)

        let carritoTemporal=carroTemporal.splice(index,1)

        setCarro(carroTemporal)

        setCantidadItems(parseInt(cantidadItems) - parseInt(cant))
    
        setprecioTotal(parseInt(precioTotal) - parseInt(precio))

    }
    
    const enCarrito=(producto)=>{

       const estaEnCarrito=carro.filter(elemento => elemento.id==producto.id).length
       return estaEnCarrito

    }
    
    const vaciarCarro=()=>{
        setCarro([])
        setCantidadItems(0)
        setprecioTotal(0)
     }

    const valorContexto = {
        cantidadItems: cantidadItems,
        precioTotal: precioTotal,
        carrito: carro,
        mensaje:"Un segundo por favor...",

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