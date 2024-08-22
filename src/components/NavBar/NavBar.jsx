import "./NavBar.css";
import CartWidget from "./CartWidget";
import logoParamo from "../../img/logoParamo.png"
import { PiWineDuotone, PiBrandyLight, PiGift, PiNotEquals } from "react-icons/pi";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to="/" className="logo">
                <img src={logoParamo} width={150} alt="" />
            </Link>

            <ul className="categories">

                <Link to="/categoria/vinos" className="category">
                    <p>vinos</p>
                    <div className="img-category">
                        <PiWineDuotone size={45} />
                    </div>
                </Link>

                <Link to="/categoria/destilados" className="category">
                    <p>destilados</p>
                    <div className="img-category">
                        <PiBrandyLight size={45} />
                    </div>
                </Link>

                <Link to="/categoria/regaleria" className="category">
                    <p>regaleria</p>
                    <div className="img-category">
                        <PiGift size={45} />
                    </div>
                </Link>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar