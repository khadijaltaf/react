import React from 'react'
import './testm.css'
import AVA1 from '../../assets/AVA1.png'
import AVA2 from '../../assets/AVA2.png'
import AVA3 from '../../assets/AVA3.png'

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVA1,
    clientname: 'Tina Salin',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatem delectus odio. Numquam, quas totam! Hic, itaque! Sit possimus placeat magni sint eius similique necessitatibus excepturi sed error eaque? Tenetur voluptatum et excepturi reprehenderit ?'
  },

  {
    avatar: AVA2,
    clientname: 'Ahmet Burak',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatem delectus odio. Numquam, quas totam! Hic, itaque! Sit possimus placeat magni sint eius similique necessitatibus excepturi sed error eaque? Tenetur voluptatum et excepturi reprehenderit ?'
  },

  {
    avatar: AVA3,
    clientname: 'Baran Taha',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatem delectus odio. Numquam, quas totam! Hic, itaque! Sit possimus placeat magni sint eius similique necessitatibus excepturi sed error eaque? Tenetur voluptatum et excepturi reprehenderit '
  }

]

const Testm = () => {
  return (
    <section id='testm'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
       pagination={{ clickable: true }}
       >

        <div>
          {
            data.map(({ avatar, clientname, review }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client_name'>{clientname}</h5>
                  <small className='client_review'>{review}</small>
                </SwiperSlide>
              )
            })
          }
        </div>






      </Swiper>
    </section >
  )
}


export default Testm





