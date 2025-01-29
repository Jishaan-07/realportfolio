import React from 'react';
import ss from '../assets/ss.png';
import dots from '../assets/dots.png';
import link from '../assets/linkbtn.png'
const Projects = () => {
    return (
        <>
        <img style={{marginLeft:'-150px'}} className='me-auto' src={dots} alt="" />
        <div data-aos="flip-up">
        <div style={{ width: '100%', border: '2px solid #9CA3AF', borderRadius: '12px', padding: '20px', overflow: 'hidden' }} className="container shadow-lg mb-5 mt-2"   >
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img  className="shadow rounded-3 img-fluid" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} src={ss} alt="Project Screenshot"  />
                    </div>

                     <div className="col-lg-6 d-flex align-items-center text-gray-400">
                        <div>
                            <h1 className="fw-bold fs-3 mb-3">EVNIFY</h1>
                            <h4 className='mb-2'>EventBooking & Ticket Managment</h4>
                            <p className=" ">
                                A brief description of the project. This section provides insights into the purpose,
                                technologies used, and functionality.
                            </p>
                            <div className="d-flex justify-content-center mt-1  mb-2 align-items-center">
                            <p className='rounded border mx-1 px-2 '>html5</p>

                                <p className='rounded border mx-1 px-2 '>react.js</p>
                                <p className='rounded border mx-1 px-2 '>bootstrap</p>
                                <p className='rounded border mx-1 px-2 '>node.js</p>
                                <p className='rounded border mx-1 px-2 '>express.js</p>
                                <p className='rounded border mx-1 px-2 '>mongodb</p>




                            </div>
                           <a target='_blank' className='mt-2' href="https://event-booking-jishhh.netlify.app/"><img width={'50px'} src={link} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        </>
    );
};

export default Projects;
