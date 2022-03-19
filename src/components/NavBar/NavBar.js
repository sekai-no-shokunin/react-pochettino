import Cart from "../CartWidget/Cart"
import "./NavBar.css"

const NavBar = () => {
    return(
        <header className="App-header">
        <div className="logo-container">
        <img src="./img/logo-vv.png" className="App-logo" alt="logo" />
        </div>
        <h1 className="headerTittle">Vamos Viendo</h1>
        <ul className="navbar">
            <li><button className="buttonNav">Menu</button></li>
            <li><button className="buttonNav">Productos</button></li>
            <li><button className="buttonNav">Nosotros</button></li>
            <li><button className="buttonNav">Contacto</button></li>
        </ul>
        <Cart />
      </header>
    )
}

export default NavBar