import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <img src="https://res.cloudinary.com/silviajcn/image/upload/v1645900258/PRACTICAS/Quizes/logo/logo_smk8tr.png" alt="logo" className='logo' />
                <p>Quiz App</p>
            </Link>
        </header>
    )
};

export default NavBar;