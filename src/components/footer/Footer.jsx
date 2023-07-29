import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      
      <a href="#" className='footer_logo'> KHADIJA ALTAF</a>
      <ul className='links'>
      <li><a href="#">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Exp">Experience</a></li>
      <li><a href="#servicesPovider">Services</a></li>
      <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_social">
      <a href="https://linkedin.com" target='_blank'> <BsLinkedin /></a>
        <a href="https://github.com" target='_blank'><BsGithub /></a>      
        
      </div>

      <div className="footer_copyright">
        <small>&copy; KHADIJA ALTAF PERSONAL PORTFOLIO. all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer