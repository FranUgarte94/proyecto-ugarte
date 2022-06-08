import { useContext, useState } from "react";
import CarritoLista from "./CarritoLista";
import { contexto } from "./ContextoCarrito";
import {collection , addDoc}from "firebase/firestore"

import { db } from "./Firebase";

const Cart = () => {

  const { precio_total, carrito, vaciarCarrito } = useContext(contexto);
  const [idCompra, setIdCompra] = useState("")


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
      setIdCompra(resultado.id)
    })
    .catch((err)=>{
      console.log(err)
    })
  
  }




  return (

    <div>
      <h1>Carrito</h1>
      <h2>Precio total : ${precio_total}</h2>

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
