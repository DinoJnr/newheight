import React from 'react'
import "./Conact.css"
import Header from '../Screen/Header'
const Contact = () => {
  return (
    <>
    <Header></Header>
    <div className="contact-body">
          <div className="contact-context-body">
            <div>
              <b className="send-your-request">Send your request</b>
              <input className="contact-input-username" type="text" name="username" id="" placeholder="Name" />
              <input className="contact-input-email" type="text" name="email" id="" placeholder="Email" />
              <input className="contact-input-phone" type="text" name="phonenumber" id="" placeholder="Phone Number" />
              <input className="contact-input-subject" type="text" name="" id="" placeholder="Subject" />
              <input className="contact-input-your-message" type="text" name="" id="" placeholder="Your Message"/>
              <button className="connect-btn">Send</button>
            </div>

            <b className="connect-text">Connect With Us</b>
            <p className="we-would-respond">
              We would love to resspond to our quaries and help you succeed. Feel free to get in touch with us.
            </p>
      
          </div>
        </div>
    </>
  )
}

export default Contact