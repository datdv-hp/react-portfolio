import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsJournalCode } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';
const Nav = () => {
  return (
    <nav>
      <a href='#header' className='active'>
        <AiOutlineHome />
      </a>
      <a href='#about'>
        <AiOutlineUser />
      </a>
      <a href='#experience'>
        <BsJournalCode />
      </a>
      <a href='#services'>
        <RiServiceLine />
      </a>
      <a href='#contact'>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
