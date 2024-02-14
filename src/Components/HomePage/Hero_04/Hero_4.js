import React from 'react'
import im1 from './hero_04_imges/Group (1).svg'
import im2 from './hero_04_imges/Group (2).svg'
import im3 from './hero_04_imges/Group (3).svg'
import im4 from './hero_04_imges/Group (4).svg'
import im5 from './hero_04_imges/Group (5).svg'
import im6 from './hero_04_imges/Group (6).svg'
import im7 from './hero_04_imges/Group.svg'
// import Footer from '../HomePage/Footer/Footer'
// import Navbar from '../HomePage/Navbar'
import g1 from './Serviuce/Group (7).svg';
import g2 from './Serviuce/Group (9).svg';
import g3 from './Serviuce/Group (10).svg';
import g4 from './Serviuce/Group (11).svg';
import g5 from './Serviuce/Group (12).svg';
import g6 from './Serviuce/Group (13).svg';
import g7 from './Serviuce/Group (14).svg';
import g8 from './Serviuce/Group (15).svg';
import g9 from './Serviuce/Group (16).svg';

import { useNavigate } from 'react-router-dom'
function Hero_4() {
    const navig = useNavigate()
    const toWeb = () => {
        navig('/Services/Web_development')
    }

    const toDigi = () => {
        navig('/Services/Digital_Marketing')
    }
    const toSeo = () => {
        navig('/Services/SEO')
    }
    const toApp = () => {
        navig('/Services/App_development')
    }
    const toUi = () => {
        navig('/Services/UI/UX')
    }
    const toQuality = () => {
        navig('/Services/Quality_Assurance')
    }
    const toProdutrc = () => {
        navig('/Services/Product_Management')
    }
    const toGraphics = () => {
        navig('/Services/Graphics_Designing')
    }
    const ToEcom = () => {
        navig('/Services/Ecommerce')
    }

    return (
        <>
            <div className='container py-5 her0_4'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5 ' style={{ cursor: "pointer" }} onClick={toWeb}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g1} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>Web Development</h2>
                                <p className='text-white fw-lighter '>
                                    Crafting dynamic and responsive websites that not only engage users but also elevate your online presence to new heights.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center  align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5 ' onClick={toDigi}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g2} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>Digital Marketing</h2>
                                <p className='text-white fw-lighter '>
                                    Driving growth through strategic digital marketing campaigns, we ensure your brand stands out in the digital landscape.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5 ' onClick={toSeo}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g3} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>SEO Services</h2>
                                <p className='text-white fw-lighter '>
                                    Optimizing your online visibility and rankings, our SEO services enhance your digital footprint and attract the right audience.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5' onClick={toApp}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g4} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>App Development</h2>
                                <p className='text-white fw-lighter '>
                                    Innovative app solutions tailored to your needs, bringing your ideas to life and connecting you with users on the go.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5' onClick={toUi}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g5} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>UI/UX Designing</h2>
                                <p className='text-white fw-lighter '>
                                    Creating immersive and user-centric experiences, our UI/UX design services captivate audiences and enhance user satisfaction.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5' onClick={toQuality}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g6} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>Quality Assurance</h2>
                                <p className='text-white fw-lighter '>
                                    Unlocking valuable insights from data to guide informed decisions, our data analysis services empower your business strategy.

                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5' onClick={toProdutrc}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g8} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>Product Management</h2>
                                <p className='text-white fw-lighter '>
                                    Unlocking valuable insights from data to guide informed decisions, our data analysis services empower your business strategy.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5 Service_card' onClick={toGraphics}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g7} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>Graphic Designing</h2>
                                <p className='text-white fw-lighter '>
                                    Innovative app solutions tailored to your needs, bringing your ideas to life and connecting you with users on the go.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 mb-lg-5' onClick={ToEcom}>
                        <div className=' her0_4_card Service_card d-flex justify-content-center alig-items-center flex-column
                        '>
                            <div>
                                <img src={g9} style={{ width: "30px" }} />
                            </div>
                            <div>
                                <h2 className='text-white fs-1'>Ecommerce Development</h2>
                                <p className='text-white fw-lighter '>
                                    Unlocking valuable insights from data to guide informed decisions, our data analysis services empower your business strategy.
                                </p>
                            </div>
                            <div className='d-flex justify-content-lg-start justify-content-center align-items-center '>
                                <h6 className='text-danger pt-2 '>Explore More</h6>
                                <di className="d-flex justify-content-center align-items-center  ms-2">
                                    <i class="fa-solid fa-arrow-right-long text-danger "></i>
                                </di>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero_4
