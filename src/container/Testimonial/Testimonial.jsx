import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { images } from '../../constants';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      })
    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })

  }, [])

  const testi = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testi.imageurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text" style={{ fontStyle: 'italic'}}>{testi.feedback}</p>
              <div>
                <h4 className='bold-text'>{testi.name}</h4>
                <h5 className='p-text'>{testi.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length-1 : currentIndex-1)}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length-1 ? 0 : currentIndex+1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  "app__primarybg"
);