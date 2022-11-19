import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsJournalCode } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav id='navbar'>
      <a
        href='#header'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsJournalCode />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
