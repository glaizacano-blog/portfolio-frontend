import React from 'react';
import CardContainer from './CardContainer';

const items = [
    {
		title: 'Kissables Assistant',
		description:
			'A fully customisable and modular Discord bot for the Kisses Global community server featuring self-assignable reaction roles, logs, automatic moderation, custom commands, server stats, automated welcome messages and leave messages, Kisses Delavin quote of the day and trivia questions.',
		technologyStack: 'Node.js, discord.js',
		link: '/',
	},
	{
		title: 'Kissables.org',
		description:
			'An international fansite and community forums for everything Kisses Delavin.',
		technologyStack: 'HTML5, CSS3, JavaScript, jQuery, PHP, WordPress, Invision Community',
		link: 'https://kissables.org',
	},
	{
		title: 'TimeTasker',
		description:
			'A to-do list and task scheduler application to easily manage and track your tasks',
		technologyStack: 'C#, WinForms',
		link: 'https://github.com/RewForeN/Time-Tasker',
	},
    {
		title: 'Project Title #4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit id mi dignissim imperdiet sit amet ac sem. Nulla facilisi. Aenean odio sem, mollis eget odio et, bibendum semper diam. Duis lacinia enim a nisl ornare, nec tempor neque ultricies. Nunc posuere tincidunt ultricies.',
		technologyStack: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		link: '/',
	},
];

const ProjectList = () =>
	items.map(({ title, description, technologyStack, link }) => {
		return (
			<CardContainer
				title={title}
				description={description}
				technologyStack={technologyStack}
				link={link}
			/>
		);
	});

export default ProjectList;
