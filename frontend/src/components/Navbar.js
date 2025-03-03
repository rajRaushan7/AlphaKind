import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link className='nav-options' to="/">Home</Link>
                <Link className='nav-options' to="/allNotes">All Notes</Link>
                <Link className='nav-options' to="/notesBySem">Notes by Sem</Link>
                <Link className='nav-options' to='/contactUs'>Contact Us</Link>
            </nav>
            <i className="fa-solid fa-bars toggle-bar"></i>
            <nav className="toggle-navbar">
                <i className="fa-solid fa-xmark toggle-xmark"></i>
                <Link className='nav-options' to="/">Home</Link>
                <Link className='nav-options' to="/allNotes">All Notes</Link>
                <Link className='nav-options' to="/notesBySem">Notes by Sem</Link>
                <Link className='nav-options' to='/contactUs'>Contact Us</Link>
            </nav>
        </>
    );
}

export default Navbar;