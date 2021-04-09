import React from 'react';
import ProjectList from './ProjectList';

const Projects = () => {
	return (
		<section
			id="#projects"
			className="flex flex-col justify-center items-center w-full mb-12"
		>
			<div className="mb-12">
				<h2 className="font-semibold text-4xl uppercase text-center mb-6">
					Projects
				</h2>
				<div className="flex flex-wrap justify-center items-center">
					<ProjectList/>
				</div>
			</div>
		</section>
	);
};

export default Projects;
