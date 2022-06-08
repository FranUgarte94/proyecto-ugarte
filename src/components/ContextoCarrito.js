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
  // console.log(producto.cantidadporproducto)
return carrito.find(e=>e.item.id===id)

}



const agregarProducto=(contador,item)=>{

  if(estaEnCarrito(item.id)){
    setCantidad_total(contador)
      console.log("el producto esta en el carrito")

  }else{
    setCantidad_total(cantidad_total+contador)
    setPrecio_total(precio_total+item.precio*contador)
    setCarrito([...carrito,{item: item, contador: contador}])
  }

  /*
const addItem = (producto, quantity) => {
    if (isInCart(producto.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === producto.id) {
          producto.quantity = it.quantity + quantity;
        }
      }
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          item: producto,
          quantity: quantity,
        },
      ]);
    }
  };

  */


}

const eliminarProducto=(id, contador)=>{

  setCarrito(carrito.filter((carri) => carri.item.id !== id));
  console.log("eliminado");
  setPrecio_total((precio_total)-(contador*(carrito.find(e=>e.item.id===id).item.precio)))



  // const prec = precio_total

  // const precioParcial= prec-contador*carrito.find(e=>e.item.id===id).item.precio
  // console.log(precioParcial);
  // setPrecio_total(precioParcial);



//   const newCart = [...carrito].map(element => element.id !== id);
//   setCarrito(newCart);
// console.log("se borro el item")

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