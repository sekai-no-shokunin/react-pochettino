import CartWidget from "../CartWidget/CartWidget"
import Cart from "../CartWidget/CartWidget"
import NavBtn from "../NavBtn/NavBtn"
import "./NavBar.css"


//import NavBtn from "../NavBtn/NavBtn"

const NavBar = () => {
    return(
        <header className="App-header">
        <div className="logo-container">
        <img src="./img/logo-vv.png" className="App-logo" alt="logo" />
        </div>
        <h1 className="headerTittle">Vamos Viendo</h1>
        <NavBtn list={["Menu","Productos","Nosotros","Contacto"]} />
        <CartWidget />
      </header>
    )
}

export default NavBar