import React from 'react'
import './styles/Service.css';

function Service() {
  return (
    <section className="service" id="service">

    <h1 className="heading"> <span> my </span> services </h1>
    
        <div className="box-container">
    
            <div className="box">
            <i className="fab fa-js"></i>
                <h3>frontend development</h3>
                <p>Design and develop frontend applications using HTML, JavaScript and CSS combined 
                    with web frameworks such as react.js.
                </p>
            </div>
    
            <div className="box">
            <i className="fab fa-python"></i>
                <h3>backend development</h3>
                <p>Design and develop web APIs that can serve the needs of frontend applications in a secure way
                    and make efficient data request to database servers.
                </p>
            </div>
    
            <div className="box">
                <i className="fas fa-mobile"></i>
                <h3>responsive design</h3>
                <p>create web applications that can adjusts to different screen sizes to enhance user experiences.</p>
            </div>
    
            <div className="box">
            <i className="fas fa-database"></i>
                <h3>database design</h3>
                <p>Design and develop databases using SQL technologies  that are in the highest possible normal form
                    and optimized for the most efficient querying.
                </p>
            </div>
    
            <div className="box">
            <i className="fas fa-microchip"></i>
                <h3>embedded systems</h3>
                <p>With a pretty decent understanding of how low level code interact with electronic hardware, 
                    I can design and develop embbeded systems using highlevel programming languages such as C and C++ to 
                    run on top of microcontrollers.
                </p>
            </div>
    
            <div className="box">
            <i className="fab fa-react"></i>
                <h3>mobile development</h3>
                <p>write cross-platform mobile applications using react native framework.</p>
            </div>
    
        </div>
        <a href='#contact' className='btn'>Hire Me</a>
    </section>
  )
}

export default Service