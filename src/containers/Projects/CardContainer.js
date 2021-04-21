import React from 'react';
import CallToAction from '../../components/UI/CallToAction';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const CardContainer = ({
  title,
  description,
  technologyStack,
  status,
  githubLink,
  projectLink,
}) => {
  const renderGitHubButton = (githubLink) => {
    return (
      <CallToAction
        iconName={faGithub}
        iconSize="lg"
        linkClassName="flex justify-center items-center btn-github btn-github-hover xs:w-full"
        link={githubLink}
        text="View Source Code"
        textClassName="ml-2"
      ></CallToAction>
    );
  };

  const renderProjectButton = (projectLink) => {
    return (
      <CallToAction
        iconName={faLink}
        iconSize="lg"
        linkClassName="flex justify-center items-center btn-cyan-600 btn-project-hover xs:mt-2 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2 xs:w-full"
        link={projectLink}
        text="View Project"
        textClassName="ml-2"
      ></CallToAction>
    );
  };

  return (
    <div className="project-card">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="font-normal text-lg my-2">{description}</p>
      <div className="flex flex-col justify-center items-start font-normal text-lg">
        <p>
          <span className="font-medium">Status:</span> {status}
        </p>
        <p>
          <span className="font-medium">Tech stack:</span> {technologyStack}
        </p>
      </div>
      <div className="flex xs:flex-col sm:flex-row  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mt-6">
        {githubLink ? renderGitHubButton(githubLink) : ''}
        {projectLink ? renderProjectButton(projectLink) : ''}
      </div>
    </div>
  );
};

export default CardContainer;