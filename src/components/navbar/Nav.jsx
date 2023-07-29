import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, sectActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> sectActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href="#about" onClick={()=> sectActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href="#exp" onClick={()=> sectActiveNav('#exp')} className={activeNav === '#exp' ? 'active' : ''} ><AiOutlineBook /></a>
      <a href="#services" onClick={()=> sectActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> sectActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
    </nav>
  )
}

export default Nav