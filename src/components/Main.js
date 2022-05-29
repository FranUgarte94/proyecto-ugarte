import acero from "../images/acero.png";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import SobreNosotros from "./SobreNosotros";
import Profile from "./Profile";
import Cart from "./Cart";

const Main = () => {
  return (
    <main className="main">
      {/*<h2>El mejor buscador de Insumos Metalurgicos del país.</h2> 
        <h3>¡Busca, cotiza y compra con nosotros!</h3>
        <img className="imagenMain" src={acero} alt=""/>
        <ItemListContainer nombreUsuario="Francisco"/>
  <ItemDetailContainer/>*/}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/category/:nombreCategoria"
          element={<ItemListContainer />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
};

export default Main;
