import React, { useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Projects.scss';

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setprojects] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query)
      .then((data) => {
        setprojects(data);
        setFilterWork(data);
      })
  }, [])


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(projects);
      } else {
        setFilterWork(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>My developments <span>that contributed</span> <br />to my <span>self-development</span></h2>

      <div className='app__work-filter'>
        {['ReactJS', 'Javascript', 'Typescript', 'Bootstrap', 'TailwindCSS', 'SCSS/CSS', 'Front End', 'Full Stack', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                {...(isMobile ? {whileInView:{ opacity: [0, 1] }} : {whileHover:{ opacity: [0, 1] }})}
                // whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className='bold-text'>{work.title}</h4>
              <p className="p-text" style={{ margiTop: 10}}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Projects, 'app__works'),
  'projects',
  'app__primarybg'
);