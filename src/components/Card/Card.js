
import "./Cards.css"

const Card = ({image, title , alert, size , price , stock})=>{
    return(
        <div className="cardContainer">
            <div className="cardImg"><img className="cardImg__esp" src ={image}/></div>
            <div className="cardInfo">
                <h3 className="infoProduct">{title}</h3>
                 <p>{alert}</p>
                <h4 className="infoSize">{size}</h4>
                <h4 className="infoPrice">{price}</h4>
                <p> En stock: {stock}</p>
            </div>
            <button>Comprar</button>
        </div>
    )
}
export default Card