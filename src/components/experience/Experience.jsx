import React from 'react';
import { GoVerified } from 'react-icons/go';
import './experience.css';

const Experience = () => {
  const frontend_skills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'Javascript', level: 'Experienced' },
    { name: 'Bootstrap', level: 'Experienced' },
    { name: 'Tailwind', level: 'Experienced' },
    { name: 'React', level: 'Experienced' },
  ];
  const backend_skills = [
    { name: 'Node JS', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Experienced' },
    { name: 'PHP', level: 'Basic' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
  ];
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {frontend_skills.map((skill) => (
              <article className='experience__details'>
                <GoVerified className='experience__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backend_skills.map((skill) => (
              <article className='experience__details'>
                <GoVerified className='experience__details-icon' />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
