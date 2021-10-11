import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book/bedType">Book</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/payment">Payment</Link>
                    </li>
                    {
                        user.email && <span style={{ color: 'white', padding: '5px' }}>hello {user.displayName}</span>
                    }

                    {
                        user.email ?
                            <li onClick={logOut}>
                                <Link to="/home">Log out
                                </Link></li>
                            :
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                    }

                    <li>
                        <Link to="/register">Register</Link>
                    </li>

                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;