import React from 'react'
import logo from './homePage_images/Logo.png'
import logo1 from './Logo (1).webm'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <NavLink to={'/'}>
                        <a class="navbar-brand"  >
                            <video className='logo_web' style={{ width: "300px" }}
                                autoPlay loop muted>
                                <source src={logo1} type="video/webm" />
                                Your browser does not support the video tag.
                            </video></a>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" ><NavLink to={"/HomePage"} style={{ textDecoration: "none" }}>Home</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" ><NavLink to={"/About"} style={{ textDecoration: "none" }}>About</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style={{ textDecoration: "none" }} aria-current="page" ><NavLink style={{ textDecoration: "none" }} to={'/Services'}>Services</NavLink></a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" ><NavLink to={"/About"} style={{ textDecoration: "none" }}>Testimonials</NavLink></a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" ><NavLink to={"/Contact"} style={{ textDecoration: "none" }}>Contact</NavLink></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
