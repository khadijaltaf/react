import React from 'react'
import './servicesProvider.css'
import {BiCheck} from 'react-icons/bi'


const ServicesProvider = () => {
  return (


    <section id='services'> <h5>What I offer</h5> <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service_head"> <h3>Software Testing</h3>
          </div>
          <ul className='service__list'>
            
            <li>
              <BiCheck className='service_list-icon' />
              <p>Unit and Regression testing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Acceptance testing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Functionality and Non-Functionality testing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Usablity Testing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>System/integration Testing</p>
            </li>
            
            <li>
              <BiCheck className='service_list-icon' />
              <p>Daily reporting/ Documentations.</p>
            </li>
          </ul>
        </article>

        {/* END OF TESTING */}

        <article className="service">
          <div className="service_head"> <h3>Website Designing/ Frontend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>HTML CSS </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Javascript/react</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Figma </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>User Manual</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Presentations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Navigation</p>
            </li>
          
          </ul>
        </article>
{/* end of Web designing  */}

<article className="service">
          <div className="service_head"> <h3>Website Designing/ Frontend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>MS Word  </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>MS- designings</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Canva</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Templetes </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Presentations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Flyers and designs</p>
            </li>
          
          </ul>
        </article>


      </div >
    </section >
  )
}

export default ServicesProvider