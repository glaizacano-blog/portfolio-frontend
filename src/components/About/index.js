import React from 'react';
import Experience from './Experience';

const About = () => {
	return (
		<section
			id="#about"
			className="flex flex-col justify-center items-center w-full"
		>
			<div className="w-5/6 mb-12">
				<h2 className="font-semibold text-4xl uppercase text-center mb-4">
					About
				</h2>
				<p>
					As the name says, I'm Glaiza Cano. I'm a final year undergraduate Computer Science student, majoring in Software Development at Swinburne University of Technology. I'm inspired by how technology is changing the world, disrupting industries, and igniting social change. Technology has always existed for the sole purpose of creating a better life for people. I'm pursuing a career in Software Engineering as I enjoy creative problem-solving and would like to leverage my interpersonal, problem-solving, collaboration, and technical skills to craft software solutions for problems that people are experiencing.
				</p>
			</div>
			<Experience/>
		</section>
	);
};

export default About;
