import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/senceralp" rel="noreferrer" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/senceralp01" rel="noreferrer" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://senceralp.netlify.app/" rel="noreferrer" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia