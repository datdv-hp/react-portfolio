import React from 'react';
import { AiFillProject } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';
import { SiHandshake } from 'react-icons/si';
import './about.css';
// @ts-ignore
import ME from '../../assets/me-about.jpg';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BiMedal className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>
            <article className='about__card'>
              <SiHandshake className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p className='about__intro'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui,
            dolore dolores magnam distinctio asperiores autem dolorum similique
            esse? Deserunt aliquid impedit culpa ipsum magni beatae ipsa illum
            quas minus.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
