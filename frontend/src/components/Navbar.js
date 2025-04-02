import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const [navShow, setNavShow] = useState('none');
    const [xmark, setXMark] = useState('none');
    const [bar, setBar] = useState('');
    
    const toggleNav = () => {
        if (navShow === 'none'){
            setNavShow('flex');
            setXMark('flex');
            setBar('none');
            document.body.style.overflow = 'hidden';
        } else {
            setNavShow('none');
            setBar('flex');
            setXMark('none');
            document.body.style.overflow = 'auto';
        }
    }

    const newPage = () => {
        setNavShow('none');
        setBar('flex');
        setXMark('none');
        document.body.style.overflow = 'auto';

        // this is raj's branch;
    }

    return (
        <>
            <nav className="navbar">
                <Link className='nav-options' to="/">Home</Link>
                <Link className='nav-options' to="/allNotes">All Notes</Link>
                <Link className='nav-options' to="/notesBySem">Notes by Sem</Link>
                <Link className='nav-options' to='/contactUs'>Contact Us</Link>
            </nav>
            <i className="fa-solid fa-bars toggle-bar" onClick={ toggleNav } style={{display: `${bar}`}}></i>
            {/* Mobile nav */}
            <nav className="toggle-navbar" style = {{display: `${navShow}`}}>
                <i className="fa-solid fa-xmark toggle-xmark" onClick={ toggleNav } style={{display: `${xmark}`}}></i>
                <Link className='nav-options' to="/" onClick = { newPage }>Home</Link>
                <Link className='nav-options' to="/allNotes" onClick = { newPage }>All Notes</Link>
                <Link className='nav-options' to="/notesBySem" onClick = { newPage }>Notes by Sem</Link>
                <Link className='nav-options' to='/contactUs' onClick = { newPage }>Contact Us</Link>
            </nav>
        </>
    );
}

export default Navbar;