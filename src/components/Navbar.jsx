import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import Button from "./Button";

function Navbar() {
    const [click, changeClick] = useState(false);
    const [button, setButton] = useState(true);
    function handleClick() {
        changeClick(!click);
    };
    function showButton() {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    const closeMobileMenu = () => changeClick(false);

    useEffect(() => { showButton() }, []);

    window.addEventListener('resize', showButton)
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to={'/'} className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL <i className="fa-solid fa-person-walking-luggage"></i>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <span><i className={click ? 'fa-solid fa-bars-staggered' : 'fa-solid fa-bars'}></i></span>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={handleClick}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className="nav-links" onClick={handleClick}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className="nav-links" onClick={handleClick}>
                            Products
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='signup' className="nav-links" onClick={handleClick}>
                            Sign Up
                        </Link>
                    </li> */}
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </nav>
        </div>
    )

}

export default Navbar