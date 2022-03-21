import React from 'react'
import './styles/Contact.css';
import emailjs from'emailjs-com'

function Contact() {
    
 
    const sendEmail = (event) =>{
            event.preventDefault()
            emailjs.sendForm('service_pq23yqz', 'template_g6mf15a', event.target, '7AcPqiRGWzL3UP0Az')
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
    }

  return (
    <section className="contact" id="contact">

    <h1 className="heading"> contact <span> me </span> </h1>

    <div className="icons-container">

        <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>my email</h3>
            <p>francismilton19410@gmail.com</p>
        </div>

        <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>my number</h3>
            <p>1876-895-8478</p>
        </div>

        <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>my address</h3>
            <p>Kingston, Jamaica</p>
        </div>

    </div>

    <div className="row">

        <form action="" onSubmit={e=>sendEmail(e)}>

            <input
                 type="text" 
                 placeholder="name"  
                 name="name" 
                 className="box"
                />

            <input
                type="email" 
                placeholder="email" 
                name="email" 
                className="box"
            />
            <input
                type="number" 
                placeholder="number (Optional)" 
                name="number" 
                className="box"
            />

            <textarea 
                    name="message" 
                    placeholder="message" 
                    cols="30" rows="10">
            </textarea>

            <input type="submit" className="btn" value="send message"/>

        </form>

    </div>


</section>

  )
}

export default Contact