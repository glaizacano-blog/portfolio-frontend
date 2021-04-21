import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CallToAction = ({
  iconName,
  iconSize,
  link,
  linkClassName,
  text,
  textClassName,
}) => {
  return (
    <a className={linkClassName} href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={iconName} size={iconSize}/>
      <span className={textClassName}>{text}</span>
    </a>
  );
};
export default CallToAction;
