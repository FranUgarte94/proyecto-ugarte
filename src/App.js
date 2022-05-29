import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Main from './componentes/Main'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <>
      <Header/>
      <Main nombre="Fran Ugarte">
        <h1>Hola Mundo</h1>
        <h1>Hola Mundo 2</h1>
      </Main>
      <Footer/>
    </>
  )
}

export default App