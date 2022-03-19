import Card from "../Card/Card"
import "./ListProducts.css"

const ListProduct = ({title }) => {
    return (
        <div className="listCards">
            <h2 className="listTitle">{title}</h2>
            <div className="cardBox">
            <Card image = "../img/product1.png" title = "Bordado, Zapatilla" alert = "En Oferta" size = "5cm x 10cm" price = "480" stock = "6" />
            <Card image = "../img/product2.png" title = "Prendedor, Flor compuesta" size = "5cm" price = "200" stock = "10"/>
            <Card image = "../img/product4.png" title = "Bordado, Infinito" size = "5cm x 10cm" price = "350" stock = "4"/>
            <Card image = "../img/product3.png" title = "Prendedor, Pequeño Loto" size = "5cm" price = "300" stock = "12"/>
            </div>
        </div>
    )
}

export default ListProduct