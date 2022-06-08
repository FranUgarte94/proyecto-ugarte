import React from 'react'
import { createContext } from 'react'
import {useState} from 'react'

export const contexto=createContext()

const{Provider}=contexto

const MiCustomProvider = ({children}) => {

  const[carrito,setCarrito]=useState([])
  const[cantidad_total,setCantidad_total]=useState(0)
  const[precio_total,setPrecio_total]=useState(0)

const estaEnCarrito=(id)=>{
return carrito.find(e=>e.item.id===id)

}



const agregarProducto=(contador,item)=>{

  if(estaEnCarrito(item.id)){
    setCantidad_total(contador)

  }else{
    setCantidad_total(cantidad_total+contador)
    setPrecio_total(precio_total+item.precio*contador)
    setCarrito([...carrito,{item: item, contador: contador}])
  }




}

const eliminarProducto=(id, contador)=>{

  setCarrito(carrito.filter((carri) => carri.item.id !== id));
  setPrecio_total((precio_total)-(contador*(carrito.find(e=>e.item.id===id).item.precio)))


}

const vaciarCarrito=()=>{
  setCarrito([])
  setPrecio_total(0)
}




const valorDelContexto={
  cantidad_total:cantidad_total,
  precio_total:precio_total,
  carrito:carrito,
  agregarProducto,
  eliminarProducto,
  vaciarCarrito,
  estaEnCarrito
}

  return (
<Provider value={valorDelContexto}> 
    {children}
</Provider>
 )
}

export default MiCustomProvider