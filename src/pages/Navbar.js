import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [login, setLogin] = useState("true");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {login === "true" ? (<>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => setLogin("false")}>Logout</a>
                            </li>
                        </>) : (<>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => setLogin("true")}>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                        </>)}



                    </ul>

                </div>
            </nav>



        </>
    )
}

export default Navbar
