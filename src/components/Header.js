import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <h1 className="header__titulo">Metal-Ins Ecommerce</h1>
        </Link>
        <NavBar nombre="Francisco" footer={false} />
      </header>
    </>
  );
};

export default Header;
