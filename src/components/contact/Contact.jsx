import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import {useRef} from 'react'

const contact = () => {
  const form = useRef();
  const sendemail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m6fw96w' ,'template_hecoaq3' , form.current ,'MNp3_ripuYyC098JZ')

    e.target.reset()
  };


  return (
    <section id='contact'>


      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>khadija0fficail@gmail.com</h5>
            <a href="mailto:khadija0fiical@gmail.com">Send a message</a> </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhataApp</h4>
            <h5>+92 312 2884024</h5>
            <a href="https://api.whatsapp.com/send?phone=+923122884024">Send a message</a> </article>

        </div>

        <form ref={form} onSubmit={sendemail}>

          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default contact