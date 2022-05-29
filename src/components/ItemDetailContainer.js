import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "./Firebase";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  addDoc,
  query,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();


  useEffect(() => {
  toast.info("Cargando detalle...");

    const productosCollection = collection(db, "productos");
    const resultadoDelDoc=doc(productosCollection,id)
    const consulta = getDoc(resultadoDelDoc);
    //console.log(consulta)

    consulta
      .then((resultado) => {

        setProducto(resultado.data())
        setCargando(false)
        toast.dismiss();
        toast.success("Detalle de Producto Cargado");
        //console.log(resultado.docs)

        // const detalleProducto = productosIniciales.filter((producto) => {
        // return producto.id == id;
        // })[0];

        // const detalleProducto = resultado.docs.filter((doc) => {
        //   const productoConId = doc.data();
        //   productoConId.id = doc.id;

        //   return productoConId.id === id;
        // })[0];

        // setProducto(detalleProducto);
        // setCargando(false);

      })
      .catch((error) => {
        console.log(error);
        setCargando(false);
      })
      .finally(() => {});

    // //console.log("Pido detalle de un solo producto :",id)

    // toast.info("Cargando detalle...");

    // const detalleProducto = productosIniciales.filter((producto) => {
    //   return producto.id == id;
    // })[0];

    // //console.log(detalleProducto)

    // //console.log(producto.id)

    // const pedidoDeDetalle = new Promise((res) => {
    //   setTimeout(() => {
    //     res(detalleProducto);
    //   }, 2000);
    // }).then(() => {
    //   setCargando(false);
    //   setProducto(detalleProducto);

    // });
  }, [id]);

  return (
    <>
      {cargando ? (
        <BeatLoader />
      ) : (
        <ItemDetail key={producto.id} producto={producto} />
      )}
    </>
  );
};

export default ItemDetailContainer;

/*
  if (cargando) {
    return <BeatLoader />;
  } else {
    return (
      <>
        <ItemDetail key={producto.id} producto={producto} />
      </>
    );
  }
  */
