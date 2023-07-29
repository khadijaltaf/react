import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/girlforbg2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h4>Hello! I am</h4>
          <h1>KHADIJA ALTAF</h1>
          <h5 className='text-light'>Web developer/designer and QA Engineer</h5>
          
        
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={Me} alt="me" />
          </div>
         
          <a href='#contact' className="scroll__down">Scroll Down</a>
        </div>

     
      </header>
    </>
  )
}

export default Header