import React from 'react';

const CardContainer = ({ title, description, technologyStack, link }) => {
	return (
		<div className="card-container project-card transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110">
			<a className="" href={link}>
				<h3 className="font-semibold text-xl">{title}</h3>
				<p className="font-regular text-md my-2">{description}</p>
				<p className="font-regular text-md text-center my-2">
					<span className="font-semibold">Technology stack:</span>
					<span className="italic"> {technologyStack}</span>
				</p>
			</a>
		</div>
	);
};

export default CardContainer;
