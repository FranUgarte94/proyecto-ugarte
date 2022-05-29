import { useContext } from "react";
import { contexto } from "./ContextoCarrito";
import { memo } from "react";

const CarritoItem = ({ productos }) => {
  const { eliminarProducto } = useContext(contexto);

  const handleClick = () => {
    eliminarProducto(productos.id);
  };

  return (
    <article className="cardItem">
      <div>
        <li>
          <h4>{productos.nombre}</h4> <h5>$ {productos.precio}</h5>{" "}
          <h6>Cat: {productos.categorias}</h6>
          <button onclick={handleClick} className="botonSuma btn-primary">
            Eliminar Producto
          </button>
        </li>
      </div>
    </article>
  );
};

export default memo(CarritoItem);
