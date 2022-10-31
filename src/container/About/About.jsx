import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';


const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [educations, setEducations] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const educationQuery = '*[_type == "education"]';
    const languageQuery = '*[_type == "language"]';
    const interestQuery = '*[_type == "interest"]';

    client.fetch(query)
      .then((data) => setAbouts(data));
    client.fetch(educationQuery)
      .then((data) => {
        setEducations(data[0].education)
      });
    client.fetch(languageQuery)
      .then((data) => {
        setLanguages(data[0].language)
      });
    client.fetch(interestQuery)
      .then((data) => setInterests(data));
  }, []);

  // "<Typed>" includes "<span>" by nature.
  return (
    <>
      <div className='head'>
        <h2 className='head-text header-responsive'>
          I describe myself as
          <br />
          <Typed
            strings={[
              'more than a Software Developer',
              'a Problem Solver'
            ]}
            typeSpeed={50}
            backSpeed={20}
            loop >
          </Typed>
        </h2>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

      <div className='app__details text-disabled'>
        <div className='app__details-firstcolumn'>
          <h1>Education</h1>
          <div className="app__educations">
            {educations.map((education, index) => (
              <motion.div
                className='app__education'
                key={index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className='app__education-logo'>
                  <img src={urlFor(education.img)} alt="school-logo" />
                </div>

                <div className='app__education-info'>
                  <div className='info-school'>
                    <h4>{education.department}</h4>
                    <p>{education.school}</p>
                  </div>
                  <div className='info-year'>
                    <p>{education.year}</p>
                    <p>{education.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='app__details-secondcolumn'>
          <div className='secondcolumn-firstrow'>
            <h1>Languages</h1>
            <div className='app__languages'>
              {languages.map((lang, index) => (
                <motion.div
                  className='app__language'
                  key={index}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <div className='app__language-info'>
                    <h4>{lang.language}</h4>
                    <p>{lang.level}</p>
                  </div>
                  <div className='app__language-flag'>
                    <img src={urlFor(lang.img)} alt="language-flag" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className='secondcolumn-secondrow'>
            <h1>Interests</h1>
            <div className='app__interests'>
              {interests.map((int, index) => (
                <motion.div
                  className='app__interest'
                  key={index}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <div className='app__interest-icon'>
                    <img src={urlFor(int.img)} alt="interest-icon" />
                  </div>
                  <p>{int.interest}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);