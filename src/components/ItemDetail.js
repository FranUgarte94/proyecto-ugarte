import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { contexto } from "./ContextoCarrito";

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(contexto);
  const [verContador, setVerContador] = useState(false);

  const onClick = (contador, item, id) => {
    toast(
      ` Se han cargado ${contador} productos`,
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },

      agregarProducto(contador, item)
    );
  };


  const funcionVerContador = () => {
    setVerContador(true);
  };

  if (!verContador) {
    return (
      <article className="card cardDetail">

        <h1>Detalle del producto</h1>
        <h3>Titulo : {producto.nombre}</h3>
        <h4>Precio : $ {producto.precio}</h4>
        <img src={producto.imagen} alt="" />
        <p>Stock disponible : {producto.stock}</p>
        <p>Codigo de producto : {producto.id}</p>
        <p>Categoria : {producto.categorias}</p>
        <ItemCount
          stock={producto.stock}
          init={1}
          onAdd={onClick}
          onCount={funcionVerContador}
          productos={producto}
        />
        <Link to="/cart">
          <button className="botonSuma btn-primary" onAdd={onClick}>
            <p>Ir al carrito</p>
            <span className="material-icons carrito">shopping_cart</span>
          </button>
        </Link>
      </article>
    );
  } else {
    return (
      <article className="card cardDetail">

        <h1>Detalle del producto</h1>
        <h3>Titulo : {producto.nombre}</h3>
        <h4>Precio : $ {producto.precio}</h4>
        <img src={producto.imagen} alt="" />
        <p>Stock disponible : {producto.stock}</p>
        <p>Codigo de producto : {producto.id}</p>
        <p>Categoria : {producto.categorias}</p>

        <Link to="/cart">
          <button className="botonSuma btn-primary" onAdd={onClick}>
            Terminar Compra
          </button>
        </Link>
      </article>
    );
  }
};

export default ItemDetail;
