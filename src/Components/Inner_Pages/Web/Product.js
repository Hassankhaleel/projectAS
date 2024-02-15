import React, { useEffect } from 'react'
import Footer from '../../HomePage/Footer/Footer'
import logo from './Satart.png'
import './Web.css'
import Navbar from '../../HomePage/Navbar'
function Product() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])
    return (
        <>
            <section className='About_1_sec'>
                <Navbar />
                <div className='container  App_dev'>
                    <div className='row'>
                        <div className='col-12 about_1  d-flex justify-content-center align-items-center flex-column '>
                            <h1 className='w-75 text-white text-center'>Product Management</h1>
                            <p className='w-50 text-white text-center fw-lighter'>
                                Welcome to Astero Solutions, your partner in streamlining and enhancing the entire product lifecycle. As a leading product management service provider, we specialize in providing comprehensive solutions that cover everything from ideation and development to launch and ongoing optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero2-sec'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-lg-12 col-12 d-flex justify-content-center align-items-center flex-column mt-lg-5 App_1'>
                            <h1 className='text-white w-75 text-center'>How Astero Solutions Adds Value</h1>
                            <p className='text-white fw-lighter w-50 text-center'>
                                Our commitment to excellence is powered by a robust Agile process that ensures efficiency, flexibility, and swift results throughout the mobile app development journey.
                            </p>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Market Research and Analysis</h2>
                                    <p className='text-white fw-lighter '>
                                        We conduct thorough market research to identify trends, analyze competitors, and understand customer needs, providing a solid foundation for your product strategy.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Product Ideation and Conceptualization</h2>
                                    <p className='text-white fw-lighter '>
                                        Collaborating with stakeholders, we facilitate creative brainstorming sessions and utilize design thinking methodologies to generate innovative ideas and concepts for your product.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Agile Product Development</h2>
                                    <p className='text-white fw-lighter '>
                                        Our Agile product development approach allows for flexibility, rapid iterations, and quick adaptability, ensuring your product evolves efficiently in response to changing market dynamics.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Quality Assurance and Testing</h2>
                                    <p className='text-white fw-lighter '>
                                        Rigorous testing and quality assurance processes are implemented to ensure your product operates flawlessly, meets industry standards, and provides a seamless user experience.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>Product Launch and Marketing Support</h2>
                                    <p className='text-white fw-lighter '>
                                        We assist in the successful launch of your product, providing marketing support, promotional strategies, and ongoing optimization to maximize market impact.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 '>
                            <div className=' her0_4_card Service_card Web_card d-flex justify-content-center alig-items-center flex-column
                        '>
                                <div>
                                    <img src={logo} style={{ width: "30px" }} />
                                </div>
                                <div>
                                    <h2 className='text-white fs-1'>User-Centric Design</h2>
                                    <p className='text-white fw-lighter '>
                                        Prioritizing user experiences, we integrate user-centric design principles to create intuitive and engaging product interfaces that resonate with your target audience.
                                    </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div >
                <div className='container mt-5'>
                    <div className='row ' >
                        <div className='col-lg-12 mt-5 col-sm-12 d-flex justify-content-center align-items-center'>
                            <h1 className='text-white'>Product Management Services We Offer:</h1>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>01</h1>
                                <h1>asd</h1>
                                <p className='text-white fw-lighter ms-2 '>Agile Product Development</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>02</h1>
                                <p className='text-white fw-lighter ms-2 '>Quality Assurance and Testing</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>03</h1>
                                <p className='text-white fw-lighter ms-2 '>User-Centric Design</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12 cards-web mt-lg-3 d-flex justify-content-center align-items-center'>
                            <div className='d-flex justify-content-start align-items-end'>
                                <h1 className=''>04</h1>
                                <p className='text-white fw-lighter ms-2 '>Market Research and Analysis</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Product
