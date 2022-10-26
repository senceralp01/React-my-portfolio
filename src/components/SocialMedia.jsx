import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

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
        <a href="https://wa.me/905056156227" rel="noreferrer" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia