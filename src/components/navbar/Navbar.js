import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./../../assets/logo.svg";

const Navbar = () => {
    return (
        <nav>
           <div className="nav-container">
                <div className="navbar">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/form">Vaccination Form</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar;
