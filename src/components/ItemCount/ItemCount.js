
import React,{useState} from "react"
import "./ItemCount.css"
const ItemCount = ({stock,initial}) => {
    const [count,setCount] = useState(initial)
    const onLess = () =>{
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const onAdd = () =>{
        if (count < stock) {
            setCount(count + 1)
        }
        if (count > stock) {
            setCount(count = "No hay stock suficiente")
        }
    }
    
    return(
        <div className="SelectAmount">
                    <button onClick={onLess}>aa</button>
                    <p>{count}</p>
                    <button onClick={onAdd}>+</button>
                </div>
    )
}
export default ItemCount