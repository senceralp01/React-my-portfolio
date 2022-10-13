import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  { title: 'Thorough understand of', description: 'React.js and its core principles.', imgUrl: images.about01 },
  { title: 'Have experience with', description: 'React Routing, Hooks & Context, Redux and HOC pattern.', imgUrl: images.about02 },
  { title: 'Have proficiency in', description: 'JavaScript, including DOM manipulation and the JavaScript object model.', imgUrl: images.about03 },
  { title: 'Experienced with', description: 'Responsive design and styling tools like Bootstrap, TailwindCSS and SASS/SCSS.', imgUrl: images.about04 }
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>I'm more than a <span>Software Developer</span> <br /> I'm a <span>Problem Solver</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default About