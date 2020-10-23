import React from 'react';
import  './Header.scss';

function Header() {
    return (
        <div className="header-wrapper">
            <h2 className="logo">Reusable Components</h2>
            <div className="navbar">
                <ul className="nav-list">
                    <li className="list-item">
                        <a href="#" onClick={(e) => e.preventDefault()}>Login</a>
                    </li>
                    <li className="list-item">
                        <a href="#" onClick={(e) => e.preventDefault()}>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
