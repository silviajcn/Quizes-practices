import React from 'react';
import { Link } from "react-router-dom";
import '../styles/elements.css';

const NavBar = () => {
    return (
        <header className='header-navbar'>
            <Link to="/">
                <img src="https://res.cloudinary.com/silviajcn/image/upload/v1645900258/PRACTICAS/Quizes/logo/logo_smk8tr.png" alt="logo" className='logo' />
                <p className='links name-app'>Quiz App</p>
            </Link>
        </header>
    )
};

export default NavBar;