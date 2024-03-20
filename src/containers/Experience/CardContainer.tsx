import React from 'react';

interface CardContainerProps {
  title: string,
  company: string,
  date: string,
  description: string
}
const CardContainer: React.FC<CardContainerProps> = ({ title, company, date, description }) => {
  return (
    <div className="experience-card">
      <h3 className="font-semibold xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">{title}</h3>
      <div className="flex xxs:flex-col xs:flex-col sm:flex-row md:flex-row lg:flex-col xl:flex-row 2xl:flex-row justify-between xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl my-2">
        <p>{company}</p>
        <p>{date}</p>
      </div>
	  <p className="flex flex-row justify-between xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl my-2">{description}</p>
    </div>
  );
};

export default CardContainer;
