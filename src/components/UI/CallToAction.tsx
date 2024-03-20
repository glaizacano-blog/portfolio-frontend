import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface CallToActionProps {
  iconName: IconDefinition,
  iconSize: SizeProp | undefined;
  link: string;
  linkClassName: string,
  text: string,
  textClassName: string
}
const CallToAction : React.FC<CallToActionProps> = ({ iconName, iconSize, link, linkClassName, text, textClassName }) => {
  return (
    <a className={linkClassName} href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={iconName} size={iconSize}/>
      <span className={textClassName}>{text}</span>
    </a>
  );
};
export default CallToAction;
