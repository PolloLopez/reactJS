import logoParamo from "../../img/logoParamo.png"
import CartWidget from "./CartWidget.jsx"

import "./NavBar.css"

const NavBar = () => {
return (
    <nav className="navBar">
        <div className='brand'>
            <img src={logoParamo} width={150} alt="" />
        </div>

        <ul className="secciones">
            <li className="items">Vinos</li>
            <li className="items">Destilados</li>
            <li className="items">Regaleria</li>
        </ul>

    <CartWidget />
    </nav>
)
}

export default NavBar