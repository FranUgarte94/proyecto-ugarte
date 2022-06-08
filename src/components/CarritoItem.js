import { useContext } from "react";
import { contexto } from "./ContextoCarrito";
import { memo } from "react";

const CarritoItem = ({ productos }) => {


  const { eliminarProducto } = useContext(contexto);

  const handleClick = () => {
    eliminarProducto(productos.item.id);
  };


  return (
    <article className="cardItem">
      <div>
        <li>
          <h4>{productos.item.nombre}</h4> <h5>$ {productos.item.precio}</h5>{" "}
          <h6>Cantidad: {productos.contador}</h6>
          <h6>Cat: {productos.item.categorias}</h6>
          <h6>Id: {productos.item.id}</h6>
          <button onClick={handleClick} className="botonSuma btn-primary">
            Eliminar Producto
          </button>
        </li>
      </div>
    </article>
  );
};

export default memo(CarritoItem);
