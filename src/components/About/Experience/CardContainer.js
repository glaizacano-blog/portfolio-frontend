import React from "react";

const CardContainer = ({ title, company, date, description }) => {
	return (
		<div className="card-container experience-card transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110">
			<h3 className="font-semibold text-xl">{title}</h3>
			<div className="card-details flex flex-row justify-between my-2">
				<p className="">{company}</p>
				<p className="font-regular">{date}</p>
			</div>
			<p className="font-regular text-md">{description}</p>
		</div>
	);
};

export default CardContainer;
