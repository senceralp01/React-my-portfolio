import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/senceralp" rel="noreferrer" target="_blank" style={{ marginTop: "5px" }}>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/senceralp01" rel="noreferrer" target="_blank" style={{ marginTop: "5px" }}>
          <BsGithub />
        </a>
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  )
}

export default SocialMedia