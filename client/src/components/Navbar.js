import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
export default function Navbar (){
    const [ isLogged, setIsLogged ] = useState(false)

    useEffect(()=>{
        axios.post(`http://localhost:8000/session/protected`,{}, { withCredentials: true })
        .then((response) => {
            setIsLogged(response.data.success)
        })
        .catch((error) => {
            console.error(error);
        });
    }, [])
    console.log(isLogged)

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow"  style={{background: '#483054'}}>
            <div className="container-fluid">
                <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link  className="navbar-brand mt-2 mt-lg-0" href="#">
                        <h1>NiGames</h1>
                    </Link >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link  className="nav-link" href="#">
                            Dashboard
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" href="#">
                            Team
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" href="#">
                            Projects
                        </Link>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">

                    {isLogged && <div className="dropdown">
                        <Link 
                            data-mdb-dropdown-init
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </Link>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"  
                        >
                            <li>
                                <Link  className="dropdown-item" href="#">
                                My profile
                                </Link>
                            </li>
                            <li>
                                <Link  className="dropdown-item" href="#">
                                Settings
                                </Link>
                            </li>
                            <li>
                                <Link  className="dropdown-item" href="#">
                                Logout
                                </Link>
                            </li>
                        </ul>
                    </div>}
                    {!isLogged && 
                        <Link  href='/access'>Cadastrar</Link>
                    }
                </div>
            </div>
        </nav>
    );    
};

