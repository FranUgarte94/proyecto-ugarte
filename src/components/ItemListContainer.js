import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "./Firebase";
import {
  collection , getDocs , query , where,
} from "firebase/firestore";


const ItemListContainer = ({ children, apellido }) => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { nombreCategoria } = useParams();


  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const consulta = getDocs(productosCollection);

    consulta
      .then((resultado) => {

          const productos = resultado.docs.map(doc => {

          const productoConId = doc.data();

          productoConId.id = doc.id;

          return productoConId;
        });

        setProducto(productos);
        setCargando(false);

      })
      .catch((error) => {
          console.log(error)
      })
      .finally(() => {});

      if(nombreCategoria){
        const filtro = query(productosCollection,where("categorias","==",nombreCategoria))   
        const consulta = getDocs(filtro)
          consulta
          .then((resultado)=>{

                  const products=resultado.docs.map(doc=>{

                       const productoConIdCat=doc.data()
                       productoConIdCat.id=doc.id

                           return productoConIdCat

                          })

                          setProducto(products)
                          setCargando(false)
                   })
           .catch((error)=>{
                   console.log(error)
                   })
            .finally(()=>{

           })
        }

  }, [nombreCategoria]);

    return (
      <>
       {cargando ? ( 
        <BeatLoader /> 
        ) : ( <ItemList producto={producto} />
      )}
      </>
  )
};

export default ItemListContainer;
