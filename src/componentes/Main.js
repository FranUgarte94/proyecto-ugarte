
const Main = ({children,nombre}) => {
  return (
    <main>
        Bienvenido {nombre}
        {children}
    </main>
  )
}

export default Main