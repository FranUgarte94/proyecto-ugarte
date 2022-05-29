import { Link } from "react-router-dom";

const CartWidget = (props) => {


  return (
    <Link to="/cart">
      <p>Carrito</p>
      <span className="material-icons carrito">shopping_cart</span>
    </Link>
  );
};

export default CartWidget;
