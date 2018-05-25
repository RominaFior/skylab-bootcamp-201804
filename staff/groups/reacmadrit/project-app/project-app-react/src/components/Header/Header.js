import React from "react"
import { Link } from "react-router-dom"
import home from "../../images/home-icon.png"


function _handleLogout() {
    localStorage.removeItem("id-app")
    localStorage.removeItem("token-app")
}

function Header(props) {

    return <header className="App-header bg-darkcyan">

        <nav className="bar">
            <Link to="/">
                <img src={home} alt="home icon" />
            </Link>
            {!props.isLogged ?
                <ul className="bar-ul ">
                    <li className="bar-item">
                        <Link className="bar-link" to="/login">Login</Link>
                    </li>
                    <li className="bar-item">
                        <Link className="bar-link" to="/register">Register</Link>
                    </li>
                </ul>
                :
                <ul className="bar-ul">
                    <li className="bar-item">
                        <Link className="bar-link" to="/profile">Profile</Link>
                    </li>
                    <li className="bar-item">
                        <Link className="bar-link" onClick={_handleLogout} to="/">Logout</Link>
                    </li>
                    <li className="bar-item">
                        <Link className="bar-link" to="/home">Home</Link>
                    </li>
                </ul>
            }
        </nav>

    </header>
}

export default Header;