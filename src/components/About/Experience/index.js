import React from 'react';
import ExperienceList from './ExperienceList';

const Experience = () => {
	return (
		<section
			id="#experience"
			className="flex flex-col justify-center items-center w-full mb-12"
		>
			<div className="">
				<h2 className="font-semibold text-4xl uppercase text-center mb-6">
					Experience
				</h2>
				<div className="flex flex-wrap justify-center items-center">
					<ExperienceList/>
				</div>
			</div>
		</section>
	);
};

export default Experience;
