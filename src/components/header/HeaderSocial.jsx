import React from 'react';
import { BsDribbble, BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
      <a href='https://dribble.com' target='_blank' rel='noreferrer'>
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
