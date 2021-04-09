import React from 'react';
import CardContainer from './CardContainer';

const items = [
	{
		title: 'Support Developer',
		company: 'Department of Premier and Cabinet',
		date: 'March 2021 - Present',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit id mi dignissim imperdiet sit amet ac sem. Nulla facilisi. Aenean odio sem, mollis eget odio et, bibendum semper diam. Duis lacinia enim a nisl ornare, nec tempor neque ultricies. Nunc posuere tincidunt ultricies.',
	},
	{
		title: 'Computer Science Coach/Mentor',
		company: 'AI Cubed Academy',
		date: 'March 2021 - Present',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit id mi dignissim imperdiet sit amet ac sem. Nulla facilisi. Aenean odio sem, mollis eget odio et, bibendum semper diam. Duis lacinia enim a nisl ornare, nec tempor neque ultricies. Nunc posuere tincidunt ultricies.',
	},
	{
		title: 'Full-stack Developer Intern',
		company: 'Suria Labs',
		date: 'January 2021 - February 2021',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit id mi dignissim imperdiet sit amet ac sem. Nulla facilisi. Aenean odio sem, mollis eget odio et, bibendum semper diam. Duis lacinia enim a nisl ornare, nec tempor neque ultricies. Nunc posuere tincidunt ultricies.',
	},
	{
		title: 'Head Teacher/Teaching Assistant',
		company: 'Code Camp',
		date: 'June 2019 - March 2021',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit id mi dignissim imperdiet sit amet ac sem. Nulla facilisi. Aenean odio sem, mollis eget odio et, bibendum semper diam. Duis lacinia enim a nisl ornare, nec tempor neque ultricies. Nunc posuere tincidunt ultricies.',
	},
	{
		title: 'Coding Instructor',
		company: 'Innovate Technology and Robotics Academy',
		date: 'June 2019 - September 2020',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit id mi dignissim imperdiet sit amet ac sem. Nulla facilisi. Aenean odio sem, mollis eget odio et, bibendum semper diam. Duis lacinia enim a nisl ornare, nec tempor neque ultricies. Nunc posuere tincidunt ultricies.',
	},
	{
		title: 'Lead Instructor',
		company: 'Bricks 4 Kidz',
		date: 'June 2019 - December 2019',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit id mi dignissim imperdiet sit amet ac sem. Nulla facilisi. Aenean odio sem, mollis eget odio et, bibendum semper diam. Duis lacinia enim a nisl ornare, nec tempor neque ultricies. Nunc posuere tincidunt ultricies.',
	},
];

const ExperienceList = () =>
	items.map(({ title, company, date, description }) => {
		return (
			<CardContainer
				title={title}
				company={company}
				date={date}
				description={description}
			/>
		);
	});

export default ExperienceList;
