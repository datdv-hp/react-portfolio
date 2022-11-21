import React from 'react';
// @ts-ignore
import me from '../../assets/me.png';
import CTA from './CTA';
import './header.css';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Đỗ Văn Đạt</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={me} alt='' />
        </div>
        <div className='header__scroll-down'>
          <a href='#contact'>Scroll Down</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
