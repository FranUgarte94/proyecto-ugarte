import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
        <h1 className='header_title'>E-Commerce</h1>
        <NavBar nombre="Fran" apellido="Ugarte" footer={false}/>
    </header>
  )
}

export default Header