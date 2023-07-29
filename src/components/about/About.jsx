import React from 'react'
import './about.css'
import me from '../../assets/pic 02.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { PiFoldersThin } from 'react-icons/pi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container ">
        <div className="about__me">
          {/* image */}
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* cards */}
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h4>Experience</h4>
              <small>2+ years experience as QA</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h4>Clients</h4>
              <small>Many Satisfied Clients</small>
            </article>

            <article className='about__card'>
              <PiFoldersThin className='about__icon' />
              <h4>Projects</h4>
              <small>10+ designing projects</small>
            </article >

          </div>

          <p>With a proven track record of delighting numerous satisfied clients, harnessing over 2 years of invaluable QA expertise, and successfully executing 10+ awe-inspiring design projects, my portfolio is a testament to the unparalleled quality and innovation I bring to every endeavor</p>
          <a href="#contact" className='btn btn-primary'>Lets talk</a>
        </div>
      </div>

    </section>
  )
}

export default About