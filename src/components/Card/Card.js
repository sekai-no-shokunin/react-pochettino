import React,{useState} from "react"

import "./Cards.css"
import "../ItemCount/ItemCount.css"
import ItemCount from "../ItemCount/ItemCount"
const Card = ({image, title , alert, size , price , stock,initial})=>{
    
    return(
        <div className="cardContainer">
            <div className="cardImg"><img className="cardImg__esp" src ={image}/></div>
            <div className="cardInfo">
                <h3 className="infoProduct">{title}</h3>
                 <p>{alert}</p>
                <h4 className="infoSize">{size}</h4>
                <h4 className="infoPrice">{price}</h4>
               <ItemCount stock = {stock} initial = {initial}/>
            </div>
            <button className="PayBtn">Comprar</button>
        </div>
    )
}
export default Card