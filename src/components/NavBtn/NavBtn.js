
import "./NavBtn.css"


const NavBtn = ({list}) => {
    return(
        <ul className="navbar">
            {list.map(item =>{
                return <li><button className="buttonNav">{item}</button></li>
            })}
        </ul>
    )
}
export default NavBtn