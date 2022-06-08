import { useContext, useState } from "react";
import CarritoLista from "./CarritoLista";
import { contexto } from "./ContextoCarrito";
import {collection , addDoc}from "firebase/firestore"

import { db } from "./Firebase";

const Cart = () => {
  //const { precio_total, carrito, vaciarCarrito } = useContext(CartContext);
  const { precio_total, carrito, vaciarCarrito, cantidad_total,  } = useContext(contexto);
  const [idCompra, setIdCompra] = useState("")
  //console.log({precio_total, carrito})
  console.log(carrito);



  //   const handleClick = () => {

  //     const copia = [...cart]

  //     const carritoCompra = {
  //       id : Math.random(),
  //       nombre : nombre
  //       //setChange(!change)
  //   }

  //   copia.push(carritoCompra)

  //   setCarritoCompra(copia)

  //   console.log(copia)

  // }

  const handleClick = () => {
    vaciarCarrito();
  };

  const guardarCompra=()=>{


    const ordenesCollection = collection(db,"ordenes")
  
    const orden = {
      buyer : {
      name : "Francisco",
      phone : "0011-5452-1256",
      email : "fran.ugarte.94@gmail.com"
      },
      
      items : carrito,
      date : "",
      total : precio_total
    }
  
  
    const consulta=addDoc(ordenesCollection,orden)
  
    consulta
    .then((resultado)=>{
      console.log(orden)
      setIdCompra(resultado.id)
    })
    .catch((err)=>{
      console.log(err)
    })
  
  }




  return (
    //meter render condicional, si no hay items, poner Volver a comprar

    //desgloce del carrito + precio total + array de carrito de contexto
    <div>
      <h1>Carrito</h1>
      <h2>Precio total : ${precio_total}</h2>
      {/* <button onClick={handleClick}>click</button> */}
      {/* {change&&<p>esto es un texto</p>}      
      <input type="text" onChange={handleChange}></input> */}

      <CarritoLista carrito={carrito}/>
      <button className="botonSuma btn-primary" onClick={handleClick}>
        vaciar
      </button>
      <button onClick={guardarCompra}> finalizar compra</button>
    {idCompra && <h3>Compra guardada con id: {idCompra}</h3>}
    </div>
  );
};

export default Cart;
