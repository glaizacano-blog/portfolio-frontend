import React from 'react';
import CardContainer from './CardContainer';

const items = [
  {
    title: 'Level 1 Support Developer',
    company: 'Department of Premier and Cabinet',
    date: 'March 2021 - Present',
    description:
      'As part of my Computer Science degree, I\'m currently undertaking a Work Integrated Learning (WIL) 12-month professional placement at the Digital, Design and Innovation branch of the Department of Premier and Cabinet (Victoria). As a Support Developer, I triage all incoming support requests via the Single Digital Presence Support Desk, assess severity and escalate issues as required, address all how-to type questions, manage user access, perform basic break-fix resolution and root cause analysis on basic issues as well as manage communications back to the client.',
  },
  {
    title: 'Computer Science Coach/Mentor',
    company: 'AI Cubed Academy',
    date: 'March 2021 - Present',
    description:
      'Aside from working full-time on weekdays, I currently spend my Saturdays teaching coding and robotics programs to primary and secondary school students.',
  },
  {
    title: 'Full-stack Developer Intern',
    company: 'Suria Labs',
    date: 'January 2021 - February 2021',
    description:
      'As a New Colombo Plan scholar, I interned remotely as a Full-stack Developer at Suria Labs, a full-service software development and consultancy company in Malaysia, specialising in web and mobile development.',
  },
  {
    title: 'Head Teacher/Teaching Assistant',
    company: 'Code Camp',
    date: 'May 2019 - March 2021',
    description:
      'I started off my career as a Teaching Assistant at Code Camp and transitioned to the Head Teacher role after my first holiday program teaching the Web Builders (HTML, CSS and JavaScript) class.',
  },
  {
    title: 'Coding Instructor',
    company: 'Innovate Technology and Robotics Academy',
    date: 'June 2019 - September 2020',
    description:
      'I worked as an Instructor at Innovate Technology and Robotics Academy for over a year and I primarily taught Junior Engineering, Game Design and Development and Python classes.',
  },
  {
    title: 'Lead Instructor',
    company: 'Bricks 4 Kidz',
    date: 'June 2019 - December 2019',
    description:
      'During my stint at Bricks 4 Kidz Manningham and Monash, I led the execution of Advanced Robotics after-school classes and holiday programs using LEGO EV3.',
  },
];

const ExperienceList = () =>
  items.map(({ title, company, date, description }) => {
    return (
      <CardContainer
        key={title}
        title={title}
        company={company}
        date={date}
        description={description}
      />
    );
  });

export default ExperienceList;
