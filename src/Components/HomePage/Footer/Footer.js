import React from 'react'
import logoFooter from './Footer Logo.gif'
function Footer() {
    return (
        <>


            <div className='container  mt-5' style={{ marginTop: "-50px" }}>
                <div className='row d-flex justify-content-center align-items-center  '>
                    {/* <div className='col-lg-6 col-sm-12 col-md-12 '>
                        <nav class="navbar navbar-expand-lg ">
                            <div class="container">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Testimonilas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                                        </li>




                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div> */}
                    <div className='col-lg-6 col-sm-12 col-md-12  mt-5'>
                        <div className=' input_div_footer d-flex  justify-content-center align-items-center ' style={{ backgroundColor: "transparent" }}>
                            <div className='d-flex justify-content-around  w-25 align-items-center '>
                                <a href='https://www.facebook.com/profile.php?id=61555457739340'> <i class="fa-brands fa-facebook-f" ></i></a>
                                {/* <i class="fa-brands fa-x-twitter"></i> */}
                                <a href='https://www.instagram.com/asterosolutions_/?hl=en'> <i class="fa-brands fa-instagram"></i></a>
                                <a href='https://www.linkedin.com/company/asterosolutions/'> <i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr className='line'></hr >

                </div>

            </div>
            <div className='container '>
                <div className='row'>
                    <div className='col-lg-5 col-sm-12 col-md-12 d-flex justify-content-center align-items-end'>
                        <p className='text-white fw-lighter'>@2024 Astero Solutions.All Right Reverse</p>
                    </div>
                    <div className='col-lg-2 col-sm-12 col-md-12 d-flex justify-content-center align-items-end'>
                        <img src={logoFooter} className='w-50' />
                    </div>
                    <div className='col-lg-5 col-sm-12 col-md-12 d-flex justify-content-center align-items-end'>
                        <p className='text-white fw-lighter'>Terms and Conditions | Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
