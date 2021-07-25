import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'
import StoreIcon from '@material-ui/icons/Store';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Navbar</NavLink>

                    <div className="collapse navbar-collapse f-end" id="navbarSupportedContent">
                        <form className="d-flex f-grow">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><SearchIcon /></button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#"><LocationOnIcon /></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#"><AccountCircleIcon /></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><StoreIcon /></NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link " to="#" ><ShoppingCartIcon /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
