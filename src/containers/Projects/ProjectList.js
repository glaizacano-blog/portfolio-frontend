import React from 'react';
import CardContainer from './CardContainer';

const items = [
  {
    title: 'Portfolio Website',
    description:
      'A portfolio website and blog showcasing my personal and university projects.',
    technologyStack: 'HTML, CSS, Tailwind CSS, JavaScript, React.js, Netlify',
    status: 'In Development',
    githubLink: 'https://github.com/glaizacano-blog/portfolio-frontend',
    projectLink: '/',
  },
  {
    title: 'Kissables Assistant',
    description:
      'A fully customisable and modular Discord bot for the Kisses Global community server featuring self-assignable reaction roles, logs, automatic moderation, custom commands, server stats, automated welcome messages and leave messages, Kisses Delavin quote of the day and trivia questions.',
    technologyStack: 'Node.js, discord.js',
    status: 'In Progress',
    githubLink: 'https://github.com/glaizacano/kissables-assistant',
    projectLink: '',
  },
  {
    title: 'React Bootcamp Coursework',
    description:
      'A collection of projects developed throughout the completion of the "Modern React with Redux" course by Stephen Grider on Udemy.',
    technologyStack: 'React.js',
    status: 'In Progress',
    githubLink: 'https://github.com/glaizacano/react-bootcamp',
    projectLink: '',
  },
  {
    title: 'JavaScript Bootcamp Coursework',
    description:
      'A collection of projects developed throughout the completion of the "The Complete JavaScript Course 2020: From Zero to Expert!" course by Jonas Schmedtmann on Udemy.',
    technologyStack: 'JavaScript',
    status: 'In Progress',
    githubLink: 'https://github.com/glaizacano/javascript-bootcamp',
    projectLink: '',
  },
  {
    title: 'Kissables.org',
    description:
      'An international fansite and community forums for everything Kisses Delavin.',
    technologyStack:
      'HTML, CSS, JavaScript, jQuery, PHP, WordPress, Invision Community',
    status: 'Deployed',
    githubLink: '',
    projectLink: 'https://kissables.org',
  },
  {
    title: 'TimeTasker',
    description:
      'A to-do list and task scheduler application to easily manage and track your tasks',
    technologyStack: 'C#, WinForms',
    status: 'Completed',
    githubLink: 'https://github.com/RewForeN/Time-Tasker',
    projectLink: '',
  },
];

const ProjectList = () =>
  items.map(
    ({
      title,
      description,
      technologyStack,
      status,
      githubLink,
      projectLink,
    }) => {
      return (
        <CardContainer
          key={title}
          title={title}
          description={description}
          technologyStack={technologyStack}
          status={status}
          githubLink={githubLink}
          projectLink={projectLink}
        />
      );
    }
  );

export default ProjectList;
