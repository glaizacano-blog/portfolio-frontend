import React from "react";

const CardContainer = ({ title, company, date, description }) => {
	return (
		<div className="experience-card">
			<h3 className="font-semibold text-xl">{title}</h3>
			<div className="card-details flex flex-row justify-between my-2">
				<p>{company}</p>
				<p>{date}</p>
			</div>
			<p className="font-normal text-lg">{description}</p>
		</div>
	);
};

export default CardContainer;