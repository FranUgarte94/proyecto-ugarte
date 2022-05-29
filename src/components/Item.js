import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <article className="cardItem">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt="imagen" />
      <p>Precio : $ {producto.precio}</p>
      <p>Codigo: {producto.id}</p>
      {/*<p>Categorias : {producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
        })} </p>*/}
      <Link
        to={`/item/${producto.id}`}
        key={producto.id}
        className="botonSuma btn-primary"
      >
        Ver Detalle
      </Link>
    </article>
  );
};

export default Item;
