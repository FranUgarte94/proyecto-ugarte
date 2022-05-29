
const NavBar = (props) => {

  console.log(props)

  if(props.footer){

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a to="/" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              to="/category"
              className="nav-link dropdown-toggle btn-primary letraBlanca"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a to="category/Chapas" className="dropdown-item">
                  Chapas
                </a>
              </li>
              <li>
                <a to="category/Caños" className="dropdown-item">
                  Caños
                </a>
              </li>
              <li>
                <a to="category/Perfiles" className="dropdown-item">
                  Perfiles
                </a>
              </li>
              <li>
                <a to="category/Herrajes" className="dropdown-item">
                  Herrajes
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              to="/sobrenosotros"
              className="nav-link active"
              aria-current="page"
            >
              Sobre Nosotros
            </a>
          </li>

          {/* {!footer && (
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link active"
                aria-current="page"
              >
                {nombre}
              </Link>
            </li>
          )} */}

          <li className="nav-item">
            <a to="/cart">
              {/* <CartWidget /> */}
            </a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  );
}else{
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a to="/" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              to="/category"
              className="nav-link dropdown-toggle btn-primary letraBlanca"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a to="category/Chapas" className="dropdown-item">
                  Chapas
                </a>
              </li>
              <li>
                <a to="category/Caños" className="dropdown-item">
                  Caños
                </a>
              </li>
              <li>
                <a to="category/Perfiles" className="dropdown-item">
                  Perfiles
                </a>
              </li>
              <li>
                <a to="category/Herrajes" className="dropdown-item">
                  Herrajes
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              to="/sobrenosotros"
              className="nav-link active"
              aria-current="page"
            >
              Sobre Nosotros
            </a>
          </li>

          {/* {!footer && (
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link active"
                aria-current="page"
              >
                {nombre}
              </Link>
            </li>
          )} */}

          <li className="nav-item">
            <a to="/cart">
              {/* <CartWidget /> */}
            </a>
          </li>
        </ul>
      </div>

      <div className="d-flex">
        <button className="btn btn-outline-success" type="submit">
          <p>Perfil</p>
          <p>{props.nombre} {props.apellido}</p>
        </button>
      </div>
    </div>
  </nav>
  );
};
};

export default NavBar