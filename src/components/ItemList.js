import Item from "./Item";

const ItemList = ({ producto }) => {
  return (
    <section className="card-container">
      {producto.map(producto => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </section>
  );
};

export default ItemList;
