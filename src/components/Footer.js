import NavBar from "./NavBar";

const Footer = () => {
  const footer = true;
  const saludo = () => {}
  return (
    <footer>
      <NavBar 
        nombre="Pedro" 
        apellido="Gomez"
        onAdd={saludo}
        footer/>
      <p>Copyright &copy; - 2022</p>
      <p>Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
