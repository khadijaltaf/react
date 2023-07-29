import React from 'react'
import './exp.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='exp'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container exp__container'>

        <div className='exp__testing'>
          <h3>Software Testing</h3>
          <div className="exp_content">
            

            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>Test documentation</h4>
                <small>Experienced</small></div>
              </div>
            </article>

            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>Types of Testing</h4>
                <small>Experienced</small></div>
              </div>
            </article>

            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>API Testing</h4>
                <small>Beginner</small></div>
              </div>
            </article>

            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>DataBase Testing</h4>
                <small>Beginner</small></div>
              </div>
            </article>

          </div>
        </div>


        {/* end of Testing */}


        <div className='exp__coding'>

        <h3>Web Development/Designing</h3>
          <div className="exp_content">
            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>HTML and CSS</h4>
                <small>Experienced</small></div>
              </div>
            </article>


            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>React JS</h4>
                <small>Experienced</small></div>
              </div>
            </article>

            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>Express JS and Node JS</h4>
                <small>Learning/Beginner</small></div>
              </div>
            </article>

            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>Javascript</h4>
                <small>Intermediate</small></div>
              </div>
            </article>

            <article>
              <div className="exp_details">
                <BsPatchCheckFill className='exp_details-icons'/>
                <div><h4>Figma</h4>
                <small>Intermediate</small></div>
              </div>
            </article>

            <article>
              <div className="exp_details">
                <BsPatchCheckFill  className='exp_details-icons'/>
                <div><h4> Canva/MS designs </h4>
                <small>Experienced</small></div>
              </div>
            </article>

          </div>

        </div>

        {/* End of coding */}
        

      </div>
    </section>

  )
}

export default Exp