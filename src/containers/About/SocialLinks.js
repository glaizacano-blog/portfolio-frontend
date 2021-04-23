import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDev,
  faGithub,
  faGitlab,
  // faInstagram,
  faLinkedin,
  // faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const items = [
  {
    socialMediaName: 'LinkedIn',
    faIconName: faLinkedin,
    link: 'https://www.linkedin.com/in/glaizacano',
    iconClassName: 'text-linkedin',
  },
  {
    socialMediaName: 'GitHub',
    faIconName: faGithub,
    link: 'https://github.com/glaizacano',
    iconClassName: 'text-github',
  },
  {
    socialMediaName: 'GitLab',
    faIconName: faGitlab,
    link: 'https://gitlab.com/glaizacano',
    iconClassName: 'text-gitlab',
  },
  {
    socialMediaName: 'DEV',
    faIconName: faDev,
    link: 'https://dev.to/glaizacano',
    iconClassName: 'text-dev',
  },
  // {
  //   socialMediaName: 'Twitter',
  //   faIconName: faTwitter,
  //   link: 'https://twitter.com/glaizacano',
  //   iconClassName: 'text-twitter',
  // },
  // {
  //   socialMediaName: 'Instagram',
  //   faIconName: faInstagram,
  //   link: 'https://www.instagram.com/glaizacano',
  //   iconClassName: 'text-instagram',
  // },
];

const SocialLinks = () => {
  const SocialMediaList = () =>
    items.map(({ socialMediaName, faIconName, link, iconClassName }) => {
      return (
        <a
          key={socialMediaName}
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`${iconClassName} mx-2 transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
        >
          <FontAwesomeIcon icon={faIconName} />
        </a>
      );
    });

  return (
    <div className="flex flex-row text-3xl xxs:my-3 xs:my-3 sm:my-3 md:my-3 lg:my-4 xl:my-4 2xl:my-4">
      <SocialMediaList />
    </div>
  );
};
export default SocialLinks;
